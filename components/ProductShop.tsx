"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function ProductShop() {
  const { t } = useLocale();

  const rawProducts = (t("shop.products") as Array<{ name: string; desc: string; tag: string }>) || [];

  const images = [
    "https://static.wixstatic.com/media/973894_4d8cbed4ea744a8087f047896d4aabc3~mv2.webp/v1/crop/x_0,y_67,w_500,h_491,q_80,enc_auto/973894_4d8cbed4ea744a8087f047896d4aabc3~mv2.webp",
    "https://static.wixstatic.com/media/973894_d0a9efdba4e7459989f9612b17e9c28d~mv2.png/v1/crop/x_0,y_0,w_709,h_450,q_85,enc_auto/973894_d0a9efdba4e7459989f9612b17e9c28d~mv2.png",
    "https://static.wixstatic.com/media/973894_cbcf7ada9f8c487493d3b3941196523e~mv2.jpg/v1/crop/x_0,y_0,w_596,h_447,q_80,enc_auto/973894_cbcf7ada9f8c487493d3b3941196523e~mv2.jpg"
  ];

  const products = rawProducts.map((p, i) => ({
    ...p,
    img: images[i] || images[0]
  }));

  return (
    <section className="py-24 bg-dark-bg border-t border-copper/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("shop.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            {String(t("shop.title"))}
          </h2>
          <p className="text-xs sm:text-sm text-text-light/70 font-body">
            {String(t("shop.subtitle"))}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-dark-card rounded-sm border border-copper/20 overflow-hidden flex flex-col justify-between h-full group hover:border-copper transition-all">
                <div className="relative h-60 overflow-hidden bg-white/5 p-4 flex items-center justify-center">
                  <img
                    src={prod.img}
                    alt={prod.name}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-copper text-white text-[9px] font-display uppercase tracking-widest px-2.5 py-1">
                    {prod.tag}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-display font-bold text-white mb-2">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-text-light/70 font-body leading-relaxed mb-6">
                      {prod.desc}
                    </p>
                  </div>

                  <a
                    href="https://www.cowboysandangels.shop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-dark-bg hover:bg-copper border border-copper/30 hover:border-copper text-text-light hover:text-white text-xs font-display font-bold uppercase tracking-wider py-3 rounded-sm transition-colors"
                  >
                    {String(t("shop.buy_cta"))}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.cowboysandangels.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-copper hover:text-copper-light font-display text-xs uppercase tracking-widest border-b border-copper/40 pb-1"
          >
            <span>{String(t("shop.shop_cta"))}</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
