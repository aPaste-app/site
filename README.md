# aPaste website

Marketing site for [aPaste](https://github.com/AlliotTech/aPaste), a macOS clipboard manager.

Live at **https://apaste-app.github.io/site/**

## Stack

Static, no build step and no dependencies:

| File | Purpose |
|---|---|
| `index.html` | Full page markup, meta tags, JSON-LD |
| `styles.css` | All styles, light/dark themes via `html[data-theme]` |
| `script.js` | zh/en translations, theme toggle, mobile nav, showcase tabs, copy buttons |
| `assets/` | Logo and WebP screenshots |
| `robots.txt`, `sitemap.xml` | Crawler hints |

Open `index.html` in a browser to preview; there is nothing to install or compile.

## Conventions

- **Bilingual.** Every visible string carries `data-i18n` (text), `data-i18n-html` (text with inline markup) or `data-i18n-title` (tooltip), and both `zh` and `en` entries must exist in `translations` in `script.js`. The HTML default text is the Chinese copy.
- **Claims must match the app.** Product statements are verified against the aPaste source. Notably: content types are text / link / image / file; screen-capture hiding and sync encryption are opt-in; releases are two single-architecture DMGs, not a universal binary; quick actions live in the card right-click menu and have no shortcuts.
- **Absolute URLs** (`canonical`, `og:*`, `twitter:*`, JSON-LD, `sitemap.xml`) point at `https://apaste-app.github.io/site/`. Update all of them together if the site moves.
- **Screenshots** are cropped to the aPaste panel with the macOS menu bar removed, exported as WebP under 60 KB.

## Deployment

GitHub Pages, deploy from branch `main`, folder `/` (root).
