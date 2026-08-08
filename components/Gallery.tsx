"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

export default function Gallery() {
  const { t } = useLocale();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // REAL client images from brief
  const images = [
    "https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg",
    "https://static.wixstatic.com/media/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg/v1/fill/w_980,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg",
    "https://static.wixstatic.com/media/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg/v1/fill/w_442,h_589,fp_0.51_0.38,q_90,enc_avif,quality_auto/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg",
    "https://static.wixstatic.com/media/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg/v1/fill/w_442,h_589,fp_0.44_0.53,q_90,enc_avif,quality_auto/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg",
    "https://static.wixstatic.com/media/973894_b0dc977af7f4442398681c008281315c~mv2.jpg/v1/fill/w_442,h_589,fp_0.57_0.56,q_90,enc_avif,quality_auto/973894_b0dc977af7f4442398681c008281315c~mv2.jpg",
    "https://static.wixstatic.com/media/973894_5b010104c11b4317979a8959a6ebf3a8~mv2.jpg/v1/fill/w_442,h_589,fp_0.64_0.49,q_90,enc_avif,quality_auto/973894_5b010104c11b4317979a8959a6ebf3a8~mv2.jpg",
    "https://static.wixstatic.com/media/973894_14733a7245d04b8b845a45e8415e5584~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/973894_14733a7245d04b8b845a45e8415e5584~mv2.jpg",
    "https://static.wixstatic.com/media/973894_314ea4e82dff4c38b1e91a230562457f~mv2.jpg/v1/fill/w_442,h_589,fp_0.24_0.6,q_90,enc_avif,quality_auto/973894_314ea4e82dff4c38b1e91a230562457f~mv2.jpg",
    "https://static.wixstatic.com/media/973894_e38de253b652467890683b9212aca318~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/973894_e38de253b652467890683b9212aca318~mv2.jpg"
  ];

  return (
    <section id="galleri" className="py-24 bg-bg-dark text-text-light scroll-mt-20 relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          GALLERI
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('gallery.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-4">
            {String(t('gallery.title'))}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-body">
            {String(t('gallery.subtitle'))}
          </p>
        </Reveal>

        {/* Responsive Photo Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <StaggerItem key={idx}>
              <div
                onClick={() => setActiveImage(src)}
                className="group relative overflow-hidden rounded border border-border-dark bg-bg-card aspect-[4/5] cursor-pointer shadow-lg hover:border-accent transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Cowboys and Angels arbeid ${idx + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="font-display font-bold text-xs uppercase tracking-widest text-accent">
                    Klikk for å forstørre
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footnote Social Link */}
        <div className="text-center mt-12 text-xs text-text-muted font-display uppercase tracking-wider">
          Se flere daglige behandlinger på vår Instagram{' '}
          <a
            href="https://www.instagram.com/cowboysandangels_moholt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-white transition-colors"
          >
            @cowboysandangels_moholt ↗
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded border border-border-dark">
            <img src={activeImage} alt="Forstørret bilde" className="w-full h-full object-contain" />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-accent text-bg-dark font-display font-bold px-3 py-1.5 rounded text-xs uppercase"
            >
              Lukk ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
