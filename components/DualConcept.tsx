"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function DualConcept() {
  const { t } = useLocale();

  return (
    <section id="konsept" className="py-24 bg-bg-dark text-text-light relative scroll-mt-20 overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[16vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          BEGGE AVDELINGER
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('concept.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-4">
            {String(t('concept.title'))}
          </h2>
          <p className="text-text-muted font-body text-base sm:text-lg">
            {String(t('concept.lead'))}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Solsiden Location Card */}
          <Reveal delay={0.1}>
            <div className="bg-bg-card border border-border-dark p-8 rounded-lg flex flex-col justify-between h-full relative overflow-hidden group hover:border-accent transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-display tracking-widest text-accent font-bold bg-accent/10 px-3 py-1 rounded">
                      Avdeling 1 · Beddingen 8
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mt-3">
                      {String(t('concept.solsidenTitle'))}
                    </h3>
                  </div>
                  <span className="text-xs text-text-muted font-display uppercase tracking-widest border border-border-dark px-2.5 py-1 rounded">
                    6 Barberstoler
                  </span>
                </div>

                <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 font-body">
                  {String(t('concept.solsidenDesc'))}
                </p>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-text-light font-medium font-body">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{String(t('concept.solsidenFeature1'))}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{String(t('concept.solsidenFeature2'))}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border-dark/60 flex items-center justify-between">
                <span className="text-xs text-text-muted font-display uppercase tracking-wider">Solsiden Kjøpesenter</span>
                <a
                  href="#bestilling"
                  className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
                >
                  Bestill Solsiden <span>→</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Moholt Location Card */}
          <Reveal delay={0.2}>
            <div className="bg-bg-card border border-border-dark p-8 rounded-lg flex flex-col justify-between h-full relative overflow-hidden group hover:border-accent transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] uppercase font-display tracking-widest text-accent font-bold bg-accent/10 px-3 py-1 rounded">
                      Avdeling 2 · Brøsetveien 168
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white mt-3">
                      {String(t('concept.moholtTitle'))}
                    </h3>
                  </div>
                  <span className="text-xs text-text-muted font-display uppercase tracking-widest border border-border-dark px-2.5 py-1 rounded">
                    Salong &amp; Barber
                  </span>
                </div>

                <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6 font-body">
                  {String(t('concept.moholtDesc'))}
                </p>

                <ul className="space-y-3 mb-8 text-xs sm:text-sm text-text-light font-medium font-body">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{String(t('concept.moholtFeature1'))}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{String(t('concept.moholtFeature2'))}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border-dark/60 flex items-center justify-between">
                <span className="text-xs text-text-muted font-display uppercase tracking-wider">Nær NTNU Moholt</span>
                <a
                  href="#bestilling"
                  className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-accent hover:text-white transition-colors"
                >
                  Bestill Moholt <span>→</span>
                </a>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
