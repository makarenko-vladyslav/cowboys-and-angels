"use client";

import React, { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Calculator() {
  const { t } = useLocale();

  const [location, setLocation] = useState<'moholt' | 'solsiden'>('moholt');
  const [serviceType, setServiceType] = useState<'klipp' | 'skjegg' | 'pakke' | 'foilage'>('klipp');
  const [discount, setDiscount] = useState<'none' | 'student' | 'laerling'>('none');
  const [addWash, setAddWash] = useState(true);

  // Price calculation logic using real numbers from brief
  let basePrice = 890;
  let estMinutes = 45;

  if (serviceType === 'klipp') {
    basePrice = location === 'solsiden' ? 870 : 890;
    estMinutes = 45;
  } else if (serviceType === 'skjegg') {
    basePrice = 720;
    estMinutes = 30;
  } else if (serviceType === 'pakke') {
    basePrice = 1300;
    estMinutes = 75;
  } else if (serviceType === 'foilage') {
    basePrice = 1500;
    estMinutes = 120;
  }

  if (addWash && serviceType !== 'pakke') {
    basePrice += 120;
    estMinutes += 15;
  }

  let finalPrice = basePrice;
  if (discount === 'student') finalPrice = Math.round(basePrice * 0.9);
  if (discount === 'laerling') finalPrice = Math.round(basePrice * 0.7);

  const locationLabel = (t('calculator.locationLabel') as string) || 'Velg din preferred salong:';
  const moholtSalong = (t('calculator.moholtSalong') as string) || 'Moholt Salong';
  const moholtAddress = (t('calculator.moholtAddress') as string) || 'Moholt Allé 1';
  const solsidenBarbershop = (t('calculator.solsidenBarbershop') as string) || 'Solsiden Barbershop';
  const solsidenAddress = (t('calculator.solsidenAddress') as string) || 'Beddingen 10';
  const estimatePriceText = (t('calculator.estimatePrice') as string) || 'Estimert Samlet Pris:';
  const currencyLabel = (t('calculator.currency') as string) || 'NOK';
  const estimateDurationText = (t('calculator.estimateDuration') as string) || 'Beregnet Tidsbruk:';

  return (
    <section id="kalkulator" className="py-20 bg-dark-surface border-y border-dark-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            {(t('calculator.eyebrow') as string) || 'INTERAKTIV BEREGNING'}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-3">
            {(t('calculator.title') as string) || 'Beregn Tid & Pris For Din Visitt'}
          </h2>
          <p className="text-sm text-paper-muted">
            {(t('calculator.subtitle') as string) || 'Velg salong og behandling for umiddelbart estimat.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-dark-bg p-6 sm:p-8 rounded-lg border border-dark-border shadow-2xl">
          {/* Controls Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Location Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-copper mb-2">
                {locationLabel}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLocation('moholt')}
                  className={`p-3 text-left rounded border text-xs font-semibold uppercase tracking-wider transition-all ${
                    location === 'moholt'
                      ? 'bg-copper text-white border-copper'
                      : 'bg-dark-surface text-paper-muted border-dark-border hover:border-copper/50'
                  }`}
                >
                  <span className="block font-bold">{moholtSalong}</span>
                  <span className="text-[10px] opacity-80 font-normal lowercase block">{moholtAddress}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLocation('solsiden')}
                  className={`p-3 text-left rounded border text-xs font-semibold uppercase tracking-wider transition-all ${
                    location === 'solsiden'
                      ? 'bg-copper text-white border-copper'
                      : 'bg-dark-surface text-paper-muted border-dark-border hover:border-copper/50'
                  }`}
                >
                  <span className="block font-bold">{solsidenBarbershop}</span>
                  <span className="text-[10px] opacity-80 font-normal lowercase block">{solsidenAddress}</span>
                </button>
              </div>
            </div>

            {/* 2. Service Selection */}
            <div>
              <label className="block text-xs font-mono uppercase text-copper mb-2">
                2. Velg Behandling
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'klipp', label: 'Herreklipp / Dameklipp' },
                  { id: 'skjegg', label: 'Skjeggtrim & Kniv' },
                  { id: 'pakke', label: 'Klipp & Skjegg Pakke' },
                  { id: 'foilage', label: 'Foilage / Farging' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceType(s.id as any)}
                    className={`p-3 text-left rounded border text-xs font-medium transition-all ${
                      serviceType === s.id
                        ? 'bg-copper/20 text-copper border-copper'
                        : 'bg-dark-surface text-paper-muted border-dark-border hover:bg-dark-card'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Discount options */}
            <div>
              <label className="block text-xs font-mono uppercase text-copper mb-2">
                3. Rabattkategori
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'none', label: 'Standard' },
                  { id: 'student', label: 'Student (-10%)' },
                  { id: 'laerling', label: 'Lærling (-30%)' },
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDiscount(d.id as any)}
                    className={`py-2 px-3 text-center rounded border text-xs font-mono transition-all ${
                      discount === d.id
                        ? 'bg-copper text-white border-copper font-bold'
                        : 'bg-dark-surface text-paper-muted border-dark-border'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Addon Checkbox */}
            {serviceType !== 'pakke' && (
              <label className="flex items-center gap-3 p-3 bg-dark-surface rounded border border-dark-border cursor-pointer hover:border-copper/40 transition-colors">
                <input
                  type="checkbox"
                  checked={addWash}
                  onChange={(e) => setAddWash(e.target.checked)}
                  className="w-4 h-4 accent-copper rounded"
                />
                <span className="text-xs text-paper">
                  Inkluder Hårvask, Hodebunnsmassasje &amp; Føn (+120 NOK)
                </span>
              </label>
            )}
          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 bg-dark-surface border border-copper/30 rounded-lg">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-4">
                BEREGNET ESTIMAT
              </span>

              <div className="mb-6">
                <span className="text-xs text-paper-muted block mb-1">{estimatePriceText}</span>
                <div className="font-display text-4xl sm:text-5xl font-bold text-copper">
                  {finalPrice} <span className="text-xl text-paper">{currencyLabel}</span>
                </div>
                {discount !== 'none' && (
                  <span className="text-[11px] font-mono text-emerald-400 block mt-1">
                    ✓ Rabatt er fratrukket i estimatet
                  </span>
                )}
              </div>

              <div className="mb-6 pb-6 border-b border-dark-border">
                <span className="text-xs text-paper-muted block mb-1">{estimateDurationText}</span>
                <div className="font-display text-2xl font-bold text-paper">
                  ca. {estMinutes} minutter
                </div>
              </div>

              <ul className="space-y-2 text-xs text-paper-muted mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-copper">✓</span> Inkluderer personlig stilkonsultasjon
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-copper">✓</span> Ingen påmeldingskrav for booking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-copper">✓</span> Velg din favorittstylist i neste steg
                </li>
              </ul>
            </div>

            <a
              href="#booking"
              className="w-full py-3.5 bg-copper hover:bg-copper-dark text-white font-display text-base font-bold uppercase tracking-wider rounded transition-all text-center shadow-lg shadow-copper/20"
            >
              Bestill Denne Timen Nå
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
