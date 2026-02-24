````instructions
# teaser.studio — Website Copilot Instructions

## Project Overview

Marketing and product website for **Teaser**, a fitness curriculum platform for professional instructors. The site lives at [teaser.studio](https://teaser.studio) and serves as the primary acquisition surface for the mobile app — communicating precision, calm authority, and approachability across all movement modalities.

**Core goal:** Convert fitness instructors into app signups. Every design decision serves that conversion — clarity over decoration, confidence over aggression.

**Target audiences:** Pilates, Yoga, and group fitness instructors. The aesthetic must feel welcoming to mindful movement disciplines while maintaining professional credibility for HIIT and strength coaches.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Animation:** Motion (formerly Framer Motion) for React
- **Fonts:** Google Fonts (loaded via `next/font`)
- **Deployment:** GitHub Pages (static export via `output: "export"`)

---

## Brand Identity: "Precision Meets Softness"

The aesthetic is **thoughtful, calm, and quietly confident** — like a well-designed studio space. Think Linear's clarity combined with the warmth of a Pilates reformer studio. Professional enough for gym owners, soft enough for yoga instructors.

### Core Palette — "Monochrome Sky"

```css
:root {
  /* Primary: Charcoal Blue — authority with warmth */
  --color-primary: #2f4550;
  --color-on-primary: #f4f4f9;

  /* Accent: Light Blue — calm energy (USE SPARINGLY) */
  --color-accent: #b8dbd9;
  --color-on-accent: #2f4550;

  /* Tertiary: Blue Slate — intelligence & depth */
  --color-tertiary: #586f7c;

  /* Surface & Background */
  --color-surface: #FFFFFF;
  --color-surface-variant: #eceef5;
  --color-background: #f4f4f9;

  /* Text */
  --color-text-primary: #2f4550;
  --color-text-secondary: #586f7c;
  --color-text-muted: #8a9aa3;

  /* Borders */
  --color-outline: #cdd1dc;
  --color-outline-variant: #e2e4ec;

  /* Semantic */
  --color-error: #D64545;
  --color-success: #4A7C59;
  --color-warning: #E5A03C;
}
```

**Color usage rules:**
- **80% ghost white/slate tones + 15% charcoal blue + 5% light blue accent**
- Light blue only for: hero CTAs, active states, highlights, key stats
- Never hardcode colors — always use CSS variables (`var(--color-*)`)

### Dark Mode (Used for Hero & Feature Sections)

```css
/* Dark section tokens */
--color-dark-bg: #000000;
--color-dark-surface: #162430;
--color-dark-surface-variant: #2f4550;
--color-dark-text: #f4f4f9;
--color-dark-text-secondary: #b8dbd9;
--color-dark-outline: #3f5661;
```

---

## Frontend Aesthetics

> ⚠️ **Critical instruction:** You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic — Inter fonts, purple gradients, white backgrounds, zero personality. Actively resist this.

### Typography

<use_interesting_fonts>
Typography instantly signals quality. Our fonts are geometric and friendly — soft precision, not harsh techno.

**Never use:** Inter, Roboto, Open Sans, Lato, or bare system fonts for display text.

**Teaser-approved font pairings:**
- **Display / Headings:** `DM Sans` (600–900 weight) — geometric, friendly, precise
- **Body / UI:** `DM Sans` (400–700 weight) — same family for visual harmony
- **Code / Stats aesthetic:** `DM Mono` (400–500 weight) — for rep counts, class stats, data callouts

**Pairing principle:** Weight contrast within the same family creates visual interest without clash. Use weight jumps (400 vs 800), size jumps of 3× or more, and monospace for data emphasis.

**Load via `next/font/google`** — never CDN links for performance.

```tsx
import { DM_Sans, DM_Mono } from 'next/font/google';

const display = DM_Sans({ subsets: ['latin'], weight: ['600', '700', '800', '900'], variable: '--font-display' });
const body = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body' });
const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });
```
</use_interesting_fonts>

### Color & Theme

<commit_to_aesthetic>
Commit fully to the Precision Meets Softness aesthetic. Do not default to safe, generic palettes.

- **Dark sections lead:** Hero and feature sections use dark backgrounds (`#000000` → `#162430` gradients). Light sections are the complement.
- **Light blue accent is a scalpel, not a paintbrush.** Use it for one CTA, one stat callout, or one active state per section. Never as a background fill.
- **Blue slate (`#586f7c`) for secondary text, labels, and borders.** Cool and professional.
- **Soft but precise shapes:** 8–12px border-radius on components. Not harsh squares, not 24px pills.
- **UPPERCASE labels:** Button text, section labels, badge text — all-caps with `letter-spacing: 0.05–0.08em`.
</commit_to_aesthetic>

### Motion & Animation

<use_purposeful_motion>
Animations communicate precision and calm confidence. Prioritize CSS-only where possible; use Motion library for React when needed.

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
  box-shadow: 0 8px 32px rgba(184, 219, 217, 0.3); /* Light blue glow */
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
- ❌ Random floating elements or parallax on every scroll event
- ❌ Confetti or particle systems
</use_purposeful_motion>

### Backgrounds & Atmosphere

<create_atmospheric_backgrounds>
Never default to solid flat backgrounds. Create depth and atmosphere.

**Dark hero/sections:**
```css
/* Subtle glow over deep dark gradient */
.hero {
  background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(88,111,124,0.15), transparent),
              linear-gradient(180deg, #000000 0%, #162430 100%);
}

/* Grid pattern overlay (technical aesthetic) */
.section-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(184,219,217,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(184,219,217,0.04) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

/* Light blue accent glow (use once — on hero CTA area) */
.hero-glow {
  background: radial-gradient(ellipse 40% 30% at 50% 100%, rgba(184,219,217,0.12), transparent);
}
```

**Light sections:**
```css
/* Cool ghost white — not warm cream */
.section-light {
  background: linear-gradient(180deg, #f4f4f9 0%, #eceef5 100%);
}

/* Card depth */
.card {
  background: #FFFFFF;
  border: 1px solid #e2e4ec;
  box-shadow: 0 2px 8px rgba(47,69,80,0.06), 0 1px 2px rgba(47,69,80,0.04);
}
```

**Avoid:**
- ❌ Solid `#FFFFFF` full-page backgrounds
- ❌ Generic blue-to-purple gradients
- ❌ Hot neon colors (electric lime, hot pink)
- ❌ Warm beige / sage tones (generic wellness aesthetic)
</create_atmospheric_backgrounds>

---

## Page Structure & Content Strategy

### Site Map

| Route | Purpose |
|---|---|
| `/` | Hero + features + social proof + CTA |
| `/features` | Deep-dive feature breakdown |
| `/about` | Brand story + creator |
| `/support` | Help center + contact |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

### Hero Section — Non-Negotiables

- **Headline:** Bold, declarative, heavy weight. Energy meets calm: **"YOUR CURRICULUM. YOUR STUDIO. COMMAND IT."**
- **Subheadline:** One sentence. Functional — what it does, for whom.
- **Primary CTA:** Light blue button (`var(--color-accent)`), charcoal text, 8px radius, uppercase label
- **Secondary CTA:** Outlined charcoal, same radius
- **Hero visual:** Device mockup or app screenshot on dark background — not a stock photo
- **Social proof anchor:** "Trusted by X instructors" or app store rating — below fold

### Feature Sections

Structure each feature block as:
```
┌─────────────────────────────────────┐
│  LABEL (uppercase, accent or slate) │
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

Display on dark background with light blue accent on the numbers.

---

## Component Patterns

### CTA Button

```tsx
// Primary (light blue accent)
<button className="
  bg-(--color-accent) text-(--color-on-accent)
  font-semibold tracking-widest uppercase text-sm
  px-8 py-3.5 rounded-[8px]
  transition-all duration-150
  hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(184,219,217,0.3)]
  active:translate-y-0
