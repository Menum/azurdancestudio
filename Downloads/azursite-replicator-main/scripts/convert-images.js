import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "images/original";
const outputDir = "images/webp";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (!/\.(jpg|jpeg|png)$/i.test(file)) return;

  const input = path.join(inputDir, file);
  const output = path.join(
    outputDir,
    file.replace(/\.(jpg|jpeg|png)$/i, ".webp")
  );

  sharp(input)
    .rotate()
    .resize(1600, null, { withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(output)
    .then(() => console.log(`Converted: ${file}`))
    .catch(err => console.error(`Error: ${file}`, err));
});
