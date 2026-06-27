import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jerrison Chai — VBA Business Analyst & Full-Stack Developer',
  description: 'Professional portfolio — 15+ years in data analysis, business systems, and full-stack development. Kuala Lumpur, Malaysia.',
  metadataBase: new URL('https://jerrison-portfolio.vercel.app'),
  openGraph: {
    title: 'Jerrison Chai — Professional Portfolio',
    description: 'VBA Business Analyst & Full-Stack Developer based in Kuala Lumpur.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
