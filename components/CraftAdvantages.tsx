"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function CraftAdvantages() {
  const { t } = useLocale();

  const photo1 = "/cowboys-and-angels/media/e60ba6cd1b9f05b4.jpg/v1/fill/w_442,h_589,fp_0.51_0.38,q_90,enc_avif,quality_auto/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg";
  const photo2 = "/cowboys-and-angels/media/a9d41c60c69ccbca.jpg/v1/fill/w_442,h_589,fp_0.44_0.53,q_90,enc_avif,quality_auto/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg";

  const advantages = (t("craft.items") as Array<{ title: string; desc: string }>) || [];

  return (
    <section id="craft" className="py-24 bg-dark-card border-t border-copper/20 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("craft.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            {String(t("craft.title"))}
          </h2>
          <p className="text-xs sm:text-sm text-text-light/70 font-body">
            {String(t("craft.lede"))}
          </p>
        </div>

        {/* 2 Photo Overlapping Cluster + Pull Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Photo Cluster Column (5 cols) */}
          <div className="lg:col-span-5 relative py-6">
            <div className="relative w-4/5 h-80 rounded-sm overflow-hidden border border-copper/30 shadow-2xl z-10">
              <img src={photo1} alt="Cowboys and Angels håndverk" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-12 right-0 w-3/5 h-72 rounded-sm overflow-hidden border-2 border-copper shadow-2xl z-20">
              <img src={photo2} alt="Foilage styling" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 pt-2 border-t border-copper/20 text-[10px] font-display uppercase tracking-widest text-text-light/50">
              SOLSIDEN BARBERSHOP & MOHOLT SALONG · TRONDHEIM
            </div>
          </div>

          {/* Pull Quote & Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-copper pl-6 py-2">
              <blockquote className="text-xl sm:text-2xl font-serif italic text-copper-light leading-relaxed mb-4">
                {String(t("craft.quote"))}
              </blockquote>
              <div className="text-xs font-display uppercase tracking-widest text-text-light/60">
                — {String(t("craft.person_name"))}, {String(t("craft.person_role"))}
              </div>
            </div>

            {/* Stat Numerals Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-copper/15">
              <div>
                <span className="font-display font-bold text-2xl text-copper">2018</span>
                <span className="text-[10px] font-display uppercase tracking-wider text-text-light/60 block">{String(t("craft.est_label"))}</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-copper">2</span>
                <span className="text-[10px] font-display uppercase tracking-wider text-text-light/60 block">{String(t("craft.departments_label"))}</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-copper">10+</span>
                <span className="text-[10px] font-display uppercase tracking-wider text-text-light/60 block">{String(t("craft.stylists_label"))}</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-copper">380+</span>
                <span className="text-[10px] font-display uppercase tracking-wider text-text-light/60 block">{String(t("craft.reviews_label"))}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-dark-bg p-6 rounded-sm border border-copper/20 hover:border-copper transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase mb-3 group-hover:text-copper transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-light/70 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-copper/10 flex justify-end">
                  <a href="#booking" className="text-copper text-[10px] font-display uppercase tracking-widest group-hover:underline">
                    Bestill time →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
