import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

const sourceRoot = resolve("public/images/gwm");
const colorOutput = resolve(sourceRoot, "p-series/optimized-colors");
const frameOutput = resolve(sourceRoot, "p-series/optimized-360");
const colors = ["orange", "red", "blue", "silver", "black", "brown"];
const frames = Array.from({ length: 36 }, (_, index) => `red-${String(index).padStart(2, "0")}`);

await Promise.all([mkdir(colorOutput, { recursive: true }), mkdir(frameOutput, { recursive: true })]);

await Promise.all([
  ...colors.map((color) => sharp(resolve(sourceRoot, `nav/${color}.png`))
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(resolve(colorOutput, `${color}.webp`))),
  ...frames.map((frame) => sharp(resolve(sourceRoot, `p-series/360/${frame}.png`))
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 72, effort: 5 })
    .toFile(resolve(frameOutput, `${frame}.webp`))),
]);
