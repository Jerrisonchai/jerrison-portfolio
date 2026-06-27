'use client';

import { motion } from 'framer-motion';
import { Nav } from '@/components/nav';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="section-label mb-2">About</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">The Story</h1>
          <div className="section-divider mb-10" />
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-[#262626] bg-[#121212]">
            <img
              src="/images/profile-photo.png"
              alt="Jerrison Chai — VBA Automation Architect & Full-Stack Developer"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Professional Story */}
        <motion.section {...fadeUp} className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-4">Professional Journey</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I started my career in 2014 at <span className="text-white">SGM Publication Department</span> as an Editorial Assistant, then moved to DNA Labs where I grew from Customer Service to Lab Executive. What began as a lab role evolved into something unexpected — I discovered a talent for spotting inefficiencies and building tools to fix them.
            </p>
            <p>
              My first VBA macro was simple: automate a repetitive data entry task that was eating hours of lab time. It worked. That moment of seeing a machine do 2 days of work in 3 hours changed everything. I wasn't just a lab technician anymore — I was an <span className="text-white">automation developer</span>.
            </p>
            <p>
              Over the next decade, I built <span className="text-white">700+ templates</span> across six departments — Finance, Purchasing, E-commerce, Inventory, Lab Services, and Operations. I translated departmental chaos into structured workflows, non-standardized supplier files into comparable data, and multi-step daily tasks into one-click operations.
            </p>
            <p>
              The peak of this journey is the <span className="text-accent font-medium">JARVIS Dashboard</span> — a VBS-PS1-BAT-HTML system that reduced daily INV operations from 20 minutes to 3. It's not just code; it's the culmination of 12 years of understanding how people work, where processes break, and how to bridge the gap with technology.
            </p>
            <p>
              In 2024, I joined <span className="text-white">Shuei Trading Sdn Bhd</span> as a VBA Business Analyst — applying everything I learned at DNA Labs to a new industry. Same toolkit, new challenges: supply chain automation, trading operations, and cross-border e-commerce workflows.
            </p>
          </div>
        </motion.section>

        {/* Career Philosophy */}
        <motion.section {...fadeUp} className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-4">Career Philosophy</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {philosophy.map((p) => (
              <div key={p.title} className="card">
                <div className="text-lg mb-2">{p.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Work Style */}
        <motion.section {...fadeUp} className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-4">Work Style</h2>
          <div className="card space-y-4 text-zinc-400 text-sm leading-relaxed">
            <p><span className="text-white font-medium">Process-first mindset.</span> I don't just automate tasks — I analyze the entire workflow, eliminate redundant steps, then build tools that fit how people actually work. Every template I build starts with observing the user's pain points.</p>
            <p><span className="text-white font-medium">Documentation-obsessed.</span> 48 version releases, each with SOPs, training records, and Quality checklists. Code without documentation is technical debt. My template system is designed to survive me.</p>
            <p><span className="text-white font-medium">Cross-department connector.</span> Serving 6 departments taught me to translate between business needs and technical solutions. I speak Finance, Purchasing, Lab, and IT fluently.</p>
            <p><span className="text-white font-medium">Measured output.</span> I track everything: lines of code, hours invested, version releases, time saved. If I can't measure the impact, I can't improve it.</p>
          </div>
        </motion.section>

        {/* Career Stats */}
        <motion.section {...fadeUp}>
          <h2 className="text-xl font-semibold text-white mb-4">By the Numbers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#262626] rounded-xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#121212] px-5 py-6 text-center">
                <div className="text-2xl md:text-3xl font-mono font-medium text-white mb-1">{s.value}</div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">{s.label}</p>
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

const philosophy = [
  { icon: '⚙️', title: 'Automate the Repetitive', desc: 'If a human does it the same way more than 3 times, it should be a macro. Free people for work that requires judgment.' },
  { icon: '📋', title: 'Document Everything', desc: 'Code without documentation is a liability. Every template has SOPs, version history, and training records.' },
  { icon: '📊', title: 'Measure to Improve', desc: 'Track hours, lines of code, time saved, error rates. Data makes invisible wins visible and justifies further investment.' },
  { icon: '👥', title: 'Build for Humans', desc: 'Tools that look great in demos but confuse users are failures. Observe workflows, design for the real user, not the ideal one.' },
  { icon: '🔄', title: 'Iterate Relentlessly', desc: '48 version releases in 2 years. The first version is never right — ship it, watch it, improve it. Repeat.' },
  { icon: '🎯', title: 'Value Over Technology', desc: 'No tool is chosen for the tool itself. Every technology decision answers: does this create measurable value for the business?' },
];

const stats = [
  { value: '12', label: 'Years' },
  { value: '700+', label: 'Templates' },
  { value: '695K', label: 'Lines of Code' },
  { value: '6', label: 'Departments Served' },
  { value: '48+', label: 'Releases' },
  { value: '4,100+', label: 'VBA Hours' },
  { value: '20→3min', label: 'Daily Ops Saved' },
  { value: '1', label: 'Team Managed' },
];
