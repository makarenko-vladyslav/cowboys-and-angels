"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Locations() {
  const { t } = useLocale();

  const eyebrow = (t('locations.eyebrow') as string) || 'DUBBELT NÆRVÆR I TRONDHEIM';
  const title = (t('locations.title') as string) || 'To Unike Salongkonsepter';
  const subtitle = (t('locations.subtitle') as string) || 'Velg avdelingen som passer deg best — Moholt eller Solsiden.';

  const hoursLabel = (t('locations.hoursLabel') as string) || 'Åpningstider:';
  const phoneLabel = (t('locations.phoneLabel') as string) || 'Telefon:';

  const moholt = (t('locations.moholt') as any) || {};
  const solsiden = (t('locations.solsiden') as any) || {};

  return (
    <section id="salonger" className="py-20 bg-dark-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-paper-muted">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Moholt Hub */}
          <Reveal delay={0.1}>
            <div className="h-full p-8 rounded-lg bg-dark-surface border border-dark-border hover:border-copper/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-copper uppercase tracking-widest">
                    HOVEDSALONG &amp; FOILAGE HUB
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 bg-dark-bg text-paper border border-dark-border rounded">
                    MOHOLT
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-paper mb-2 group-hover:text-copper transition-colors">
                  {moholt.name || 'Moholt Salong & Barbershop'}
                </h3>
                <p className="text-xs font-mono text-copper mb-4">{moholt.address}</p>
                <p className="text-sm text-paper-muted leading-relaxed mb-6">
                  {moholt.desc}
                </p>

                <div className="space-y-3 pt-4 border-t border-dark-border mb-8">
                  <div className="text-xs font-mono text-paper/80">
                    <strong className="text-copper">{hoursLabel}</strong> {moholt.hours}
                  </div>
                  <div className="text-xs font-mono text-paper/80">
                    <strong className="text-copper">{phoneLabel}</strong>{' '}
                    <a href={`tel:${moholt.phone}`} className="hover:underline">
                      {moholt.phone}
                    </a>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {moholt.features?.map((f: string, i: number) => (
                    <li key={i} className="text-xs text-paper-muted flex items-center gap-2">
                      <span className="text-copper font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#booking"
                className="w-full py-3 bg-dark-card hover:bg-copper hover:text-white text-copper font-display text-sm font-bold uppercase tracking-wider rounded border border-copper/40 transition-all text-center block"
              >
                Bestill På Moholt
              </a>
            </div>
          </Reveal>

          {/* Solsiden Hub */}
          <Reveal delay={0.2}>
            <div className="h-full p-8 rounded-lg bg-dark-surface border border-dark-border hover:border-copper/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-copper uppercase tracking-widest">
                    EXCLUSIV BARBERSHOP
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 bg-dark-bg text-paper border border-dark-border rounded">
                    SOLSIDEN
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-paper mb-2 group-hover:text-copper transition-colors">
                  {solsiden.name || 'Solsiden Barbershop'}
                </h3>
                <p className="text-xs font-mono text-copper mb-4">{solsiden.address}</p>
                <p className="text-sm text-paper-muted leading-relaxed mb-6">
                  {solsiden.desc}
                </p>

                <div className="space-y-3 pt-4 border-t border-dark-border mb-8">
                  <div className="text-xs font-mono text-paper/80">
                    <strong className="text-copper">{hoursLabel}</strong> {solsiden.hours}
                  </div>
                  <div className="text-xs font-mono text-paper/80">
                    <strong className="text-copper">{phoneLabel}</strong>{' '}
                    <a href={`tel:${solsiden.phone}`} className="hover:underline">
                      {solsiden.phone}
                    </a>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {solsiden.features?.map((f: string, i: number) => (
                    <li key={i} className="text-xs text-paper-muted flex items-center gap-2">
                      <span className="text-copper font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#booking"
                className="w-full py-3 bg-dark-card hover:bg-copper hover:text-white text-copper font-display text-sm font-bold uppercase tracking-wider rounded border border-copper/40 transition-all text-center block"
              >
                Bestill På Solsiden
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
