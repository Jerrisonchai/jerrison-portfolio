'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/resume', label: 'Resume' },
  { href: '/projects', label: 'Projects' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/#contact', label: 'Contact' },
];

const bottomLinks = [
  { href: '/about', label: 'About', icon: '👤' },
  { href: '/skills', label: 'Skills', icon: '⚙️' },
  { href: '/experience', label: 'Exp', icon: '📅' },
  { href: '/projects', label: 'Projects', icon: '🚀' },
  { href: '/resume', label: 'Resume', icon: '📄' },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <>
      {/* Top Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/85 backdrop-blur-lg border-b border-[#262626]' : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-5xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          {/* Logo + Avatar */}
          <a href="/" className="flex items-center gap-3" aria-label="Jerrison Chai Home">
            <span className="font-mono font-bold text-lg text-white tracking-tight">
              JC<span className="text-accent">.</span>
            </span>
            <img
              src="/images/profile-photo.png"
              alt="Jerrison Chai"
              className="w-8 h-8 rounded-full border border-[#262626] object-cover"
              width={32}
              height={32}
              loading="eager"
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map(l => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`text-sm transition-colors duration-150 py-2 ${
                      active
                        ? 'text-white font-medium'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {l.label}
                    {active && (
                      <div className="h-[2px] bg-accent rounded-full mt-0.5" />
                    )}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="/jerrison-resume.pdf" className="btn-primary text-xs !py-2 !px-4">
                Resume ↓
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2 min-h-[44px] min-w-[44px] items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={`block w-5 h-[2px] bg-white transition-all duration-200 ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-200 ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-b border-[#262626]"
            >
              <ul className="px-6 py-4 flex flex-col gap-2">
                {links.map(l => {
                  const active = isActive(l.href);
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className={`block py-3 px-3 rounded-lg text-base transition-colors ${
                          active
                            ? 'bg-accent/10 text-white font-medium border border-accent/30'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <a href="/jerrison-resume.pdf" className="btn-primary text-sm w-full justify-center" onClick={() => setOpen(false)}>
                    Download Resume ↓
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-[#262626] safe-area-bottom" role="navigation" aria-label="Bottom navigation">
        <div className="flex justify-around items-center h-16 px-2">
          {bottomLinks.map(l => {
            const active = isActive(l.href);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`flex flex-col items-center gap-0.5 min-w-[48px] min-h-[44px] justify-center transition-colors ${
                  active ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <span className="text-lg">{l.icon}</span>
                <span className={`text-[10px] font-medium ${active ? 'text-accent' : ''}`}>{l.label}</span>
                {active && <div className="h-[2px] w-8 bg-accent rounded-full mt-0.5" />}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
