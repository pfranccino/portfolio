# pfranccino.dev

Mi portafolio: quién soy, las herramientas open-source que mantengo, las skills para Claude Code y lo que escribo en Medium.

Sitio: https://pfranccino.dev

## Stack

- React 19 + Vite 7
- CSS Modules con tokens en `src/index.css` (tema claro y oscuro)
- Archivo y JetBrains Mono, servidas desde el sitio con `@fontsource-variable`
- Deploy a GitHub Pages con GitHub Actions al hacer push a `main`

## Correrlo en local

```bash
npm ci
npm run dev       # servidor de desarrollo de Vite
npm run build     # actualiza el sitemap y genera dist/
npm run preview   # sirve dist/ en local
npm run lint
```

`npm ci` descarga Chrome para Puppeteer. Si no vas a regenerar la imagen OG, usa `PUPPETEER_SKIP_DOWNLOAD=1 npm ci`.

## Contenido

Los textos del sitio están en `src/data/*.json` y en los componentes de `src/components/`. Las reglas de diseño, copy y accesibilidad están en `CLAUDE.md`.

Uso personal. Hecho por [Paul Franccino](https://www.linkedin.com/in/paul-franccino-ayala/).