">
  GET STARTED FREE
</button>

// Secondary (outlined charcoal)
<button className="
  border-2 border-(--color-primary) text-(--color-primary)
  font-semibold tracking-widest uppercase text-sm
  px-8 py-3 rounded-[8px]
  transition-all duration-150
  hover:bg-(--color-primary) hover:text-(--color-on-primary)
">
  SEE HOW IT WORKS
</button>
```

### Feature Card

```tsx
<div className="
  bg-white border border-(--color-outline-variant) rounded-[8px] p-6
  shadow-[0_2px_8px_rgba(47,69,80,0.06)]
  hover:shadow-[0_4px_16px_rgba(47,69,80,0.1)]
  transition-shadow duration-200
">
  <span className="
    inline-block text-[11px] font-semibold tracking-[0.05em] uppercase
    bg-(--color-accent) text-(--color-on-accent) px-2.5 py-1 rounded-[4px] mb-4
  ">
    {category}
  </span>
  <h3 className="text-[22px] font-bold tracking-tight text-(--color-primary) mb-2">
    {title}
  </h3>
  <p className="text-(--color-text-secondary) text-base leading-relaxed">
    {description}
  </p>
</div>
```

### Navigation

```tsx
// Sticky nav: always dark, transparent initially then solid on scroll
const [scrolled, setScrolled] = useState(false);

