"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function LocationsMap() {
  const { t } = useLocale();

  return (
    <section id="avdelinger" className="py-24 bg-primary-light text-text-light scroll-mt-20 border-t border-border-dark relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          TRONDHEIM
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('locations.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-4">
            {String(t('locations.title'))}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-body">
            {String(t('locations.subtitle'))}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Solsiden Branch */}
          <Reveal delay={0.1}>
            <div className="bg-bg-card border border-border-dark p-8 rounded-lg space-y-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-display font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded">
                      Solsiden
                    </span>
                    <h3 className="font-display font-bold uppercase text-2xl text-white mt-2">
                      Solsiden Barbershop
                    </h3>
                  </div>
                  <span className="text-xs text-text-muted font-display uppercase tracking-widest">
                    Sentrum Solsiden
                  </span>
                </div>

                <div className="space-y-1.5 text-sm text-text-muted font-body">
                  <p className="text-text-light font-medium">{String(t('locations.solsidenAddr'))}</p>
                  <p>Tlf: +47 73 93 11 00 · post@cowboysandangels.shop</p>
                  <p className="text-xs text-text-muted">Buss/Trikk til Solsiden / Parkering i P-hus Solsiden</p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-dark space-y-1 text-xs text-text-muted font-display">
                  <div className="font-bold uppercase text-accent mb-2">{String(t('locations.hoursTitle'))}</div>
                  <div>{String(t('locations.hoursWeekdays'))}</div>
                  <div>{String(t('locations.hoursSaturday'))}</div>
                  <div>{String(t('locations.hoursSunday'))}</div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <iframe
                  title="Cowboys and Angels Solsiden Map"
                  src="https://www.google.com/maps?q=Beddingen+8,+7014+Trondheim&output=embed"
                  className="w-full h-48 rounded border border-border-dark"
                  loading="lazy"
                />

                <a
                  href="https://maps.google.com/?q=Beddingen+8,+7014+Trondheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 rounded border border-border-dark hover:border-accent text-text-light hover:text-accent font-display font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  {String(t('locations.getDirections'))}
                </a>
              </div>
            </div>
          </Reveal>

          {/* Moholt Branch */}
          <Reveal delay={0.2}>
            <div className="bg-bg-card border border-border-dark p-8 rounded-lg space-y-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-display font-bold tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded">
                      Moholt
                    </span>
                    <h3 className="font-display font-bold uppercase text-2xl text-white mt-2">
                      Moholt Salong &amp; Barbershop
                    </h3>
                  </div>
                  <span className="text-xs text-text-muted font-display uppercase tracking-widest">
                    Nær NTNU Moholt
                  </span>
                </div>

                <div className="space-y-1.5 text-sm text-text-muted font-body">
                  <p className="text-text-light font-medium">{String(t('locations.moholtAddr'))}</p>
                  <p>Tlf: +47 73 93 11 00 · post@cowboysandangels.shop</p>
                  <p className="text-xs text-text-muted">Gode parkeringsmuligheter utenfor salongen</p>
                </div>

                <div className="pt-4 mt-4 border-t border-border-dark space-y-1 text-xs text-text-muted font-display">
                  <div className="font-bold uppercase text-accent mb-2">{String(t('locations.hoursTitle'))}</div>
                  <div>{String(t('locations.hoursWeekdays'))}</div>
                  <div>{String(t('locations.hoursSaturday'))}</div>
                  <div>{String(t('locations.hoursSunday'))}</div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <iframe
                  title="Cowboys and Angels Moholt Map"
                  src="https://www.google.com/maps?q=Brøsetveien+168,+7050+Trondheim&output=embed"
                  className="w-full h-48 rounded border border-border-dark"
                  loading="lazy"
                />

                <a
                  href="https://maps.google.com/?q=Brøsetveien+168,+7050+Trondheim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 rounded border border-border-dark hover:border-accent text-text-light hover:text-accent font-display font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  {String(t('locations.getDirections'))}
                </a>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
