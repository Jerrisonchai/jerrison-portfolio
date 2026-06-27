'use client';

import { motion } from 'framer-motion';

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.5 } };

export function Portfolio() {
  return (
    <main>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white font-semibold text-sm tracking-wide">JC</span>
          <div className="flex gap-6 text-sm">
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-slate-400 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-blue-400 font-mono text-sm mb-4">Hello, I&apos;m</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Jerrison Chai
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            VBA Business Analyst &amp; Full-Stack Developer — building systems that automate workflows, analyze markets, and ship products.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium">Kuala Lumpur, MY</span>
            <span className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium">15+ Years Experience</span>
            <a href="/jerrison-resume.pdf" className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors">Download Resume ↓</a>
          </div>
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">What I Bring</p>
          <h2 className="text-3xl font-bold text-white mb-4">Skills &amp; Expertise</h2>
          <div className="section-divider mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div key={s.cat} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{s.cat}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.items}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">Built With AI</p>
          <h2 className="text-3xl font-bold text-white mb-4">Notable Projects</h2>
          <div className="section-divider mb-12" />
          <p className="text-slate-400 text-sm mb-8">All projects designed, architected, and deployed with AI assistance using OpenClaw (agentic workflow).</p>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <a key={i} href={p.url || '#'} target={p.url ? '_blank' : undefined} rel={p.url ? 'noopener' : undefined}
                className="project-card bg-slate-900/50 border border-slate-800 rounded-xl p-5 transition-all duration-200 block">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{p.name}</h3>
                    <p className="text-blue-400 text-xs font-mono">{p.tags}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp}>
          <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">Career Timeline</p>
          <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
          <div className="section-divider mb-12" />

          <div className="space-y-6">
            {experience.map((e) => (
              <div key={e.role} className="border-l-2 border-slate-800 pl-5 hover:border-blue-500/50 transition-colors">
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <h3 className="text-white font-semibold">{e.role}</h3>
                  <span className="text-blue-400 text-xs font-mono">{e.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">{e.company}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div {...fadeUp}>
          <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
          <div className="section-divider mb-8 mx-auto" />
          <p className="text-slate-400 mb-6">Open to new opportunities. Let&apos;s build something great together.</p>
          <div className="flex justify-center gap-4 flex-wrap text-sm">
            <a href="mailto:jerrisonchai@gmail.com" className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white hover:border-blue-500/50 transition-colors">
              jerrisonchai@gmail.com
            </a>
            <a href="https://github.com/Jerrisonchai" target="_blank" rel="noopener" className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white hover:border-blue-500/50 transition-colors">
              GitHub ↗
            </a>
            <a href="/jerrison-resume.pdf" className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors">
              📄 Resume PDF
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-xs">
        <p>© {new Date().getFullYear()} Jerrison Chai · Built with Next.js · Deployed on Vercel</p>
      </footer>
    </main>
  );
}

// ── DATA ──

const skills = [
  { icon: '📊', cat: 'VBA & Excel', items: 'Macros, Power Query, automated reporting, 3 years as Business Analyst' },
  { icon: '🖥️', cat: 'TypeScript / JavaScript', items: 'Expert — 75K+ JS, 18K+ TS files. Node.js, Next.js, React' },
  { icon: '🐍', cat: 'Python', items: 'Pandas, NumPy, Selenium, Playwright, data pipelines, web scraping' },
  { icon: '🤖', cat: 'AI & LLM Operations', items: 'Ollama local models, DeepSeek API, agentic workflow (OpenClaw)' },
  { icon: '📈', cat: 'Trading Systems', items: 'Technical analysis, backtesting, multi-source data pipelines' },
  { icon: '🎨', cat: 'Design & UX', items: 'Tailwind CSS v4, framer-motion, SVG illustrations, Figma-like specs' },
  { icon: '☁️', cat: 'DevOps & Deployment', items: 'Docker, Git, Vercel, GitHub Actions, Task Scheduler, cron' },
  { icon: '📱', cat: 'Mobile Development', items: 'Android SDK, Gradle, Capacitor, Material Design 3, PWAs' },
  { icon: '🗄️', cat: 'Databases & Supabase', items: 'SQL, PostgreSQL, Supabase, data modeling, migration scripts' },
];

const projects = [
  { icon: '📈', name: 'Trading System v2.1.1', tags: 'Node.js · Python · Yahoo API · Telegram', url: null,
    desc: 'Daily MY/US stock scanner with 13 technical indicators, percentile composite scoring, parallel backtesting, and Telegram alerts. Multi-source data pipeline with fallback layers.' },
  { icon: '🏛', name: 'Gym History Book', tags: 'Next.js · TypeScript · framer-motion · Vercel', url: 'https://web-eight-pied-64.vercel.app',
    desc: 'Bilingual (Chinese/English) interactive documentary website — 16 SSG routes, 7 chapter pages, glossary, 46 core values, Castells comparison, dark/light mode, spirit music player.' },
  { icon: '📰', name: 'Morning Briefing Department', tags: 'Python · AI · Gmail SMTP · Cron', url: null,
    desc: 'Automated daily newsletter pipeline: web scrape → AI research → copy → HTML email with bar charts. Full newspaper department architecture with 6-stage pipeline and cutoff logic.' },
  { icon: '🏪', name: 'UndisputedComics (金牌漫画)', tags: 'Vanilla JS · CSS · Supabase · E-commerce', url: null,
    desc: 'Full-featured Chinese comic bookstore — product catalog, cart, checkout, admin dashboard, multi-variant products, role-based auth, 12-slide Apple-style investor pitch deck.' },
  { icon: '🎮', name: 'Game Hub (14 Games)', tags: 'Vanilla JS · PWA · Capacitor APK', url: 'http://localhost:8799',
    desc: 'Collection of 14 web games including Klotski, Nail Gallery, Layer Merge, PixelCraft, FractalVoyager. PWA with offline support, APK builds via Capacitor. Self-healing server auto-recovery.' },
  { icon: '💻', name: 'NexusForge Web Framework', tags: 'Node.js · TypeScript · Protocol-driven', url: null,
    desc: 'Internal web development protocol and framework — standardized design pipeline (Skill → DESIGN.md → framer-motion), 18+ output websites deployed.' },
  { icon: '🎓', name: 'Exceljerr Education Platform', tags: 'Next.js · VBA · Templates · Courses', url: 'https://exceljerr-landing.vercel.app',
    desc: 'VBA/Excel education landing page — course syllabus, video templates, downloadable resources for business professionals learning Excel automation.' },
  { icon: '📡', name: 'Mission Control Dashboard', tags: 'HTML · CSS · 11 API Endpoints', url: 'http://localhost:18790',
    desc: 'Real-time monitoring dashboard — 11 REST API endpoints, glassmorphism design, token cost tracking, cron job monitoring, system health with self-healing detection.' },
  { icon: '🧠', name: 'OpenClaw AI Automation', tags: '18 Cron Jobs · Telegram · Self-healing', url: null,
    desc: 'Fully autonomous AI agent system — 18 scheduled jobs (trading, newsletters, system evolution), 9 Telegram commands, Tier 1+2 sentry protocol, startup recovery, zero-human-needed operation.' },
  { icon: '🌱', name: 'Personal Growth Newsletter', tags: 'Python · AI · HTML Email', url: null,
    desc: 'Automated daily personal development newsletter — 9 weighted life topics, 3 deep-dives, bite-sized learning cards, 4-task execution list, professional HTML email design.' },
  { icon: '🎵', name: 'LeapLoft Music Platform', tags: 'Landing Page · Lofi Brand', url: 'https://leaploft-landing.vercel.app',
    desc: 'Music/lofi brand landing page — beats for the underdogs. Ocean/deep ASMR, cultural themes (CNY, Raya, Merdeka). Ready for music releases.' },
  { icon: '🎯', name: 'LeBrain Games Platform', tags: 'Landing Page · Brain Training', url: 'https://lebrain-landing.vercel.app',
    desc: 'Brain training games product landing — Conway Life, Klotski, Nail Gallery presented as priced digital products with benefits and purchase flow.' },
];

const experience = [
  { role: 'VBA Business Analyst', company: 'Current Employer', period: '2023–Present',
    desc: 'Excel/VBA automation, Power Query, business reporting, process optimization. Managing data systems and reporting pipelines for business operations.' },
  { role: 'Full-Stack Developer (Freelance)', company: 'Self-employed', period: '2020–Present',
    desc: 'Building web applications, e-commerce, games, and automation tools. 18+ deployed websites, 14 games, AI-powered trading and newsletter systems.' },
  { role: 'Digital Marketing & IT Lead', company: 'Previous Roles', period: '2008–2020',
    desc: 'Digital marketing strategy, IT infrastructure management, business development. Led cross-functional teams across technology, marketing, and operations.' },
];
