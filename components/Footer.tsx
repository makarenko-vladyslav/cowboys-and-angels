"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  const legal = (t('footer.legal') as string) || '© 2026 Cowboys and Angels AS. Alle rettigheter reservert.';
  const studioCredit = (t('footer.studioCredit') as string) || 'Utviklet av Студія Тест';

  return (
    <footer className="bg-dark-bg border-t border-dark-border pt-16 pb-12 text-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-dark-border">
          {/* Col 1: Logo & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <span className="font-display text-2xl font-bold uppercase text-copper tracking-wider block mb-2">
              COWBOYS &amp; ANGELS
            </span>
            <p className="text-xs text-paper-muted leading-relaxed max-w-sm">
              Cowboys and Angels er Trondheims ledende frisørsalong og barbershop med to unike lokasjoner på Moholt og Solsiden. Spesialister på herreklipp, knivbarbering og Foilage fargeteknikk.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/cowboysandangelsmoholt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-copper hover:underline uppercase py-2 inline-flex items-center"
              >
                FACEBOOK ↗
              </a>
              <a
                href="https://www.instagram.com/cowboysandangels_moholt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-copper hover:underline uppercase py-2 inline-flex items-center"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </div>

          {/* Col 2: Moholt Hub */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-bold uppercase text-copper mb-3">
              Moholt Salong
            </h4>
            <p className="text-xs text-paper-muted leading-relaxed mb-1">
              Moholt Allé 1, 7050 Trondheim
            </p>
            <p className="text-xs text-paper-muted leading-relaxed mb-2">
              Man–Fre: 09:00–18:00
              <br />
              Lør: 09:00–16:00
            </p>
            <a href="tel:+4773512000" className="text-xs font-mono text-copper hover:underline block mt-2 py-2 inline-flex items-center">
              +47 73 51 20 00
            </a>
          </div>

          {/* Col 3: Solsiden Hub */}
          <div className="lg:col-span-4">
            <h4 className="font-display text-base font-bold uppercase text-copper mb-3">
              Solsiden Barbershop
            </h4>
            <p className="text-xs text-paper-muted leading-relaxed mb-1">
              Beddingen 10, Solsiden, 7014 Trondheim
            </p>
            <p className="text-xs text-paper-muted leading-relaxed mb-2">
              Man–Fre: 10:00–19:00
              <br />
              Lør: 10:00–17:00
            </p>
            <a href="tel:+4773512000" className="text-xs font-mono text-copper hover:underline block mt-2 py-2 inline-flex items-center">
              +47 73 51 20 00
            </a>
          </div>
        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding Off Bottom Edge */}
        <div className="py-10 border-b border-dark-border/40 text-center select-none overflow-hidden">
          <span className="font-display text-5xl sm:text-8xl md:text-[10vw] font-bold uppercase tracking-tighter text-dark-surface/80 block leading-none">
            COWBOYS &amp; ANGELS
          </span>
        </div>

        {/* Legal Row & Mandatory Studio Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-paper-muted">
          <span>{legal}</span>
          <span className="text-center sm:text-right">
            Designet for presisjon i Trondheim. ·{' '}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-copper hover:underline font-bold border-b border-copper/30 pb-0.5 py-2 inline-flex items-center"
            >
              {studioCredit}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
