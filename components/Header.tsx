"use client";

import React, { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = (t('header.nav') as Array<{ label: string; href: string }>) || [];
  const phone = (t('header.phone') as string) || '+47 73 51 20 00';
  const bookBtn = (t('header.bookBtn') as string) || 'Bestill time online';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-bg/95 backdrop-blur-md py-3 border-b border-dark-border shadow-xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO IMAGE ONLY — strictly per prompt laws */}
          <a href="#" className="flex items-center gap-2 group py-2">
            <img
              src="https://static.wixstatic.com/media/b0aa65_d3b94b7050064f518aadb26445116f9c~mv2.png/v1/fill/w_213,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CA_logo_copper.png"
              alt="Cowboys and Angels Trondheim"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {nav.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-xs uppercase tracking-wider text-paper/80 hover:text-copper transition-colors py-2 font-medium inline-flex items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Clickable phone */}
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="text-xs font-mono font-semibold text-paper hover:text-copper transition-colors py-2 px-3 rounded border border-copper/30 hover:border-copper inline-flex items-center min-h-[44px]"
            >
              TEL: {phone}
            </a>

            {/* Language Switcher */}
            <button
              onClick={() => setLocale(locale === 'nb' ? 'en' : 'nb')}
              className="text-xs font-semibold px-2.5 py-2 rounded border border-dark-border text-paper/80 hover:text-copper transition-colors min-h-[44px] inline-flex items-center"
            >
              {locale === 'nb' ? 'EN' : 'NO'}
            </button>

            {/* Primary CTA */}
            <a
              href="#booking"
              className="px-5 py-2.5 bg-copper hover:bg-copper-dark text-white font-display uppercase tracking-wider text-sm font-semibold rounded transition-all duration-200 shadow-lg shadow-copper/20 hover:shadow-copper/40 min-h-[44px] inline-flex items-center"
            >
              {bookBtn}
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLocale(locale === 'nb' ? 'en' : 'nb')}
              className="text-xs font-semibold px-3 py-2 rounded border border-copper/40 text-paper min-h-[44px] inline-flex items-center"
            >
              {locale === 'nb' ? 'EN' : 'NO'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-paper hover:text-copper focus:outline-none min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label="Meny"
            >
              <span className="font-display font-bold text-sm tracking-widest uppercase border border-copper/50 px-3 py-2 rounded">
                {mobileMenuOpen ? 'LUKK' : 'MENY'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-dark-bg/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center pb-6 border-b border-dark-border">
            <img
              src="https://static.wixstatic.com/media/b0aa65_d3b94b7050064f518aadb26445116f9c~mv2.png/v1/fill/w_213,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CA_logo_copper.png"
              alt="Cowboys and Angels"
              className="h-9 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-paper hover:text-copper font-display font-bold text-base px-3 py-2 border border-copper/40 rounded min-h-[44px] inline-flex items-center"
            >
              ✕ LUKK
            </button>
          </div>

          <nav className="my-8 flex flex-col gap-5">
            {nav.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl uppercase tracking-wide text-paper hover:text-copper transition-colors py-2 border-b border-dark-border/40 inline-flex items-center"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-6 border-t border-dark-border">
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="text-center py-3.5 bg-dark-surface border border-copper/30 text-copper font-mono font-bold text-lg rounded min-h-[44px] inline-flex items-center justify-center"
            >
              RING OSS: {phone}
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3.5 bg-copper text-white font-display text-lg uppercase tracking-wider font-semibold rounded min-h-[44px] inline-flex items-center justify-center"
            >
              {bookBtn}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
