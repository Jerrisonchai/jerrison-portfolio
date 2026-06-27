import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

const baseUrl = 'https://jerrison-portfolio.vercel.app';
const ogImage = `${baseUrl}/images/og-default.svg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jerrison Chai — VBA Automation Architect & Full-Stack Developer',
    template: '%s — Jerrison Chai',
  },
  description: '12 years evolving from lab technician to multi-department automation lead. 727+ VBA templates, 695K lines of code, JARVIS Dashboard. 48 releases, 3,348 VBA hours. Kuala Lumpur, Malaysia.',
  keywords: ['VBA', 'Excel Automation', 'Business Analyst', 'Web Developer', 'Next.js', 'TypeScript', 'Python', 'Process Improvement', 'Kuala Lumpur', 'Full-Stack Developer'],
  authors: [{ name: 'Jerrison Chai' }],
  creator: 'Jerrison Chai',
  publisher: 'Jerrison Chai',
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Jerrison Chai — Portfolio',
    url: baseUrl,
    title: 'Jerrison Chai — VBA Automation Architect & Full-Stack Developer',
    description: '12 years in VBA automation. 727+ templates, 695K LoC, 48 releases. JARVIS Dashboard builder.',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Jerrison Chai Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jerrison Chai — VBA Automation Architect',
    description: 'VBA Automation Architect & Full-Stack Developer. Kuala Lumpur, Malaysia.',
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0A0A0A" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&amp;family=JetBrains+Mono:wght@400;500;600&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/images/profile-photo.png" as="image" type="image/png" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jerrison Chai',
              jobTitle: 'VBA Business Analyst & Automation Architect',
              description: '12 years in VBA automation, process improvement, and full-stack development. 727+ templates, 695K lines of code, JARVIS Dashboard builder.',
              url: 'https://jerrison-portfolio.vercel.app',
              sameAs: [
                'https://github.com/Jerrisonchai',
              ],
              knowsAbout: [
                'VBA', 'Excel Automation', 'Web Development', 'TypeScript', 'Next.js',
                'Python', 'Business Analysis', 'Process Automation', 'Data Analysis',
              ],
              address: { '@type': 'PostalAddress', addressLocality: 'Kuala Lumpur', addressCountry: 'MY' },
              email: 'jerrisonchai@gmail.com',
              worksFor: { '@type': 'Organization', name: 'Shuei Trading Sdn Bhd' },
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased font-sans pb-20 md:pb-0">{children}</body>
    </html>
  );
}
