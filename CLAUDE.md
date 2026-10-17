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

Design Read: personal portfolio for Android hiring managers and engineering leads evaluating a Staff engineer. Swiss/technical editorial, cool graphite on paper with one signal-yellow accent. Dials **VARIANCE 6 / MOTION 2 / DENSITY 4**. Rebranded 2026-10-11 when Paul moved to Staff; the green/ember design before it is retired.

The identity comes from the copy: first-person, Chilean Spanish, specific ("desde el barro", el asado, Lego). The visuals support that voice instead of competing with it. Every decision below has a one-line reason; keep the reason when you change the decision.

**Palette** (tokens in `src/index.css`, light and dark both verified at WCAG AA):

| Token | Light | Dark | Why |
|---|---|---|---|
| `--bg` / `--bg-2` / `--surface` | #EDEFF0 / #E1E4E6 / #F7F8F8 | #121416 / #1A1D20 / #202428 | Cool neutral paper and graphite: quiet enough that one yellow carries the brand. Not cream, not slate |
| `--ink` / `--ink-2` / `--ink-3` | #15181B / #3F454B / #575E65 | #E8EAEC / #B4BAC0 / #8F969D | `--ink-3` is the lightest that still passes 4.5:1 on `--bg-2` and `--surface` |
| `--accent` | #F2C230 | #F2C230 | Lego-brick yellow: building blocks, the "construyendo" voice, modular architecture |
| `--on-accent` / `--on-accent-2` | #15181B / #4A3F12 | same | Text on yellow (10.6:1 and 6.2:1) |
| `--accent-text` / `--focus` | `--ink` | `--accent` | Yellow is 1.45:1 on light `--bg`, so in light mode it is **only a fill** (marks, underlines, bars, blocks), never text or the focus ring |
| `--ok` | #1F7A45 | #4CC27A | Only for the "disponible" status dot |
| `--code-*` | dark in both themes | | Terminal previews, all checked on `--code-bg` |

Where yellow goes: the block behind "Staff" in the H1, the header/favicon "P" block, link underlines (3px), the active nav underline, the top rule of the current job, and the full Contacto block. Nowhere else. A stripe or bar that marks no state does not get yellow (antislop: colored stripe without meaning).

**Fonts** (self-hosted with `@fontsource-variable`, imported in `src/index.css`):
- Archivo Variable for display and body. Display uses the width axis (`font-stretch` 108 to 125%) at weight 650 to 800: a wide grotesk that reads as an engineering drawing. Body stays at 100%.
- JetBrains Mono Variable: Android Studio's font. Only for data a developer would read as code (dates, handles, repo names, kickers, terminal output). Never uppercase, never wide tracking.

**Radius**: `--radius` (2px) for everything: buttons, photos, cards, previews. Square like a technical drawing; 2px so edges don't alias.

**Layout**: sections use `.wrap` (max-width 1280px) and `.sec`. Section heads are a single plain `.sec-title` (wide Archivo), optionally followed by a stacked `.sec-lede`. No section numbers, no eyebrows above section titles (the hero eyebrow is the only one). Each section uses a different layout family: split hero, bio + stat column, 4-col spec grid, paired tools with subgrid-aligned previews, skill rows with their install command, dated role rows, featured + series + older articles, yellow contact block.

**Motion** (MOTION 2): the H1 plays once on load (the three words drop like Lego bricks, then the yellow block snaps in behind "Staff"; purpose: put the eye on the news), one scroll-entrance fade per section, hover underline color changes, 1px press on buttons, small arrow nudge on external links. No infinite animations, no pulsing, no marquee, no scroll listeners (the header uses an IntersectionObserver sentinel). Everything respects `prefers-reduced-motion`.

**Theme**: follows the OS by default; the header button ("Modo oscuro" / "Modo claro") overrides it, stored in `localStorage.theme`, applied before paint by the inline script in `index.html`. Contacto stays yellow in both themes on purpose.

## Content rules (owner decisions)

