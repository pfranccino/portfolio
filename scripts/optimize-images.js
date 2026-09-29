import sharp from 'sharp';
import { mkdirSync } from 'fs';

const SRC = 'src/assets/profile.jpg';
const OUT = 'public/img';

mkdirSync(OUT, { recursive: true });

const sizes = [
  { width: 240, height: 300, name: 'profile-stamp' },
  { width: 480, height: 600, name: 'profile-stamp-2x' },
  { width: 840, suffix: '' },
  { width: 420, suffix: '-sm' },
];

for (const s of sizes) {
  const opts = s.height ? { width: s.width, height: s.height, fit: 'cover' } : { width: s.width };
  const name = s.name || `profile${s.suffix}`;
  await sharp(SRC).resize(opts).webp({ quality: 82 }).toFile(`${OUT}/${name}.webp`);
  const info = await sharp(`${OUT}/${name}.webp`).metadata();
  console.log(`  ${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
}

console.log('Done.');
