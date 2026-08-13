"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal, Marquee } from '@/components/motion';

export default function SocialProof() {
  const { t } = useLocale();

  const rating = (t('socialProof.rating') as string) || '4.9';
  const reviewCount = (t('socialProof.reviewCount') as string) || 'over 580 uavhengige anmeldelser';
  const tagline = (t('socialProof.tagline') as string) || 'Trondheims mest foretrukne valg for presisjonsklipp, skjeggform og moderne fargedesign';
  const stats = (t('socialProof.stats') as Array<{ value: string; label: string }>) || [];

  const ticker1 = (t('socialProof.ticker1') as string) || '✦ MOHOLT SALONG';
  const ticker2 = (t('socialProof.ticker2') as string) || 'MOHOLT ALLÉ 1';
  const ticker3 = (t('socialProof.ticker3') as string) || '✦ SOLSIDEN BARBERSHOP';
  const ticker4 = (t('socialProof.ticker4') as string) || 'BEDDINGEN 10';
  const ticker5 = (t('socialProof.ticker5') as string) || '✦ FOILAGE & BALAYAGE';
  const ticker6 = (t('socialProof.ticker6') as string) || 'KNIVBARBERING';
  const ticker7 = (t('socialProof.ticker7') as string) || "✦ L'ANZA KERATIN";
  const ticker8 = (t('socialProof.ticker8') as string) || 'KEUNE HAIRCARE';

  return (
    <section className="py-12 bg-dark-surface border-y border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Rating Box */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b lg:border-b-0 lg:border-r border-dark-border pb-6 lg:pb-0 lg:pr-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="font-display text-4xl sm:text-5xl font-bold text-copper">{rating}</span>
                <span className="text-copper text-xl">★★★★★</span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-paper-muted block mt-1">
                Google Rating · {reviewCount}
              </span>
            </div>
            <p className="text-xs text-paper/80 italic border-t sm:border-t-0 sm:border-l border-dark-border pt-2 sm:pt-0 sm:pl-4 text-center sm:text-left max-w-xs">
              "{tagline}"
            </p>
          </div>

          {/* Right Numeric Proof */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((st, i) => (
              <div key={i} className="text-center p-3 rounded bg-dark-bg/60 border border-dark-border/50">
                <span className="block font-display text-2xl sm:text-3xl font-bold text-paper">
                  {st.value}
                </span>
                <span className="text-[11px] font-mono text-paper-muted uppercase tracking-wider mt-0.5 block">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge-faded Brand Ticker Band */}
      <div className="mt-8 pt-6 border-t border-dark-border/50 overflow-hidden">
        <Marquee speed={30}>
          <div className="flex items-center gap-12 text-xs font-mono uppercase tracking-widest text-paper-muted/70">
            <span className="text-copper">{ticker1}</span>
            <span>{ticker2}</span>
            <span className="text-copper">{ticker3}</span>
            <span>{ticker4}</span>
            <span className="text-copper">{ticker5}</span>
            <span>{ticker6}</span>
            <span className="text-copper">{ticker7}</span>
            <span>{ticker8}</span>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
