"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-bg-dark">
      
      {/* Background Stack Layer 1: Looping Muted Stock Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/7686555/pexels-photo-7686555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://videos.pexels.com/video-files/7686555/7686555-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>

        {/* Background Stack Layer 2: Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/50" />
      </div>

      {/* Background Layer 3: Giant Decorative Watermark Type */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.03] leading-none whitespace-nowrap tracking-tighter">
          TRONDHEIM
        </span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Kicker with REAL Meta */}
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs uppercase tracking-widest font-display font-semibold w-fit">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                {String(t('hero.kicker'))}
              </div>
            </Reveal>

            {/* Multi-line Poster H1 with ONE word styled differently */}
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display uppercase tracking-tight text-white leading-[0.95]">
                {String(t('hero.h1First'))} <br />
                <span className="text-accent italic font-normal">{String(t('hero.h1Second'))}</span>
              </h1>
            </Reveal>

            {/* 1-2 line subtitle */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed font-body">
                {String(t('hero.subtitle'))}
              </p>
            </Reveal>

            {/* CTA Pair */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#bestilling"
                  className="bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold uppercase tracking-wider text-sm sm:text-base px-8 py-4 rounded transition-all shadow-xl hover:shadow-accent/30"
                >
                  {String(t('hero.bookNow'))}
                </a>

                <a
                  href="#tjenester"
                  className="bg-primary-light/80 hover:bg-primary-light text-text-light font-display font-semibold uppercase tracking-wider text-sm px-6 py-4 rounded border border-border-dark transition-colors"
                >
                  {String(t('hero.viewPrices'))}
                </a>
              </div>
            </Reveal>

            {/* 3-Item Meta Strip with Hairline Separators */}
            <Reveal delay={0.4}>
              <div className="pt-6 border-t border-border-dark/60 flex flex-wrap gap-4 sm:gap-6 items-center text-xs text-text-muted font-display">
                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold text-sm">Åpent</span>
                  <span>Man - Fre: 09:00 - 18:00</span>
                </div>

                <div className="h-3 w-px bg-border-dark hidden sm:block" />

                <div>
                  <span className="text-text-light font-medium">Beddingen 8 &amp; Brøsetveien 168</span>
                </div>

                <div className="h-3 w-px bg-border-dark hidden sm:block" />

                <div className="flex items-center gap-2">
                  <span className="text-accent font-bold">4.7 ★</span>
                  <span>{String(t('hero.ratingText'))}</span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* Secondary Hero Column: Quick Booking Card + Rotating Circular Text Seal */}
          <div className="lg:col-span-5 relative">
            
            {/* Floating Text-Only Rotating Circular Seal (Zero Glyphs!) */}
            <div className="hidden xl:block absolute -top-12 -right-8 z-20 pointer-events-none select-none">
              <div className="w-28 h-28 relative flex items-center justify-center animate-spin-slow">
                <svg viewBox="0 0 120 120" className="w-full h-full text-accent font-display text-[10px] tracking-widest uppercase font-bold">
                  <path id="circlePath" d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
                  <text fill="currentColor">
                    <textPath href="#circlePath">
                      TRONDHEIM BARBERSHOP • EST 2018 • SOLSIDEN &amp; MOHOLT •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Quick Preview Card */}
            <Reveal delay={0.2}>
              <div className="bg-bg-card/90 border border-border-dark p-6 sm:p-8 rounded-lg shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-border-dark">
                  <span className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm text-accent">
                    Direkte Booking Uten Innlogging
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-text-muted bg-primary-light px-2 py-1 rounded font-display">
                    Svar på 30s
                  </span>
                </div>

                <div className="space-y-4 text-xs font-body">
                  <div>
                    <label className="block text-text-muted uppercase tracking-wider mb-2 font-display font-medium text-[11px]">
                      Velg din nærmeste avdeling i Trondheim:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href="#bestilling"
                        className="p-3 rounded bg-primary-light hover:bg-accent/20 border border-border-dark hover:border-accent text-left transition-all group"
                      >
                        <div className="font-display font-bold uppercase text-text-light group-hover:text-accent">
                          Solsiden
                        </div>
                        <div className="text-[11px] text-text-muted mt-0.5">Barbershop &amp; Barber</div>
                      </a>

                      <a
                        href="#bestilling"
                        className="p-3 rounded bg-primary-light hover:bg-accent/20 border border-border-dark hover:border-accent text-left transition-all group"
                      >
                        <div className="font-display font-bold uppercase text-text-light group-hover:text-accent">
                          Moholt
                        </div>
                        <div className="text-[11px] text-text-muted mt-0.5">Salong &amp; Barber</div>
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-text-muted mb-2 font-display text-[11px] uppercase tracking-wider">Mest populære valg:</div>
                    <ul className="space-y-2 text-text-light font-medium">
                      <li className="flex justify-between items-center py-1.5 px-3 bg-bg-dark/60 rounded border border-border-dark/40">
                        <span>Herreklipp &amp; Styling</span>
                        <span className="text-accent font-display tabular-nums">650 NOK</span>
                      </li>
                      <li className="flex justify-between items-center py-1.5 px-3 bg-bg-dark/60 rounded border border-border-dark/40">
                        <span>Royal Hot Towel Shave</span>
                        <span className="text-accent font-display tabular-nums">690 NOK</span>
                      </li>
                      <li className="flex justify-between items-center py-1.5 px-3 bg-bg-dark/60 rounded border border-border-dark/40">
                        <span>Foilage Fargeteknikk</span>
                        <span className="text-accent font-display tabular-nums">Fra 1 850 NOK</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="#bestilling"
                    className="block text-center bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold uppercase text-xs py-3.5 rounded transition-colors tracking-wider mt-4 shadow-md"
                  >
                    Reserver Din Time Nå
                  </a>
                </div>
              </div>
            </Reveal>

          </div>

        </div>

        {/* Flanking Mini-Copy Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 mt-12 border-t border-border-dark/40 text-xs text-text-muted font-body">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1" />
            <p className="leading-relaxed">
              <strong className="text-text-light font-display uppercase tracking-wider block">Solsiden Barbershop</strong>
              {String(t('hero.solsidenBrief'))}
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1" />
            <p className="leading-relaxed">
              <strong className="text-text-light font-display uppercase tracking-wider block">Moholt Salong &amp; Barber</strong>
              {String(t('hero.moholtBrief'))}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Cue Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity mt-8">
        <span className="text-[9px] font-display uppercase tracking-widest text-text-muted font-semibold">Scroll</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>

    </section>
  );
}
