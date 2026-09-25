"use client";
import { useLocale } from "@/lib/i18n";
import { Marquee } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t("stats") as Array<{ num: string; label: string }>;

  return (
    <section className="bg-bg-surface border-y border-border-dark relative overflow-hidden">
      {/* Interstitial Ticker Bar at section entry using Marquee primitive */}
      <div className="py-2.5 bg-bg-dark border-b border-border-dark overflow-hidden">
        <Marquee className="text-xs tracking-widest font-display text-text-light-muted uppercase">
          <span className="mx-6">{String(t("proof.tickerPhrase"))}</span>
        </Marquee>
      </div>

      {/* Proof Section Body (>=6 Layers: kicker, heading, pull-quote, attribution, rating, stats) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Pull-quote with oversized typographic quotation mark */}
          <div className="lg:col-span-7 border-l-2 border-accent pl-6 sm:pl-8">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
              {String(t("proof.kicker"))}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight mb-4">
              {String(t("proof.heading"))}
            </h2>

            <div className="relative">
              <span className="font-display text-6xl text-accent/30 leading-none select-none absolute -top-5 -left-3 pointer-events-none">
                «
              </span>
              <p className="font-display text-lg sm:text-2xl text-text-light leading-snug uppercase mb-4 relative z-10 pt-2">
                {String(t("proof.quote"))}
              </p>
            </div>

            <div className="flex flex-wrap items-baseline gap-3 text-xs sm:text-sm">
              <span className="font-bold text-white uppercase">{String(t("proof.author"))}</span>
              <span className="text-text-light-muted">— {String(t("proof.authorMeta"))}</span>
              <span className="text-accent font-semibold ml-auto">{String(t("proof.counter"))}</span>
            </div>
          </div>

          {/* Right: Score card & Named review source */}
          <div className="lg:col-span-5 bg-bg-dark border border-border-dark rounded p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-border-dark/60">
              <div className="font-display text-4xl sm:text-5xl font-bold text-accent tabular-nums">
                {String(t("proof.ratingScore"))}
              </div>
              <div className="text-right text-xs uppercase tracking-wider text-text-light-muted">
                {String(t("proof.ratingSource"))}
              </div>
            </div>

            {/* 4 Numerals with tabular-nums */}
            <div className="grid grid-cols-2 gap-4 text-left">
              {Array.isArray(stats) &&
                stats.map((item, idx) => (
                  <div key={idx} className="border-t border-border-dark/40 pt-2">
                    <div className="font-display text-2xl font-bold text-white tabular-nums">
                      {item.num}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-text-light-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