- Title: **Staff Android Engineer** at MACH since 2026 · 09, in squad Prisma (owns the app's PIN and 2FA). Joined MACH as Junior in 2021 · 08; the 2021 · 08 a 2026 · 08 row is plain "Desarrollador Android" (Paul wants it general: Junior to Staff, no intermediate levels or dates). Onboarding and Recuperación de Cuenta belong to that era, not to Staff.
- H1: "Staff Android Engineer. / Construyendo con Kotlin desde 2019." with "Staff" on the yellow block (`.staff` in `Hero.module.css`).
- The large portrait lives in the hero (right column, LCP, preloaded in `index.html`). Sobre has no photo.
- Eyebrow: plain line "Disponible para conversar · Santiago, Chile" with a static green dot. The dot marks a real state, so it stays; it never pulses or glows.
- Stats must be true on the day you deploy. Today: **+7** años en Android (since 2019-05), **4** herramientas open-source (public tool repos: toml-deps-checker, deps-changelog-diff, android-gradle-analyzer, android-module-map; the pfranccino-dev-skills plugin repo is linked but not counted), **6** artículos en Medium (count the RSS feed). Update them when reality changes; never round up.
- Project previews show real output copied from the repo README or a real run, labeled with their source ("Salida de ejemplo del README"). Never invent commands, numbers or file names. No NDA or employer content. Keep each preview to about 9 lines so all terminals share one height; cut with a `...` line and add "(recortada)" to the label instead of editing lines.
- Skills section: the two public Claude Code skills (`android-gradle-health` in pfranccino-dev-skills, `module-map` in android-module-map). Descriptions come from each SKILL.md, install commands verbatim from each README.
- Only link repos that are public. Check with `curl -o /dev/null -w "%{http_code}" https://github.com/pfranccino/<repo>` before adding one.
- Every published Medium article is on the site (6 today). Dates in `writings.json` and JSON-LD `datePublished` come from https://medium.com/feed/@pfranccino. Series posts carry `series` and `part`; the newest non-series post is featured.
- `gustoso` and `habit-tracker-backend` are private: never link them.
- All UI copy is in Spanish.

## Copy rules

- No em dashes (—) anywhere: UI text, data JSON, alt text, comments. Use a period, comma, colon or parentheses. Date ranges read "2021 · 08 a hoy".
- No invented facts. A rewrite may only use facts already on the site or supplied by Paul.
- Avoid: forced lists of three ("pequeñas, útiles, escritas…"), "no es X, es Y" constructions, stock phrases ("me apasiona", "software robusto", "nuevas tecnologías").
- Arrows: `↗` only on links that open another site (with `target="_blank"` and "(se abre en otra pestaña)" in the aria-label). No arrow on `mailto:` or in-page links. No `→`.
- No emoji in UI copy (terminal output copied verbatim from a README is the exception).

## Accessibility and mobile

- Every text pair passes WCAG AA (4.5:1 normal, 3:1 large) in **both** themes. Compute it, don't eyeball it.
- Global `:focus-visible` ring uses `--focus` (ink in light, yellow in dark); inside Contacto it is `--on-accent`. Never remove outlines.
- Every link and button is at least 44px tall on touch layouts (use padding, not font size).
- The mobile drawer is `inert` when closed, moves focus to its first link when opened, and closes on Escape returning focus to the burger. The burger shows a visible "Menú" / "Cerrar" label, and on phones the theme button lives inside the drawer.
- Hover effects only on things that are clickable.
- Breakpoints: 880px, 760px (mobile nav), 520px (tighter header). No horizontal scroll at 375px; long words use `overflow-wrap: anywhere`.

## Architecture

```
src/
  App.jsx              # Header, sections, Footer; scroll-entrance observer
  index.css            # fonts, tokens (both themes), reset, focus ring, shared classes
  main.jsx             # React entry
  components/          # one file per section + CSS Module
    Header.jsx         # fixed nav, theme toggle, mobile drawer
    Hero.jsx           # eyebrow, H1, lede, CTAs, large portrait
    Sobre.jsx          # bio, verified stats, hobbies
    Stack.jsx          # 4-column tech list
    Trabajo.jsx        # tools in pairs (Dependencias, Arquitectura) with real CLI output
    Skills.jsx         # Claude Code skills with their install command
    Experience.jsx     # dated role rows
    Articulos.jsx      # featured post, MACHBANK series, older posts
    Contacto.jsx       # yellow block, email CTA, social links
    Footer.jsx         # minimal footer
  data/
    profile.json       # experience, hobbies, social links (bundled publicly: no private data)
    projects.json      # tool groups { group, question, projects[] with preview { source, lines[] } }
    writings.json      # every published Medium article { date, series?, part? }
    stack.json         # tech stack categories
    skills.json        # Claude Code skills { name, repo, description, trigger, install }
  assets/profile.jpg   # source photo for optimize-images
public/
  og-preview.html      # source for og-image.jpg (light-theme tokens; loads Archivo from Google Fonts only for the render)
anti-slop/             # antislop reports (audit 001 before the rebrand, 002 the during-mode pass)
```

Everything in `src/data/*.json` ships in the public JS bundle. Never put phone numbers or other private data there.

## Conventions

- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `style:`, `perf:`, `docs:`).
- CSS: tokens from `:root` only, never hardcoded colors in component CSS.
- Comments explain why, in one line. No banner separators, no history ("moved from…"), no restating the code.

## Before shipping UI changes

1. `npm run lint && npm run build` pass.
2. `npm run preview` and check, in light and dark: every nav anchor lands on its section, the theme button switches and persists, the drawer opens, closes on Escape and can't be tabbed into when closed, every external link opens in a new tab, no console errors.
3. At 375 to 390px wide: no horizontal scroll, no tap target under 44px.
4. Contrast checked for any new color pair.
5. If stats, articles or repos changed, verify them against GitHub and the Medium feed.
