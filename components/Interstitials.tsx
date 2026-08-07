"use client";

export function TickerInterstitial() {
  return (
    <div className="bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] py-3 overflow-hidden border-y border-[hsl(28_85%_45%)] select-none">
      <div className="animate-marquee whitespace-nowrap font-display font-extrabold text-sm uppercase tracking-[0.2em] flex items-center gap-8">
        <span>MOHOLT CAMPUS</span>
        <span>·</span>
        <span>SOLSIDEN WATERFRONT</span>
        <span>·</span>
        <span>HERREKLIPP & SKJEGGTRIM</span>
        <span>·</span>
        <span>FOILAGE & BALAYAGE</span>
        <span>·</span>
        <span>L'ANZA HEALING COLORCARE</span>
        <span>·</span>
        <span>KEUNE HAIRCOSMETICS</span>
        <span>·</span>
        <span>MOHOLT CAMPUS</span>
        <span>·</span>
        <span>SOLSIDEN WATERFRONT</span>
        <span>·</span>
        <span>HERREKLIPP & SKJEGGTRIM</span>
        <span>·</span>
        <span>FOILAGE & BALAYAGE</span>
        <span>·</span>
      </div>
    </div>
  );
}

export function WatermarkStatementInterstitial() {
  return (
    <div className="py-12 bg-[hsl(25_20%_8%)] text-white overflow-hidden relative border-t border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <span className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white/90">
          ТОЧНІСТЬ ФЕЙДУ · М'ЯКІСТЬ ВІДБЛИСКУ · 100% ВІДПОВІДАЛЬНІСТЬ
        </span>
      </div>
    </div>
  );
}

export function LabeledHairlineInterstitial({ label }: { label: string }) {
  return (
    <div className="py-8 bg-[hsl(35_25%_96%)] flex items-center justify-center px-4">
      <div className="w-full max-w-7xl flex items-center gap-4">
        <div className="flex-1 h-px bg-[hsl(25_15%_85%)]" />
        <span className="text-[10px] uppercase font-extrabold tracking-[0.3em] text-[hsl(28_85%_52%)] whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 h-px bg-[hsl(25_15%_85%)]" />
      </div>
    </div>
  );
}

export function PressRatingInterstitial() {
  return (
    <div className="py-6 bg-[hsl(25_20%_7%)] text-white border-t border-b border-[hsl(28_85%_52%/0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-white/70">
        <div>GOOGLE MAPS: 4.6 / 5.0 (100+ ВІДГУКІВ)</div>
        <div className="text-[hsl(28_85%_52%)] hidden md:block">·</div>
        <div>ОФІЦІЙНИЙ ПАРТНЕР L'ANZA & KEUNE У ТРОНГЕЙМІ</div>
        <div className="text-[hsl(28_85%_52%)] hidden md:block">·</div>
        <div>MOHOLT & SOLSIDEN</div>
      </div>
    </div>
  );
}