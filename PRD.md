# PRD — Jerrison Chai Professional Portfolio v2.0

> **Status:** Planning | **Live:** https://jerrison-portfolio.vercel.app  
> **Repo:** https://github.com/Jerrisonchai/jerrison-portfolio  
> **Last Updated:** 2026-06-27

---

## 1. Executive Summary

### Problem
Jerrison's resume hasn't been updated since August 2023. Three years of intensive VBA development, team leadership, automation architecture, and cross-departmental contributions (2024-2026) are undocumented. His career story — from template developer to JARVIS automation architect — has no public showcase.

### Solution
A professional corporate portfolio that transforms Jerrison's detailed 3-year work log into a compelling career narrative. Data-driven, metrics-rich, with interactive visualizations that prove his impact. Not just a resume — a career dossier.

### Two-Portfolio Strategy
| Portfolio | URL | Purpose |
|-----------|-----|---------|
| **Luffy Link** | luffy-link.vercel.app | Personal/creative brand |
| **Jerrison Portfolio** | jerrison-portfolio.vercel.app | Corporate career path (this project) |

---

## 2. Target Audience

1. **Hiring managers** — VBA Business Analyst, Process Automation Lead roles
2. **Recruiters** — Quick scan of skills, metrics, experience
3. **HR Directors** — Looking for automation/transformation specialists
4. **Freelance clients** — Need VBA/Excel/business automation

---

## 3. Key Resume Updates (2024-2026)

### Core Narrative
**"From template developer to automation architect"**

- **2024:** Built & optimized 686 VBA templates (670K lines of code). Served Finance, Purchasing, E-commerce departments. 24 version releases. 80%+ VBA time allocation monthly.
- **2025:** Expanded into INV team, BAT/VBS automation, web scraping, POS systems. Built task monitoring systems, HTML reporting, and search engines.
- **2026:** Led INV team + managed subordinate (Gino). Built **JARVIS Dashboard** (VBS-PS1-BAT-HTML), reducing daily tasks from 20min to 3min. Built OneDrive-VBS-Outlook email automation pipeline. Cross-department: INV, LL, COSME-DE, Yumi, GMP.

### Key Metrics (Source: Jerrison's 2024-2026 Work Log)
| Metric | 2024 | 2025 | 2026 (H1) |
|--------|------|------|-----------|
| VBA Hours | 1,600 hrs | 1,748 hrs | ~700 hrs |
| Templates | 686 | 466+ | 727+ |
| Lines of Code | 670K | 335K (post-reset) | 695K |
| Version Releases | 24 | 16 | 8+ |
| VBA % of Work | 80.3% avg | 82.1% avg | 83%+ |
| Team Size | Individual | Individual | 2 (managed Gino) |
| Meeting Frequency | 26 meetings | 14 meetings | Biweekly |
| Automation Impact | — | — | 20min → 3min daily |

---

## 4. Product Scope — 10 Phases

### Phase 1: Foundation & Architecture
- [ ] PRD.md finalized
- [ ] DESIGN.md finalized
- [ ] Content architecture: resume data structured as JSON
- [ ] Component tree + route map
- [ ] Tech stack lock (Next.js 16, Tailwind v4, framer-motion, Recharts)

### Phase 2: Resume Content Engineering
- [ ] Process raw email data → structured resume content
- [ ] Professional summary (3 variants: BA, Automation, Leadership)
- [ ] Achievement bullets with quantifiable metrics
- [ ] Skills taxonomy (VBA, Automation, Leadership, Tools)
- [ ] Work experience timeline (2024-2026 vs pre-2024)
- [ ] Content saved as `data/resume-content.json`

### Phase 3: Design System
- [ ] Swiss Modernism 2.0 + Dark OLED hybrid
- [ ] Color palette: Deep Black + Slate + single accent (blue/cyan)
- [ ] Typography: Inter (body) + JetBrains Mono (metrics/code)
- [ ] 12-column mathematical grid
- [ ] Component design tokens
- [ ] Responsive breakpoints (mobile, tablet, desktop)
- [ ] Accessibility: WCAG AA minimum, AAA target

### Phase 4: Core Pages
- [ ] **Home** — Hero with headline + metrics highlight reel
- [ ] **About** — Professional story, career philosophy, work style
- [ ] **Experience** — Interactive timeline, 2024-2026 focus
- [ ] **Skills** — Categorized matrix with proficiency indicators

### Phase 5: Project Showcase
- [ ] 12 projects from our AI-built portfolio
- [ ] Case-study cards with problem/solution/result
- [ ] Category filters (Automation, Web Dev, AI, Data)
- [ ] Tech stack badges
- [ ] Live demo links

### Phase 6: Data Visualization Dashboard
- [ ] VBA metrics charts (Recharts):
  - Lines of code growth (2024-2026)
  - Monthly hours distribution
  - Version release frequency
  - Department impact (who Jerrison served)
- [ ] Animated counter components (count-up)
- [ ] Interactive year selector

### Phase 7: Interactive Resume
- [ ] Dynamic resume builder — toggle sections on/off
- [ ] PDF generation (browser print → styled PDF)
- [ ] ATS-friendly text version
- [ ] Download tracking

### Phase 8: Contact & Engagement
- [ ] Contact form (email integration)
- [ ] Social links (GitHub, LinkedIn)
- [ ] Resume download analytics
- [ ] Testimonial placeholder (future)

### Phase 9: SEO & Performance
- [ ] Lighthouse 90+ all categories
- [ ] OG images (dynamic or static)
- [ ] Schema.org Person + CreativeWork structured data
- [ ] Sitemap + robots.txt
- [ ] Meta descriptions (all pages)
- [ ] Open Graph + Twitter cards

### Phase 10: Production & Launch
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsive QA (iOS Safari, Android Chrome)
- [ ] Custom domain setup
- [ ] Vercel Analytics integration
- [ ] Final content review with Jerrison
- [ ] Launch checklist + announcement

---

## 5. Content Architecture

```
data/
  resume-content.json    # Structured resume data
  projects.json          # 12 AI projects
  work-log-2024.json     # Processed 2024 data
  work-log-2025.json     # Processed 2025 data
  work-log-2026.json     # Processed 2026 data
  metrics.json           # Aggregated metrics for charts
```

---

## 6. Success Metrics

- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Resume PDF renders correctly (print CSS)
- [ ] All VBA metrics verifiable from source logs
- [ ] Jerrison approves final content
- [ ] Mobile responsive (all breakpoints)
- [ ] Page load < 2s on 3G

---

## 7. Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Overwhelming data volume | Filter by impact, show top-level with drill-down |
| Privacy (employer names) | Generic titles unless Jerrison approves |
| Content accuracy | All metrics sourced from Jerrison's own work logs |
| Design over-engineering | Swiss Modernism = simple. No decoration. |

---

*To be updated each phase completion.*
