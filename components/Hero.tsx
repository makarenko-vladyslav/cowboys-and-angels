"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal, Marquee } from '@/components/motion';

export default function Hero() {
  const { t } = useLocale();

  const eyebrow = (t('hero.eyebrow') as string) || 'EST. 2018 — TRONDHEIM · MOHOLT & SOLSIDEN';
  const subtitle = (t('hero.subtitle') as string) || 'Opplev den perfekte balansen mellom klassisk barbershop-håndverk og avanserte fargeteknikker som Foilage. Velkommen til Moholt og Solsiden.';
  const ctaPrimary = (t('hero.ctaPrimary') as string) || 'Bestill time 24/7';
  const ctaSecondary = (t('hero.ctaSecondary') as string) || 'Se priser & tilbud';
  const phoneText = (t('hero.phoneText') as string) || 'Direkte booking per telefon:';
  const phone = (t('hero.phone') as string) || '+47 73 51 20 00';

  const hairart = (t('hero.hairart') as string) || 'hårkunst';
  const hoursTitle = (t('hero.hoursTitle') as string) || 'ÅPNINGSTIDER';
  const hoursValue = (t('hero.hoursValue') as string) || 'Man–Fre: 09:00–18:00 / Lør: 09–16';
  const locationsTitle = (t('hero.locationsTitle') as string) || 'LOKASJONER';
  const locationsValue = (t('hero.locationsValue') as string) || 'Moholt Allé 1 · Beddingen 10';
  const ratingTitle = (t('hero.ratingTitle') as string) || 'VURDERING';
  const ratingValue = (t('hero.ratingValue') as string) || '4.9 / 5.0 ★ Google (580+ anmeldelser)';
  const marginalMoholtTitle = (t('hero.marginalMoholtTitle') as string) || 'MOHOLT SALONG';
  const marginalMoholtDesc = (t('hero.marginalMoholtDesc') as string) || 'Spesialister på Foilage, Balayage & Keratinbehandling.';
  const marginalSolsidenTitle = (t('hero.marginalSolsidenTitle') as string) || 'SOLSIDEN BARBERSHOP';
  const marginalSolsidenDesc = (t('hero.marginalSolsidenDesc') as string) || 'Klassisk knivbarbering, varme omslag & skjeggarkitektur.';
  const scroll = (t('hero.scroll') as string) || 'SCROLL';

  const ticker1 = (t('hero.ticker1') as string) || '✦ MOHOLT ALLÉ 1';
  const ticker2 = (t('hero.ticker2') as string) || 'PRESISJONSKLIPP';
  const ticker3 = (t('hero.ticker3') as string) || '✦ BEDDINGEN 10 SOLSIDEN';
  const ticker4 = (t('hero.ticker4') as string) || 'KNIVBARBERING';
  const ticker5 = (t('hero.ticker5') as string) || '✦ FOILAGE & BALAYAGE';
  const ticker6 = (t('hero.ticker6') as string) || 'L’ANZA KERATIN';
  const ticker7 = (t('hero.ticker7') as string) || '✦ 4.9 GOOGLE RATING';
  const ticker8 = (t('hero.ticker8') as string) || 'ONLINE BOOKING 24/7';

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-6 overflow-hidden bg-dark-bg">
      {/* Layer 1: Giant Background Watermark Text */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 opacity-[0.04]"
      >
        <span className="font-display text-[18vw] font-bold uppercase tracking-tighter text-white whitespace-nowrap block">
          TRONDHEIM
        </span>
      </div>

      {/* Layer 2: Background Video Stack with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/7686555/pexels-photo-7686555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        >
          <source
            src="https://videos.pexels.com/video-files/7686555/7686555-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/85 to-dark-bg/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-bg/50 to-dark-bg" />
      </div>

      {/* Layer 3: Rotating Text-Only Circular Seal */}
      <div className="hidden xl:flex absolute top-32 right-12 z-20 items-center justify-center pointer-events-none select-none">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8.5px] font-mono tracking-widest fill-copper uppercase font-bold">
              <textPath href="#circlePath">
                TRONDHEIM BARBERSHOP · EST 2018 · MOHOLT &amp; SOLSIDEN ·
              </textPath>
            </text>
          </svg>
          <span className="absolute font-display text-xs font-bold text-paper tracking-wider uppercase">
            C&amp;A
          </span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center my-auto pt-4">
        {/* Layer 4: Kicker with Real Meta */}
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-copper/15 border border-copper/40 text-copper text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
            {eyebrow}
          </div>
        </Reveal>

        {/* Layer 5: Multi-line Poster H1 with Serif Italic Accent Word */}
        <Reveal delay={0.1}>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight leading-[0.95] max-w-5xl mb-6">
            Mesterlig <span className="text-copper italic font-serif lowercase font-normal">{hairart}</span> &amp; Ekte Barbering
          </h1>
        </Reveal>

        {/* Layer 6: Subtitle */}
        <Reveal delay={0.2}>
          <p className="text-base sm:text-xl text-paper/90 max-w-2xl font-normal leading-relaxed mb-8">
            {subtitle}
          </p>
        </Reveal>

        {/* Layer 7: CTA Pair */}
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
            <a
              href="#booking"
              className="w-full sm:w-auto px-8 py-4 bg-copper hover:bg-copper-dark text-white font-display text-base font-bold uppercase tracking-wider rounded transition-all duration-300 shadow-xl shadow-copper/25 hover:scale-[1.02] text-center"
            >
              {ctaPrimary}
            </a>
            <a
              href="#tjenester"
              className="w-full sm:w-auto px-8 py-4 bg-dark-surface/90 hover:bg-dark-card text-paper font-display text-base font-semibold uppercase tracking-wider border border-copper/40 rounded transition-all duration-300 text-center hover:border-copper"
            >
              {ctaSecondary}
            </a>
          </div>
        </Reveal>

        {/* Layer 8: Direct Phone Link */}
        <Reveal delay={0.35}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-5 py-2 rounded bg-dark-surface/80 border border-dark-border text-xs sm:text-sm text-paper/80 mb-8">
            <span>{phoneText}</span>
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="font-mono font-bold text-copper hover:underline tracking-wide"
            >
              {phone}
            </a>
          </div>
        </Reveal>

        {/* Layer 9: 3-Item Meta Strip with Hairline Separators */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark-border/80 border border-dark-border rounded overflow-hidden max-w-4xl w-full text-xs font-mono">
            <div className="bg-dark-surface/90 p-3.5 text-center">
              <span className="text-copper block font-bold uppercase">{hoursTitle}</span>
              <span className="text-paper-muted">{hoursValue}</span>
            </div>
            <div className="bg-dark-surface/90 p-3.5 text-center">
              <span className="text-copper block font-bold uppercase">{locationsTitle}</span>
              <span className="text-paper-muted">{locationsValue}</span>
            </div>
            <div className="bg-dark-surface/90 p-3.5 text-center">
              <span className="text-copper block font-bold uppercase">{ratingTitle}</span>
              <span className="text-paper-muted">{ratingValue}</span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Layer 10: Flanking Mini-Copy Columns */}
      <div className="hidden lg:flex justify-between items-end max-w-7xl mx-auto px-6 w-full text-[11px] font-mono text-paper-muted/80 z-10 my-4">
        <div className="max-w-[200px] text-left border-l border-copper/40 pl-3">
          <span className="text-copper font-bold block uppercase">{marginalMoholtTitle}</span>
          {marginalMoholtDesc}
        </div>
        <div className="max-w-[200px] text-right border-r border-copper/40 pr-3">
          <span className="text-copper font-bold block uppercase">{marginalSolsidenTitle}</span>
          {marginalSolsidenDesc}
        </div>
      </div>

      {/* Layer 11: Classic Bottom Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center mt-4">
        <span className="text-[9px] font-mono tracking-widest text-copper uppercase mb-1">{scroll}</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-copper to-transparent animate-pulse" />
      </div>

      {/* Layer 12: Base Ticker Band */}
      <div className="relative z-10 mt-4 pt-3 pb-1 border-t border-dark-border/60 bg-dark-bg/90 overflow-hidden">
        <Marquee speed={35}>
          <div className="flex items-center gap-12 text-[11px] font-mono uppercase tracking-widest text-paper-muted/80">
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
