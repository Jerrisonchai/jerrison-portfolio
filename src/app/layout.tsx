import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jerrison Chai — VBA Automation Architect & Full-Stack Developer',
  description: '12 years evolving from lab technician to multi-department automation lead. 700+ VBA templates, 695K lines of code, JARVIS Dashboard. Kuala Lumpur, Malaysia.',
  metadataBase: new URL('https://jerrison-portfolio.vercel.app'),
  openGraph: {
    title: 'Jerrison Chai — Professional Portfolio',
    description: 'VBA Automation Architect & Full-Stack Developer. 700+ templates, 695K LoC, 48 releases.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jerrison Chai — VBA Automation Architect',
    description: 'VBA Automation Architect & Full-Stack Developer based in Kuala Lumpur.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jerrison Chai',
              jobTitle: 'VBA Automation Architect',
              description: '12 years experience in VBA automation, process improvement, and full-stack development.',
              url: 'https://jerrison-portfolio.vercel.app',
              knowsAbout: ['VBA', 'Excel Automation', 'Web Development', 'Python', 'Business Analysis'],
              address: { '@type': 'PostalAddress', addressLocality: 'Kuala Lumpur', addressCountry: 'MY' },
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased font-sans pb-20 md:pb-0">{children}</body>
    </html>
  );
}
