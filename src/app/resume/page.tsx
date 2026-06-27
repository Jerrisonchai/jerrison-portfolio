'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';

type SectionKey = 'summary' | 'skills' | 'experience' | 'achievements' | 'education' | 'contact';
type Sections = Record<SectionKey, boolean>;

const defaultSections: Sections = {
  summary: true,
  skills: true,
  experience: true,
  achievements: true,
  education: true,
  contact: true,
};

export default function ResumePage() {
  const [sections, setSections] = useState<Sections>(defaultSections);
  const [atsMode, setAtsMode] = useState(false);

  const toggle = (key: SectionKey) => setSections(prev => ({ ...prev, [key]: !prev[key] }));

  const sectionCount = Object.values(sections).filter(Boolean).length;

  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 px-6">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="section-label mb-2">Interactive Resume</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">Resume Builder</h1>
            <p className="text-zinc-500 text-sm">Toggle sections, then print or export.</p>
          </motion.div>
        </div>

        {atsMode ? (
          /* ─── ATS PLAIN TEXT ─── */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto"
          >
            <pre className="text-zinc-400 text-sm font-mono leading-relaxed whitespace-pre-wrap bg-[#121212] border border-[#262626] rounded-xl p-8 overflow-x-auto">
{atsText}
            </pre>
          </motion.div>
        ) : (
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
            {/* Controls Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-56 shrink-0 space-y-4"
            >
              <div className="card space-y-3">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Sections ({sectionCount}/6)</p>
                {controls.map(c => (
                  <label key={c.key} className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
                    <input
                      type="checkbox"
                      checked={sections[c.key]}
                      onChange={() => toggle(c.key)}
                      className="accent-accent w-4 h-4"
                    />
                    <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{c.label}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-2">
                <button onClick={() => window.print()} className="btn-primary w-full justify-center text-xs">
                  🖨 Print / Save PDF
                </button>
                <button onClick={() => setAtsMode(true)} className="btn-secondary w-full justify-center text-xs">
                  📋 ATS Text Version
                </button>
              </div>

              <p className="text-[10px] text-zinc-600 text-center">
                Print → Save as PDF (Chrome/Edge: Margins None, Background Graphics ON)
              </p>
            </motion.aside>

            {/* Resume Preview */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex-1 min-w-0"
            >
              <div id="resume-print" className="resume-page">
                {/* Contact Header */}
                {sections.contact && (
                  <div className="text-center mb-8 pb-6 border-b border-[#262626]">
                    <h2 className="text-2xl font-bold text-white mb-1">Jerrison Chai</h2>
                    <p className="text-zinc-400 text-sm">
                      Kuala Lumpur, Malaysia · jerrisonchai@gmail.com · github.com/Jerrisonchai
                    </p>
                    <p className="text-zinc-500 text-xs mt-1">VBA Automation Architect · Full-Stack Developer</p>
                  </div>
                )}

                {/* Summary */}
                {sections.summary && <ResumeSection title="Professional Summary" icon="📋">{summary}</ResumeSection>}

                {/* Skills */}
                {sections.skills && (
                  <ResumeSection title="Technical Skills" icon="⚙️">
                    <div className="space-y-2">
                      {skillGroups.map(g => (
                        <div key={g.cat}>
                          <span className="text-white text-xs font-semibold">{g.cat}:</span>{' '}
                          <span className="text-zinc-400 text-xs">{g.items}</span>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                )}

                {/* Experience */}
                {sections.experience && (
                  <ResumeSection title="Professional Experience" icon="💼">
                    <div className="space-y-5">
                      {experience.map(e => (
                        <div key={e.role}>
                          <div className="flex justify-between items-baseline flex-wrap gap-2 mb-1">
                            <span className="text-white text-sm font-semibold">{e.role}</span>
                            <span className="text-zinc-500 text-xs font-mono">{e.period}</span>
                          </div>
                          <p className="text-zinc-500 text-xs mb-2">{e.company}</p>
                          <ul className="space-y-1">
                            {e.bullets.map(b => (
                              <li key={b} className="text-zinc-400 text-xs leading-relaxed flex items-start gap-1.5">
                                <span className="text-accent shrink-0 mt-0.5">▸</span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                )}

                {/* Achievements */}
                {sections.achievements && (
                  <ResumeSection title="Key Achievements" icon="🏆">
                    <div className="space-y-2">
                      {achievements.map(a => (
                        <div key={a.metric} className="flex items-start gap-3">
                          <span className="font-mono text-sm font-medium text-accent shrink-0 w-20 text-right">{a.metric}</span>
                          <div>
                            <p className="text-white text-xs font-semibold">{a.title}</p>
                            <p className="text-zinc-500 text-xs">{a.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ResumeSection>
                )}

                {/* Education */}
                {sections.education && (
                  <ResumeSection title="Education & Languages" icon="🎓">
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs text-zinc-400">
                      <span>🇲🇾 Diploma — Kuala Lumpur</span>
                      <span>🇬🇧 English (Professional working)</span>
                      <span>🇨🇳 Chinese (Native / Bilingual)</span>
                      <span>🇲🇾 Bahasa Malaysia (Conversational)</span>
                    </div>
                  </ResumeSection>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {atsMode && (
          <div className="max-w-5xl mx-auto mt-6">
            <button onClick={() => setAtsMode(false)} className="btn-secondary text-xs">
              ← Back to Resume Builder
            </button>
          </div>
        )}
      </main>

      {/* Print-only styles */}
      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          #resume-print, #resume-print * { visibility: visible; }
          #resume-print {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0.4in 0.5in;
            color: #111 !important;
            background: #fff !important;
            font-size: 10pt;
            line-height: 1.5;
          }
          #resume-print h2, #resume-print h3 { color: #111 !important; }
          #resume-print p, #resume-print li, #resume-print span { color: #333 !important; }
          #resume-print .text-accent { color: #2563eb !important; }
          #resume-print .border-b { border-color: #ddd !important; }
          nav, aside, footer, button, .btn-primary, .btn-secondary { display: none !important; }
          @page { margin: 0.3in; size: A4; }
        }
      `}</style>

      <footer className="border-t border-[#262626] py-8 px-6 text-center">
        <p className="text-zinc-600 text-xs font-mono">
          © {new Date().getFullYear()} Jerrison Chai · Kuala Lumpur, Malaysia
        </p>
      </footer>
    </>
  );
}

function ResumeSection({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="mb-6 pb-6 border-b border-[#262626] last:border-b-0">
      <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      {children}
    </section>
  );
}

/* ═══════════════════════════════════════════
   DATA — Concise, 1-2 page focused
   ═══════════════════════════════════════════ */

const summary = (
  <p className="text-zinc-400 text-xs leading-relaxed">
    VBA Automation Architect with 12 years evolving from lab technician to multi-department automation lead.
    Built 700+ VBA templates across 6 departments, developed the JARVIS Dashboard reducing daily operations from 20
    minutes to 3, and accumulated 695K lines of production code. 48 formal version releases with full SOP documentation.
    Currently a VBA Business Analyst at Shuei Trading, simultaneously building AI-powered side projects with OpenClaw.
  </p>
);

const skillGroups = [
  { cat: 'Automation', items: 'VBA (12 yrs), VBS, BAT, PowerShell, Power Query, Task Scheduler, Outlook automation. 700+ templates, 48 releases.' },
  { cat: 'Web & Frontend', items: 'TypeScript / JavaScript (expert), Next.js, React, Tailwind CSS v4, framer-motion, HTML5, CSS3, Node.js.' },
  { cat: 'Python & Data', items: 'Pandas, Playwright, web scraping, PowerBI, Tableau, MySQL, data pipelines, HTML reporting.' },
  { cat: 'AI & DevOps', items: 'OpenClaw agentic AI, Ollama local LLMs, DeepSeek API, 12+ AI-built projects, Git, Docker, Vercel, Supabase.' },
  { cat: 'Business', items: 'SOP documentation, 21CFR compliance, requirements gathering, cross-department collaboration, team leadership.' },
];

const experience = [
  {
    role: 'VBA Business Analyst',
    period: '2024 – Present',
    company: 'Shuei Trading Sdn Bhd',
    bullets: [
      'Built JARVIS Dashboard (VBS-PS1-BAT-HTML) — one-click automation reducing daily operations from 20 minutes to 3.',
      'Automated email drafting pipeline: OneDrive → VBS → Outlook. Implemented PO Approval WatchFolder.',
      'Led INV team with 727+ active templates, 695K lines of code. Cross-department service: 5 teams.',
      'Built Supplier Comparison System processing 100+ non-standardized supplier Excel files.',
      'Developed e-commerce monthly reports: Lazada, Shopee, Zalora, Qoo10, eBay. 48 version releases.',
      'Averaged 80%+ VBA time allocation: 3,348 hours across 2 years.',
    ],
  },
  {
    role: 'LIS Project Manager & Lab Assistant Manager',
    period: '2016 – 2023',
    company: 'DNA LABS SDN BHD',
    bullets: [
      'First VBA automation: reduced Manager KPI report from 2 days to 3 hours. Reduced Customer Care workload by 50%.',
      'Led LIS project: 20 report customizations, 7,570 lines of code. Built 5 product search webpages (11K LoC JS).',
      'COVID-19: managed 150,000 samples with live-forecast system. RM26K revenue from Chinese marketing campaign.',
      'Platform migration (NIPT), ISO documentation, staff training. Promoted from Lab Executive to Assistant Manager.',
    ],
  },
];

const achievements = [
  { metric: '12 yrs / 2 co', title: 'Deep Organizational Impact', desc: 'Evolved through 8 roles across 2 companies — deep institutional knowledge of lab + trading operations.' },
  { metric: '20min → 3min', title: 'JARVIS Dashboard', desc: 'Multi-technology automation system. One-click daily operations for entire INV team.' },
  { metric: '695K', title: 'Lines of Production Code', desc: 'Accumulated in active VBA templates. All version-controlled with release protocol.' },
  { metric: '1,879', title: 'Templates Created', desc: '727 active. Served 6 departments. Standardized with SOPs and training documentation.' },
  { metric: '48 releases', title: 'Formal Version Control', desc: 'Numbered releases since 2024. Full SOPs, Quality checklists, training records.' },
  { metric: '6 departments', title: 'Cross-Organization Reach', desc: 'Finance, Purchasing, E-commerce, Inventory, Lab, Operations. 3 simultaneously.' },
];

const controls = [
  { key: 'summary' as SectionKey, label: 'Professional Summary' },
  { key: 'skills' as SectionKey, label: 'Technical Skills' },
  { key: 'experience' as SectionKey, label: 'Experience' },
  { key: 'achievements' as SectionKey, label: 'Key Achievements' },
  { key: 'education' as SectionKey, label: 'Education & Languages' },
  { key: 'contact' as SectionKey, label: 'Contact Header' },
];

const atsText = `Jerrison Chai
VBA Automation Architect | Full-Stack Developer
Kuala Lumpur, Malaysia | jerrisonchai@gmail.com | github.com/Jerrisonchai

PROFESSIONAL SUMMARY
VBA Automation Architect with 12 years evolving from lab technician to multi-department
automation lead. Built 700+ VBA templates across 6 departments, developed the
JARVIS Dashboard reducing daily operations from 20 minutes to 3, and accumulated 695K lines
of production code. 48 formal version releases with full SOP documentation.
Currently VBA Business Analyst at Shuei Trading, building AI side projects with OpenClaw.

TECHNICAL SKILLS
Automation: VBA (12 yrs), VBS, BAT, PowerShell, Power Query, Task Scheduler, Outlook
Web: TypeScript/JavaScript (expert), Next.js, React, Tailwind CSS, framer-motion, Node.js
Python: Pandas, Playwright, web scraping, PowerBI, Tableau, MySQL
AI/DevOps: OpenClaw, Ollama, DeepSeek API, Git, Docker, Vercel, Supabase
Business: SOPs, 21CFR compliance, requirements gathering, cross-department collaboration

PROFESSIONAL EXPERIENCE

VBA Business Analyst | Shuei Trading | 2024–Present
• Built JARVIS Dashboard (VBS-PS1-BAT-HTML): one-click automation, 20min→3min daily ops
• Automated email drafting pipeline: OneDrive → VBS → Outlook. PO Approval WatchFolder
• Led INV team: 727+ active templates, 695K lines of production code. 5-team cross-dept service
• Built Supplier Comparison System processing 100+ non-standardized supplier files
• E-commerce monthly reports: Lazada, Shopee, Zalora, Qoo10, eBay. 48 version releases
• Averaged 80%+ VBA time allocation: 3,348 hours across 2 years

LIS Project Manager & Lab Assistant Manager | DNA Labs | 2016–2023
• First VBA: reduced Manager KPI report from 2 days to 3 hours. Cut workload 50%
• LIS project: 20 report customizations, 7,570 LoC. 5 product search pages (11K LoC JS)
• COVID-19: managed 150,000 samples with live-forecast system
• RM26K revenue from 6-month Chinese digital marketing campaign
• Platform migration (NIPT), ISO documentation, staff training

KEY ACHIEVEMENTS
12 yrs / 2 co  — Deep Organizational Impact: 8 roles across 2 companies
20min → 3min   — JARVIS Dashboard: Multi-technology automation system
695K           — Lines of Production Code: Version-controlled with release protocol
1,879 templates — 727 active, 6 departments, standardized with SOPs
48 releases    — Formal version control with Quality checklists since 2024

EDUCATION & LANGUAGES
Diploma — Kuala Lumpur
English (Professional working) | Chinese (Native/Bilingual) | Bahasa Malaysia (Conversational)`;
