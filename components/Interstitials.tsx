"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { Marquee } from '@/components/motion';

export function TickerInterstitial() {
  const { t } = useLocale();

  const est = (t('interstitials.est') as string) || 'EST. 2018';
  const trondheimBarber = (t('interstitials.trondheimBarber') as string) || 'TRONDHEIMS FREMSTE BARBERSHOP';
  const moholtAlle = (t('interstitials.moholtAlle') as string) || 'MOHOLT ALLÉ 1';
  const beddingenSolsiden = (t('interstitials.beddingenSolsiden') as string) || 'BEDDINGEN 10 SOLSIDEN';
  const googleRating = (t('interstitials.googleRating') as string) || '4.9 GOOGLE RATING';
  const foilageBalayage = (t('interstitials.foilageBalayage') as string) || 'FOILAGE & BALAYAGE';
  const lanzaKeratin = (t('interstitials.lanzaKeratin') as string) || 'L’ANZA KERATIN';

  return (
    <div className="py-4 bg-dark-surface border-y border-dark-border overflow-hidden">
      <Marquee speed={30}>
        <div className="flex items-center gap-10 text-xs font-mono uppercase tracking-widest text-paper-muted">
          <span className="text-copper font-bold">{est}</span>
          <span>{trondheimBarber}</span>
          <span className="text-copper font-bold">{moholtAlle}</span>
          <span>{beddingenSolsiden}</span>
          <span className="text-copper font-bold">{googleRating}</span>
          <span>{foilageBalayage}</span>
          <span className="text-copper font-bold">{lanzaKeratin}</span>
        </div>
      </Marquee>
    </div>
  );
}

export function WatermarkInterstitial({ word }: { word: string }) {
  return (
    <div className="relative py-12 bg-dark-bg border-y border-dark-border overflow-hidden select-none">
      <div 
        aria-hidden="true" 
        className="text-center pointer-events-none opacity-[0.06] font-display text-6xl sm:text-9xl font-bold uppercase tracking-tighter text-white whitespace-nowrap"
      >
        {word}
      </div>
    </div>
  );
}

export function StatementInterstitial({ statement }: { statement: string }) {
  return (
    <div className="py-12 bg-dark-card border-y border-copper/30 text-center px-4">
      <p className="font-serif italic text-xl sm:text-3xl text-paper max-w-4xl mx-auto leading-relaxed">
        "{statement}"
      </p>
    </div>
  );
}

export function RatingInterstitial() {
  return (
    <div className="py-6 bg-dark-surface border-y border-dark-border text-center px-4">
      <span className="text-xs font-mono uppercase tracking-widest text-copper">
        4.9 / 5.0 GOOGLE RATING · OVER 580 VERIFISERTE KUNDEVURDERINGER I TRONDHEIM
      </span>
    </div>
  );
}
