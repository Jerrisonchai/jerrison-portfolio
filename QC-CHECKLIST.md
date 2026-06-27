# Sanji QC Checklist v1.0 — Jerrison Portfolio
> Design: Swiss Modernism 2.0 × Dark OLED  
> 2026-06-27 17:10 MYT

## 1. Design System Compliance (14 checks)
- [ ] Single accent color (blue #3B82F6) used throughout — no purple, green, or orange accents
- [ ] Section dividers use gradient `#3B82F6 → #22D3EE` 48×3px
- [ ] Cards: bg-[#121212], border-[#262626], no shadow, rounded-xl (12px)
- [ ] Buttons: 44px min height, rounded-lg (8px), Inter 500
- [ ] No box-shadow on any card (Swiss: flat hierarchy)
- [ ] Typography: Inter for body/headings, JetBrains Mono for metrics/labels
- [ ] Hero headline: clamp(3rem, 8vw, 6rem), extrabold
- [ ] Section titles: 3xl/4xl, bold
- [ ] bg-deep #000000 used appropriately (not as main bg)
- [ ] bg-primary #0A0A0A as main body background
- [ ] text-secondary: #A1A1AA for body, text-muted #71717A for captions
- [ ] border color: #262626 consistently
- [ ] 12-column max-w-5xl container on desktop
- [ ] 8px base spacing unit observed

## 2. Component Audit (18 checks)
- [ ] Nav: fixed, backdrop-blur, scroll-aware bg transition
- [ ] Nav logo: "JC." with accent dot
- [ ] Nav desktop links: Inter, zinc-400 → white hover
- [ ] Nav mobile: animated hamburger (3-line → X), AnimatePresence slide-down
- [ ] Nav mobile: body scroll locked when menu open
- [ ] Hero: monospace section label "VBA Automation Architect"
- [ ] Hero: 2-sentence summary with key numbers highlighted in white
- [ ] Hero: primary CTA "View Experience" + secondary "Download Resume"
- [ ] Hero metrics strip: 4-col grid, gap-px divider, count-up numbers
- [ ] CountUp: intersection observer triggered, ease-out cubic, locale-formatted
- [ ] Skills: 3-col grid, card component, icon + title + description
- [ ] Experience: left-border timeline, staggered fade-in, year badges
- [ ] Achievements: 2-col grid, monospace metric numbers, accent color
- [ ] Projects: 3-col grid, card links, external links open new tab with rel
- [ ] Contact: centered, 3 buttons (email, GitHub, resume)
- [ ] Footer: border-t, zinc-600, monospace
- [ ] Scroll reveal: fadeUp variant on all sections
- [ ] Stagger: 50ms delay per item in lists

## 3. Animation & Motion (10 checks)
- [ ] All animations use framer-motion (no raw CSS @keyframes)
- [ ] fadeUp: opacity 0→1, y: 24→0, easeOut, 0.5s
- [ ] whileInView with once: true (doesn't re-trigger on scroll-back)
- [ ] viewport margin: -80px (triggers slightly before visible)
- [ ] CountUp: requestAnimationFrame, intersection observer, ease-out cubic
- [ ] Nav hamburger: rotate + translate animation, opacity toggle
- [ ] Nav mobile menu: AnimatePresence with opacity + y slide
- [ ] Hover transitions: 150ms ease on cards (border + translateY)
- [ ] Button hover: translateY(-1px), active: translateY(0)
- [ ] prefers-reduced-motion: all animations disabled

## 4. Mobile Responsive (12 checks)
- [ ] Nav: hamburger appears below 768px
- [ ] Nav links: horizontal on desktop, vertical on mobile
- [ ] Hero text: clamp() for fluid sizing
- [ ] Metrics strip: 4-col → 2-col on mobile
- [ ] Skills grid: 3-col → 2-col → 1-col responsive
- [ ] Experience timeline: full width on mobile, no truncation
- [ ] Achievements: 2-col → 1-col on mobile
- [ ] Projects: 3-col → 2-col → 1-col
- [ ] Contact buttons: flex-wrap for narrow screens
- [ ] Touch targets: all interactive elements ≥ 44px
- [ ] -webkit-tap-highlight-color: transparent on mobile
- [ ] Safe area padding: env(safe-area-inset-bottom)

## 5. Accessibility (10 checks)
- [ ] Semantic HTML: nav, main, section, footer
- [ ] Nav: role="navigation", aria-label
- [ ] Hamburger: aria-label, aria-expanded
- [ ] Focus visible: 2px accent outline with offset
- [ ] Color contrast: text-zinc-400 (#A1A1AA) on bg-primary (#0A0A0A) = 9.54:1 ✓
- [ ] Images: no img elements (all emoji icons, no alt needed)
- [ ] Links: descriptive text (not "click here")
- [ ] Reduced motion: prefers-reduced-motion respected
- [ ] JSON-LD structured data in head
- [ ] Skip to content: NOT present (single-page, acceptable)

## 6. SEO & Meta (8 checks)
- [ ] Title tag: descriptive, includes job title
- [ ] Meta description: present and relevant
- [ ] Open Graph: title, description, type, locale
- [ ] Twitter card: summary_large_image
- [ ] Canonical URL: via metadataBase
- [ ] JSON-LD: Person schema with knowsAbout, address
- [ ] lang="en" on html element
- [ ] Heading hierarchy: h1 → h2 proper nesting

## 7. Performance (6 checks)
- [ ] Static export (SSG) — no server runtime
- [ ] Fonts via Google Fonts with preconnect
- [ ] No large images (emoji only)
- [ ] framer-motion tree-shakeable
- [ ] No client-side data fetching (all static data)
- [ ] CSS: Tailwind v4 with tree-shaking

## 8. Content Accuracy (10 checks)
- [ ] Hero tagline matches resume-content.md
- [ ] Metrics numbers from Jerrison's work log
- [ ] Skills list from skills-inventory.md
- [ ] Experience timeline matches career-timeline.md
- [ ] Achievements match resume-content.md
- [ ] Project list accurate (9 shown, matching real projects)
- [ ] Contact email correct: jerrisonchai@gmail.com
- [ ] GitHub URL correct: github.com/Jerrisonchai
- [ ] Resume PDF path correct: /jerrison-resume.pdf
- [ ] No invented metrics or embellished achievements

## 9. Cross-Browser (4 checks)
- [ ] Works in Chromium (Edge/Chrome)
- [ ] Scroll-behavior: smooth works
- [ ] backdrop-blur works
- [ ] CSS Grid works

## 10. Error States (4 checks)
- [ ] Resume PDF 404: graceful (direct link, browser handles)
- [ ] JavaScript disabled: client components won't render (acceptable — static info in meta/JSON-LD)
- [ ] Slow connection: static site, < 330KB uploaded
- [ ] No external API calls (no runtime failures possible)

---

**Total: 96 checks**
