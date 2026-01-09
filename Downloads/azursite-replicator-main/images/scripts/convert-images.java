import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "images/original";
const webpDir = "images/webp";
const avifDir = "images/avif";

[webpDir, avifDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

fs.readdirSync(inputDir).forEach(file => {
  if (!/\.(jpg|jpeg|png)$/i.test(file)) return;

  const input = path.join(inputDir, file);
  const base = file.replace(/\.(jpg|jpeg|png)$/i, "");

  // WEBP
  sharp(input)
    .rotate()
    .resize(1600, null, { withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(path.join(webpDir, `${base}.webp`));

  // AVIF (optional but recommended)
  sharp(input)
    .rotate()
    .resize(1600, null, { withoutEnlargement: true })
    .avif({ quality: 50 })
    .toFile(path.join(avifDir, `${base}.avif`));
});
