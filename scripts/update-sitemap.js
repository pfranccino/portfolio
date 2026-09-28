import { readFileSync, writeFileSync } from 'fs';

const today = new Date().toISOString().slice(0, 10);
const path = 'public/sitemap.xml';
const xml = readFileSync(path, 'utf8');
writeFileSync(path, xml.replace(/<lastmod>[^<]+<\/lastmod>/, `<lastmod>${today}</lastmod>`));
