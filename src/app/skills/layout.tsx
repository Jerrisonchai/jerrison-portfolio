import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'VBA, Excel Automation, Web Development (Next.js, TypeScript), Python, AI/LLM Operations, Data Analysis, Team Leadership, DevOps — 9 skill domains across 12 years.',
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
