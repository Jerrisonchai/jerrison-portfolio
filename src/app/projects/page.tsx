'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState<number | null>(null);

  const categories = useMemo(() => [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'automation', label: 'Automation', count: projects.filter(p => p.cat === 'automation').length },
    { id: 'ai', label: 'AI Systems', count: projects.filter(p => p.cat === 'ai').length },
    { id: 'web', label: 'Web Dev', count: projects.filter(p => p.cat === 'web').length },
    { id: 'data', label: 'Data & Trading', count: projects.filter(p => p.cat === 'data').length },
  ], []);

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter(p => p.cat === filter)),
    [filter]
  );

  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="section-label mb-2">Built With AI</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">Projects</h1>
          <p className="text-zinc-500 text-sm mb-10">
            12 projects — designed, architected, and deployed with AI collaboration via OpenClaw.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div {...fadeUp} className="flex flex-wrap gap-2 mb-10">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-150 min-h-[44px] ${
                filter === c.id
                  ? 'bg-accent text-white'
                  : 'bg-[#1A1A1A] text-zinc-400 border border-[#262626] hover:border-[#333] hover:text-white'
              }`}
            >
              {c.label}
              <span className="ml-2 text-[10px] opacity-60">{c.count}</span>
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16" key={expanded}>
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              {/* Card */}
              <div
                onClick={() => setExpanded(expanded === i ? null : i)}
                className={`card cursor-pointer transition-all duration-200 ${
                  expanded === i ? 'border-accent/50 ring-1 ring-accent/20' : 'hover:border-[#333]'
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl">{p.icon}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-semibold text-sm">{p.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.tags.map(t => (
                        <span key={t} className="text-[10px] font-mono text-accent bg-accent/10 rounded px-1.5 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-zinc-500 hover:text-white transition-colors shrink-0 mt-1"
                      aria-label={`Visit ${p.name}`}
                    >
                      ↗
                    </a>
                  )}
                </div>

                {/* Summary */}
                <p className="text-zinc-400 text-xs leading-relaxed mb-3">{p.summary}</p>

                {/* Expand toggle */}
                <button className="text-[10px] font-mono text-zinc-600 hover:text-accent transition-colors">
                  {expanded === i ? '▲ Less' : '▼ Case Study'}
                </button>

                {/* Expanded case study */}
                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pt-4 border-t border-[#262626] space-y-3 text-xs"
                  >
                    <div>
                      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-1">Problem</p>
                      <p className="text-zinc-400 leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-1">Solution</p>
                      <p className="text-zinc-300 leading-relaxed">{p.solution}</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-1">Result</p>
                      <p className="text-zinc-400 leading-relaxed">{p.result}</p>
                    </div>
                    {p.tech && (
                      <div>
                        <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mb-1">Tech Stack</p>
                        <div className="flex flex-wrap gap-1">
                          {p.tech.map(t => (
                            <span key={t} className="text-[10px] text-zinc-500 bg-[#0A0A0A] border border-[#262626] rounded px-2 py-0.5">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs !py-1.5 !px-3 inline-flex"
                      >
                        Visit Project ↗
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="border-t border-[#262626] py-8 px-6 text-center">
        <p className="text-zinc-600 text-xs font-mono">
          © {new Date().getFullYear()} Jerrison Chai · Kuala Lumpur, Malaysia
        </p>
      </footer>
    </>
  );
}

const projects = [
  {
    icon: '📈',
    name: 'Trading System v2.1.1',
    cat: 'data',
    tags: ['Node.js', 'Python', 'Yahoo API', 'Telegram'],
    summary: 'Daily MY/US stock scanner with 13 technical indicators, parallel backtesting, composite scoring, and Telegram alerts.',
    problem: 'Manual stock screening across 892+ tickers was slow and inconsistent. Needed a multi-source data pipeline that survives API failures.',
    solution: 'Built parallel scanner with Yahoo Direct API (primary) + Stooq (fallback) + stale cache. 13 indicators feed into a percentile composite score. 5 signal types trigger Buy alerts at score ≥50.',
    result: 'Fully automated daily scans for MY (5:30PM) and US (8:30PM ET). Mean Reversion strategy: 66.67% win rate / 1.8:1 R:R. MACD Cross: 75% win rate / 2.2:1 R:R.',
    tech: ['Node.js', 'Python 3.14', 'Yahoo Direct API', 'Stooq', 'Ollama', 'Telegram Bot', 'Cron', 'Task Scheduler'],
  },
  {
    icon: '🏛',
    name: 'Gym History Book',
    cat: 'web',
    tags: ['Next.js', 'TypeScript', 'framer-motion', 'Bilingual'],
    url: 'https://web-eight-pied-64.vercel.app',
    summary: 'Bilingual documentary website for the SGM morning exercise group — 16 routes, 7 chapters, 46 values, music player, dark/light mode.',
    problem: 'The group had decades of oral history, photos, and values with no digital home. Needed a bilingual (EN/ZH) web experience accessible on mobile.',
    solution: 'Built Next.js site with static content loading, language context, bottom nav for mobile, dark/light theme toggle, and music player with 3 spirit songs. 101 QC checks passed.',
    result: '16 fully bilingual pages. 7 core chapters + castells interlude. 46 values documented. 19 illustrations. 94% QC pass rate on first audit.',
    tech: ['Next.js 16', 'TypeScript', 'framer-motion', 'Tailwind v4', 'Markdown', 'Vercel'],
  },
  {
    icon: '📰',
    name: 'Morning Briefing Department',
    cat: 'automation',
    tags: ['Python', 'AI', 'Gmail SMTP', 'Cron'],
    summary: 'Automated daily newsletter pipeline: web scrape → AI research → copywriting → designed HTML email delivered at 6AM.',
    problem: 'Morning updates required manual research across multiple sources. Needed an automated pipeline delivering concise, designed briefings.',
    solution: 'Built 7-stage pipeline: 01-scrape → 02-research → 03-analysis → 04-report → 05-status → 06-copy → 07-email. Each stage produces markdown artifacts. Final HTML email uses professional design template.',
    result: 'Fully autonomous daily briefing. Web-scraped trends feed AI research. Copy passes through multiple editorial stages. Designed email delivered to inbox every 6AM.',
    tech: ['Python', 'aiolimiter', 'Gmail SMTP', 'Cron', 'Markdown', 'HTML Email'],
    url: null,
  },
  {
    icon: '🏪',
    name: 'UndisputedComics (金牌漫画)',
    cat: 'web',
    tags: ['Vanilla JS', 'Supabase', 'E-commerce', 'Admin'],
    summary: 'Complete Chinese comic bookstore — product catalog, cart, checkout, admin dashboard, and 12-slide investor pitch.',
    problem: 'Chinese comic book collectors needed an online storefront with Chinese-language support, inventory management, and order tracking — built entirely with vanilla JS.',
    solution: 'Built from scratch: product listing with search, favorites, cart, checkout flow, user auth, admin dashboard (products, orders, media, notifications, settings). 12-slide Apple-style PPT for investors.',
    result: '40+ JS modules across admin and frontend. Supabase PostgreSQL backend. 12-slide investor presentation ready. Full e-commerce architecture without frameworks.',
    tech: ['Vanilla JS', 'Supabase', 'PostgreSQL', 'CSS Modules', 'SVG', 'HTML5'],
    url: null,
  },
  {
    icon: '🎮',
    name: 'Game Hub (14 Games)',
    cat: 'web',
    tags: ['Vanilla JS', 'PWA', 'Capacitor APK', 'Offline'],
    summary: '14 web games — Klotski, Nail Gallery, Layer Merge, PixelCraft, and more. PWA with offline support and Android APK builds.',
    problem: 'Needed a unified game platform serving multiple HTML5 games with offline support and Android APK capability — from a single codebase.',
    solution: 'Built unified game hub at port 8799. Each game is a standalone PWA with service worker. Capacitor pipeline generates APK from web code. Unified serve_all_games.js manages all 14 game servers.',
    result: '14 games live. Service worker: network-first for HTML, cache-first for assets. APK generation pipeline functional. Auto-recovery on reboot via startup-recovery.ps1.',
    tech: ['Vanilla JS', 'PWA', 'Service Worker', 'Capacitor', 'Android APK', 'Node.js'],
    url: null,
  },
  {
    icon: '📡',
    name: 'Mission Control Dashboard',
    cat: 'ai',
    tags: ['HTML', 'CSS', '11 APIs', 'Real-time'],
    summary: 'Real-time monitoring dashboard for the OpenClaw AI ecosystem — glassmorphism design, token cost tracking, cron monitoring.',
    problem: 'No visibility into the OpenClaw AI system health. 18 cron jobs, 7 agents, multiple game servers — needed a central monitoring dashboard.',
    solution: 'Built Mission Control at port 18790 with 11 API endpoints. Real-time data polling. Glassmorphism cards with IntersectionObserver reveal animations. Token cost tracking with historical data.',
    result: 'System health visible at a glance. 11 API endpoints: system, agents, tasks, cron, activity, memory, signals, tokens, skills, workspace, WAL. 30s stale detection with live pulse indicator.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'Puppeteer'],
    url: null,
  },
  {
    icon: '🧠',
    name: 'OpenClaw AI Automation',
    cat: 'ai',
    tags: ['18 Cron Jobs', 'Telegram', 'Self-healing'],
    summary: 'Autonomous AI system running 18 scheduled jobs, 9 Telegram commands, Tier 1+2 sentry protocols, and self-healing recovery.',
    problem: 'Managing 6 side hustles required AI that could operate autonomously during 9-6 work hours and recover from failures without human intervention.',
    solution: 'Architected 18 cron jobs covering trading scans, personal growth newsletters, system evolution, market data, maintenance, and weekend tasks. Tier 1 Sentry (30min, Ollama local) + Tier 2 Quartermaster (4h, DeepSeek). Startup recovery system with dependency chain.',
    result: '100% autonomous operation during work hours. Self-healing: Gateway → Mission Control → Game servers auto-restart. Token budget: $1.07/mo for entire system. 37% of runs handled by free Ollama.',
    tech: ['OpenClaw', 'Ollama', 'DeepSeek', 'Telegram Bot', 'PowerShell', 'Node.js', 'Python'],
    url: null,
  },
  {
    icon: '🌱',
    name: 'Personal Growth Newsletter',
    cat: 'automation',
    tags: ['Python', 'AI', 'HTML Email', 'Midnight Cron'],
    summary: 'Daily personal development newsletter — 9 weighted topics, 3 deep-dives, professional HTML email with dark gradient design.',
    problem: 'Consistent personal growth requires daily practice but motivation fades without structure. Needed an automated daily learning system.',
    solution: 'Built Python-based newsletter generator running at midnight. 9 topics weighted by priority (Trading Psych=5, FIRE=4, etc.). 3 deep-dive sections + bonus card + 4-task execution list. Professional HTML email with dark gradient header.',
    result: 'Daily newsletter delivered at midnight. Content saved to knowledge/learn-YYYY-MM-DD.md for future reference. Full HTML email with responsive design across mobile and desktop.',
    tech: ['Python', 'Gmail SMTP', 'Cron', 'HTML Email', 'Markdown'],
    url: null,
  },
  {
    icon: '🎓',
    name: 'Exceljerr Education',
    cat: 'web',
    tags: ['Next.js', 'VBA', 'Templates', 'Landing'],
    url: 'https://exceljerr-landing.vercel.app',
    summary: 'VBA and Excel education landing page — product showcase for business professionals learning Excel automation.',
    problem: '700+ VBA templates and years of teaching knowledge had no public home. Needed a landing page to showcase courses and products.',
    solution: 'Built Next.js landing page with product cards, course listings, and professional design. Deployed to Vercel with custom subdomain.',
    result: 'Live landing page at excellejerr-landing.vercel.app. Products and courses showcased. Ready for content population when teaching materials are finalized.',
    tech: ['Next.js', 'React', 'Tailwind v4', 'framer-motion', 'Vercel'],
  },
  {
    icon: '🎵',
    name: 'LeapLoft Music',
    cat: 'web',
    tags: ['Next.js', 'Music Player', 'Lofi'],
    url: 'https://leaploft-landing.vercel.app',
    summary: 'Landing page for lofi music brand — "Beats for the Underdogs" with playlist showcase and music player.',
    problem: 'Lofi music brand needed a web presence to share releases, build audience, and eventually monetize streams.',
    solution: 'Built landing page with music player, playlist showcase, and artist branding. Clean dark theme matching the "underdog" vibe.',
    result: 'Live at leaploft-landing.vercel.app. Ready for music uploads and playlist management. Foundation for future music distribution pipeline.',
    tech: ['Next.js', 'React', 'Tailwind v4', 'framer-motion', 'Vercel'],
  },
  {
    icon: '🧩',
    name: 'LeBrain Games & Products',
    cat: 'web',
    tags: ['Next.js', 'Games', 'Storefront'],
    url: 'https://lebrain-landing.vercel.app',
    summary: 'Brain training and puzzle product landing page — games, puzzles, and cognitive products.',
    problem: 'Brain training games and products needed a centralized showcase. Multiple game projects scattered across different deployments.',
    solution: 'Unified landing page connecting all brain-training products. Clean product cards with pricing and descriptions.',
    result: 'Live at lebrain-landing.vercel.app. Games linked from the /play page. Ready to scale with additional products.',
    tech: ['Next.js', 'React', 'Tailwind v4', 'framer-motion', 'Vercel'],
  },
  {
    icon: '🔄',
    name: 'System Evolution Agent',
    cat: 'ai',
    tags: ['2AM Cron', 'GitHub Search', 'Auto-Install'],
    summary: 'Autonomous agent that scans projects, audits skills, searches GitHub, and installs tools — running daily at 2AM.',
    problem: 'The AI ecosystem needs constant improvement but manual research is time-consuming. Needed an autonomous system that finds and installs relevant tools.',
    solution: 'Built Python-based evolution agent. Scans 7 prioritized projects, audits all installed skills (SKILL.md + dir name), searches GitHub (50MB filter), installs up to 2 tools/day matching project gaps. Stale clone cleanup.',
    result: 'Fully autonomous improvement loop. Tiered acceptance: SKILL.md > README+package.json > README only. Daily evolution without human intervention.',
    tech: ['Python', 'GitHub API', 'Cron', 'Git', 'npm'],
    url: null,
  },
];
