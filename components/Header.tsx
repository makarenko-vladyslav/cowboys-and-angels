"use client";

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#konsept', label: String(t('nav.concept')) },
    { href: '#tjenester', label: String(t('nav.services')) },
    { href: '#kalkulator', label: String(t('nav.calculator')) },
    { href: '#handverk', label: String(t('nav.craft')) },
    { href: '#galleri', label: String(t('nav.gallery')) },
    { href: '#butikk', label: String(t('nav.shop')) },
    { href: '#team', label: String(t('nav.team')) },
    { href: '#faq', label: String(t('nav.faq')) },
    { href: '#avdelinger', label: String(t('nav.locations')) },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-hsl(20_20%_8%/0.95) backdrop-blur-md py-3 shadow-xl border-b border-hsl(20_15%_20%/0.5)'
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Typographic Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-accent flex items-center justify-center text-bg-dark font-display font-bold text-xl group-hover:scale-105 transition-transform">
              C&amp;A
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-text-light uppercase leading-none">
                Cowboys <span className="text-accent">&amp;</span> Angels
              </span>
              <span className="text-[10px] tracking-widest text-text-muted uppercase mt-0.5 font-display">
                Barbershop &amp; Frisør Trondheim
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase font-display font-medium tracking-wider text-text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Phone quick link */}
            <a
              href="tel:+4773931100"
              className="text-xs font-display font-semibold tracking-wider text-text-light hover:text-accent transition-colors px-3 py-1.5 rounded border border-border-dark"
            >
              +47 73 93 11 00
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-primary-light rounded border border-border-dark p-0.5 text-xs font-display">
              <button
                onClick={() => setLocale('no')}
                className={`px-2 py-1 rounded font-bold ${
                  locale === 'no' ? 'bg-accent text-bg-dark' : 'text-text-muted hover:text-text-light'
                }`}
              >
                NO
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1 rounded font-bold ${
                  locale === 'en' ? 'bg-accent text-bg-dark' : 'text-text-muted hover:text-text-light'
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary CTA */}
            <a
              href="#bestilling"
              className="bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold uppercase text-xs tracking-wider px-5 py-2.5 rounded transition-all shadow-lg hover:shadow-accent/20"
            >
              {String(t('nav.bookCta'))}
            </a>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-text-light hover:text-accent"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark/98 flex flex-col justify-between p-8 pt-24 lg:hidden backdrop-blur-xl">
          <div className="flex flex-col gap-5">
            <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">Meny</span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-2xl uppercase tracking-wider text-text-light hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-border-dark pt-6">
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted uppercase tracking-wider font-display">Språk / Language</span>
              <div className="flex gap-2 font-display">
                <button
                  onClick={() => setLocale('no')}
                  className={`px-3 py-1 rounded text-xs font-bold ${locale === 'no' ? 'bg-accent text-bg-dark' : 'bg-primary-light text-text-light'}`}
                >
                  Norsk
                </button>
                <button
                  onClick={() => setLocale('en')}
                  className={`px-3 py-1 rounded text-xs font-bold ${locale === 'en' ? 'bg-accent text-bg-dark' : 'bg-primary-light text-text-light'}`}
                >
                  English
                </button>
              </div>
            </div>

            <a
              href="tel:+4773931100"
              className="text-center py-3 rounded border border-border-dark text-text-light font-display uppercase tracking-wider text-sm"
            >
              Ring oss: +47 73 93 11 00
            </a>

            <a
              href="#bestilling"
              onClick={() => setMenuOpen(false)}
              className="bg-accent text-bg-dark text-center font-display font-bold uppercase text-base tracking-wider py-4 rounded"
            >
              {String(t('nav.bookCta'))}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
