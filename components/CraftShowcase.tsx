"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function CraftShowcase() {
  const { t } = useLocale();

  return (
    <section id="handverk" className="py-24 bg-primary-light text-text-light relative overflow-hidden scroll-mt-20 border-y border-border-dark">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          KVALITET
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Craft Description Column */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
                {String(t('craft.kicker'))}
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2">
                {String(t('craft.title'))}
              </h2>
            </Reveal>

            {/* Oversized Pull-Quote Statement */}
            <Reveal delay={0.1}>
              <blockquote className="p-6 bg-bg-card border-l-4 border-accent rounded text-base sm:text-lg font-display text-white italic leading-relaxed shadow-lg">
                {String(t('craft.quote'))}
                <footer className="text-xs text-accent font-display uppercase font-bold tracking-widest mt-3 not-italic">
                  — {String(t('craft.quoteAuthor'))}
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-text-muted text-base leading-relaxed font-body">
                {String(t('craft.body1'))}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-text-muted text-sm leading-relaxed font-body">
                {String(t('craft.body2'))}
              </p>
            </Reveal>

            {/* Stat Row of 4 Real Numerals */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border-dark">
                <div>
                  <div className="font-display font-bold text-3xl text-accent tabular-nums">
                    {String(t('craft.stat1Val'))}
                  </div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider font-display mt-1">
                    {String(t('craft.stat1Label'))}
                  </div>
                </div>

                <div>
                  <div className="font-display font-bold text-3xl text-accent tabular-nums">
                    {String(t('craft.stat2Val'))}
                  </div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider font-display mt-1">
                    {String(t('craft.stat2Label'))}
                  </div>
                </div>

                <div>
                  <div className="font-display font-bold text-3xl text-accent tabular-nums">
                    {String(t('craft.stat3Val'))}
                  </div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider font-display mt-1">
                    {String(t('craft.stat3Label'))}
                  </div>
                </div>

                <div>
                  <div className="font-display font-bold text-3xl text-accent tabular-nums">
                    {String(t('craft.stat4Val'))}
                  </div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider font-display mt-1">
                    {String(t('craft.stat4Label'))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Media Cluster: Video + Overlapped Framed Photo */}
          <div className="lg:col-span-6 relative">
            <Reveal delay={0.2}>
              <div className="relative rounded-lg overflow-hidden border border-border-dark aspect-video shadow-2xl group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.pexels.com/videos/9738001/pexels-photo-9738001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
                  className="w-full h-full object-cover"
                >
                  <source src="https://videos.pexels.com/video-files/9738001/9738001-hd_1280_720_24fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-text-muted font-display uppercase tracking-wider">
                  Trondheim Barbershop Experience — Solsiden &amp; Moholt
                </div>
              </div>
            </Reveal>

            {/* Overlapped Framed Photo */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-48 h-56 rounded border-2 border-accent overflow-hidden shadow-2xl bg-bg-card rotate-[-3deg]">
              <img
                src="https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg"
                alt="Foilage i praksis på Moholt"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Secondary Link & Proof Line */}
        <div className="pt-8 border-t border-border-dark/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-display">
          <div>
            <span>4.7 / 5.0 · Google Reviews · 420+ gjesters vurderinger i Trondheim</span>
          </div>

          <a
            href="#butikk"
            className="text-accent hover:text-white uppercase font-bold tracking-wider transition-colors"
          >
            Se alle tilgjengelige kurer i nettbutikken →
          </a>
        </div>

      </div>
    </section>
  );
}
