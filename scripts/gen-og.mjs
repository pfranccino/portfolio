import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, '../public/og-preview.html');
const outPath  = path.resolve(__dirname, '../public/og-image.jpg');

const browser = await puppeteer.launch({ headless: 'new' });
const page    = await browser.newPage();

await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

// Wait for Google Fonts
await new Promise(r => setTimeout(r, 1500));

await page.screenshot({
  path: outPath,
  type: 'jpeg',
  quality: 92,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

await browser.close();
console.log('OG image saved to', outPath);
