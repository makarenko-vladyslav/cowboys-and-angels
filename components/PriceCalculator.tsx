"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricingData from '@/lib/pricing.json';
import { Reveal } from '@/components/motion';

export default function PriceCalculator() {
  const { t } = useLocale();

  const [service, setService] = useState<'menCut' | 'foilage' | 'royalShave' | 'fullPackage'>('menCut');
  const [spaCare, setSpaCare] = useState(false);
  const [grayCamouflage, setGrayCamouflage] = useState(false);
  const [toning, setToning] = useState(false);

  const basePrice = pricingData.basePrices[service] || 650;
  let total = basePrice;
  if (spaCare) total += pricingData.addons.spaCare;
  if (grayCamouflage) total += pricingData.addons.grayCamouflage;
  if (toning) total += pricingData.addons.toning;

  return (
    <section id="kalkulator" className="py-20 bg-bg-dark text-text-light scroll-mt-20 relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          KALKULATOR
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('calculator.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-3">
            {String(t('calculator.title'))}
          </h2>
          <p className="text-text-muted text-sm sm:text-base font-body">
            {String(t('calculator.subtitle'))}
          </p>
        </Reveal>

        <Reveal>
          <div className="bg-bg-card border border-border-dark p-6 sm:p-10 rounded-lg shadow-2xl">
            
            {/* Primary Service Selection */}
            <div className="mb-8">
              <label className="block font-display uppercase tracking-wider text-xs font-bold text-accent mb-3">
                {String(t('calculator.selectService'))}
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setService('menCut')}
                  className={`p-4 rounded text-left border transition-all ${
                    service === 'menCut'
                      ? 'bg-accent/15 border-accent text-white'
                      : 'bg-primary-light border-border-dark text-text-muted hover:text-white'
                  }`}
                >
                  <div className="font-display font-bold uppercase text-sm">Herreklipp &amp; Styling</div>
                  <div className="text-xs text-accent mt-1 tabular-nums font-display">650 NOK</div>
                </button>

                <button
                  type="button"
                  onClick={() => setService('royalShave')}
                  className={`p-4 rounded text-left border transition-all ${
                    service === 'royalShave'
                      ? 'bg-accent/15 border-accent text-white'
                      : 'bg-primary-light border-border-dark text-text-muted hover:text-white'
                  }`}
                >
                  <div className="font-display font-bold uppercase text-sm">Royal Hot Towel Shave</div>
                  <div className="text-xs text-accent mt-1 tabular-nums font-display">690 NOK</div>
                </button>

                <button
                  type="button"
                  onClick={() => setService('fullPackage')}
                  className={`p-4 rounded text-left border transition-all ${
                    service === 'fullPackage'
                      ? 'bg-accent/15 border-accent text-white'
                      : 'bg-primary-light border-border-dark text-text-muted hover:text-white'
                  }`}
                >
                  <div className="font-display font-bold uppercase text-sm">Pakke: Klipp + Skjegg</div>
                  <div className="text-xs text-accent mt-1 tabular-nums font-display">1 050 NOK</div>
                </button>

                <button
                  type="button"
                  onClick={() => setService('foilage')}
                  className={`p-4 rounded text-left border transition-all ${
                    service === 'foilage'
                      ? 'bg-accent/15 border-accent text-white'
                      : 'bg-primary-light border-border-dark text-text-muted hover:text-white'
                  }`}
                >
                  <div className="font-display font-bold uppercase text-sm">Foilage Fargeteknikk</div>
                  <div className="text-xs text-accent mt-1 tabular-nums font-display">Fra 1 850 NOK</div>
                </button>
              </div>
            </div>

            {/* Addons Selection */}
            <div className="mb-8 border-t border-border-dark pt-6">
              <label className="block font-display uppercase tracking-wider text-xs font-bold text-accent mb-3">
                {String(t('calculator.selectAddons'))}
              </label>

              <div className="space-y-3 font-body">
                <label className="flex items-center justify-between p-3.5 bg-primary-light rounded border border-border-dark cursor-pointer hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={spaCare}
                      onChange={(e) => setSpaCare(e.target.checked)}
                      className="w-4 h-4 accent-accent rounded"
                    />
                    <span className="text-sm font-medium text-text-light">L'Anza Keratin SPA-kur</span>
                  </div>
                  <span className="font-display font-bold text-accent text-sm tabular-nums">+350 NOK</span>
                </label>

                <label className="flex items-center justify-between p-3.5 bg-primary-light rounded border border-border-dark cursor-pointer hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={grayCamouflage}
                      onChange={(e) => setGrayCamouflage(e.target.checked)}
                      className="w-4 h-4 accent-accent rounded"
                    />
                    <span className="text-sm font-medium text-text-light">Kamuflering av grå hår</span>
                  </div>
                  <span className="font-display font-bold text-accent text-sm tabular-nums">+320 NOK</span>
                </label>

                <label className="flex items-center justify-between p-3.5 bg-primary-light rounded border border-border-dark cursor-pointer hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={toning}
                      onChange={(e) => setToning(e.target.checked)}
                      className="w-4 h-4 accent-accent rounded"
                    />
                    <span className="text-sm font-medium text-text-light">Glanstoning / Fargeoppfriskning</span>
                  </div>
                  <span className="font-display font-bold text-accent text-sm tabular-nums">+450 NOK</span>
                </label>
              </div>
            </div>

            {/* Calculated Total Banner */}
            <div className="bg-bg-dark p-6 rounded border border-accent/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-text-muted font-display block">
                  {String(t('calculator.estimatedTotal'))}
                </span>
                <span className="font-display font-bold text-3xl sm:text-4xl text-accent tabular-nums">
                  {total.toLocaleString('no-NO')} NOK
                </span>
                <span className="block text-[11px] text-text-muted font-body mt-1">
                  {String(t('calculator.trustNote'))}
                </span>
              </div>

              <a
                href="#bestilling"
                className="w-full sm:w-auto text-center bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold uppercase tracking-wider text-sm px-6 py-3.5 rounded transition-colors shadow-lg"
              >
                {String(t('calculator.bookThisEstimate'))}
              </a>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
