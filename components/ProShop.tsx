"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

const products = [
  {
    name: "L'ANZA Healing Colorcare Shampoo",
    tag: "Fargebevarende & UV-skjold",
    desc: "Inneholder Keratin Healing System som forlenger fargens levetid og beskytter mot solens stråler.",
    img: "https://static.wixstatic.com/media/11062b_37cdd7c620844a3284ac6a127e864ab2~mv2.jpg/v1/fill/w_357,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_37cdd7c620844a3284ac6a127e864ab2~mv2.jpg"
  },
  {
    name: "KEUNE Curl Control Shampoo & Balsam",
    tag: "Definisjon & Fukt for Krøller",
    desc: "Spesialutviklet for å gi spenst, glans og maksimal definisjon uten å tynge krøllene.",
    img: "https://static.wixstatic.com/media/11062b_2f955a384e0d4c1bafa61c69ef1168a3~mv2.jpg/v1/fill/w_357,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2f955a384e0d4c1bafa61c69ef1168a3~mv2.jpg"
  },
  {
    name: "BEARDBURYS Clear Shampoo (Unisex)",
    tag: "Balanserende Talgkontroll",
    desc: "Effektiv for fet eller svett hodebunn med forfriskende duft av ekte lime.",
    img: "https://static.wixstatic.com/media/3b44bc1274d643c6a2850d4e4103ce3c.jpg/v1/fill/w_366,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b44bc1274d643c6a2850d4e4103ce3c.jpg"
  }
];

export default function ProShop() {
  const { t } = useLocale();

  return (
    <section id="shop" className="py-20 bg-dark-surface border-y border-dark-border relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            {(t('proShop.eyebrow') as string) || 'PROFESJONELL HJEMMEPLEIE'}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            {(t('proShop.title') as string) || 'Anbefalte Produkter fra Vår Shop'}
          </h2>
          <p className="text-sm text-paper-muted">
            {(t('proShop.subtitle') as string) || 'Sikre at fargen varer og skjegget holdes mykt med profesjonell hårkjemi.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="p-6 rounded-lg bg-dark-bg border border-dark-border hover:border-copper/50 transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="aspect-[4/3] rounded overflow-hidden mb-6 bg-dark-card">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-copper uppercase tracking-wider block mb-2">
                    {p.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-paper mb-2 group-hover:text-copper transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-paper-muted leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <a
                  href="https://www.cowboysandangels.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-dark-surface hover:bg-copper text-paper hover:text-white font-display text-xs font-bold uppercase tracking-wider rounded border border-dark-border transition-all text-center block"
                >
                  Kjøp i Nettbutikk ↗
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
