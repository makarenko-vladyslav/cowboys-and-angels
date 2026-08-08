"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function BookingForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="bestilling" className="py-24 bg-bg-dark text-text-light scroll-mt-20 relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          BOOKING
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('booking.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-4">
            {String(t('booking.title'))}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-body max-w-xl mx-auto">
            {String(t('booking.subtitle'))}
          </p>

          {/* Opening Hours Mini Table */}
          <div className="mt-6 inline-block bg-primary-light border border-border-dark px-4 py-2 rounded text-xs text-text-muted font-display tracking-wider">
            {String(t('booking.hoursTable'))}
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-bg-card border border-border-dark p-6 sm:p-10 rounded-lg shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 font-body">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent text-accent font-bold font-display text-2xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="font-display font-bold uppercase text-2xl text-white">
                  {String(t('booking.successTitle'))}
                </h3>
                <p className="text-text-muted text-sm max-w-md mx-auto">
                  {String(t('booking.successDesc'))}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-accent text-bg-dark font-display font-bold uppercase text-xs px-6 py-2.5 rounded"
                >
                  Send En Ny Bestilling
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-display font-bold text-accent mb-2">
                      {String(t('booking.selectLocation'))} *
                    </label>
                    <select
                      required
                      className="w-full bg-bg-dark border border-border-dark rounded px-4 py-3 text-text-light text-sm focus:border-accent focus:outline-none font-body"
                    >
                      <option value="solsiden">{String(t('booking.locationSolsiden'))}</option>
                      <option value="moholt">{String(t('booking.locationMoholt'))}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-display font-bold text-accent mb-2">
                      {String(t('booking.selectService'))} *
                    </label>
                    <select
                      required
                      className="w-full bg-bg-dark border border-border-dark rounded px-4 py-3 text-text-light text-sm focus:border-accent focus:outline-none font-body"
                    >
                      <option value="herreklipp">Herreklipp &amp; Styling (650 NOK)</option>
                      <option value="skjegg">Forming og klipp av skjegg (450 NOK)</option>
                      <option value="royalShave">Royal Hot Towel Shave (690 NOK)</option>
                      <option value="dameklipp">Dameklipp &amp; Stylingsett (890 NOK)</option>
                      <option value="foilage">Foilage Fargeteknikk (Fra 1 850 NOK)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-display font-bold text-accent mb-2">
                      {String(t('booking.nameLabel'))} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={String(t('booking.namePlaceholder'))}
                      className="w-full bg-bg-dark border border-border-dark rounded px-4 py-3 text-text-light text-sm focus:border-accent focus:outline-none font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-display font-bold text-accent mb-2">
                      {String(t('booking.phoneLabel'))} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={String(t('booking.phonePlaceholder'))}
                      className="w-full bg-bg-dark border border-border-dark rounded px-4 py-3 text-text-light text-sm focus:border-accent focus:outline-none font-body"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-display font-bold text-accent mb-2">
                      {String(t('booking.dateLabel'))} *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-bg-dark border border-border-dark rounded px-4 py-3 text-text-light text-sm focus:border-accent focus:outline-none font-body"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-display font-bold text-accent mb-2">
                      {String(t('booking.timeLabel'))} *
                    </label>
                    <input
                      type="time"
                      required
                      className="w-full bg-bg-dark border border-border-dark rounded px-4 py-3 text-text-light text-sm focus:border-accent focus:outline-none font-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-display font-bold text-accent mb-2">
                    {String(t('booking.notesLabel'))}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={String(t('booking.notesPlaceholder'))}
                    className="w-full bg-bg-dark border border-border-dark rounded px-4 py-3 text-text-light text-sm focus:border-accent focus:outline-none font-body"
                  />
                </div>

                {/* Trust Micro-line */}
                <div className="text-center text-[11px] text-text-muted font-body">
                  {String(t('booking.trustLine'))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 bg-accent hover:bg-accent-hover text-bg-dark font-display font-bold uppercase text-base tracking-wider py-4 rounded transition-colors shadow-lg"
                  >
                    {String(t('booking.submitBtn'))}
                  </button>

                  <a
                    href="tel:+4773931100"
                    className="w-full sm:w-auto text-center py-4 px-6 rounded border border-border-dark text-text-light font-display uppercase tracking-wider text-xs hover:text-accent hover:border-accent transition-colors"
                  >
                    Ring: +47 73 93 11 00
                  </a>
                </div>

              </form>
            )}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
