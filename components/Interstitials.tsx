"use client";

interface StatementStripProps {
  quote: string;
  source: string;
}

export function StatementStrip({ quote, source }: StatementStripProps) {
  return (
    <div className="bg-bg-dark border-y border-border-dark py-6 sm:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <p className="font-display text-xl sm:text-2xl text-white uppercase tracking-tight max-w-3xl">
          {quote}
        </p>
        <span className="text-xs uppercase tracking-widest text-accent font-semibold whitespace-nowrap">
          {source}
        </span>
      </div>
    </div>
  );
}

interface LabeledHairlineProps {
  label: string;
}

export function LabeledHairline({ label }: LabeledHairlineProps) {
  return (
    <div className="bg-bg-surface py-3 border-y border-border-dark/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-text-light-muted">
        <span>{label}</span>
        <span className="hidden sm:inline text-accent">TRONDHEIM · EST. 2018</span>
      </div>
    </div>
  );
}

interface WatermarkStripProps {
  word: string;
}

export function WatermarkStrip({ word }: WatermarkStripProps) {
  return (
    <div className="relative bg-bg-dark py-4 overflow-hidden border-y border-border-dark select-none pointer-events-none">
      <div className="whitespace-nowrap font-display text-4xl sm:text-6xl font-bold uppercase text-white/[0.04] tracking-widest text-center">
        {word}
      </div>
    </div>
  );
}
