import fs from 'node:fs/promises';
import path from 'node:path';

const archive = path.resolve(process.cwd(), 'images-jetourglobal-com');
const destination = path.join(archive, '2d');
const manifest = JSON.parse(await fs.readFile(path.join(archive, 'manifest.json'), 'utf8'));

const vehicleNames = {
  dashing: 'Dashing',
  g700: 'G700',
  g700whislingarrow: 'G700-Whistling-Arrow',
  t1: 'T1',
  t1idm: 'T1-i-DM',
  t2: 'T2',
  t2idm: 'T2-i-DM',
  x70: 'X70',
  x70plus: 'X70-Plus',
  x90plus: 'X90-Plus'
};

function safeName(value) {
  return value
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'image';
}

function modelFromPath(pathname) {
  const match = pathname.match(/\/(?:vehicles\/cars|exterior)\/([^/]+)/i);
  if (!match) return null;
  return vehicleNames[match[1].toLowerCase()] || safeName(match[1]);
}

function categoryFor(source) {
  const pathname = new URL(source).pathname.toLowerCase();
  const model = modelFromPath(pathname);
  if (model) return `modeles/${model}`;
  if (pathname.includes('/gseries/')) return 'modeles/G700';
  if (pathname.includes('/tseries/')) return 'modeles/T-series';
  if (pathname.includes('/x70') || pathname.includes('/x90')) return 'modeles/X-series';
  if (pathname.includes('/gallery/')) return 'galerie/accueil';
  if (pathname.includes('/moments/') || pathname.includes('/cms/archive/') || pathname.includes('/cms/category/')) return 'galerie/moments';
  if (pathname.includes('/news/')) return 'galerie/actualites';
  if (pathname.includes('/jma/')) return 'galerie/evenements-jma';
  if (pathname.includes('/home/')) return 'galerie/accueil';
  if (pathname.includes('/brandhistory/') || pathname.includes('/explore/about/')) return 'marque/histoire';
  if (pathname.includes('/technology/')) return 'marque/technologie';
  if (pathname.includes('/explore/life/') || pathname.includes('/owners/')) return 'galerie/jetour-life';
  return 'autres';
}

try {
  await fs.access(destination);
  throw new Error(`Le dossier existe déjà : ${destination}`);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const knownItems = new Map();
for (const item of [...(manifest.sitemapImages || []), ...(manifest.pages || []).flatMap((page) => page.images || [])]) {
  if (item?.source && item?.file) knownItems.set(item.file, item);
}

const counters = new Map();
const index = [];
async function copyRenamed(sourceFile, category, sourceUrl = null) {
  const ext = path.extname(sourceFile) || '.img';
  const sourceBase = safeName(path.basename(sourceUrl ? new URL(sourceUrl).pathname : sourceFile, ext));
  const key = category;
  const count = (counters.get(key) || 0) + 1;
  counters.set(key, count);
  const fileName = `${safeName(category.split('/').at(-1)).toLowerCase()}-${String(count).padStart(3, '0')}-${sourceBase}${ext.toLowerCase()}`;
  const relative = path.join(category, fileName);
  const target = path.join(destination, relative);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.copyFile(path.join(archive, sourceFile), target);
  index.push({ file: relative.replaceAll('\\', '/'), source: sourceUrl, category });
}

for (const [file, item] of knownItems) {
  try {
    await fs.access(path.join(archive, file));
    await copyRenamed(file, categoryFor(item.source), item.source);
  } catch {
    // A file that was unavailable during download is kept in the original manifest errors.
  }
}

const rootFiles = await fs.readdir(archive, { withFileTypes: true });
for (const entry of rootFiles) {
  if (!entry.isFile() || entry.name === 'manifest.json' || knownItems.has(entry.name)) continue;
  await copyRenamed(entry.name, 'autres/non-classes');
}

await fs.writeFile(path.join(destination, 'index.json'), JSON.stringify({
  createdAt: new Date().toISOString(),
  description: 'Bibliothèque 2D classée par modèle et par galerie. Les sources sont conservées pour chaque fichier.',
  files: index
}, null, 2));

console.log(`Terminé : ${index.length} images classées dans ${destination}`);
