'use client';

import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="section-label mb-2">Technical Capabilities</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Skills & Tools</h1>
          <div className="section-divider mb-4" />
          <p className="text-zinc-500 text-sm mb-10">12 years of accumulated technical expertise across automation, development, and data.</p>
        </motion.div>

        {/* Core Competency */}
        <motion.section {...fadeUp} className="mb-16">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-accent rounded-full" />
            Core Competency
          </h2>
          <div className="space-y-4">
            {coreSkills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white text-sm font-medium">{s.name}</span>
                  <span className="text-[10px] font-mono text-zinc-500">{s.years}</span>
                </div>
                <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
                <p className="text-zinc-500 text-xs mt-1.5 pl-0.5">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat) => (
            <motion.section key={cat.title} {...fadeUp}>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-base">{cat.icon}</span>
                {cat.title}
              </h2>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-zinc-300 text-xs">{item.name}</span>
                      <span className="text-[10px] font-mono text-accent">{item.level}</span>
                    </div>
                    <div className="h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white/20 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.section {...fadeUp} className="mb-16">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-accent rounded-full" />
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-zinc-400 bg-[#121212] border border-[#262626] rounded-lg px-3 py-2 hover:border-accent/30 hover:text-white transition-colors duration-150"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section {...fadeUp}>
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-accent rounded-full" />
            Languages
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {languages.map((l) => (
              <div key={l.name} className="card text-center">
                <div className="text-2xl mb-2">{l.flag}</div>
                <h3 className="text-white font-semibold text-sm mb-1">{l.name}</h3>
                <p className="text-zinc-500 text-xs">{l.level}</p>
                <p className="text-zinc-600 text-[10px] mt-1">{l.context}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[#262626] py-8 px-6 text-center">
        <p className="text-zinc-600 text-xs font-mono">
          © {new Date().getFullYear()} Jerrison Chai · Kuala Lumpur, Malaysia
        </p>
      </footer>
    </>
  );
}

/* ── Core Competency (horizontal bars) ── */
const coreSkills = [
  { name: 'VBA Automation (Excel)', level: 98, years: '12 years', desc: 'Macros, templates, user forms, class modules, VBS, BAT, PowerShell integration. 700+ production templates across 6 departments.' },
  { name: 'Business Process Analysis', level: 95, years: '10 years', desc: 'Workflow optimization, requirement gathering, cross-department process mapping, SOP documentation, 21CFR compliance.' },
  { name: 'Web Development', level: 75, years: '6 years', desc: 'TypeScript, JavaScript, Next.js, React, Tailwind CSS, framer-motion. 5 dynamic search pages (11K LoC JS). Multiple AI-built projects.' },
  { name: 'Python & Data', level: 70, years: '4 years', desc: 'Pandas, Playwright, web scraping, data analysis, Power Query, PowerBI, HTML reporting, MySQL.' },
  { name: 'AI & LLM Operations', level: 65, years: '2 years', desc: 'OpenClaw agentic workflow, Ollama local models, DeepSeek, prompt engineering, 12+ AI-assisted projects.' },
  { name: 'Team Leadership', level: 60, years: '3 years', desc: 'Managed 1 subordinate (Gino, 2026). Cross-department collaboration. Trained staff promoted from Junior to Senior Executive.' },
];

/* ── Category skills ── */
const skillCategories = [
  {
    icon: '⚙️',
    title: 'Automation & Scripting',
    items: [
      { name: 'VBA (Excel)', level: 'Expert', pct: 100 },
      { name: 'VBScript (.vbs)', level: 'Advanced', pct: 85 },
      { name: 'Batch (.bat)', level: 'Advanced', pct: 80 },
      { name: 'PowerShell', level: 'Proficient', pct: 70 },
      { name: 'Excel Power Query', level: 'Advanced', pct: 85 },
      { name: 'Task Scheduler', level: 'Proficient', pct: 75 },
      { name: 'Outlook Automation', level: 'Advanced', pct: 85 },
    ],
  },
  {
    icon: '📊',
    title: 'Data & Reporting',
    items: [
      { name: 'Pivot Tables', level: 'Expert', pct: 95 },
      { name: 'Power Query (M)', level: 'Advanced', pct: 85 },
      { name: 'HTML Reporting', level: 'Proficient', pct: 75 },
      { name: 'PowerBI', level: 'Intermediate', pct: 60 },
      { name: 'Tableau', level: 'Intermediate', pct: 55 },
      { name: 'MySQL', level: 'Intermediate', pct: 60 },
      { name: 'Pandas (Python)', level: 'Proficient', pct: 70 },
    ],
  },
  {
    icon: '🖥️',
    title: 'Web & Frontend',
    items: [
      { name: 'TypeScript/JavaScript', level: 'Expert', pct: 90 },
      { name: 'Next.js / React', level: 'Proficient', pct: 75 },
      { name: 'Tailwind CSS v4', level: 'Proficient', pct: 80 },
      { name: 'HTML5 / CSS3', level: 'Advanced', pct: 85 },
      { name: 'framer-motion', level: 'Proficient', pct: 70 },
      { name: 'Node.js', level: 'Proficient', pct: 75 },
    ],
  },
  {
    icon: '☁️',
    title: 'DevOps & Infrastructure',
    items: [
      { name: 'Git / GitHub', level: 'Proficient', pct: 80 },
      { name: 'Vercel Deployment', level: 'Proficient', pct: 75 },
      { name: 'Docker', level: 'Intermediate', pct: 55 },
      { name: 'SharePoint', level: 'Advanced', pct: 80 },
      { name: 'OneDrive', level: 'Expert', pct: 90 },
      { name: 'SAP (basic)', level: 'Beginner', pct: 30 },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Automation Platforms',
    items: [
      { name: 'OpenClaw', level: 'Advanced', pct: 85 },
      { name: 'Ollama (local LLMs)', level: 'Advanced', pct: 80 },
      { name: 'DeepSeek API', level: 'Proficient', pct: 75 },
      { name: 'Prompt Engineering', level: 'Advanced', pct: 85 },
      { name: 'Cron/Task Scheduling', level: 'Advanced', pct: 85 },
      { name: 'Telegram Bot API', level: 'Proficient', pct: 75 },
    ],
  },
  {
    icon: '📋',
    title: 'Business & Quality',
    items: [
      { name: 'SOP Documentation', level: 'Expert', pct: 95 },
      { name: '21CFR Compliance', level: 'Advanced', pct: 85 },
      { name: 'Version Control (docs)', level: 'Expert', pct: 90 },
      { name: 'Training & Mentoring', level: 'Proficient', pct: 75 },
      { name: 'Cross-dept Communication', level: 'Expert', pct: 90 },
      { name: 'Requirements Gathering', level: 'Advanced', pct: 85 },
    ],
  },
];

/* ── Tools ── */
const tools = [
  'Microsoft Excel', 'VBA IDE', 'Visual Studio Code', 'Notepad++', 'Git', 'GitHub',
  'GitHub Desktop', 'OneDrive', 'SharePoint', 'Outlook', 'SAP', 'Power Automate',
  'PowerShell ISE', 'Task Scheduler', 'Docker Desktop', 'Windows Terminal',
  'Vercel CLI', 'Node.js', 'npm', 'pnpm', 'Ollama', 'OpenClaw Gateway',
  'Supabase', 'Android Studio', 'Tableau', 'PowerBI', 'MySQL Workbench',
  'Playwright', 'Puppeteer', 'Brave Browser', 'Telegram',
];

/* ── Languages ── */
const languages = [
  { flag: '🇬🇧', name: 'English', level: 'Professional working', context: 'Business, documentation, technical writing, bilingual websites' },
  { flag: '🇨🇳', name: 'Chinese (中文)', level: 'Native / Bilingual', context: 'Marketing translation, bilingual content, documentation' },
  { flag: '🇲🇾', name: 'Bahasa Malaysia', level: 'Conversational', context: 'Local communication, basic workplace usage' },
];
