import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: '12 side hustle projects built with OpenClaw AI outside work hours — VBA automation, web development, AI systems, data & trading tools.',
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
