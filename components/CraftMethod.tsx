"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function CraftMethod() {
  const { t } = useLocale();

  const establishedText = (t('craft.established') as string) || 'Etablert';
  const salonsText = (t('craft.salonger') as string) || 'Salonger';
  const stylistsText = (t('craft.stylists') as string) || 'Stylister';
  const reviewsText = (t('craft.omtaler') as string) || 'Omtaler';

  return (
    <section className="py-20 bg-dark-surface border-y border-dark-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Pull-Quote Stack */}
          <div className="lg:col-span-6">
            <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
              {(t('craft.eyebrow') as string) || 'EKTE HÅNDVERK OG VITENSKAP'}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              {(t('craft.title') as string) || 'Hvorfor Trondheim Velger Cowboys and Angels'}
            </h2>
            <p className="text-sm sm:text-base text-paper-muted leading-relaxed mb-6">
              {(t('craft.subtitle') as string) || 'Vi kombinerer barberingens tradisjonsrike magi med L’Anza og Keunes avanserte fargevitenskap for sunne, langvarige resultater.'}
            </p>

            {/* Oversized Statement Line / Pull-Quote */}
            <div className="p-4 border-l-2 border-copper bg-dark-bg/60 rounded-r mb-8">
              <p className="font-serif italic text-base sm:text-lg text-paper">
                "Presisjon handler ikke om fart, men om at hver linje følger hodeform og naturlig hårvekst."
              </p>
              <span className="text-xs font-mono text-copper mt-2 block">
                Jan Emil — Daglig Leder &amp; Mesterfrisør
              </span>
            </div>

            {/* Stat Row of 4 Real Numerals */}
            <div className="grid grid-cols-4 gap-2 mb-8 p-4 bg-dark-bg rounded border border-dark-border text-center">
              <div>
                <span className="font-display text-2xl font-bold text-copper block">2018</span>
                <span className="text-[9px] font-mono text-paper-muted uppercase">{establishedText}</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-copper block">2</span>
                <span className="text-[9px] font-mono text-paper-muted uppercase">{salonsText}</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-copper block">10</span>
                <span className="text-[9px] font-mono text-paper-muted uppercase">{stylistsText}</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-copper block">580+</span>
                <span className="text-[9px] font-mono text-paper-muted uppercase">{reviewsText}</span>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <Reveal delay={0.1}>
                <div className="p-4 rounded bg-dark-bg border border-dark-border">
                  <h3 className="font-display text-lg font-bold uppercase text-paper mb-1">
                    {(t('craft.f1Title') as string) || 'Presisjon i Foilage & Balayage'}
                  </h3>
                  <p className="text-xs text-paper-muted leading-relaxed">
                    {(t('craft.f1Desc') as string) || 'Foilage kombinerer folieteknikkens opplysende kraft med balayagens myke overganger.'}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-4 rounded bg-dark-bg border border-dark-border">
                  <h3 className="font-display text-lg font-bold uppercase text-paper mb-1">
                    {(t('craft.f2Title') as string) || 'Tradisjonell Knivbarbering'}
                  </h3>
                  <p className="text-xs text-paper-muted leading-relaxed">
                    {(t('craft.f2Desc') as string) || 'Varme omslag, presis knivføring og beroligende etterbehandling for den tetteste barberingen.'}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right 2-Photo Overlapped Cluster + Video */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative rounded-lg overflow-hidden border border-copper/30 shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.pexels.com/videos/4178342/barber-barber-shop-barbering-barbershop-4178342.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
                className="w-full h-[360px] object-cover"
              >
                <source
                  src="https://videos.pexels.com/video-files/4178342/4178342-hd_1920_1080_30fps.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 bg-copper text-white text-[10px] font-mono tracking-widest uppercase font-bold rounded mb-1">
                  BARBERING PÅ SOLSIDEN
                </span>
                <p className="text-xs font-mono text-paper-muted">
                  Solsiden Barbershop — Tradisjonell knivbarbering med varme omslag
                </p>
              </div>
            </div>

            {/* Overlapped Photo Pair */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded border border-dark-border overflow-hidden h-44">
                <img
                  src="https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg"
                  alt="Solsiden Barbershop Interiør"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded border border-copper/40 overflow-hidden h-44">
                <img
                  src="https://static.wixstatic.com/media/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg/v1/fill/w_980,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg"
                  alt="Foilage Fargebehandling"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
