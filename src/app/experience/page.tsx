'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function ExperiencePage() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="section-label mb-2">Career Journey</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Experience</h1>
          <div className="section-divider mb-10" />
        </motion.div>

        {/* Year Tabs */}
        <motion.div {...fadeUp} className="flex flex-wrap gap-2 mb-10">
          {eras.map((e, i) => (
            <button
              key={e.year}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-150 min-h-[44px] ${
                i === active
                  ? 'bg-accent text-white'
                  : 'bg-[#1A1A1A] text-zinc-400 border border-[#262626] hover:border-[#333] hover:text-white'
              }`}
            >
              {e.year}
            </button>
          ))}
        </motion.div>

        {/* Active Era Detail */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card mb-8"
        >
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <span className="font-mono text-sm text-accent font-medium">{eras[active].year}</span>
            <span className="text-zinc-500 text-xs font-mono">{eras[active].period}</span>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">{eras[active].role}</h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">{eras[active].detail}</p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#262626] rounded-lg overflow-hidden mb-6">
            {eras[active].metrics.map((m: { label: string; value: string }) => (
              <div key={m.label} className="bg-[#0A0A0A] px-4 py-4 text-center">
                <div className="text-lg font-mono font-medium text-white">{m.value}</div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono mt-1">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Key Contributions</h3>
            <ul className="space-y-2">
              {eras[active].highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Full Timeline */}
        <motion.section {...fadeUp}>
          <h2 className="text-xl font-semibold text-white mb-6">Full Timeline</h2>
          <div className="space-y-1 overflow-x-hidden">
            {eras.map((e, i) => (
              <div
                key={e.year}
                onClick={() => setActive(i)}
                className={`border-l-2 pl-5 py-4 cursor-pointer transition-colors duration-150 ${
                  i === active ? 'border-accent' : 'border-[#262626] hover:border-[#333]'
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-mono text-[10px] text-accent tracking-wider">{e.year}</span>
                  <span className="text-zinc-500 text-[10px] font-mono">{e.period}</span>
                </div>
                <h3 className="text-white font-semibold text-sm">{e.role}</h3>
                <p className="text-zinc-500 text-xs mt-0.5 line-clamp-1">{e.summary}</p>
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

const eras = [
  {
    year: '2024–Present',
    period: 'Current',
    role: 'VBA Business Analyst — Shuei Trading',
    summary: 'JARVIS Dashboard, supplier comparison, e-commerce reporting, 48 releases, 3,348 VBA hours.',
    detail: 'Built JARVIS Dashboard (VBS-PS1-BAT-HTML) — a one-click automation system that reduced daily operations from 20 minutes to 3. Built OneDrive → VBS → Outlook email automation pipeline and PO Approval WatchFolder. Led INV team with 727+ active templates and 695K lines of code. Built Supplier Comparison system handling 100+ non-standardized supplier files. Developed Lazada, Shopee, Zalora, Qoo10, and eBay monthly report templates. Expanded into BAT, VBS, PowerShell, web scraping, task monitoring, and HTML reporting. Completed 48 version releases with full SOPs. Averaged 80%+ VBA time allocation (3,348 hours across 2 years).',
    metrics: [
      { label: 'VBA Hours', value: '3,348' },
      { label: 'Templates', value: '727+' },
      { label: 'LoC', value: '695K' },
      { label: 'Releases', value: '48' },
    ],
    highlights: [
      'Built JARVIS Dashboard (VBS-PS1-BAT-HTML): daily ops 20min→3min',
      'Automated email drafting pipeline (OneDrive → VBS → Outlook)',
      'PO Approval WatchFolder automation',
      'Supplier Comparison System: 100+ non-standardized files automated',
      'E-commerce reports: Lazada, Shopee, Zalora, Qoo10, eBay',
      'Served 3 departments simultaneously + INV team cross-service',
      '48 version releases with full SOPs and training documentation',
      '80%+ VBA time allocation: 3,348 hours across 2 years',
    ],
  },
  {
    year: '2023',
    period: 'Partial',
    role: 'Lab Assistant Manager → VBA Developer',
    summary: 'Transition year from lab management to full-time VBA development.',
    detail: 'Transitioned from Lab Assistant Manager role to VBA Developer. Began building template library, establishing version control practices, and developing the documentation system (SOPs, Quality checklists) that would become standard operating procedure for template releases.',
    metrics: [
      { label: 'Role Shift', value: 'Lab→VBA' },
      { label: 'System', value: 'Version Control' },
      { label: 'SOPs', value: 'Established' },
      { label: 'Dept', value: '3' },
    ],
    highlights: [
      'Transitioned from lab management to full-time VBA development',
      'Established version control system for templates',
      'Created SOP and Quality checklist documentation standards',
      'Began building foundation for template library',
    ],
  },
  {
    year: '2020–2022',
    period: '3 Years',
    role: 'LIS Project Manager & Marketing Assistant Manager',
    summary: 'Led LIS project, built web search pages, generated RM26K marketing revenue.',
    detail: 'Led the Laboratory Information System (LIS) project: implemented 20 report customizations with 7,570 lines of code. Built 5 dynamic product search webpages with 11,000 lines of JavaScript. Generated RM26,000 in revenue from a 6-month targeted Chinese digital marketing campaign. Managed 150,000 COVID-19 samples with real-time live-forecast Excel system. Reduced Customer Care workload by 50% via VBA automation.',
    metrics: [
      { label: 'JS Code', value: '11K' },
      { label: 'Revenue', value: 'RM26K' },
      { label: 'Samples', value: '150K' },
      { label: 'Workload', value: '-50%' },
    ],
    highlights: [
      'LIS Project: 20 report customizations, 7,570 lines of code',
      '5 dynamic product search webpages: 11,000 lines JavaScript',
      'RM26,000 revenue from 6-month Chinese digital marketing campaign',
      'COVID-19: Managed 150,000 samples with live-forecast system',
      '50% workload reduction: Customer Care + Lab Service VBA automation',
      'Multi-role: Project Manager, Marketing, and Developer simultaneously',
    ],
  },
  {
    year: '2016–2019',
    period: '4 Years',
    role: 'Lab Executive → Lab Assistant Manager',
    summary: 'Platform migration, first VBA automation, staff training, ISO documentation.',
    detail: 'Migrated NIPT testing platform including full validation and inter-lab parallel testing. Created first VBA automation: reduced clerical errors and automated Manager KPI reporting from 2 days to 3 hours. Trained staff who were promoted from Junior to Senior Executive. Managed laboratory water system and ISO documentation.',
    metrics: [
      { label: 'Platform', value: 'NIPT' },
      { label: 'KPI Rpt', value: '2d→3h' },
      { label: 'Staff', value: 'Trained' },
      { label: 'ISO', value: 'Managed' },
    ],
    highlights: [
      'NIPT testing platform migration: validation + inter-lab parallel test',
      'First VBA automation: reduced clerical mistakes',
      'Automated Manager KPI report from 2 days to 3 hours',
      'Trained staff promoted from Junior to Senior Executive',
      'Managed laboratory water system',
      'ISO documentation and compliance',
    ],
  },
  {
    year: '2014–2015',
    period: '2 Years',
    role: 'Editorial → CS → Junior Lab Executive',
    summary: 'Career start: SGM Publishing, then DNA Labs — 4 roles in 2 years.',
    detail: 'Started career at SGM Publication Department as Editorial Assistant — development and design work. Joined DNA Labs, rotating through Customer Service & Internal Process Executive → Junior Lab Executive (General Screening & Molecular Lab) → Lab Executive (NGS Lab). 4 distinct roles in 2 years, demonstrating rapid learning and adaptability across entirely different domains.',
    metrics: [
      { label: 'Companies', value: '2' },
      { label: 'Roles', value: '4' },
      { label: 'Start', value: 'NGO→Tech' },
      { label: 'Growth', value: 'Rapid' },
    ],
    highlights: [
      'SGM Publication Department: Editorial Assistant (development & design)',
      'DNA Labs: 3 promotions in 2 years',
      'Customer Service & Internal Process Executive',
      'Junior Lab Executive (General Screening & Molecular Lab)',
      'Lab Executive (NGS Lab)',
      '4 distinct roles showing rapid cross-domain adaptability',
    ],
  },
];
