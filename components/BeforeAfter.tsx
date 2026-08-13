"use client";

import React, { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<'all' | 'case1' | 'case2'>('all');

  return (
    <section className="py-20 bg-dark-surface border-y border-dark-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            {(t('beforeAfter.eyebrow') as string) || 'TRANSFORMASJONER'}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-3">
            {(t('beforeAfter.title') as string) || 'Før & Etter Bildebevis'}
          </h2>
          <p className="text-sm text-paper-muted mb-6">
            {(t('beforeAfter.subtitle') as string) || 'Se ekte forvandlinger utført av våre stylister.'}
          </p>

          {/* Interactive filter selector pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'Alle Cases' },
              { id: 'case1', label: 'Case 01 · Foilage' },
              { id: 'case2', label: 'Case 02 · Skjegg' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-mono uppercase rounded transition-all ${
                  activeTab === tab.id
                    ? 'bg-copper text-white font-bold shadow-md shadow-copper/20'
                    : 'bg-dark-bg text-paper-muted hover:text-paper border border-dark-border'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {/* Pair 1: Foilage Blonde Rejuvenation */}
          {(activeTab === 'all' || activeTab === 'case1') && (
            <Reveal>
              <div className="p-6 sm:p-8 rounded-lg bg-dark-bg border border-dark-border">
                <div className="mb-6">
                  <span className="text-xs font-mono text-copper uppercase tracking-widest block mb-1">
                    CASE 01 · MOHOLT SALONG
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-paper">
                    {(t('beforeAfter.pair1.title') as string) || 'Foilage Rejuvenation — Fra Mat til Levende Blond'}
                  </h3>
                  <p className="text-xs sm:text-sm text-paper-muted mt-2 max-w-3xl">
                    {(t('beforeAfter.pair1.desc') as string) || 'Behandling med L’Anza Keratin og mikrosegmentert foliering for en sømløs, solkysset finish uten synlig ettervekst.'}
                  </p>
                </div>

                {/* Large Comparison Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative rounded overflow-hidden border border-dark-border group aspect-[4/3]">
                    <img
                      src="https://static.wixstatic.com/media/973894_cd5924039a46493ca9a4f4d21e5118e4~mv2.jpg/v1/fill/w_442,h_589,fp_0.49_0.44,q_90,enc_avif,quality_auto/973894_cd5924039a46493ca9a4f4d21e5118e4~mv2.jpg"
                      alt="Før behandling"
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-90 grayscale"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 px-3 py-1 font-mono text-xs font-bold text-copper uppercase border border-copper/40 rounded">
                      FØR BEHANDLING
                    </span>
                  </div>

                  <div className="relative rounded overflow-hidden border border-copper/50 group aspect-[4/3]">
                    <img
                      src="https://static.wixstatic.com/media/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg/v1/fill/w_980,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg"
                      alt="Etter Foilage resultat"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-copper px-3 py-1 font-mono text-xs font-bold text-white uppercase rounded shadow-lg">
                      ETTER RESULTAT (FOILAGE)
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* Pair 2: Beard Architecture */}
          {(activeTab === 'all' || activeTab === 'case2') && (
            <Reveal delay={0.1}>
              <div className="p-6 sm:p-8 rounded-lg bg-dark-bg border border-dark-border">
                <div className="mb-6">
                  <span className="text-xs font-mono text-copper uppercase tracking-widest block mb-1">
                    CASE 02 · SOLSIDEN BARBERSHOP
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-paper">
                    {(t('beforeAfter.pair2.title') as string) || 'Skjeggarkitektur & Konturskarphet'}
                  </h3>
                  <p className="text-xs sm:text-sm text-paper-muted mt-2 max-w-3xl">
                    {(t('beforeAfter.pair2.desc') as string) || 'Full skjeggtrim med varme omslag og knivfinisjering på Solsiden Barbershop.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative rounded overflow-hidden border border-dark-border group aspect-[4/3]">
                    <img
                      src="https://static.wixstatic.com/media/973894_e38de253b652467890683b9212aca318~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/973894_e38de253b652467890683b9212aca318~mv2.jpg"
                      alt="Uformet skjegg før"
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-90 grayscale"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 px-3 py-1 font-mono text-xs font-bold text-copper uppercase border border-copper/40 rounded">
                      UFORMET SKJEGG
                    </span>
                  </div>

                  <div className="relative rounded overflow-hidden border border-copper/50 group aspect-[4/3]">
                    <img
                      src="https://static.wixstatic.com/media/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg/v1/fill/w_442,h_589,fp_0.44_0.53,q_90,enc_avif,quality_auto/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg"
                      alt="Etter knivbarbering og trim"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-copper px-3 py-1 font-mono text-xs font-bold text-white uppercase rounded shadow-lg">
                      KNIVTRIMMET &amp; SKARPT
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
