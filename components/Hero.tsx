"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-8 overflow-hidden bg-[hsl(25_15%_10%)] text-white">
      {/* Background Video Stack */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={t("hero.posterUrl") as string}
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        >
          <source src={t("hero.videoSrc") as string} type="video/mp4" />
        </video>
        {/* Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25_15%_10%)] via-[hsl(25_15%_10%/0.7)] to-black/60" />
      </div>

      {/* Watermark background layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center opacity-[0.04]"
      >
        <span className="font-display font-extrabold text-[18vw] uppercase tracking-tighter text-white whitespace-nowrap">
          TRONDHEIM
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Kicker with REAL meta */}
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[hsl(28_85%_48%/0.2)] border border-[hsl(28_85%_48%/0.4)] text-[hsl(28_85%_48%)] text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[hsl(28_85%_48%)]"></span>
                <span>{t("hero.kicker") as string}</span>
              </div>
            </Reveal>

            {/* Poster H1 with italic display word */}
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.96] text-white mb-6">
                Традовий <span className="text-[hsl(28_85%_48%)] italic font-normal font-serif lowercase">барберінґ</span> та складне фарбування
              </h1>
            </Reveal>

            {/* Lede Subtitle */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-xl text-white/85 max-w-2xl font-normal leading-relaxed mb-8">
                {t("hero.subtitle") as string}
              </p>
            </Reveal>

            {/* CTA Pair */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
                <a
                  href="#booking"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-md bg-[hsl(28_85%_48%)] hover:bg-[hsl(28_90%_40%)] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[hsl(28_85%_48%/0.3)]"
                >
                  {t("common.bookNow") as string}
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto text-center px-8 py-4 rounded-md bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-sm"
                >
                  {t("common.viewServices") as string}
                </a>
              </div>
            </Reveal>

            {/* 3-Item Meta Strip with Hairline Separators */}
            <Reveal delay={0.4}>
              <div className="pt-6 border-t border-white/15 w-full flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80 uppercase tracking-wider">
                <span>Пн-Сб: 09:00 - 19:00</span>
                <span className="text-white/30">|</span>
                <span>Beddingen 7014 & Brøsetveien 7050</span>
                <span className="text-white/30">|</span>
                <span className="text-[hsl(28_85%_48%)] font-bold">4.6 / 5.0 Google Maps</span>
              </div>
            </Reveal>
          </div>

          {/* Right Floating Card + Rotating Circular Text Seal */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end gap-6 relative">
            {/* Rotating SVG Text Seal */}
            <div className="w-28 h-28 relative animate-[spin_20s_linear_infinite] select-none opacity-80">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white font-mono text-[8.5px] uppercase tracking-widest">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text>
                  <textPath href="#circlePath">
                    SOLSIDEN & MOHOLT STUDIO · TRONDHEIM · EST 2018 ·
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Location Snapshot Card */}
            <Reveal delay={0.5}>
              <div className="bg-[hsl(25_18%_14%/0.9)] backdrop-blur-md p-6 rounded-xl border border-white/15 shadow-2xl space-y-5 w-full max-w-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[0.65rem] uppercase tracking-widest text-[hsl(28_85%_48%)] font-bold">
                    ДВІ ЛОКАЦІЇ У ТРОНГЕЙМІ
                  </span>
                  <span className="text-[0.65rem] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                    ONLINE
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-display font-bold text-base text-white uppercase">Solsiden Studio</div>
                  <p className="text-xs text-white/70">Beddingen, 7014 Trondheim</p>
                  <p className="text-[0.7rem] text-[hsl(28_85%_48%)] font-semibold">Пн-Сб 09:00 - 19:00 · Барберінґ & Студія</p>
                </div>

                <div className="space-y-1 pt-3 border-t border-white/10">
                  <div className="font-display font-bold text-base text-white uppercase">Moholt Campus</div>
                  <p className="text-xs text-white/70">Brøsetveien, 7050 Trondheim</p>
                  <p className="text-[0.7rem] text-[hsl(28_85%_48%)] font-semibold">Пн-Сб 09:00 - 18:00 · NTNU Кампус</p>
                </div>

                <a
                  href="#locations"
                  className="block text-center w-full py-2.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs uppercase font-bold tracking-wider transition-colors"
                >
                  Детальніше про салони
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Flanking Mini-Copy Columns + Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-8 flex items-end justify-between text-[0.7rem] uppercase tracking-wider text-white/60">
        <div className="hidden sm:block max-w-[200px]">
          Solsiden: Beddingen, 7014 Trondheim
        </div>

        {/* Scroll Cue */}
        <div className="flex flex-col items-center gap-1.5 mx-auto">
          <span className="text-[0.6rem] tracking-[0.3em] font-bold text-white">SCROLL</span>
          <div className="w-0.5 h-5 bg-gradient-to-b from-[hsl(28_85%_48%)] to-transparent animate-pulse"></div>
        </div>

        <div className="hidden sm:block text-right max-w-[200px]">
          Moholt: Brøsetveien, 7050 Trondheim
        </div>
      </div>
    </section>
  );
}
