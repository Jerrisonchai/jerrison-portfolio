import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Interactive data dashboard: LoC growth, monthly VBA hours, version releases, department impact. 12-year career metrics visualized.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
