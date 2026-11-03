import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

const sources = [
  "images/chery/himla/himla-hero.jpg",
  "images/chery/himla/himla-terrain.jpeg",
  "images/chery/himla/himla-utility.jpg",
  "images/chery/details/tiggo-8/07-3529f35ace3f4bd5b72beee074ebf8fd430b8eeb-8192x4608.jpg",
  "images/chery/details/tiggo-8/17-87c8c19e43ca8acc9c23aa357896308a14d8bf85-8192x4608.jpg",
  "images/chery/details/tiggo-7/06-2fc5bb802e9e7487f6e179aca82bb7cf1aab116e-2500x1406.jpg",
  "images/chery/details/tiggo-7/05-2e2ea069460699239cd0b217a13e5d4da4ef64df-2500x1407.jpg",
  "images/chery/details/tiggo-4/01-02f80ef6d292e2b9f2ac74a7d9476a99ecf8647d-2880x1620.jpg",
  "images/chery/details/tiggo-4/02-0a9c3c72518f173dd8c4eb59d1a78776c4e233c8-4000x2250.jpg",
  "images/jetour/models/t1/t1-001-1.jpg",
  "images/jetour/models/t1/t1-007-2.jpg",
  "images/jetour/models/t2/t2-014-7.webp",
  "images/jetour/models/t2/t2-006-interieur.webp",
  "images/jetour/models/x70-plus/x70-plus-001-1.png",
  "images/jetour/models/x70-plus/x70-plus-004-interieur.png",
  "images/jetour/models/x90-plus/x90-plus-004-2.png",
  "images/gallery/gwm-p-series/commercial-01.jpg",
  "images/gallery/gwm-p-series/commercial-03.jpg",
  "images/gallery/gwm-p-series/commercial-05.jpg",
  "images/gallery/gwm-p-series/commercial-07.jpg",
  "images/gallery/gwm-p300/p300-01.jpg",
  "images/gallery/gwm-p300/p300-04.jpg",
  "images/gallery/gwm-p300/p300-09.jpg",
  "images/gallery/gwm-p300/p300-13.jpg",
];

const sourceRoot = resolve("public");
const outputDirectory = resolve(sourceRoot, "images/home-gallery");

await mkdir(outputDirectory, { recursive: true });

await Promise.all(sources.map((source, index) =>
  sharp(resolve(sourceRoot, source))
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 68, effort: 5 })
    .toFile(resolve(outputDirectory, `${String(index + 1).padStart(2, "0")}.webp`)),
));
