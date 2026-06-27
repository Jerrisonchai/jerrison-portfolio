'use client';

import { motion } from 'framer-motion';
import { Nav } from './nav';
import { CountUp } from './count-up';

/* ── Animation Presets ── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const stagger = {
  container: { whileInView: 'show' as const, viewport: { once: true, margin: '-80px' } },
  item: { variants: { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } } },
};

export function Portfolio() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── HERO ─── */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className="section-label mb-4">VBA Automation Architect</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
              Jerrison Chai
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              12 years evolving from lab technician to multi-department automation lead.
              Built <span className="text-white font-medium">700+ VBA templates</span>,{' '}
              <span className="text-white font-medium">695K lines of code</span>, and a{' '}
              <span className="text-white font-medium">JARVIS Dashboard</span> that reduced daily operations from 20 minutes to 3.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/experience" className="btn-primary">View Experience</a>
              <a href="/jerrison-resume.pdf" className="btn-secondary">Download Resume ↓</a>
            </div>
          </motion.div>

          {/* Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#262626] rounded-xl overflow-hidden"
          >
            {heroMetrics.map((m) => (
              <div key={m.label} className="bg-[#121212] px-5 py-6 text-center">
                <div className="text-2xl md:text-3xl font-mono font-medium text-white mb-1">
                  <CountUp end={m.value} suffix={m.suffix} />
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-mono">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ─── SKILLS ─── */}
        <section id="skills" className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="section-label mb-2">What I Bring</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Skills</h2>
            <div className="section-divider mb-12" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills.map((s) => (
                <div key={s.cat} className="card group">
                  <div className="text-xl mb-2">{s.icon}</div>
                  <h3 className="text-white font-semibold text-sm mb-2">{s.cat}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.items}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── EXPERIENCE ─── */}
        <section id="experience" className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="section-label mb-2">Career Timeline</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Experience</h2>
            <div className="section-divider mb-12" />

            <div className="space-y-1 overflow-x-hidden">
              {experience.map((e, i) => (
                <motion.div
                  key={e.era}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
                  className="border-l-2 border-[#262626] hover:border-accent/50 pl-6 py-5 transition-colors duration-200"
                >
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="font-mono text-xs text-accent tracking-wider">{e.year}</span>
                    <h3 className="text-white font-semibold text-sm">{e.role}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{e.desc}</p>
                  {e.highlights && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {e.highlights.map((h: string) => (
                        <span key={h} className="text-[10px] font-mono text-zinc-500 bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── ACHIEVEMENTS ─── */}
        <section className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="section-label mb-2">Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Key Achievements</h2>
            <div className="section-divider mb-12" />

            <div className="grid sm:grid-cols-2 gap-3">
              {achievements.map((a) => (
                <div key={a.title} className="card group">
                  <div className="font-mono text-2xl font-medium text-accent mb-2">{a.metric}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{a.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── PROJECTS ─── */}
        <section id="projects" className="py-20 md:py-28 px-6 max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="section-label mb-2">Built With AI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">AI Portfolio</h2>
            <div className="section-divider mb-4" />
            <p className="text-zinc-500 text-sm mb-10">Projects designed, architected, and deployed with AI collaboration using OpenClaw.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {projects.map((p) => (
                <a
                  key={p.name}
                  href={p.url || '#'}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noopener noreferrer' : undefined}
                  className="card group block"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xl">{p.icon}</span>
                    <div className="min-w-0">
                      <h3 className="text-white font-semibold text-sm truncate">{p.name}</h3>
                      <p className="text-[10px] font-mono text-accent mt-0.5">{p.tags}</p>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="py-20 md:py-28 px-6 max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="section-label mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Contact</h2>
            <div className="section-divider mb-8 mx-auto" />
            <p className="text-zinc-400 text-sm mb-8 max-w-md mx-auto">
              Open to opportunities in VBA automation, business analysis, and process improvement.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:jerrisonchai@gmail.com" className="btn-secondary text-sm">
                jerrisonchai@gmail.com
              </a>
              <a href="https://github.com/Jerrisonchai" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                GitHub ↗
              </a>
              <a href="/jerrison-resume.pdf" className="btn-primary text-sm">
                📄 Resume PDF
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-[#262626] py-8 px-6 text-center">
        <p className="text-zinc-600 text-xs font-mono">
          © {new Date().getFullYear()} Jerrison Chai · Kuala Lumpur, Malaysia
        </p>
      </footer>
    </>
  );
}

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const heroMetrics = [
  { value: 4100, suffix: '+', label: 'VBA Hours' },
  { value: 700, suffix: '+', label: 'Templates' },
  { value: 695, suffix: 'K', label: 'LoC' },
  { value: 48, suffix: '+', label: 'Releases' },
];

const skills = [
  { icon: '⚙️', cat: 'VBA & Excel Automation', items: 'Macros, VBS, BAT, PowerShell, JARVIS Dashboard. 700+ templates, process automation, version control, 21CFR compliance.' },
  { icon: '🖥️', cat: 'Web Development', items: 'TypeScript, JavaScript, Next.js, React, Tailwind CSS, framer-motion, HTML/CSS. 5 dynamic product search webpages built.' },
  { icon: '🐍', cat: 'Python & Data', items: 'Pandas, Playwright, web scraping (Puppeteer, aiolimiter), Power Query, PowerBI, Tableau, MySQL.' },
  { icon: '🤖', cat: 'AI & LLM Operations', items: 'OpenClaw agentic workflow, Ollama local models, DeepSeek, ChatGPT. 12+ AI-assisted projects built and deployed.' },
  { icon: '📊', cat: 'Data Analysis & Reporting', items: 'Pivot tables, sales dashboards, Power Query, HTML reporting, LIS data-mapping, SharePoint.' },
  { icon: '☁️', cat: 'DevOps & Tools', items: 'Git, GitHub, Docker, Vercel, Task Scheduler, OneDrive, Outlook automation, SAP.' },
  { icon: '👥', cat: 'Team Leadership', items: 'Managed subordinate (Gino), trained lab staff, cross-department collaboration with 6 departments.' },
  { icon: '📋', cat: 'Documentation & Quality', items: 'SOPs, version release protocol, 21CFR compliance, training records, numbered document system.' },
  { icon: '🌐', cat: 'Languages', items: 'English (professional), Chinese (native/bilingual). Built bilingual websites, translated marketing content.' },
];

const experience = [
  {
    era: '2024–Present',
    year: '2024',
    role: 'VBA Business Analyst — Shuei Trading',
    desc: 'Built JARVIS Dashboard (VBS-PS1-BAT-HTML): one-click automation reducing daily operations from 20 minutes to 3. Automated email drafting (OneDrive → VBS → Outlook) and PO Approval WatchFolder. Led INV team with 727+ active templates, 695K lines of code. Built Supplier Comparison system handling 100+ non-standardized supplier files. Developed Lazada/Shopee/Zalora/Qoo10/eBay monthly report templates. 48 version releases. Averaged 80%+ VBA time allocation (3,348 hours across 2 years).',
    highlights: ['JARVIS Dashboard', '48 Releases', '20min→3min', '3,348 hrs'],
  },
  {
    era: '2020–2023',
    year: '2020',
    role: 'LIS Project Manager & Marketing Assistant Manager',
    desc: 'Led Laboratory Information System project: 20 report customizations, 7,570 lines of code. Built 5 dynamic product search webpages (11,000 lines JS). Generated RM26K revenue from Chinese digital marketing campaign. Managed 150,000 COVID samples with live-forecast Excel system. Reduced Customer Care workload by 50% via VBA automation.',
    highlights: ['RM26K Revenue', '150K Samples', 'LIS Project', '11K LoC JS'],
  },
  {
    era: '2016–2019',
    year: '2016',
    role: 'Lab Executive → Lab Assistant Manager',
    desc: 'Migrated NIPT testing platform (validation + inter-lab parallel test). First VBA automation: reduced clerical mistakes, automated Manager KPI report from 2 days to 3 hours. Trained staff promoted from Junior to Senior Executive. Managed lab water system, ISO documentation.',
    highlights: ['Platform Migration', '2 days→3hrs', 'Staff Training', 'ISO Docs'],
  },
  {
    era: '2014–2015',
    year: '2014',
    role: 'Editorial Assistant → Customer Service → Junior Lab Executive',
    desc: 'Started career at SGM Publication Department, then DNA Labs: Customer Service & Internal Process Executive → Junior Lab Executive (General Screening & Molecular Lab) → Lab Executive (NGS Lab).',
    highlights: ['4 Roles in 2 Years', 'NGO + Corporate'],
  },
];

const achievements = [
  { metric: '20min → 3min', title: 'Daily Operations Automation', desc: 'Built JARVIS Dashboard (VBS-PS1-BAT-HTML) transforming multi-step daily tasks into one-click execution for the INV team.' },
  { metric: '50%', title: 'Workload Reduction', desc: 'Customer Care & Lab Service reporting automated with 3,300+ lines of VBA, integrating LIS and shared server.' },
  { metric: '2 days → 3 hrs', title: 'KPI Report Automation', desc: 'Replaced manual Manager KPI reporting with Excel templates, saving 13+ hours per report cycle.' },
  { metric: 'RM26,000', title: 'Digital Marketing Revenue', desc: '6-month targeted Chinese campaign. Translated assets, measured converted clicks and views.' },
  { metric: '150,000', title: 'COVID Samples Managed', desc: 'Built live-forecast system regulating lab workload, setting cut-offs, and providing real-time Excel lists to Sales.' },
  { metric: '700+', title: 'VBA Templates Built', desc: 'Active templates maintained across 6 departments: Finance, Purchasing, E-commerce, Inventory, Lab, and Operations.' },
  { metric: '695K', title: 'Lines of VBA Code', desc: 'Accumulated in active production as of 2026. All code version-controlled with documented release protocol.' },
  { metric: '48+', title: 'Version Releases', desc: 'Formal numbered releases with SOPs, training documentation, and Quality assurance checklists since 2024.' },
];

const projects = [
  { icon: '📈', name: 'Trading System v2.1.1', tags: 'Node.js · Python · Yahoo API · Telegram', url: null,
    desc: 'Daily MY/US stock scanner with 13 indicators, parallel backtesting, composite scoring, Telegram alerts.' },
  { icon: '🏛', name: 'Gym History Book', tags: 'Next.js · TypeScript · framer-motion', url: 'https://web-eight-pied-64.vercel.app',
    desc: 'Bilingual documentary website: 16 routes, 7 chapters, 46 values, music player, dark/light mode.' },
  { icon: '📰', name: 'Morning Briefing Department', tags: 'Python · AI · Gmail SMTP · Cron', url: null,
    desc: 'Automated daily newsletter pipeline: web scrape → AI research → copy → HTML email with charts.' },
  { icon: '🏪', name: 'UndisputedComics (金牌漫画)', tags: 'Vanilla JS · Supabase · E-commerce', url: null,
    desc: 'Chinese comic bookstore: catalog, cart, checkout, admin dashboard, 12-slide investor pitch.' },
  { icon: '🎮', name: 'Game Hub (14 Games)', tags: 'Vanilla JS · PWA · Capacitor APK', url: null,
    desc: '14 web games including Klotski, Nail Gallery, Layer Merge. PWA with offline support, APK builds.' },
  { icon: '📡', name: 'Mission Control Dashboard', tags: 'HTML · CSS · 11 API Endpoints', url: null,
    desc: 'Real-time monitoring: glassmorphism design, token cost tracking, cron monitoring, self-healing.' },
  { icon: '🧠', name: 'OpenClaw AI Automation', tags: '18 Cron Jobs · Telegram · Self-healing', url: null,
    desc: 'Autonomous AI system: 18 scheduled jobs, 9 Telegram commands, Tier 1+2 sentry protocol.' },
  { icon: '🌱', name: 'Personal Growth Newsletter', tags: 'Python · AI · HTML Email', url: null,
    desc: 'Daily personal development newsletter: 9 topics, 3 deep-dives, professional HTML email design.' },
  { icon: '🎓', name: 'Exceljerr Education', tags: 'Next.js · VBA · Templates', url: 'https://exceljerr-landing.vercel.app',
    desc: 'VBA/Excel education landing page for business professionals learning Excel automation.' },
];
