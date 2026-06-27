# DESIGN.md — Jerrison Portfolio v2.0

> **Style:** Swiss Modernism 2.0 × Dark OLED Hybrid  
> **Status:** Planning | **Last Updated:** 2026-06-27

---

## 1. Design Philosophy

### Why Swiss Modernism 2.0 + Dark OLED

| Trait | Swiss Modernism | Dark OLED |
|-------|----------------|-----------|
| Grid | 12-column strict | Full-bleed dark |
| Type | Inter / Helvetica | High contrast white |
| Color | Single accent | Deep blacks |
| Spacing | Mathematical (8px base) | Generous breathing room |
| Decoration | None | Minimal glow |
| Feel | Rational, credible | Premium, focused |

**The combination creates:** A corporate portfolio that feels both mathematically precise (data-driven analyst) and premium/dark (modern developer). The single accent color carries the brand — blue represents trust, precision, and technology.

---

## 2. Color System

```css
/* ── OLED Dark Base ── */
--bg-deep:        #000000;   /* OLED black — hero backgrounds, cards */
--bg-primary:     #0A0A0A;   /* Near-black — main body */
--bg-secondary:   #121212;   /* Dark grey — card surfaces */
--bg-elevated:    #1A1A1A;   /* Elevated — hover states */

/* ── Slate Neutrals ── */
--text-primary:   #F5F5F5;   /* White — headings */
--text-secondary: #A1A1AA;   /* Zinc-400 — body text */
--text-muted:     #71717A;   /* Zinc-500 — captions, dates */
--text-disabled:  #52525B;   /* Zinc-600 — inactive */

/* ── Accent (Single — Swiss rule) ── */
--accent:         #3B82F6;   /* Blue-500 — buttons, links, highlights */
--accent-light:   #60A5FA;   /* Blue-400 — hover states */
--accent-glow:    rgba(59, 130, 246, 0.15); /* Subtle glow */

/* ── Borders & Dividers ── */
--border:         #262626;   /* Neutral-800 — subtle borders */
--border-light:   #333333;   /* Neutral-750 — hover borders */
--divider:        linear-gradient(90deg, #3B82F6, #22D3EE);

/* ── Semantic ── */
--success:        #22C55E;   /* Green — metrics up */
--warning:        #F59E0B;   /* Amber — attention */
--error:          #EF4444;   /* Red — metrics down (used sparingly) */
```

### Accent Usage Rule (Swiss)
- **ONE accent color.** Blue serves all accent needs — links, buttons, highlights, active states.
- No secondary accents unless it's a semantic color (green for growth metrics).
- Gradients allowed ONLY in the `--divider` (section separator bar).

---

## 3. Typography

### Primary: Inter
```css
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
```
| Usage | Weight | Size | Letter-spacing |
|-------|--------|------|---------------|
| Hero headline | 800 (Extrabold) | clamp(3rem, 8vw, 6rem) | -0.02em |
| Section title | 700 (Bold) | clamp(1.75rem, 4vw, 2.5rem) | -0.01em |
| Subtitle | 500 (Medium) | 1.125rem | 0 |
| Body | 400 (Regular) | 1rem / 1.6 | 0 |
| Caption | 400 (Regular) | 0.875rem | 0.01em |

### Mono: JetBrains Mono
```css
font-family: 'JetBrains Mono', ui-monospace, monospace;
```
| Usage | Weight | Size |
|-------|--------|------|
| Metrics/numbers | 500 | 2rem |
| Code snippets | 400 | 0.875rem |
| Labels/tags | 500 | 0.75rem |
| Section labels | 500 | 0.75rem, uppercase, tracking 0.1em |

---

## 4. Grid System (Swiss 12-Column)

```
┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │10 │11 │12 │
└───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
```

| Breakpoint | Container | Columns |
|-----------|-----------|---------|
| Mobile (< 768px) | Full width - 32px | 4-col |
| Tablet (768-1024px) | 720px | 8-col |
| Desktop (> 1024px) | 1024px | 12-col |

**Base unit:** 8px (space-1 = 8px, space-2 = 16px, space-4 = 32px...)

---

## 5. Component Design Tokens

### Cards
```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  /* No shadow — Swiss minimalism */
}
.card:hover {
  border-color: var(--border-light);
  transform: translateY(-1px);
  transition: all 150ms ease;
}
```

### Buttons
```css
.btn-primary {
  background: var(--accent);
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 500;
}
.btn-secondary {
  background: var(--bg-elevated);
  color: var(--text-primary);
  border: 1px solid var(--border);
}
```

