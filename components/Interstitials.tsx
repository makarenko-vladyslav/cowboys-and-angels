"use client";

interface LabeledHairlineProps {
  label: string;
}

export function LabeledHairline({ label }: LabeledHairlineProps) {
  return (
    <div className="py-6 bg-bg-dark border-y border-border-dark/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-6">
        <div className="h-px bg-border-dark flex-1" />
        <span className="text-[11px] font-display font-semibold uppercase tracking-widest text-text-muted whitespace-nowrap">
          {label}
        </span>
        <div className="h-px bg-border-dark flex-1" />
      </div>
    </div>
  );
}

interface StatementBandProps {
  statement: string;
}

export function StatementBand({ statement }: StatementBandProps) {
  return (
    <div className="py-8 bg-accent text-bg-dark border-y border-accent-hover select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="font-display font-bold text-lg sm:text-2xl uppercase tracking-wider block">
          {statement}
        </span>
      </div>
    </div>
  );
}

interface RatingStripProps {
  ratingText: string;
}

export function RatingStrip({ ratingText }: RatingStripProps) {
  return (
    <div className="py-6 bg-primary-light border-y border-border-dark select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-display">
        <div className="flex items-center gap-3">
          <span className="text-accent text-lg font-bold">4.7 ★★★★★</span>
          <span className="text-text-light font-semibold uppercase tracking-wider">{ratingText}</span>
        </div>
        <div className="text-text-muted uppercase tracking-widest">
          Solsiden Barbershop &amp; Moholt Salong Trondheim
        </div>
      </div>
    </div>
  );
}
