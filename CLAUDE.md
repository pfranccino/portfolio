# Portfolio — pfranccino.dev

React 19 + Vite 7 single-page portfolio. Spanish-first. Deployed to GitHub Pages via `gh-pages` package. Custom domain: pfranccino.dev.

## Commands

```bash
npm run dev       # local dev server (Vite)
npm run build     # production build → dist/
npm run lint      # ESLint
npm run deploy    # build + deploy to gh-pages branch
```

## Design system

**Fonts** (loaded from Google Fonts in index.html `<head>`):
- `--font-h` → Outfit — headings, nav, buttons
- `--font-b` → Plus Jakarta Sans — body text
- `--font-m` → JetBrains Mono — code, chips, labels

**Palette** (CSS custom properties in `src/index.css`):
- `--bg: #F8FAFC` / `--bg-2: #EEF2F7`
- `--ink: #0F172A` / `--ink-2: #475569` / `--ink-3: #94A3B8`
- `--accent: #4F46E5` / `--accent-soft: #EEF0FF`
- `--ok: oklch(0.55 0.14 150)` — green status dot
- `--rule: #E2E8F0` — borders and dividers

**Layout**: sections use `.wrap` (max-width 1280px, 2.5rem padding) and `.sec` class for vertical rhythm. Breakpoint at 760px for mobile.

**Components**: CSS Modules per component (`*.module.css`), global utilities in `src/index.css`.

## Architecture

```
src/
  App.jsx              # root layout: Header → sections → Footer
  index.css            # global tokens, reset, shared classes
  main.jsx             # React entry
  components/          # one file per section + CSS Module
    Header.jsx         # fixed nav, mobile drawer
    Hero.jsx           # headline, stats, stamp photo, ticker
    Sobre.jsx          # bio, large photo, hobby cards
    Stack.jsx          # 4-column tech list
    Trabajo.jsx        # project cards with terminal previews
    Experience.jsx     # timeline
    Articulos.jsx      # article cards → Medium
    Contacto.jsx       # dark section, email CTA, social links
    Footer.jsx         # minimal footer
  data/                # JSON data files
    profile.json       # bio, experience, hobbies, social links
    projects.json      # OSS projects with terminal preview lines
    writings.json      # Medium articles
    stack.json         # tech stack categories
  assets/
    profile.jpg        # profile photo
```

## Non-negotiable decisions

- H1 text: "Desarrollador Android Senior. / Construyendo con Kotlin / desde 2019."
- Hero photo is a stamp (120×150px); large photo lives in Sobre section
- No blob SVG decorations
- Stats: +5 Años / 3 Herramientas OSS / 4 Artículos (not GitHub contributions or employer metrics)
- Project cards show terminal output / code snippets from public repos only (no NDA content)
- Eyebrow badge with pulsing green dot (`--ok` color)
- All UI copy is in Spanish

## Conventions

- Commit messages: conventional commits (`feat:`, `fix:`, `chore:`, `style:`, `perf:`, `docs:`)
- CSS: use tokens from `:root`, never hardcode colors
- Sections are numbered: "01 / Sobre", "02 / Stack", etc.
- Responsive: mobile-first breakpoint at 760px, secondary at 520px and 880px
