# Portfolio: pfranccino.dev

React 19 + Vite 7 single-page portfolio. Spanish-first. Deployed to GitHub Pages with the `gh-pages` package. Custom domain: pfranccino.dev.

## Commands

```bash
npm ci            # install (set PUPPETEER_SKIP_DOWNLOAD=1 unless you need gen-og)
npm run dev       # local dev server (Vite)
npm run build     # updates sitemap lastmod, then production build to dist/
npm run preview   # serve dist/ locally
npm run lint      # ESLint
npm run deploy    # build + deploy to gh-pages branch
node scripts/gen-og.mjs        # re-render public/og-image.jpg from public/og-preview.html
node scripts/optimize-images.js # regenerate public/img/*.webp from src/assets/profile.jpg
```

## Design direction

Design Read: personal portfolio for Android hiring managers and tech leads, editorial, green base with an ember accent, dial **ENERGY 2 / RHYTHM 2 / MOTION 1**.

The identity comes from the copy: first-person, Chilean Spanish, specific ("desde el barro", el asado, Lego). The visuals support that voice instead of competing with it. Every decision below has a one-line reason; keep the reason when you change the decision.

**Palette** (tokens in `src/index.css`, light and dark both verified at WCAG AA):

| Token | Light | Dark | Why |
|---|---|---|---|
| `--bg` / `--bg-2` / `--surface` | #DCE4D3 / #CED8C3 / #EAF0E4 | #0F1612 / #16201A / #1C2720 | Android green muted to a paper tone: ties the page to the role, avoids the default cream and slate |
| `--ink` / `--ink-2` / `--ink-3` | #14201A / #3A4A40 / #4E5E55 | #E3EBDD / #B0BEAA / #8E9D89 | Green-black ink; `--ink-3` is the lightest that still passes 4.5:1 on `--bg-2` |
| `--accent` | #A63B15 | #EF7E4E | Ember: the fire and mud the copy talks about, and the complement of the green base |
| `--ok` | #2E7D46 | #5BBF7A | Only for the "disponible" status dot (≥ 3:1 on `--bg`) |
| `--inv-*` | dark green block | darker block | Contacto, Footer, code previews |
| `--code-ok/warn/err/key` | | | Syntax colors in previews, all on `--inv-bg` |

Text on `--accent` uses `var(--bg)` (passes in both themes). One accent: H1 "Android Senior.", project kickers, the email CTA, hovers. Do not spread it further. Do not move the base back to cream/beige or slate: those are the generic defaults this palette replaced.

**Fonts** (Google Fonts in `index.html`):
- `--font-h` Outfit: headings, nav, buttons. Geometric but soft, reads friendly at display sizes.
- `--font-b` Plus Jakarta Sans: body. Readable at 1rem on long bios.
- `--font-m` JetBrains Mono: only for data a developer would read as code (dates, handles, versions, kickers, section numbers, terminal output). Never uppercase, never wide tracking.

**Radius**: `--radius` (6px) for cards, photos and previews; `--radius-pill` for buttons, chips, tags. Nothing else.

**Layout**: sections use `.wrap` (max-width 1280px) and `.sec`. Section heads are "0N / Nombre" in mono plus a two-line title whose second half is `.muted`. That muted second half is the site's typographic motif.

**Motion** (MOTION 1): one scroll-entrance fade per section, hover color changes, small arrow nudge on external links. No infinite animations, no pulsing, no marquee. Everything respects `prefers-reduced-motion`.

**Theme**: follows the OS by default; the header button ("Modo oscuro" / "Modo claro") overrides it, stored in `localStorage.theme`, applied before paint by the inline script in `index.html`.

## Content rules (owner decisions)

