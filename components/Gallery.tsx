"use client";

import React, { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

// Real client photo URLs strictly from <client_images>
const galleryItems = [
  {
    url: 'https://static.wixstatic.com/media/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg/v1/fill/w_980,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg',
    title: 'Foilage Blond Balayage',
    category: 'farge'
  },
  {
    url: 'https://static.wixstatic.com/media/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg/v1/fill/w_442,h_589,fp_0.51_0.38,q_90,enc_avif,quality_auto/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg',
    title: 'Moderne Herreklipp & Fade',
    category: 'herre'
  },
  {
    url: 'https://static.wixstatic.com/media/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg/v1/fill/w_442,h_589,fp_0.44_0.53,q_90,enc_avif,quality_auto/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg',
    title: 'Skjeggform & Knivkontur',
    category: 'herre'
  },
  {
    url: 'https://static.wixstatic.com/media/973894_b0dc977af7f4442398681c008281315c~mv2.jpg/v1/fill/w_442,h_589,fp_0.57_0.56,q_90,enc_avif,quality_auto/973894_b0dc977af7f4442398681c008281315c~mv2.jpg',
    title: 'Klassisk Teksturert Styling',
    category: 'styling'
  },
  {
    url: 'https://static.wixstatic.com/media/973894_5b010104c11b4317979a8959a6ebf3a8~mv2.jpg/v1/fill/w_442,h_589,fp_0.64_0.49,q_90,enc_avif,quality_auto/973894_5b010104c11b4317979a8959a6ebf3a8~mv2.jpg',
    title: 'Dyp Fargeglans Behandling',
    category: 'farge'
  },
  {
    url: 'https://static.wixstatic.com/media/973894_14733a7245d04b8b845a45e8415e5584~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/973894_14733a7245d04b8b845a45e8415e5584~mv2.jpg',
    title: 'Event & Brudestyling',
    category: 'styling'
  },
  {
    url: 'https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg',
    title: 'Barbershop Atmosfære Solsiden',
    category: 'herre'
  },
  {
    url: 'https://static.wixstatic.com/media/11062b_2f955a384e0d4c1bafa61c69ef1168a3~mv2.jpg/v1/fill/w_357,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2f955a384e0d4c1bafa61c69ef1168a3~mv2.jpg',
    title: 'Profesjonelle Verktøy & Saks',
    category: 'herre'
  }
];

export default function Gallery() {
  const { t } = useLocale();
  const [filter, setFilter] = useState<'all' | 'farge' | 'herre' | 'styling'>('all');

  const eyebrow = (t('gallery.eyebrow') as string) || 'EKTE RESULTATER FRA VÅRE STYLISTER';
  const title = (t('gallery.title') as string) || 'Inspirasjon & Portefølje';
  const subtitle = (t('gallery.subtitle') as string) || 'Utforsk nylige arbeider utført i våre salonger på Moholt og Solsiden.';

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter((i) => i.category === filter);

  return (
    <section id="galleri" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-paper-muted">{subtitle}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Alle Arbeider' },
            { id: 'farge', label: 'Foilage & Farge' },
            { id: 'herre', label: 'Herre & Skjegg' },
            { id: 'styling', label: 'Styling & Oppsett' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 text-xs font-mono uppercase rounded transition-all ${
                filter === btn.id
                  ? 'bg-copper text-white font-bold'
                  : 'bg-dark-surface text-paper-muted hover:text-paper border border-dark-border'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="group relative overflow-hidden rounded bg-dark-surface border border-dark-border aspect-[3/4]">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-mono text-copper uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <p className="font-display text-lg font-bold text-white uppercase leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
