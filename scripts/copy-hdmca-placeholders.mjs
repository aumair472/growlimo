import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, '../public/images/services');

const caseCopies = [
  ['case-study-los-angeles.webp', 'healthcare-digital-marketing-agency-california-case-study-1.webp'],
  ['sd-cosmetic-case-study.webp', 'healthcare-digital-marketing-agency-california-case-study-2.webp'],
  ['case-study-sacramento.webp', 'healthcare-digital-marketing-agency-california-case-study-3.webp'],
];

for (const [src, dest] of caseCopies) {
  const srcPath = path.join(dir, src);
  const destPath = path.join(dir, dest);
  if (!fs.existsSync(srcPath)) {
    console.warn('Missing source:', src);
    continue;
  }
  fs.copyFileSync(srcPath, destPath);
  console.log('Copied', dest);
}
