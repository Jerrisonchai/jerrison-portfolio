import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Jerrison Chai — 12 years evolving from lab technician to VBA Business Analyst and multi-department automation lead. From DNA Labs to Shuei Trading.',
  openGraph: {
    title: 'About Jerrison Chai — The Story',
    description: '12 years from lab technician to VBA Automation Architect. JARVIS Dashboard, 727+ templates, 48 releases.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