<nav className={`
  fixed top-0 w-full z-50 px-8 py-4
  flex items-center justify-between
  transition-all duration-300
  ${scrolled
    ? 'bg-[#162430]/95 backdrop-blur-sm border-b border-[#3f5661]'
    : 'bg-[#162430]/80 backdrop-blur-sm'
  }
`}>
  <Logo />
  <NavLinks />
  <button className="bg-(--color-accent) text-(--color-on-accent) ...">
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

**Tone:** Confident, approachable, professional. The instructor audience is a subject matter expert — write peer-to-peer, not top-down. Softer than corporate SaaS, sharper than wellness blogs.

**Do:**
- Short, clear headlines: "Your curriculum. Structured."
- Active verbs: "Build", "Schedule", "Teach", "Organize"
- Specificity over hype: "2,400+ exercises across 12 muscle groups" > "huge library"
- Warm precision: confident without being aggressive

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
❌ Neon / electric accent colors (lime green, hot pink)
❌ Stock photos of people working out
❌ Generic Material Design or Ant Design defaults without customization
❌ Animated counter numbers as the only "wow" moment
❌ Floating decorative blobs or amorphous shapes
❌ Warm beige or sage green (generic wellness aesthetic)
❌ Hardcoded color values — always use CSS variables

---

## Quick Reference

| Token | Value | Usage |
|---|---|---|
| Primary | `#2f4550` | Text, borders, charcoal backgrounds |
| Accent | `#b8dbd9` | CTAs, active states, stats |
| Tertiary | `#586f7c` | Secondary text, labels |
| Background | `#f4f4f9` | Light sections (ghost white) |
| Surface Variant | `#eceef5` | Light section gradient end |
| Dark BG | `#000000` | Hero gradient start |
| Dark Surface | `#162430` | Dark sections, navbar |
| Dark Outline | `#3f5661` | Borders on dark sections |
| Radius | `8px` | All interactive components |
| Spacing base | `8px` | 8pt grid: 4/8/16/24/32/48px |
| Border light | `1px solid #e2e4ec` | Cards on light |
| Border dark | `1px solid #3f5661` | Cards on dark |
| Glow shadow | `rgba(184,219,217,0.3)` | CTA hover glow |
| Card shadow | `rgba(47,69,80,0.06)` | Light card depth |
| Font Display | `DM Sans 600–900` | Headlines, headings |
| Font Body | `DM Sans 400–700` | Body text, UI labels |
| Font Mono | `DM Mono 400–500` | Stats, data, code |

````
