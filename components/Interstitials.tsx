"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "./motion";

export function RatingStrip() {
  const { t } = useLocale();
  const items = [
    String(t("interstitials.ticker_1") || "4.9 / 5.0 GOOGLE RATING · 380+ VERIFISERTE GJESTER"),
    String(t("interstitials.ticker_2") || "MOHOLT SALONG · SOLSIDEN BARBERSHOP"),
    String(t("interstitials.ticker_3") || "OFFISIELL L'ANZA OG KEUNE FORHANDLER"),
    String(t("interstitials.ticker_4") || "SKARPE LINJER · KNIVBARBERING · FOILAGE")
  ];

  return (
    <div className="bg-copper/10 border-y border-copper/30 py-3 relative z-20 overflow-hidden">
      <Marquee items={items} speed={25} />
    </div>
  );
}

export function LabeledHairline({ labelKey, fallback }: { labelKey?: string; fallback: string }) {
  const { t } = useLocale();
  const text = labelKey ? String(t(labelKey)) : fallback;
  return (
    <div className="py-6 bg-dark-bg flex items-center justify-center border-y border-copper/15">
      <span className="text-[10px] font-display uppercase tracking-[0.3em] text-copper-light font-bold">
        — {text} —
      </span>
    </div>
  );
}

export function WatermarkBanner({ textKey, fallback }: { textKey?: string; fallback: string }) {
  const { t } = useLocale();
  const text = textKey ? String(t(textKey)) : fallback;
  return (
    <div className="py-8 bg-dark-card border-y border-copper/20 overflow-hidden flex items-center justify-center">
      <span className="font-display font-bold text-3xl sm:text-6xl uppercase tracking-widest text-copper/15 select-none whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
