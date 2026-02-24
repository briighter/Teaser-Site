# teaser.studio — Website Copilot Instructions

## Project Overview

Marketing and product website for **Teaser**, a fitness curriculum platform for professional instructors. The site lives at [teaser.studio](https://teaser.studio) and serves as the primary acquisition surface for the mobile app — communicating authority, energy, and studio-grade professionalism.

**Core goal:** Convert fitness instructors into app signups. Every design decision serves that conversion — clarity over decoration, authority over warmth.

---

## Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + CSS custom properties
- **Animation:** Motion (formerly Framer Motion) for React
- **UI Components:** shadcn/ui (customized to brand)
- **Fonts:** Google Fonts (loaded via `next/font`)
- **Deployment:** Github Pages (static export)

---

## Brand Identity: "Studio Command Center"

The aesthetic is **Bloomberg Terminal meets high-end boutique studio** — Barry's Bootcamp, Equinox, Linear. A professional power tool, not a wellness journal.

### Core Palette

```css
:root {
  /* Primary: Deep Charcoal — authority & expertise */
  --color-primary: #1E2019;
  --color-on-primary: #E8F0E3;

  /* Accent: Electric Lime — energy & precision (USE SPARINGLY) */
  --color-accent: #B8FF57;
  --color-on-accent: #1E2019;

  /* Tertiary: Slate Blue — intelligence & depth */
  --color-tertiary: #5B6B7C;

  /* Surface & Background */
  --color-surface: #FFFFFF;
  --color-surface-variant: #F4F6F3;
  --color-background: #FAFBF9;

  /* Text */
  --color-text-primary: #1E2019;
  --color-text-secondary: #5B6B7C;
  --color-text-muted: #9AA3A0;

  /* Borders */
  --color-outline: #D1D5D8;
  --color-outline-variant: #E8EAE9;

  /* Semantic */
  --color-error: #D64545;
  --color-success: #4A7C59;
  --color-warning: #E5A03C;
}
```

**Color usage rules:**
- **80% grayscale + 15% charcoal + 5% electric lime**
- Electric lime only for: hero CTAs, active states, highlights, key stats
- Never hardcode colors — always use CSS variables

### Dark Mode (Preferred for Sections)

```css
[data-theme="dark"] {
  --color-primary: #B8FF57;       /* Lime becomes primary */
  --color-on-primary: #1E2019;
  --color-background: #0F1410;
  --color-surface: #1A1E1B;
  --color-surface-variant: #2A2E2B;
  --color-text-primary: #E8F0E3;
  --color-text-secondary: #C4C9C5;
  --color-outline: #3F4440;
}
```

---

## Frontend Aesthetics

> ⚠️ **Critical instruction:** You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic — Inter fonts, purple gradients, white backgrounds, zero personality. Actively resist this.

### Typography

<use_interesting_fonts>
Typography instantly signals quality. Choose fonts that are beautiful, distinctive, and technically precise.

**Never use:** Inter, Roboto, Open Sans, Lato, or bare system fonts for display text.

**Teaser-approved font pairings:**
- **Display / Headings:** `Barlow Condensed` (800–900 weight), `Space Grotesk` (700), `DM Mono` for data callouts
- **Body / UI:** `IBM Plex Sans` (clean, technical), `Source Sans 3`
- **Code/Stats aesthetic:** `JetBrains Mono`, `IBM Plex Mono` — use for rep counts, class stats, numbers
- **Editorial sections:** `Newsreader` (for testimonials or long-form)

**Pairing principle:** High contrast = interesting. Condensed display + monospace data, variable weight extremes (200 vs 800), size jumps of 3× or more.

**Load via `next/font/google`** — never CDN links for performance.

```tsx
import { Barlow_Condensed, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';

const display = Barlow_Condensed({ subsets: ['latin'], weight: ['600', '700', '800', '900'] });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'] });
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] });
```
</use_interesting_fonts>

### Color & Theme

<commit_to_aesthetic>
Commit fully to the Studio Command Center aesthetic. Do not default to safe, generic palettes.

- **Dark sections first:** hero, features, and pricing sections should use dark charcoal backgrounds (`#0F1410`, `#1A1E1B`) — not white. Light sections are the exception.
- **Electric lime is a scalpel, not a paintbrush.** Use it for one CTA, one stat callout, or one active state per section. Never as a background fill.
- **Slate blue (`#5B6B7C`) for secondary text, labels, and borders.** Cooler than warm gray — technical, not cozy.
- **Sharp borders, not soft:** 2px solid outlines, 6–8px border-radius on components (not 24px pill shapes).
- **UPPERCASE labels:** button text, section labels, badge text — all-caps with `letter-spacing: 0.05em`.
</commit_to_aesthetic>

### Motion & Animation

<use_purposeful_motion>
Animations communicate professionalism and energy. Prioritize CSS-only where possible; use Motion library for React when needed.

**High-impact moments:**
```tsx
// Staggered section entry — use on feature cards, stat blocks, testimonials
import { motion } from 'motion/react';

{features.map((f, i) => (
  <motion.div
    key={f.id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    viewport={{ once: true, margin: '-80px' }}
  >
    <FeatureCard feature={f} />
  </motion.div>
))}

// Hero text reveal — stagger each word
const heroWords = 'Build. Schedule. Teach.'.split(' ');
{heroWords.map((word, i) => (
  <motion.span
    key={i}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
    style={{ display: 'inline-block', marginRight: '0.25em' }}
  >
    {word}
  </motion.span>
))}

// CTA button hover — scale + color shift via CSS
.cta-button {
  transition: transform 150ms ease, box-shadow 150ms ease;
}
.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(184, 255, 87, 0.3); /* Lime glow */
}
.cta-button:active {
  transform: translateY(0);
}
```

**Animation parameters:**
- Duration: 200–450ms (snappy, never sluggish)
- Easing: `easeOutCubic` (`[0.25, 0.46, 0.45, 0.94]`) — organic, not linear
- Stagger delay: 60–100ms between list items

**Forbidden:**
- ❌ Bounce effects (too playful)
- ❌ Spinning loaders — use skeleton shimmer
- ❌ Random floating elements or parallax parallax on every scroll event
- ❌ Confetti or particle systems
</use_purposeful_motion>

### Backgrounds & Atmosphere

<create_atmospheric_backgrounds>
Never default to solid flat backgrounds. Create depth and atmosphere.

**Dark hero/sections:**
```css
/* Subtle noise texture over deep dark */
.hero {
  background: radial-gradient(ellipse 80% 50% at 50% -20%, #2A3D0C22, transparent),
              linear-gradient(180deg, #0F1410 0%, #1A1E1B 100%);
}

/* Grid pattern overlay (technical aesthetic) */
.section-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(184,255,87,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(184,255,87,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

/* Lime accent glow (use once — on hero CTA area) */
.hero-glow {
  background: radial-gradient(ellipse 40% 30% at 50% 100%, rgba(184,255,87,0.12), transparent);
}
```

**Light sections:**
```css
/* Cool off-white — not warm cream */
.section-light {
  background: linear-gradient(180deg, #FAFBF9 0%, #F4F6F3 100%);
}

/* Card depth */
.card {
  background: #FFFFFF;
  border: 1px solid #E8EAE9;
  box-shadow: 0 2px 8px rgba(30,32,25,0.06), 0 1px 2px rgba(30,32,25,0.04);
}
```

**Avoid:**
- ❌ Solid `#FFFFFF` full-page backgrounds
- ❌ Generic blue-to-purple gradients
- ❌ Warm beige / sage tones (wellness-app aesthetic)
</create_atmospheric_backgrounds>

---

## Page Structure & Content Strategy

### Site Map

| Route | Purpose |
|---|---|
| `/` | Hero + features + social proof + pricing + CTA |
| `/features` | Deep-dive feature breakdown |
| `/pricing` | Plans comparison |
| `/about` | Brand story |
| `/blog` | Instructor content (optional) |
| `/download` | App store redirect |

### Hero Section — Non-Negotiables

- **Headline:** Bold, declarative, all-caps or heavy weight. Not "The app for fitness instructors." — something with energy: **"YOUR CURRICULUM. YOUR STUDIO. COMMAND IT."**
- **Subheadline:** One sentence. Functional — what it does, for whom.
- **Primary CTA:** Electric lime button (`#B8FF57`), dark charcoal text, sharp 8px radius, uppercase label
- **Secondary CTA:** Outlined charcoal, same radius
- **Hero visual:** Device mockup or app screenshot on dark background — not a stock photo of a person "working out"
- **Social proof anchor:** "Trusted by X instructors" or app store rating — below fold

### Feature Sections

Structure each feature block as:
```
┌─────────────────────────────────────┐
│  LABEL (uppercase, lime or slate)   │
│  Feature Headline (display font)    │
│  2–3 sentence description           │
│  [Screenshot / Demo visual]         │
│  3× supporting detail chips         │
└─────────────────────────────────────┘
```

Key features to highlight:
1. **Exercise Vault** — Global + custom exercises, muscle group filtering, search
2. **Workout Builder** — Drag-and-drop sequencing, inline editing, exercise picker
3. **Class Scheduler** — Calendar, workout assignment, location/capacity management
4. **Organization Tools** — Multi-instructor studios, role management, team workouts

### Statistics / Social Proof Block

Use monospace font for numbers — technical authority:

```tsx
const stats = [
  { value: '2,400+', label: 'Global Exercises' },
  { value: '12', label: 'Muscle Groups' },
  { value: '5', label: 'Difficulty Levels' },
  { value: '∞', label: 'Custom Workouts' },
];
```

Display on dark background with electric lime accent on the numbers.

---

## Component Patterns

### CTA Button

```tsx
// Primary (lime)
<button className="
  bg-[#B8FF57] text-[#1E2019]
  font-semibold tracking-widest uppercase text-sm
  px-8 py-3.5 rounded-[8px]
  transition-all duration-150
  hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(184,255,87,0.3)]
  active:translate-y-0
">
  GET STARTED FREE
</button>

// Secondary (outlined charcoal)
<button className="
  border-2 border-[#1E2019] text-[#1E2019]
  font-semibold tracking-widest uppercase text-sm
  px-8 py-3 rounded-[8px]
  transition-all duration-150
  hover:bg-[#1E2019] hover:text-white
">
  SEE HOW IT WORKS
</button>
```

### Feature Card

```tsx
<div className="
  bg-white border border-[#E8EAE9] rounded-[8px] p-6
  shadow-[0_2px_8px_rgba(30,32,25,0.06)]
  hover:shadow-[0_4px_16px_rgba(30,32,25,0.1)]
  transition-shadow duration-200
">
  <span className="
    inline-block text-[11px] font-semibold tracking-[0.05em] uppercase
    bg-[#B8FF57] text-[#1E2019] px-2.5 py-1 rounded-[4px] mb-4
  ">
    {category}
  </span>
  <h3 className="text-[22px] font-bold tracking-tight text-[#1E2019] mb-2">
    {title}
  </h3>
  <p className="text-[#5B6B7C] text-base leading-relaxed">
    {description}
  </p>
</div>
```

### Navigation

```tsx
// Sticky nav: transparent on hero, solid on scroll
const [scrolled, setScrolled] = useState(false);

<nav className={`
  fixed top-0 w-full z-50 px-8 py-4
  flex items-center justify-between
  transition-all duration-300
  ${scrolled
    ? 'bg-[#1A1E1B]/95 backdrop-blur-sm border-b border-[#3F4440]'
    : 'bg-transparent'
  }
`}>
  <Logo />
  <NavLinks />
  <button className="bg-[#B8FF57] text-[#1E2019] ...">
    DOWNLOAD APP
  </button>
</nav>
```

---

## SEO & Metadata

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Teaser — Fitness Curriculum Platform',
  description: 'Build workouts, schedule classes, and manage your studio curriculum. The professional command center for fitness instructors.',
  openGraph: {
    title: 'Teaser — Fitness Curriculum Platform',
    description: 'Build. Schedule. Teach.',
    url: 'https://teaser.studio',
    siteName: 'Teaser',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teaser — Fitness Curriculum Platform',
    description: 'Build. Schedule. Teach.',
    images: ['/og-image.png'],
  },
};
```

---

## Performance Standards

- **Core Web Vitals targets:** LCP < 2.5s, CLS < 0.1, FID < 100ms
- Use `next/image` for all images with proper `width`/`height` and `priority` on hero
- Use `next/font` — never CDN font imports
- Lazy-load below-fold sections with `loading="lazy"` and `viewport` triggers
- Avoid heavy JS bundles in hero — CSS animations preferred for first-paint
- Ship a dark-first experience to reduce layout shift on dark-mode users

---

## Content Voice & Copy

**Tone:** Confident, direct, professional. The instructor audience is a subject matter expert — write peer-to-peer, not top-down.

**Do:**
- Short, punchy headlines: "Your curriculum. Structured."
- Active verbs: "Build", "Schedule", "Command", "Deploy"
- Specificity over hype: "2,400+ exercises across 12 muscle groups" > "huge library"

**Don't:**
- "Revolutionize your fitness journey" (wellness cliché)
- Exclamation points
- "Powerful yet simple" (every SaaS says this)
- Talking to clients/students — the user is always the instructor

---

## Forbidden Patterns

❌ Purple gradient on white background (default AI aesthetic)  
❌ Soft rounded pill buttons (use 8px radius)  
❌ Inter, Roboto, or Open Sans for headings  
❌ Pastel color accents  
❌ Stock photos of people working out  
❌ Generic Material Design or Ant Design defaults without customization  
❌ Animated counter numbers as the only "wow" moment  
❌ Floating decorative blobs or amorphous shapes  
❌ Warm beige or sage green (wellness aesthetic)  

---

## Quick Reference

| Token | Value | Usage |
|---|---|---|
| Primary | `#1E2019` | Text, borders, dark backgrounds |
| Accent | `#B8FF57` | CTAs, active states, stats |
| Tertiary | `#5B6B7C` | Secondary text, labels |
| Background | `#FAFBF9` | Light sections |
| Dark BG | `#0F1410` | Hero, feature sections |
| Surface | `#FFFFFF` | Cards |
| Radius | `8px` | All interactive components |
| Spacing base | `8px` | 8pt grid: 4/8/16/24/32/48px |
| Border | `1–2px solid #E8EAE9` | Cards on light |
| Border dark | `1px solid #3F4440` | Cards on dark |
