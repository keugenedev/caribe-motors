import { mkdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const publicDirectory = resolve("public");
const navbarSource = await readFile(resolve("components/Navbar.tsx"), "utf8");
const sources = [...navbarSource.matchAll(/image:\s*"(\/images\/[^"?]+)(?:\?[^"\n]*)?"/g)]
  .map((match) => match[1])
  .filter((source) => !source.includes("/brands/") && !source.includes("/nav-thumbnails-v2/"));

await Promise.all([...new Set(sources)].map(async (source) => {
  const output = source
    .replace(/^\/images\//, "images/navigation-vehicles/")
    .replace(/\.(?:png|jpe?g|webp)$/, ".webp");
  const outputPath = resolve(publicDirectory, output);

  await mkdir(dirname(outputPath), { recursive: true });
  await sharp(resolve(publicDirectory, source.slice(1)))
    .resize({ width: 500, withoutEnlargement: true })
    .webp({ quality: 75, effort: 5 })
    .toFile(outputPath);
}));
