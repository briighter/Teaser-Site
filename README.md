# Teaser-Site

Static marketing and support website for **Teaser** — the fitness curriculum platform for professional fitness instructors. Hosted on GitHub Pages.

## What This Repo Is

This is a pure HTML/CSS/JavaScript static site that serves as:
- The app's homepage and marketing site
- A features deep-dive page
- A support hub with FAQ (required by App Store / Google Play)
- Privacy Policy (required by app stores)
- Terms of Service

No build tools, no npm, no frameworks. Open `index.html` in any browser.

## Preview Locally

```bash
# Requires a local server (file:// won't resolve clean URLs or root-relative paths)
npx serve .
# Then open http://localhost:3000

# Or with Python
python3 -m http.server 8080
# Then open http://localhost:8080
```

## GitHub Pages Configuration

1. Go to **Settings → Pages** in this repository
2. Set Source to **Deploy from a branch**
3. Choose the `main` branch and `/ (root)` folder
4. Save — the site will be live at `https://briighter.github.io/Teaser-Site/`

> The `.nojekyll` file in the root prevents GitHub Pages from running Jekyll on this repo.

## Updating Legal Pages

- **Privacy Policy** → edit `privacy/index.html` — update the "Last Updated" date and section content as needed
- **Terms of Service** → edit `terms/index.html` — update the "Last Updated" date, governing jurisdiction placeholder, and any other sections

## File Structure

```
/
├── index.html              # Homepage
├── features/
│   └── index.html          # Features deep-dive  →  /features/
├── support/
│   └── index.html          # Support / FAQ       →  /support/
├── privacy/
│   └── index.html          # Privacy Policy      →  /privacy/
├── terms/
│   └── index.html          # Terms of Service    →  /terms/
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, typography)
│   ├── base.css            # Reset, body, typography
│   ├── components.css      # Buttons, cards, chips, badges, FAQ accordion
│   ├── layout.css          # Nav, footer, grid, sections
│   └── animations.css      # Scroll reveal transitions
├── js/
│   ├── main.js             # Navigation scroll behavior, active link
│   └── animations.js       # IntersectionObserver scroll reveals
├── assets/
│   └── favicon.svg         # SVG "T" lettermark favicon
├── .nojekyll               # Prevents Jekyll processing on GitHub Pages
└── README.md
```

## Brand Colors

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1E2019` | Deep charcoal — primary text, buttons |
| `--color-accent` | `#B8FF57` | Electric lime — CTAs, highlights only (5% use) |
| `--color-tertiary` | `#5B6B7C` | Slate blue — secondary text |
| `--color-background` | `#FAFBF9` | Page background |
| `--color-surface` | `#FFFFFF` | Card/nav backgrounds |
