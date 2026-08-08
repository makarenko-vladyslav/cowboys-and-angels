"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface ProductItem {
  name: string;
  price: string;
  desc: string;
  tag: string;
}

export default function ProductsShop() {
  const { t } = useLocale();
  const products = (t('products.items') as ProductItem[]) || [];

  return (
    <section id="butikk" className="py-24 bg-primary-light text-text-light scroll-mt-20 border-y border-border-dark relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          NETTBUTIKK
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('products.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-4">
            {String(t('products.title'))}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-body">
            {String(t('products.subtitle'))}
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-bg-card border border-border-dark p-6 rounded-lg flex flex-col justify-between h-full hover:border-accent transition-all duration-300 group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-display uppercase font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded">
                      {prod.tag}
                    </span>
                    <span className="font-display font-bold text-accent text-lg tabular-nums">
                      {prod.price}
                    </span>
                  </div>

                  <h3 className="font-display font-bold uppercase text-base text-white group-hover:text-accent transition-colors leading-snug mb-3">
                    {prod.name}
                  </h3>

                  <p className="text-text-muted text-xs font-body leading-relaxed mb-6">
                    {prod.desc}
                  </p>
                </div>

                <a
                  href="https://www.cowboysandangels.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 rounded bg-primary-light hover:bg-accent hover:text-bg-dark border border-border-dark text-text-light font-display font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Kjøp i Nettbutikk ↗
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Footnote on salon availability */}
        <div className="text-center mt-10 text-xs text-text-muted font-body">
          Kan også kjøpes direkte i våre salonger på Moholt og Solsiden i åpningstiden.
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.cowboysandangels.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded transition-colors shadow-lg"
          >
            {String(t('products.shopLink'))}
          </a>
        </div>

      </div>
    </section>
  );
}
