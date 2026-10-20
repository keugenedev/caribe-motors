import * as cheerio from 'cheerio';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import robotsParser from 'robots-parser';

const START_URL = process.argv.find((arg) => /^https?:\/\//i.test(arg)) || 'https://jetourhaiti.com/index.html';
const start = new URL(START_URL);
const FLAT_OUTPUT = process.argv.includes('--flat');
const SITEMAP_ONLY = process.argv.includes('--sitemap-only');
const archiveName = start.hostname.replace(/^www\./, '').replace(/[^a-z0-9]+/gi, '-');
const OUTPUT_ROOT = path.resolve(process.cwd(), `images-${archiveName}`);
const MAX_PAGES = 250;
const PAUSE_MS = 500;
const IMAGE_EXTENSIONS = /\.(?:avif|gif|jpe?g|png|svg|webp)(?:$|[?#])/i;
const ASSET_ATTRIBUTES = ['src', 'data-src', 'data-lazy-src', 'data-original', 'poster'];

const rootHost = start.hostname.replace(/^www\./, '');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const sha = (value) => crypto.createHash('sha256').update(value).digest('hex').slice(0, 10);

function normalize(raw, base) {
  if (!raw || /^(?:data:|javascript:|mailto:|tel:|#)/i.test(raw.trim())) return null;
  try {
    const url = new URL(raw.trim(), base);
    url.hash = '';
    return url;
  } catch {
    return null;
  }
}

function canonicalPageUrl(url) {
  const canonical = new URL(url);
  canonical.search = '';
  canonical.hash = '';
  return canonical;
}

function isOnSite(url) {
  return /^https?:$/.test(url.protocol) && (url.hostname === rootHost || url.hostname.endsWith(`.${rootHost}`));
}

function isPage(url) {
  const ext = path.posix.extname(url.pathname).toLowerCase();
  return !ext || ext === '.html' || ext === '.htm' || ext === '.php';
}

function pageFolder(url) {
  const cleanPath = url.pathname.replace(/^\/+|\/+$/g, '') || 'index';
  return cleanPath.replace(/\.[a-z0-9]+$/i, '').replace(/[^a-z0-9._-]+/gi, '_') || 'index';
}

function fileName(url, contentType = '') {
  const parsed = path.posix.basename(url.pathname) || 'image';
  const stem = parsed.replace(/\.[^.]*$/, '') || 'image';
  const extFromUrl = path.posix.extname(parsed);
  const contentExt = contentType.includes('jpeg') ? '.jpg'
    : contentType.includes('png') ? '.png'
    : contentType.includes('webp') ? '.webp'
    : contentType.includes('avif') ? '.avif'
    : contentType.includes('svg') ? '.svg'
    : contentType.includes('gif') ? '.gif' : '';
  return `${stem.slice(0, 80)}-${sha(url.href)}${extFromUrl || contentExt || '.img'}`;
}

function addCandidate(set, raw, base) {
  const url = normalize(raw, base);
  if (url && isOnSite(url) && IMAGE_EXTENSIONS.test(url.pathname + url.search)) set.add(url.href);
}

function extractUrls(html, pageUrl) {
  const images = new Set();
  const pages = new Set();
  const stylesheets = new Set();
  const $ = cheerio.load(html);

  $('img, source, video').each((_, node) => {
    for (const attr of ASSET_ATTRIBUTES) addCandidate(images, $(node).attr(attr), pageUrl);
    for (const srcset of ['srcset', 'data-srcset']) {
      const value = $(node).attr(srcset);
      if (value) value.split(',').forEach((part) => addCandidate(images, part.trim().split(/\s+/)[0], pageUrl));
    }
  });
  $('meta[property="og:image"], meta[name="twitter:image"], link[rel*="icon"]').each((_, node) => {
    addCandidate(images, $(node).attr('content') || $(node).attr('href'), pageUrl);
  });
  $('[style]').each((_, node) => collectCssUrls($(node).attr('style'), pageUrl, images));
  $('link[rel="stylesheet"]').each((_, node) => {
    const url = normalize($(node).attr('href'), pageUrl);
    if (url && isOnSite(url)) stylesheets.add(url.href);
  });
  $('a[href]').each((_, node) => {
    const url = normalize($(node).attr('href'), pageUrl);
    if (url && isOnSite(url) && isPage(url)) pages.add(url.href);
  });

  // Covers custom data attributes such as data-model-ext and quoted image paths in scripts.
  const quotedAsset = /(?:["'|])(?!https?:\/\/)([^"'|\s]+?\.(?:avif|gif|jpe?g|png|svg|webp)(?:\?[^"'|\s]*)?)(?=["'|\s])/gi;
  for (const match of html.matchAll(quotedAsset)) addCandidate(images, match[1], pageUrl);
  return { images, pages, stylesheets };
}

function collectCssUrls(css, base, target) {
  if (!css) return;
  for (const match of css.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/gi)) addCandidate(target, match[2], base);
}

function sitemapLocs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => match[1].trim());
}

function sitemapEntries(xml) {
  const pages = new Set();
  const images = new Set();
  for (const block of xml.match(/<url\b[\s\S]*?<\/url>/gi) || []) {
    const locs = sitemapLocs(block);
    if (locs[0]) {
      const page = normalize(locs[0], start);
      if (page && isOnSite(page)) pages.add(canonicalPageUrl(page).href);
    }
    for (const imageLoc of [...block.matchAll(/<image:loc>\s*([^<]+?)\s*<\/image:loc>/gi)]) {
      addCandidate(images, imageLoc[1], start);
    }
  }
  return { pages, images };
}

async function loadSitemaps(robots) {
  const sitemapUrls = new Set([new URL('/sitemap_index.xml', start).href]);
  const processed = new Set();
  const pages = new Set();
  const images = new Set();
  while (sitemapUrls.size) {
    const sitemapUrl = sitemapUrls.values().next().value;
    sitemapUrls.delete(sitemapUrl);
    if (processed.has(sitemapUrl)) continue;
    processed.add(sitemapUrl);
    try {
      const response = await fetchChecked(new URL(sitemapUrl), robots);
      if (!response) continue;
      const xml = await response.text();
      if (/<sitemapindex\b/i.test(xml)) {
        for (const loc of sitemapLocs(xml)) {
          const url = normalize(loc, sitemapUrl);
          if (url && isOnSite(url)) sitemapUrls.add(url.href);
        }
      } else {
        const entries = sitemapEntries(xml);
        entries.pages.forEach((url) => pages.add(url));
        entries.images.forEach((url) => images.add(url));
      }
    } catch (error) {
      console.warn(`Sitemap ignoré : ${sitemapUrl} (${error.message})`);
    }
  }
  return { pages, images };
}

async function fetchChecked(url, robots) {
  if (!robots.isAllowed(url.href, 'JetourImageArchiver')) return null;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'JetourImageArchiver/1.0 (public image downloader)' },
        signal: AbortSignal.timeout(30_000)
      });
      await sleep(PAUSE_MS * (attempt + 1));
      if (response.ok) return response;
    } catch {
      await sleep(PAUSE_MS * (attempt + 1));
    }
  }
  return null;
}