### Section Divider
```css
.section-divider {
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #22D3EE);
  border-radius: 2px;
}
```

### Navigation
- Fixed top, `backdrop-blur-md`, `bg-black/80`
- Logo: "JC" monogram — JetBrains Mono, bold
- Links: Inter 400, `text-zinc-400` → `text-white` on hover
- Active state: accent underline (2px)

### Metrics Display
- Large numbers: JetBrains Mono 500, 2rem+
- Labels: Inter 400, 0.75rem, uppercase, zinc-500
- Counter animation: framer-motion `useSpring` count-up

---

## 6. Page Layouts

### Home (Hero + Highlights)
```
┌─────────────────────────────────────┐
│              NAV (fixed)             │
├─────────────────────────────────────┤
│                                     │
│         HERO (center-aligned)       │
│    Label → Name → Tagline → CTA     │
│                                     │
├─────────────────────────────────────┤
│     METRICS HIGHLIGHT (3 cols)      │
│   [4,000+ hrs] [700+ templates]    │
│        [695K+ lines of code]       │
├─────────────────────────────────────┤
│     ABOUT SNIPPET + SKILLS PREVIEW  │
├─────────────────────────────────────┤
│     PROJECT SHOWCASE (featured)     │
├─────────────────────────────────────┤
│     FOOTER                          │
└─────────────────────────────────────┘
```

### Experience (Timeline)
```
┌─────────────────────────────────────┐
│          2026 · JARVIS ERA          │
│    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │
│    VBA Automation Architect         │
│    Team Lead (Gino)                 │
│    20min → 3min automation          │
├─────────────────────────────────────┤
│          2025 · EXPANSION           │
│    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │
│    Multi-department, BAT/VBS        │
│    Task monitoring systems          │
├─────────────────────────────────────┤
│          2024 · FOUNDATION          │
│    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━    │
│    686 templates, 670K LoC          │
│    Finance + Purchasing + E-com     │
└─────────────────────────────────────┘
```

### Data Dashboard (Phase 6)
```
┌──────────────────┬──────────────────┐
│   LoC Growth     │   Monthly Hours   │
│   (Area Chart)   │   (Bar Chart)     │
├──────────────────┼──────────────────┤
│   Version Releases│  Department      │
│   (Timeline)     │   (Pie/Donut)    │
└──────────────────┴──────────────────┘
```

---

## 7. Motion Design

### Principles
- **Subtle, not flashy.** Swiss = restrained.
- **Stagger children** for lists (50ms delay per item).
- **Count-up** for metric numbers.
- **Fade-up** for scroll-revealed sections (`y: 24px → 0`).
- **No bouncy springs** — use ease-out for professionalism.

### framer-motion Variants
```typescript
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const stagger = {
  container: { staggerChildren: 0.05 },
  item: fadeUp
};
```

---

## 8. Responsive Strategy

| Breakpoint | Layout | Nav | Typography |
|-----------|--------|-----|-----------|
| 320-640px | Single column, full-width cards | Hamburger menu | Smaller hero |
| 640-768px | 2-col grid where possible | Horizontal links | Standard |
| 768-1024px | 8-col grid | Full nav | Desktop scale |
| 1024px+ | 12-col grid, max-w-5xl | Full nav with spacing | Full desktop |

### Mobile Rules
- Touch targets ≥ 44px
- No horizontal scroll (except tables with `overflow-x-auto`)
- Safe area padding (`env(safe-area-inset-bottom)`)
- Tap highlight disabled
- `text-size-adjust: 100%`

---

## 9. Accessibility

- WCAG AA minimum, AAA target
- Color contrast: text-secondary (#A1A1AA) on bg-primary (#0A0A0A) = 9.54:1 ✓
- Focus visible: 2px accent outline offset
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`
- `prefers-reduced-motion`: disable all animations
- Screen reader: aria-labels on interactive elements

---

## 10. Design Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-27 | Swiss Modernism 2.0 + Dark OLED | Matches: data precision + modern developer |
| 2026-06-27 | Single accent (blue) | Swiss rule: one accent only |
| 2026-06-27 | No shadows on cards | Swiss = flat hierarchy, not material |
| 2026-06-27 | JetBrains Mono for metrics | Code-like precision for numbers |
| 2026-06-27 | V1 dark slate kept as base | Close to OLED Dark already, just refined |

---

*This design system governs all UI decisions. No deviation without updating this file.*
