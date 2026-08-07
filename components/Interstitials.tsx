"use client";

export function MarqueeTicker({ text }: { text?: string }) {
  const contentText = text || "SOLSIDEN STUDIO · MOHOLT CAMPUS · TRADITIONAL BARBERING · FOILAGE COLORING · HERREKLIPP · SKJEGGTRIM · L'ANZA KERATIN · KEUNE CARE · ";
  return (
    <div className="py-4 bg-[hsl(28_85%_48%)] text-white overflow-hidden whitespace-nowrap select-none border-y border-white/10">
      <div className="inline-block animate-[marquee_25s_linear_infinite] font-display text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase">
        <span className="mx-4">{contentText}</span>
        <span className="mx-4">{contentText}</span>
        <span className="mx-4">{contentText}</span>
        <span className="mx-4">{contentText}</span>
      </div>
    </div>
  );
}

export function LabeledHairline({ label }: { label: string }) {
  return (
    <div className="py-8 bg-[hsl(25_15%_10%)] text-white/50 flex items-center justify-center gap-6 px-4">
      <div className="h-px bg-white/10 flex-1 max-w-xs"></div>
      <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[hsl(28_85%_48%)]">
        {label}
      </span>
      <div className="h-px bg-white/10 flex-1 max-w-xs"></div>
    </div>
  );
}

export function StatementBand({ text, sub }: { text: string; sub?: string }) {
  return (
    <section className="py-16 bg-[hsl(25_18%_14%)] text-white border-y border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4 relative z-10">
        <p className="font-display text-xl sm:text-3xl font-extrabold uppercase leading-snug tracking-tight text-[hsl(38_25%_96%)]">
          {text}
        </p>
        {sub && (
          <p className="text-xs sm:text-sm text-[hsl(28_85%_48%)] font-semibold tracking-wider uppercase">
            {sub}
          </p>
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden aria-hidden z-0 flex items-center justify-center opacity-5">
        <span className="font-display font-extrabold text-9xl uppercase tracking-tighter text-white whitespace-nowrap">
          COWBOYS & ANGELS
        </span>
      </div>
    </section>
  );
}
