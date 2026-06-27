import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Career timeline: VBA Business Analyst at Shuei Trading (2024–Present), LIS Project Manager at DNA Labs (2016–2023), and earlier roles. JARVIS Dashboard, 48 releases, 3,348 VBA hours.',
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
