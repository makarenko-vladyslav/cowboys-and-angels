"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="bg-dark-bg border-b border-copper/20 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-copper/10 last:border-r-0 pr-4">
            <span className="font-display text-3xl sm:text-4xl font-bold text-copper-light block">2018</span>
            <span className="text-[10px] font-display uppercase tracking-widest text-text-light/60">{String(t("social_proof.est"))}</span>
          </div>
          <div className="border-r border-copper/10 last:border-r-0 pr-4">
            <span className="font-display text-3xl sm:text-4xl font-bold text-copper-light block">2</span>
            <span className="text-[10px] font-display uppercase tracking-widest text-text-light/60">{String(t("social_proof.salons"))}</span>
          </div>
          <div className="border-r border-copper/10 last:border-r-0 pr-4">
            <span className="font-display text-3xl sm:text-4xl font-bold text-copper-light block">4.9 / 5</span>
            <span className="text-[10px] font-display uppercase tracking-widest text-text-light/60">{String(t("social_proof.score"))}</span>
          </div>
          <div>
            <span className="font-display text-3xl sm:text-4xl font-bold text-copper-light block">10+</span>
            <span className="text-[10px] font-display uppercase tracking-widest text-text-light/60">{String(t("social_proof.stylists"))}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
