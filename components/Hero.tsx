"use client";

import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[hsl(25_20%_7%)] text-white">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/7686555/pexels-photo-7686555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source
            src="https://videos.pexels.com/video-files/7686555/7686555-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_20%_7%/0.85)] via-[hsl(25_20%_7%/0.65)] to-[hsl(25_20%_7%)]" />
      </div>

      {/* Decorative Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <span className="font-display font-extrabold text-[18vw] leading-none text-white/[0.03] uppercase tracking-tighter whitespace-nowrap select-none">
          TRONDHEIM
        </span>
      </div>

      {/* Flanking Mini-Copy (Left Column) */}
      <div className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 z-10 space-y-8 max-w-[140px] text-[10px] uppercase font-bold text-white/40 tracking-widest leading-tight">
        <div>
          <span className="block text-[hsl(28_85%_52%)]">MOHOLT</span>
          HERMAN KRAGS VEI 43
        </div>
        <div className="w-8 h-px bg-white/20" />
        <div>
          <span className="block text-[hsl(28_85%_52%)]">SOLSIDEN</span>
          TMV-KAIA 23
        </div>
      </div>

      {/* Rotating Circular Text Seal (Right Side) */}
      <div className="hidden md:flex absolute right-8 top-32 z-10 items-center justify-center pointer-events-none">
        <div className="relative w-28 h-28 rounded-full border border-white/10 flex items-center justify-center bg-[hsl(25_20%_8%/0.6)] backdrop-blur-sm">
          <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
            <path
              id="sealPath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8.5px] uppercase font-display font-bold fill-[hsl(28_85%_52%)] tracking-[0.2em]">
              <textPath href="#sealPath">
                COWBOYS & ANGELS · TRONDHEIM · EST 2018 ·
              </textPath>
            </text>
          </svg>
          <span className="absolute font-display font-extrabold text-sm text-white">TRD</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-12 gap-8 items-center my-auto">
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Kicker with REAL Meta */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[hsl(28_85%_52%/0.12)] border border-[hsl(28_85%_52%/0.35)] text-[hsl(28_85%_52%)] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[hsl(28_85%_52%)] animate-pulse" />
            {t("hero.kicker") as string}
          </div>

          {/* Multi-line Poster H1 with ONE Word set in Italic Serif */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-white uppercase tracking-tight mb-6">
            {t("hero.h1First") as string}{" "}
            <span className="font-serif italic font-normal text-[hsl(28_85%_52%)] text-[1.08em] normal-case px-1">
              {t("hero.h1Italic") as string}
            </span>{" "}
            {t("hero.h1Last") as string}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed mb-8">
            {t("hero.subtitle") as string}
          </p>

          {/* CTA Pair */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#contact"
              className="bg-[hsl(28_85%_52%)] hover:bg-[hsl(24_90%_45%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-xl uppercase px-8 py-4 rounded transition-all shadow-lg text-center tracking-wider"
            >
              {t("hero.ctaPrimary") as string}
            </a>
            <a
              href="#calculator"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-display font-bold text-xl uppercase px-7 py-4 rounded transition-all text-center tracking-wider"
            >
              {t("hero.ctaSecondary") as string}
            </a>
          </div>

          {/* 3-Item Meta Strip with Hairline Separators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/70 border-t border-white/10 pt-6 w-full">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[hsl(28_85%_52%)] tracking-wider">ГОДИНИ РОБОТИ</span>
              <span className="font-medium text-white/90">Пн-Сб: 09:00 – 18:00</span>
            </div>
            <div className="flex flex-col sm:border-l sm:border-white/10 sm:pl-4">
              <span className="text-[10px] uppercase font-bold text-[hsl(28_85%_52%)] tracking-wider">ЛОКАЦІЇ</span>
              <span className="font-medium text-white/90">Moholt & Solsiden</span>
            </div>
            <div className="flex flex-col sm:border-l sm:border-white/10 sm:pl-4">
              <span className="text-[10px] uppercase font-bold text-[hsl(28_85%_52%)] tracking-wider">РЕЙТИНГ GOOGLE</span>
              <span className="font-medium text-white/90 tabular-nums">4.6/5.0 на базі 100+ відгуків</span>
            </div>
          </div>
        </div>

        {/* Right Accent Card */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="bg-[hsl(25_15%_12%/0.9)] border border-[hsl(28_85%_52%/0.35)] backdrop-blur-md rounded-xl p-6 text-white shadow-2xl relative">
            <div className="text-[10px] uppercase text-[hsl(28_85%_52%)] font-bold tracking-widest mb-2">
              СПЕЦІАЛЬНА ПРОПОЗИЦІЯ
            </div>
            <h2 className="font-display font-bold text-3xl uppercase mb-3 leading-none">
              КОМПЛЕКС БАРБЕР + ДОГЛЯД
            </h2>
            <p className="text-xs text-white/80 mb-4 leading-relaxed">
              Чоловіча стрижка, гарячий рушник 65°C, моделювання бороди та масаж голови з серумом L'ANZA Neem.
            </p>
            <div className="flex items-baseline justify-between mb-6 border-t border-b border-white/10 py-3">
              <span className="text-xs text-white/60 uppercase font-bold tracking-wider">Фіксована ціна:</span>
              <span className="font-display font-extrabold text-3xl text-[hsl(28_85%_52%)] tabular-nums">
                750 NOK
              </span>
            </div>
            <a
              href="#contact"
              className="block w-full text-center bg-white/10 hover:bg-[hsl(28_85%_52%)] text-white hover:text-[hsl(25_20%_8%)] font-display font-bold text-lg uppercase py-2.5 rounded transition-colors tracking-wider"
            >
              Забронювати цей комплекс
            </a>
          </div>
        </div>
      </div>

      {/* Hero Base Ticker & Scroll Cue */}
      <div className="relative z-10 w-full mt-8 pt-4 border-t border-white/10">
        <div className="overflow-hidden py-2 text-[11px] uppercase font-extrabold tracking-[0.2em] text-white/40 whitespace-nowrap">
          <div className="animate-marquee inline-flex gap-8">
            <span>MOHOLT — HERMAN KRAGS VEI 43</span>
            <span className="text-[hsl(28_85%_52%)]">·</span>
            <span>SOLSIDEN — TMV-KAIA 23</span>
            <span className="text-[hsl(28_85%_52%)]">·</span>
            <span>L'ANZA HEALING COLORCARE</span>
            <span className="text-[hsl(28_85%_52%)]">·</span>
            <span>KEUNE HAIRCOSMETICS</span>
            <span className="text-[hsl(28_85%_52%)]">·</span>
            <span>BEARBURYS BARBER CARE</span>
            <span className="text-[hsl(28_85%_52%)]">·</span>
            <span>MOHOLT — HERMAN KRAGS VEI 43</span>
            <span className="text-[hsl(28_85%_52%)]">·</span>
            <span>SOLSIDEN — TMV-KAIA 23</span>
            <span className="text-[hsl(28_85%_52%)]">·</span>
          </div>
        </div>

        {/* Scroll Cue (Classic Indicator physically below content) */}
        <div className="flex flex-col items-center gap-1 mt-3 text-white/50">
          <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white/70">SCROLL</span>
          <div className="w-px h-5 bg-gradient-to-b from-[hsl(28_85%_52%)] to-transparent" />
        </div>
      </div>
    </section>
  );
}