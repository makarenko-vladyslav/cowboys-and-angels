"use client";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-bg-dark">
      {/* Background Stack: Looping Clip 1 with Single Dark Tinted Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/7686555/pexels-photo-7686555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source
            src="https://videos.pexels.com/video-files/7686555/7686555-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Single strongest scrim layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/70 to-bg-dark/40" />
      </div>

      {/* Decorative Giant Watermark Word (absolute background layer, zero flow height) */}
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-[-2vw] z-0 select-none pointer-events-none whitespace-nowrap font-display text-[15vw] font-bold uppercase text-white/[0.03] tracking-tighter"
      >
        {String(t("hero.watermark"))}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-4 pb-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Headline & Offer Column */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Kicker with real meta */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-primary/20 border border-primary/40 text-accent text-xs font-semibold tracking-widest uppercase mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{String(t("hero.metaKicker"))}</span>
            </div>

            {/* Multi-line poster H1 with ONE word set differently */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[0.95] tracking-tight text-white mb-4 sm:mb-6 text-balance">
              <span>{String(t("hero.titlePart1"))}</span>{" "}
              <span className="italic font-normal text-accent-light underline decoration-accent/60 underline-offset-8">
                {String(t("hero.titleAccent"))}
              </span>{" "}
              <span>{String(t("hero.titlePart2"))}</span>
            </h1>

            {/* Value proposition / Lede */}
            <p className="text-base sm:text-xl text-text-light-muted leading-relaxed max-w-2xl mb-8">
              {String(t("hero.lede"))}
            </p>

            {/* CTA Pair: Solid + Quiet text link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-8">
              <a
                href="#bestilling"
                className="inline-flex items-center justify-center px-8 py-4 min-h-[44px] bg-primary hover:bg-accent text-white font-display font-bold text-lg tracking-wider uppercase rounded shadow-xl shadow-primary/25 hover:shadow-accent/40 transition-all active:scale-95 text-center"
              >
                {String(t("hero.ctaPrimary"))}
              </a>
              <a
                href="#priser"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-light hover:text-accent transition-colors py-3 px-4 min-h-[44px]"
              >
                <span>{String(t("hero.ctaSecondary"))}</span>
                <span className="text-accent">→</span>
              </a>
            </div>

            {/* 3-Item Meta Strip with Hairline Separators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-6 border-t border-border-dark/60 text-xs sm:text-sm text-text-light-muted">
              <div className="flex items-center gap-2">
                <span className="text-accent font-bold">★ 4.9/5</span>
                <span>{String(t("hero.metaRating"))}</span>
              </div>
              <span className="hidden sm:inline text-border-dark">|</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{String(t("hero.metaLocations"))}</span>
              </div>
              <span className="hidden sm:inline text-border-dark">|</span>
              <div className="flex items-center gap-2">
                <span className="text-accent font-mono">NOK</span>
                <span className="tabular-nums">{String(t("hero.metaEntry"))}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Flanking Micro-copy + Rotating Text Seal */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-6">
            {/* Rotating Circular Text Seal (SVG with text-only, no pictograms) */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-spin-slow select-none pointer-events-none"
              >
                <path
                  id="sealPath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="text-[7.5px] uppercase font-display font-semibold fill-accent tracking-widest">
                  <textPath href="#sealPath" startOffset="0%">
                    {String(t("hero.sealText"))}
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 m-auto w-12 h-12 rounded-full border border-border-dark bg-bg-surface/80 flex items-center justify-center text-center">
                <span className="font-display text-xs font-bold text-white tracking-wider">C&A</span>
              </div>
            </div>

            {/* Flanking Micro-copy Columns */}
            <div className="text-xs text-text-light-muted space-y-2 border-l-2 border-accent/50 pl-3">
              <p className="leading-snug">{String(t("hero.flankLeft"))}</p>
              <p className="leading-snug text-text-light font-medium">{String(t("hero.flankRight"))}</p>
              <p className="pt-1">
                <span className="text-text-light-muted">{String(t("hero.telLabel"))} </span>
                <a href="tel:+4773510020" className="inline-block py-2 min-h-[44px] text-accent hover:underline font-bold tabular-nums">
                  {String(t("hero.telNumber"))}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tiny bottom-center scroll indicator in normal flow */}
      <div className="relative z-10 w-full flex justify-center pt-2">
        <a
          href="#tjenester"
          className="flex flex-col items-center justify-center gap-1 text-[9px] tracking-widest text-text-light-muted hover:text-accent uppercase transition-opacity py-3 min-h-[44px]"
          aria-label="Rull ned til behandlinger"
        >
          <span>{String(t("hero.scrollLabel"))}</span>
          <div className="w-px h-6 bg-gradient-to-b from-accent to-transparent" />
        </a>
      </div>
    </section>
  );
}
