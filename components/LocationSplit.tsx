"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function LocationSplit() {
  const { t } = useLocale();

  const moholtImg = "https://static.wixstatic.com/media/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg/v1/fill/w_980,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg";
  const solsidenImg = "https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg";

  return (
    <section id="locations" className="py-24 bg-dark-bg relative overflow-hidden scroll-mt-20 border-t border-copper/20">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5 text-white z-0 overflow-hidden" aria-hidden="true">
        <span className="font-display font-bold text-[16vw] uppercase tracking-widest whitespace-nowrap">
          SOLSIDEN · MOHOLT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("locations.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            {String(t("locations.title"))}
          </h2>
          <p className="text-sm text-text-light/70 font-body">
            {String(t("locations.lede"))}
          </p>
        </div>

        {/* 2 Column Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Moholt Branch */}
          <Reveal direction="up" delay={0.1}>
            <div className="bg-dark-card rounded-sm overflow-hidden border border-copper/30 hover:border-copper transition-all duration-300 group flex flex-col h-full shadow-2xl">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={moholtImg}
                  alt={String(t("locations.moholt.name"))}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-copper text-white text-[10px] font-display font-bold uppercase tracking-widest px-3 py-1">
                  {String(t("locations.moholt.spec"))}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">
                    {String(t("locations.moholt.title"))}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light/80 mb-6 font-body leading-relaxed">
                    {String(t("locations.moholt.subtitle"))}
                  </p>

                  <div className="space-y-2 border-t border-copper/15 pt-4 mb-6 text-xs text-text-light/70 font-body">
                    <div className="flex justify-between py-1 border-b border-copper/10">
                      <span className="font-display font-bold text-copper-light">{String(t("locations.address_label"))}</span>
                      <span>{String(t("locations.moholt.address"))}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-copper/10">
                      <span className="font-display font-bold text-copper-light">{String(t("locations.hours_label"))}</span>
                      <span>{String(t("locations.moholt.hours"))}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-display font-bold text-copper-light">{String(t("locations.phone_label"))}</span>
                      <a href={`tel:${String(t("locations.moholt.phone"))}`} className="hover:text-copper transition-colors">
                        {String(t("locations.moholt.phone"))}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-copper/15">
                  <a
                    href="#booking"
                    className="flex-1 text-center bg-copper hover:bg-copper-dark text-white font-display font-bold uppercase tracking-widest text-xs py-3.5 rounded-sm transition-colors"
                  >
                    Bestill Time (Moholt)
                  </a>
                  <a
                    href={`tel:${String(t("locations.moholt.phone"))}`}
                    className="px-5 py-3.5 bg-dark-bg border border-copper/30 hover:border-copper text-copper-light text-xs font-display uppercase tracking-wider rounded-sm transition-colors"
                  >
                    Ring
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Solsiden Branch */}
          <Reveal direction="up" delay={0.25}>
            <div className="bg-dark-card rounded-sm overflow-hidden border border-copper/30 hover:border-copper transition-all duration-300 group flex flex-col h-full shadow-2xl">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={solsidenImg}
                  alt={String(t("locations.solsiden.name"))}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-amber-gold text-dark-bg text-[10px] font-display font-bold uppercase tracking-widest px-3 py-1">
                  {String(t("locations.solsiden.spec"))}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white uppercase mb-2">
                    {String(t("locations.solsiden.title"))}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-light/80 mb-6 font-body leading-relaxed">
                    {String(t("locations.solsiden.subtitle"))}
                  </p>

                  <div className="space-y-2 border-t border-copper/15 pt-4 mb-6 text-xs text-text-light/70 font-body">
                    <div className="flex justify-between py-1 border-b border-copper/10">
                      <span className="font-display font-bold text-copper-light">{String(t("locations.address_label"))}</span>
                      <span>{String(t("locations.solsiden.address"))}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-copper/10">
                      <span className="font-display font-bold text-copper-light">{String(t("locations.hours_label"))}</span>
                      <span>{String(t("locations.solsiden.hours"))}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-display font-bold text-copper-light">{String(t("locations.phone_label"))}</span>
                      <a href={`tel:${String(t("locations.solsiden.phone"))}`} className="hover:text-copper transition-colors">
                        {String(t("locations.solsiden.phone"))}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-copper/15">
                  <a
                    href="#booking"
                    className="flex-1 text-center bg-copper hover:bg-copper-dark text-white font-display font-bold uppercase tracking-widest text-xs py-3.5 rounded-sm transition-colors"
                  >
                    Bestill Time (Solsiden)
                  </a>
                  <a
                    href={`tel:${String(t("locations.solsiden.phone"))}`}
                    className="px-5 py-3.5 bg-dark-bg border border-copper/30 hover:border-copper text-copper-light text-xs font-display uppercase tracking-wider rounded-sm transition-colors"
                  >
                    Ring
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