- H1: "Desarrollador Android Senior. / Construyendo con Kotlin / desde 2019."
- Hero photo is a 120×150 stamp; the large photo lives in Sobre.
- Eyebrow: plain line "Disponible para conversar · Santiago, Chile" with a static green dot. The dot marks a real state, so it stays; it never pulses or glows.
- Stats must be true on the day you deploy. Today: **+7** años en Android (since 2019-05), **2** herramientas open-source (public repos only), **6** artículos en Medium (count the RSS feed). Update them when reality changes; never round up.
- Project previews show real output copied from the repo README or a real run, labeled with their source ("Salida de ejemplo del README"). Never invent commands, numbers or file names. No NDA or employer content.
- Only link repos that are public. Check with `curl -o /dev/null -w "%{http_code}" https://github.com/pfranccino/<repo>` before adding one.
- Article years and JSON-LD `datePublished` come from https://medium.com/feed/@pfranccino.
- All UI copy is in Spanish.

## Copy rules

- No em dashes (—) anywhere: UI text, data JSON, alt text, comments. Use a period, comma, colon or parentheses. Date ranges read "2021 · 08 a hoy".
- No invented facts. A rewrite may only use facts already on the site or supplied by Paul.
- Avoid: forced lists of three ("pequeñas, útiles, escritas…"), "no es X, es Y" constructions, stock phrases ("me apasiona", "software robusto", "nuevas tecnologías").
- Arrows: `↗` only on links that open another site (with `target="_blank"` and "(se abre en otra pestaña)" in the aria-label). No arrow on `mailto:` or in-page links. No `→`.
- No emoji in UI copy (terminal output copied verbatim from a README is the exception).

## Accessibility and mobile

- Every text pair passes WCAG AA (4.5:1 normal, 3:1 large) in **both** themes. Compute it, don't eyeball it.
- Global `:focus-visible` ring uses `--accent`; inside Contacto it switches to `--inv-ink`. Never remove outlines.
- Every link and button is at least 44px tall on touch layouts (use padding, not font size).
- The mobile drawer is `inert` when closed, moves focus to its first link when opened, and closes on Escape returning focus to the burger.
- Hover effects only on things that are clickable.
- Breakpoints: 880px, 760px (mobile nav), 520px. No horizontal scroll at 375px; long words use `overflow-wrap: anywhere`.

## Architecture

```
src/
  App.jsx              # Header, sections, Footer; scroll-entrance observer
  index.css            # tokens (both themes), reset, focus ring, shared classes
  main.jsx             # React entry
  components/          # one file per section + CSS Module
    Header.jsx         # fixed nav, theme toggle, mobile drawer
    Hero.jsx           # eyebrow, H1, stats, stamp photo
    Sobre.jsx          # bio, large photo, hobby cards
    Stack.jsx          # 4-column tech list
    Trabajo.jsx        # project cards with real CLI output previews
    Experience.jsx     # timeline
    Articulos.jsx      # 4 featured Medium articles + link to all
    Contacto.jsx       # inverted section, email CTA, social links
    Footer.jsx         # minimal footer
  data/
    profile.json       # experience, hobbies, social links (bundled publicly: no private data)
    projects.json      # public OSS projects + preview { source, lines[] }
    writings.json      # featured Medium articles
    stack.json         # tech stack categories
  assets/profile.jpg   # source photo for optimize-images
public/
  og-preview.html      # source for og-image.jpg (same tokens as the light theme)
anti-slop/             # antislop audit reports
```

Everything in `src/data/*.json` ships in the public JS bundle. Never put phone numbers or other private data there.

## Conventions

- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `style:`, `perf:`, `docs:`).
- CSS: tokens from `:root` only, never hardcoded colors in component CSS.
- Comments explain why, in one line. No banner separators, no history ("moved from…"), no restating the code.
- Sections are numbered "01 / Sobre" through "06 / Contacto".

## Before shipping UI changes

1. `npm run lint && npm run build` pass.
2. `npm run preview` and check, in light and dark: every nav anchor lands on its section, the theme button switches and persists, the drawer opens, closes on Escape and can't be tabbed into when closed, every external link opens in a new tab, no console errors.
3. At 375 to 390px wide: no horizontal scroll, no tap target under 44px.
4. Contrast checked for any new color pair.
5. If stats, articles or repos changed, verify them against GitHub and the Medium feed.
