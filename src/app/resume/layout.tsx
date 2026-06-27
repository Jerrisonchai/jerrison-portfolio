import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Interactive resume: summary, skills, experience at Shuei Trading & DNA Labs, achievements, education. ATS plain text export and print-optimized PDF.',
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
