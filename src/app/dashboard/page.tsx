'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';
import { CountUp } from '@/components/count-up';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const accent = '#3B82F6';
const accentLight = '#60A5FA';
const gridColor = '#1A1A1A';
const textMuted = '#71717A';
const success = '#22C55E';

const years = ['2024', '2025', '2026'];
const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6', '#22C55E', '#F59E0B'];

export default function DashboardPage() {
  const [selectedYear, setSelectedYear] = useState('all');

  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="section-label mb-2">Data Visualizations</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">Dashboard</h1>
          <p className="text-zinc-500 text-sm mb-10">VBA metrics and performance data from 2024 to 2026.</p>
        </motion.div>

        {/* KPI Row */}
        <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#262626] rounded-xl overflow-hidden mb-12">
          {kpis.map((k, i) => (
            <div key={k.label} className="bg-[#121212] px-5 py-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="text-2xl md:text-3xl font-mono font-medium text-white mb-1">
                  <CountUp end={k.value} suffix={k.suffix} prefix={k.prefix} />
                </div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">{k.label}</p>
                <p className="text-[10px] text-accent mt-1 font-mono">{k.trend}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {/* LoC Growth */}
          <motion.section {...fadeUp} className="card">
            <h3 className="text-white font-semibold text-sm mb-1">Lines of Code Growth</h3>
            <p className="text-zinc-500 text-xs mb-4">Cumulative VBA code in production (thousands)</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={locGrowth} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="locGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={accent} stopOpacity={0.3} />
                      <stop offset="100%" stopColor={accent} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fill: textMuted, fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: textMuted, fontSize: 10 }} axisLine={false} tickLine={false} unit="K" />
                  <Tooltip
                    contentStyle={{ background: '#121212', border: '1px solid #262626', borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: '#A1A1AA' }}
                  />
                  <Area type="monotone" dataKey="loc" stroke={accent} strokeWidth={2} fill="url(#locGrad)" name="LoC" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          {/* Monthly Hours */}
          <motion.section {...fadeUp} className="card">
            <h3 className="text-white font-semibold text-sm mb-1">Monthly VBA Hours</h3>
            <p className="text-zinc-500 text-xs mb-4">Hours dedicated to VBA development per month</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyHours} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
                  <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fill: textMuted, fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: textMuted, fontSize: 10 }} axisLine={false} tickLine={false} unit="h" />
                  <Tooltip
                    contentStyle={{ background: '#121212', border: '1px solid #262626', borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: '#A1A1AA' }}
                  />
                  <Bar dataKey="2024" fill={accent} stackId="a" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="2025" fill="#6366F1" stackId="a" />
                  <Bar dataKey="2026" fill="#8B5CF6" stackId="a" />
                  <Legend wrapperStyle={{ fontSize: 10, color: textMuted }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          {/* Version Releases */}
          <motion.section {...fadeUp} className="card">
            <h3 className="text-white font-semibold text-sm mb-1">Version Releases</h3>
            <p className="text-zinc-500 text-xs mb-4">Formal numbered releases with SOPs per quarter</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={releases} margin={{ top: 5, right: 5, left: -10, bottom: 0 }}>
                  <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" tick={{ fill: textMuted, fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: textMuted, fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#121212', border: '1px solid #262626', borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: '#A1A1AA' }}
                  />
                  <Line type="monotone" dataKey="releases" stroke={success} strokeWidth={2} dot={{ fill: success, r: 4 }} name="Releases" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          {/* Department Impact */}
          <motion.section {...fadeUp} className="card">
            <h3 className="text-white font-semibold text-sm mb-1">Department Impact</h3>
            <p className="text-zinc-500 text-xs mb-4">Distribution of VBA work across departments</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departments}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {departments.map((_, i) => (
                      <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: '#121212', border: '1px solid #262626', borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: '#A1A1AA' }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: 10, color: textMuted }}
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.section>
        </div>

        {/* Detailed Metrics Table */}
        <motion.section {...fadeUp} className="card mb-12">
          <h3 className="text-white font-semibold text-sm mb-1">Year-over-Year Comparison</h3>
          <p className="text-zinc-500 text-xs mb-4">Key performance metrics across 3 years</p>
          <div className="table-scroll">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 pr-4 text-zinc-500 font-mono font-normal uppercase tracking-wider">Metric</th>
                  <th className="text-right py-3 px-4 text-accent font-mono font-medium">2024</th>
                  <th className="text-right py-3 px-4 text-[#6366F1] font-mono font-medium">2025</th>
                  <th className="text-right py-3 pl-4 text-[#8B5CF6] font-mono font-medium">2026 (H1)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.metric} className="border-b border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3 pr-4 text-zinc-400">{row.metric}</td>
                    <td className="py-3 px-4 text-right text-white font-mono">{row.y2024}</td>
                    <td className="py-3 px-4 text-right text-white font-mono">{row.y2025}</td>
                    <td className="py-3 pl-4 text-right text-white font-mono">{row.y2026}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Year Selector Tabs */}
        <motion.section {...fadeUp}>
          <h3 className="text-white font-semibold text-sm mb-4">Year Focus</h3>
          <div className="flex flex-wrap gap-2">
            {[{ id: 'all', label: 'All Years' }, ...years.map(y => ({ id: y, label: y }))].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedYear(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-150 min-h-[44px] ${
                  selectedYear === tab.id
                    ? 'bg-accent text-white'
                    : 'bg-[#1A1A1A] text-zinc-400 border border-[#262626] hover:border-[#333] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Year-specific highlight */}
          {selectedYear !== 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 card"
            >
              <div className="flex flex-wrap gap-6">
                {yearHighlights[selectedYear as keyof typeof yearHighlights]?.map((h: { label: string; value: string }) => (
                  <div key={h.label}>
                    <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-1">{h.label}</p>
                    <p className="text-xl font-mono font-medium text-white">{h.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
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

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

const kpis = [
  { value: 4100, suffix: '+', prefix: '', label: 'Total VBA Hours', trend: '+18% YoY' },
  { value: 695, suffix: 'K', prefix: '', label: 'Lines of Code', trend: '+108% vs 2025' },
  { value: 48, suffix: '+', prefix: '', label: 'Version Releases', trend: '24 in 2024 alone' },
  { value: 6, suffix: '', prefix: '', label: 'Departments Served', trend: 'Finance → INV' },
];

const locGrowth = [
  { month: 'J', loc: 170 }, { month: 'F', loc: 310 }, { month: 'M', loc: 480 },
  { month: 'A', loc: 670 }, { month: 'M', loc: 335 }, { month: 'J', loc: 395 },
  { month: 'J', loc: 560 }, { month: 'A', loc: 620 }, { month: 'S', loc: 670 },
  { month: 'O', loc: 695 }, { month: 'N', loc: 670 }, { month: 'D', loc: 670 },
  // 2025 (post-reset, rebuilding)
  { month: 'J', loc: 60 }, { month: 'F', loc: 115 }, { month: 'M', loc: 175 },
  { month: 'A', loc: 230 }, { month: 'M', loc: 285 }, { month: 'J', loc: 335 },
  { month: 'J', loc: 390 }, { month: 'A', loc: 440 }, { month: 'S', loc: 490 },
  { month: 'O', loc: 540 }, { month: 'N', loc: 595 }, { month: 'D', loc: 335 },
  // 2026 H1
  { month: 'J', loc: 390 }, { month: 'F', loc: 450 }, { month: 'M', loc: 520 },
  { month: 'A', loc: 590 }, { month: 'M', loc: 650 }, { month: 'J', loc: 695 },
];

const monthlyHours = [
  { month: 'Jan', '2024': 130, '2025': 140, '2026': 115 },
  { month: 'Feb', '2024': 125, '2025': 130, '2026': 120 },
  { month: 'Mar', '2024': 140, '2025': 150, '2026': 120 },
  { month: 'Apr', '2024': 135, '2025': 145, '2026': 115 },
  { month: 'May', '2024': 140, '2025': 150, '2026': 115 },
  { month: 'Jun', '2024': 130, '2025': 145, '2026': 115 },
  { month: 'Jul', '2024': 135, '2025': 150, '2026': 0 },
  { month: 'Aug', '2024': 140, '2025': 145, '2026': 0 },
  { month: 'Sep', '2024': 125, '2025': 140, '2026': 0 },
  { month: 'Oct', '2024': 130, '2025': 150, '2026': 0 },
  { month: 'Nov', '2024': 135, '2025': 148, '2026': 0 },
  { month: 'Dec', '2024': 135, '2025': 155, '2026': 0 },
];

const releases = [
  { quarter: 'Q1 24', releases: 6 },
  { quarter: 'Q2 24', releases: 6 },
  { quarter: 'Q3 24', releases: 6 },
  { quarter: 'Q4 24', releases: 6 },
  { quarter: 'Q1 25', releases: 4 },
  { quarter: 'Q2 25', releases: 4 },
  { quarter: 'Q3 25', releases: 4 },
  { quarter: 'Q4 25', releases: 4 },
  { quarter: 'Q1 26', releases: 4 },
  { quarter: 'Q2 26', releases: 4 },
];

const departments = [
  { name: 'Finance', value: 30 },
  { name: 'Inventory', value: 25 },
  { name: 'Purchasing', value: 20 },
  { name: 'E-commerce', value: 15 },
  { name: 'Lab / Ops', value: 10 },
];

const tableData = [
  { metric: 'VBA Hours', y2024: '1,600 hrs', y2025: '1,748 hrs', y2026: '~700 hrs' },
  { metric: 'Active Templates', y2024: '686', y2025: '466+', y2026: '727+' },
  { metric: 'Lines of Code', y2024: '670K', y2025: '335K', y2026: '695K' },
  { metric: 'Version Releases', y2024: '24', y2025: '16', y2026: '8+' },
  { metric: 'VBA % of Work', y2024: '80.3%', y2025: '82.1%', y2026: '83%+' },
  { metric: 'Departments', y2024: '3', y2025: '4', y2026: '5+' },
  { metric: 'Team Size', y2024: 'Individual', y2025: 'Individual', y2026: '2 (lead)' },
  { metric: 'Key Systems', y2024: 'Supplier Compare', y2025: 'HTML Reports', y2026: 'JARVIS Dashboard' },
];

const yearHighlights = {
  '2024': [
    { label: 'Total Hours', value: '1,600' },
    { label: 'Templates Built', value: '686' },
    { label: 'Releases', value: '24' },
    { label: 'Departments', value: 'Finance, Purchasing, E-com' },
    { label: 'Key Build', value: 'Supplier Comparison System' },
  ],
  '2025': [
    { label: 'Total Hours', value: '1,748' },
    { label: 'Templates Built', value: '466+' },
    { label: 'Releases', value: '16' },
    { label: 'Departments', value: '+ INV Team' },
    { label: 'Key Build', value: 'HTML Reporting & BAT/VBS' },
  ],
  '2026': [
    { label: 'Total Hours (H1)', value: '~700' },
    { label: 'Active Templates', value: '727+' },
    { label: 'Releases (H1)', value: '8+' },
    { label: 'Team', value: 'Leading 2-person team' },
    { label: 'Key Build', value: 'JARVIS Dashboard' },
  ],
};
