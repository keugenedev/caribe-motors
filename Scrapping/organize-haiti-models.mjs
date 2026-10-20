import fs from 'node:fs/promises';
import path from 'node:path';

const archive = path.resolve(process.cwd(), 'images-jetourhaiti');
const output = path.join(archive, 'modeles');
const manifest = JSON.parse(await fs.readFile(path.join(archive, 'manifest.json'), 'utf8'));
const modelNames = {
  t1: 'T1',
  t2: 'T2',
  x50: 'X50',
  dashing: 'Dashing',
  x70: 'X70-FL',
  x70plus: 'X70-Plus',
  x90plus: 'X90-Plus',
  g700: 'G700'
};

function clean(value) {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || 'image';
}

try {
  await fs.access(output);
  throw new Error(`Le dossier existe déjà : ${output}`);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

const sources = new Map();
for (const page of manifest.pages || []) {
  for (const image of page.images || []) {
    if (!sources.has(image.source)) sources.set(image.source, image.file);
  }
}

const counters = new Map();
const index = [];
for (const [source, relativeFile] of sources) {
  const url = new URL(source);
  const match = url.pathname.match(/^\/img\/([^/]+)\//i);
  if (!match || !modelNames[match[1].toLowerCase()]) continue;
  const model = modelNames[match[1].toLowerCase()];
  const number = (counters.get(model) || 0) + 1;
  counters.set(model, number);
  const extension = path.extname(url.pathname) || path.extname(relativeFile) || '.img';
  const base = clean(path.basename(url.pathname, extension));
  const fileName = `${model.toLowerCase()}-${String(number).padStart(3, '0')}-${base}${extension.toLowerCase()}`;
  const target = path.join(output, model, fileName);
  try {
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.copyFile(path.join(archive, relativeFile), target);
    index.push({ model, file: path.relative(output, target).replaceAll('\\', '/'), source });
  } catch (error) {
    console.warn(`Image ignorée : ${source} (${error.message})`);
  }
}

await fs.writeFile(path.join(output, 'index.json'), JSON.stringify({
  createdAt: new Date().toISOString(),
  description: 'Images classées selon leur dossier source /img/<modele>/.',
  files: index
}, null, 2));
console.log(`Terminé : ${index.length} images classées dans ${output}`);