async function main() {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });
  const robotsUrl = new URL('/robots.txt', start).href;
  let robotsText = '';
  try { robotsText = await (await fetch(robotsUrl)).text(); } catch { /* no robots file: use normal polite crawl */ }
  const robots = robotsParser(robotsUrl, robotsText);
  const queue = SITEMAP_ONLY ? [] : [start.href];
  const visited = new Set();
  const cssVisited = new Set();
  const imageCache = new Map();
  const manifest = { startedAt: new Date().toISOString(), startUrl: start.href, pages: [], errors: [] };

  console.log('Lecture des sitemaps publics…');
  const sitemap = await loadSitemaps(robots);
  if (!SITEMAP_ONLY) {
    for (const page of sitemap.pages) if (!queue.includes(page)) queue.push(page);
  }
  console.log(`${sitemap.pages.size} page(s) et ${sitemap.images.size} image(s) annoncées par les sitemaps.`);

  async function downloadImage(imageUrl, folder) {
    const knownDestination = path.join(folder, fileName(new URL(imageUrl)));
    try {
      await fs.access(knownDestination);
      return path.relative(OUTPUT_ROOT, knownDestination).replaceAll('\\', '/');
    } catch { /* The file is not present yet; download it below. */ }
    let item = imageCache.get(imageUrl);
    if (!item) {
      try {
        const response = await fetchChecked(new URL(imageUrl), robots);
        if (!response) throw new Error('HTTP error or blocked by robots.txt');
        const type = response.headers.get('content-type') || '';
        if (!type.startsWith('image/') && !IMAGE_EXTENSIONS.test(new URL(imageUrl).pathname)) throw new Error(`Not an image (${type || 'unknown type'})`);
        item = { bytes: Buffer.from(await response.arrayBuffer()), type };
        imageCache.set(imageUrl, item);
      } catch (error) {
        manifest.errors.push({ url: imageUrl, error: error.message });
        return null;
      }
    }
    const destination = path.join(folder, fileName(new URL(imageUrl), item.type));
    await fs.writeFile(destination, item.bytes);
    return path.relative(OUTPUT_ROOT, destination).replaceAll('\\', '/');
  }

  async function processCss(cssUrl, imageSet) {
    if (cssVisited.has(cssUrl)) return;
    cssVisited.add(cssUrl);
    try {
      const response = await fetchChecked(new URL(cssUrl), robots);
      if (!response) return;
      collectCssUrls(await response.text(), cssUrl, imageSet);
    } catch (error) { manifest.errors.push({ url: cssUrl, error: error.message }); }
  }

  while (queue.length && visited.size < MAX_PAGES) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);
    console.log(`Page ${visited.size}/${MAX_PAGES}: ${url}`);
    try {
      const response = await fetchChecked(new URL(url), robots);
      if (!response) { manifest.errors.push({ url, error: 'HTTP error or blocked by robots.txt' }); continue; }
      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('html')) continue;
      const { images, pages, stylesheets } = extractUrls(await response.text(), url);
      for (const cssUrl of stylesheets) await processCss(cssUrl, images);
      for (const next of pages) {
        const canonical = canonicalPageUrl(next).href;
        if (!visited.has(canonical) && !queue.includes(canonical)) queue.push(canonical);
      }

      const folder = FLAT_OUTPUT ? OUTPUT_ROOT : path.join(OUTPUT_ROOT, pageFolder(new URL(url)));
      await fs.mkdir(folder, { recursive: true });
      const files = [];
      for (const image of images) {
        const file = await downloadImage(image, folder);
        if (file) files.push({ source: image, file });
      }
      manifest.pages.push({ url, folder: FLAT_OUTPUT ? '.' : pageFolder(new URL(url)), images: files });
      console.log(`  ${files.length} image(s) enregistrée(s)`);
    } catch (error) {
      manifest.errors.push({ url, error: error.message });
    }
  }
  const sitemapFiles = [];
  if (sitemap.images.size) {
    const folder = OUTPUT_ROOT;
    await fs.mkdir(folder, { recursive: true });
    console.log(`Téléchargement des ${sitemap.images.size} image(s) listées par les sitemaps…`);
    for (const image of sitemap.images) {
      const file = await downloadImage(image, folder);
      if (file) sitemapFiles.push({ source: image, file });
    }
  }
  manifest.sitemapImages = sitemapFiles;
  manifest.finishedAt = new Date().toISOString();
  manifest.summary = { pagesVisited: visited.size, imagesSaved: manifest.pages.reduce((n, page) => n + page.images.length, 0) + sitemapFiles.length, errors: manifest.errors.length };
  await fs.writeFile(path.join(OUTPUT_ROOT, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`Terminé : ${manifest.summary.imagesSaved} image(s) dans ${OUTPUT_ROOT}`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
