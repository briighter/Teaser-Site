# Teaser-Site

Marketing and support website for **Teaser** — the fitness curriculum platform for professional fitness instructors. Built with Next.js, TypeScript, and Tailwind CSS. Hosted on GitHub Pages via static export.

## Tech Stack

- **Next.js 16** (App Router) with static export
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** (Framer Motion) for scroll-reveal animations
- **Google Fonts**: Barlow Condensed, IBM Plex Sans, IBM Plex Mono

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, social proof, features overview, how-it-works, download CTA |
| `/features` | Deep-dive feature breakdowns with UI mockups |
| `/support` | Contact info + FAQ accordion (required by App Store / Google Play) |
| `/about` | Origin story + creator bio |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

## Getting Started

```bash
npm install
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Static export to out/
npx serve out     # Preview the production build locally
```

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `main`.

### GitHub Pages Setup

1. Go to **Settings → Pages** in this repository
2. Set Source to **GitHub Actions** (not "Deploy from a branch")
3. The site will be live at your custom domain or `https://briighter.github.io/Teaser-Site/`

The deploy workflow (`.github/workflows/deploy.yml`) handles building, exporting, and deploying.

## Updating Legal Pages

- **Privacy Policy** → edit `src/app/privacy/page.tsx`
- **Terms of Service** → edit `src/app/terms/page.tsx`

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fonts, navbar, footer)
│   │   ├── globals.css             # CSS variables, Tailwind config
│   │   ├── page.tsx                # Homepage
│   │   ├── about/page.tsx          # About page
│   │   ├── features/page.tsx       # Features deep-dive
│   │   ├── support/page.tsx        # Support / FAQ
│   │   ├── privacy/page.tsx        # Privacy Policy
│   │   └── terms/page.tsx          # Terms of Service
│   └── components/
│       ├── navbar.tsx              # Sticky nav with mobile menu
│       ├── footer.tsx              # Site footer
│       ├── reveal.tsx              # Motion scroll-reveal wrappers
│       ├── page-hero.tsx           # Reusable page header
│       ├── download-cta.tsx        # App Store / Google Play CTA
│       ├── home/                   # Homepage sections
│       └── features/               # Feature mockup components
├── public/
│   └── favicon.svg                 # SVG "T" lettermark
├── .github/workflows/deploy.yml    # GitHub Pages CI/CD
├── next.config.ts                  # Static export config
├── tailwind.config.ts
└── package.json
```

## Brand Colors

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1E2019` | Deep charcoal — primary text, buttons |
| `--color-accent` | `#B8FF57` | Electric lime — CTAs, highlights (5% use) |
| `--color-tertiary` | `#5B6B7C` | Slate blue — secondary text |
| `--color-background` | `#FAFBF9` | Page background |
| `--color-surface` | `#FFFFFF` | Card/nav backgrounds |
