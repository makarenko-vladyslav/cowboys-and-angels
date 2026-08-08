"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface ServiceItem {
  name: string;
  price: string;
  desc: string;
  category: string;
  tag?: string;
}

export default function ServicesMenu() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<'men' | 'women' | 'care'>('men');

  const items = (t('services.items') as ServiceItem[]) || [];
  const filteredItems = items.filter((item) => item.category === activeTab);

  return (
    <section id="tjenester" className="py-24 bg-primary-light text-text-light scroll-mt-20 border-y border-border-dark relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          PRISLISTE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('services.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-4">
            {String(t('services.title'))}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-body">
            {String(t('services.subtitle'))}
          </p>
        </Reveal>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-bg-dark p-1 rounded border border-border-dark">
            <button
              onClick={() => setActiveTab('men')}
              className={`px-6 py-3 rounded text-xs sm:text-sm font-display uppercase font-bold tracking-wider transition-all ${
                activeTab === 'men'
                  ? 'bg-accent text-bg-dark shadow-md'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {String(t('services.tabs.men'))}
            </button>
            <button
              onClick={() => setActiveTab('women')}
              className={`px-6 py-3 rounded text-xs sm:text-sm font-display uppercase font-bold tracking-wider transition-all ${
                activeTab === 'women'
                  ? 'bg-accent text-bg-dark shadow-md'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {String(t('services.tabs.women'))}
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`px-6 py-3 rounded text-xs sm:text-sm font-display uppercase font-bold tracking-wider transition-all ${
                activeTab === 'care'
                  ? 'bg-accent text-bg-dark shadow-md'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              {String(t('services.tabs.care'))}
            </button>
          </div>
        </div>

        {/* Featured Signature Highlight Card */}
        {activeTab === 'women' && (
          <Reveal className="max-w-4xl mx-auto mb-8">
            <div className="bg-bg-card border-2 border-accent p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center gap-6 shadow-2xl relative overflow-hidden">
              <div className="w-full sm:w-48 h-36 rounded overflow-hidden shrink-0 border border-border-dark">
                <img
                  src="https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg"
                  alt="Foilage Fargeteknikk i Trondheim"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="inline-block bg-accent text-bg-dark font-display font-bold text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded">
                  Salongens Signaturbehandling
                </div>
                <h3 className="font-display font-bold uppercase text-2xl text-white">
                  Foilage Fargeteknikk (Moholt)
                </h3>
                <p className="text-text-muted text-xs sm:text-sm font-body">
                  Spesialtilpasset fargeteknikk for maksimal dybde og solkysset glød med L'Anza fargebevarende beskyttelse.
                </p>
                <div className="font-display font-bold text-accent text-xl tabular-nums pt-1">
                  Fra 1 850 NOK
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {activeTab === 'men' && (
          <Reveal className="max-w-4xl mx-auto mb-8">
            <div className="bg-bg-card border-2 border-accent p-6 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center gap-6 shadow-2xl relative overflow-hidden">
              <div className="w-full sm:w-48 h-36 rounded overflow-hidden shrink-0 border border-border-dark">
                <img
                  src="https://static.wixstatic.com/media/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg/v1/fill/w_442,h_589,fp_0.51_0.38,q_90,enc_avif,quality_auto/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg"
                  alt="Royal Hot Towel Shave"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2">
                <div className="inline-block bg-accent text-bg-dark font-display font-bold text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded">
                  Mesterbarber Signatur
                </div>
                <h3 className="font-display font-bold uppercase text-2xl text-white">
                  Royal Hot Towel Shave (Solsiden &amp; Moholt)
                </h3>
                <p className="text-text-muted text-xs sm:text-sm font-body">
                  Klassisk knivbarbering med tre varme dampomslag, preshavolje og beroligende balm.
                </p>
                <div className="font-display font-bold text-accent text-xl tabular-nums pt-1">
                  690 NOK
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Menu Rows with Dotted Leader Lines */}
        <Stagger className="max-w-4xl mx-auto space-y-4">
          {filteredItems.map((item, idx) => (
            <StaggerItem key={idx} className="bg-bg-card p-5 sm:p-6 rounded border border-border-dark hover:border-accent/50 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold uppercase text-lg sm:text-xl text-white">
                    {item.name}
                  </span>
                  {item.tag && (
                    <span className="text-[10px] font-display uppercase tracking-widest font-bold bg-accent/15 text-accent border border-accent/30 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  )}
                </div>
                
                {/* Dotted leader line for wide screens */}
                <div className="hidden sm:block flex-1 mx-4 border-b border-dotted border-border-dark opacity-40" />

                <span className="font-display font-bold text-accent text-xl whitespace-nowrap tabular-nums">
                  {item.price}
                </span>
              </div>
              
              <p className="text-text-muted text-xs sm:text-sm mt-2 max-w-2xl font-body leading-relaxed">
                {item.desc}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footnote Line */}
        <div className="text-center mt-8 text-xs text-text-muted font-body italic max-w-2xl mx-auto">
          {String(t('services.footnote'))}
        </div>

        {/* Direct CTA link Pair */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#bestilling"
            className="bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded transition-colors shadow-lg"
          >
            Bestill Behandling Nå
          </a>

          <a
            href="tel:+4773931100"
            className="text-text-light hover:text-accent font-display font-semibold uppercase tracking-wider text-xs px-6 py-3.5 rounded border border-border-dark transition-colors"
          >
            Ring oss: +47 73 93 11 00
          </a>
        </div>

      </div>
    </section>
  );
}
