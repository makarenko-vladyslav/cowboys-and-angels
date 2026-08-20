"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function PriceMenu() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<"herre" | "dame" | "farge" | "skjegg" | "pleie">("herre");

  const rawMenuData = t("services.items") as Record<string, Array<{ name: string; price: string; note: string; tag?: string }>> | undefined;
  
  const menuData = rawMenuData || {
    herre: [],
    dame: [],
    farge: [],
    skjegg: [],
    pleie: []
  };

  const currentList = menuData[activeCategory] || [];
  const featuredItem = currentList[0] || { name: "", price: "", note: "" };

  return (
    <section id="services" className="py-24 bg-dark-card border-y border-copper/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("services.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            {String(t("services.title"))}
          </h2>
          <p className="text-xs sm:text-sm text-text-light/70 font-body">
            {String(t("services.subtitle"))}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {(["herre", "dame", "farge", "skjegg", "pleie"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-sm text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-copper text-white shadow-lg"
                  : "bg-dark-bg border border-copper/20 text-text-light/70 hover:text-white hover:border-copper/50"
              }`}
            >
              {String(t(`services.categories.${cat}`))}
            </button>
          ))}
        </div>

        {/* Signature Highlight Card for Active Category */}
        {featuredItem.name && (
          <Reveal direction="up">
            <div className="mb-8 p-6 bg-copper/10 border border-copper/40 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-display uppercase tracking-widest text-copper font-bold block mb-1">
                  {String(t("services.featured_title"))}
                </span>
                <h3 className="text-xl font-display font-bold text-white uppercase">
                  {featuredItem.name}
                </h3>
                <p className="text-xs text-text-light/80 font-body mt-1">
                  {featuredItem.note}
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-2xl font-display font-bold text-copper-light">
                  {featuredItem.price}
                </span>
                <a
                  href="#booking"
                  className="bg-copper hover:bg-copper-dark text-white font-display font-bold uppercase tracking-widest text-xs px-5 py-3 rounded-sm transition-colors"
                >
                  {String(t("services.book_btn"))}
                </a>
              </div>
            </div>
          </Reveal>
        )}

        {/* Price List Rows with Dotted Leader Lines */}
        <Reveal direction="up">
          <div className="bg-dark-bg/90 rounded-sm border border-copper/30 p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto divide-y divide-copper/10">
            {currentList.map((item, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group">
                <div className="flex-1 pr-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-copper transition-colors">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[9px] font-display font-bold uppercase tracking-wider text-copper bg-copper/15 border border-copper/30 px-2 py-0.5 rounded-sm">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-text-light/60 font-body mt-1">
                    {item.note}
                  </p>
                </div>

                {/* Dotted Leader Line for Desktop */}
                <div className="hidden sm:block border-b border-dotted border-copper/30 flex-1 mx-3 mb-1" />

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 mt-2 sm:mt-0">
                  <span className="text-base sm:text-lg font-display font-bold text-copper-light font-mono">
                    {item.price}
                  </span>
                  <a
                    href="#booking"
                    className="text-[10px] font-display uppercase tracking-widest text-copper border border-copper/40 px-3 py-1.5 rounded-sm hover:bg-copper hover:text-white transition-colors"
                  >
                    {String(t("services.book_short"))}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Footnote Line & Secondary CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-xs font-body text-text-light/60 border-t border-copper/15 pt-6">
          <p>
            {String(t("services.footnote"))}
          </p>
          <a
            href="#booking"
            className="text-copper font-display font-bold uppercase tracking-wider hover:underline shrink-0"
          >
            {String(t("services.cta"))} →
          </a>
        </div>
      </div>
    </section>
  );
}
