"use client";

import React, { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function BookingContact() {
  const { t } = useLocale();

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'moholt',
    service: 'Herreklipp / Skjegg',
    date: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = 'https://www.cowboysandangels.shop/';
    }, 2000);
  };

  const moholtSalongOption = (t('bookingContact.moholtSalongOption') as string) || 'Moholt (Salong)';
  const solsidenBarbershopOption = (t('bookingContact.solsidenBarbershopOption') as string) || 'Solsiden (Barbershop)';
  const herreklippOption = (t('bookingContact.herreklippOption') as string) || 'Herreklipp (890 NOK)';
  const dameklippOption = (t('bookingContact.dameklippOption') as string) || 'Dameklipp (890 NOK)';
  const pakkeOption = (t('bookingContact.pakkeOption') as string) || 'Klipp & Skjegg (1300 NOK)';
  const skjeggOption = (t('bookingContact.skjeggOption') as string) || 'Skjeggtrim m/ kniv (720 NOK)';
  const foilageOption = (t('bookingContact.foilageOption') as string) || 'Foilage / Farging (1500 NOK/t)';

  const moholtHubName = (t('bookingContact.moholtHubName') as string) || 'MOHOLT SALONG & BARBERSHOP';
  const moholtHubAddress = (t('bookingContact.moholtHubAddress') as string) || 'Moholt Allé 1, 7050 Trondheim';
  const moholtHubHours = (t('bookingContact.moholtHubHours') as string) || 'Man–Fre: 09:00–18:00 | Lør: 09:00–16:00';

  const solsidenHubName = (t('bookingContact.solsidenHubName') as string) || 'SOLSIDEN EXCLUSIV BARBERSHOP';
  const solsidenHubAddress = (t('bookingContact.solsidenHubAddress') as string) || 'Beddingen 10, Solsiden, 7014 Trondheim';
  const solsidenHubHours = (t('bookingContact.solsidenHubHours') as string) || 'Man–Fre: 10:00–19:00 | Lør: 10:00–17:00';

  return (
    <section id="booking" className="py-20 bg-dark-surface border-t border-copper/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Layer 1: Invitation Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            DIREKTE TIMEBESTILLING
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-3">
            Sikre Din Plass i Barberstolen i Dag
          </h2>
          <p className="text-sm text-paper-muted">
            Bestill direkte på nett på under 1 minutt, eller ring oss for personlig veiledning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div className="lg:col-span-7 bg-dark-bg p-8 sm:p-10 rounded-lg border border-copper/30 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-4xl text-copper block mb-4">✓</span>
                <h3 className="font-display text-2xl font-bold text-white uppercase mb-2">
                  Takk for din henvendelse!
                </h3>
                <p className="text-sm text-paper-muted">
                  Du blir nå viderekoblet til salongens direkte bookingkalender...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-copper mb-2">
                      Fullstendig Navn *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="f.eks. Ole Hansen"
                      className="w-full px-4 py-3 rounded bg-dark-surface border border-dark-border text-paper text-sm focus:border-copper focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-copper mb-2">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+47 900 00 000"
                      className="w-full px-4 py-3 rounded bg-dark-surface border border-dark-border text-paper text-sm focus:border-copper focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-copper mb-2">
                      Velg Salong *
                    </label>
                    <select
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-dark-surface border border-dark-border text-paper text-sm focus:border-copper focus:outline-none"
                    >
                      <option value="moholt">{moholtSalongOption}</option>
                      <option value="solsiden">{solsidenBarbershopOption}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-copper mb-2">
                      Ønsket Behandling
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-dark-surface border border-dark-border text-paper text-sm focus:border-copper focus:outline-none"
                    >
                      <option value="Herreklipp">{herreklippOption}</option>
                      <option value="Dameklipp">{dameklippOption}</option>
                      <option value="Pakke">{pakkeOption}</option>
                      <option value="Skjegg">{skjeggOption}</option>
                      <option value="Foilage">{foilageOption}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-copper mb-2">
                      Ønsket Dato
                    </label>
                    <input
                      type="date"
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-dark-surface border border-dark-border text-paper text-sm focus:border-copper focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-copper mb-2">
                    Spesielle Ønsker
                  </label>
                  <textarea
                    rows={2}
                    value={formState.notes}
                    onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                    placeholder="Evt. ønsker angående fargetone, lærlingrabatt eller stylist..."
                    className="w-full px-4 py-3 rounded bg-dark-surface border border-dark-border text-paper text-sm focus:border-copper focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-copper hover:bg-copper-dark text-white font-display text-base font-bold uppercase tracking-wider rounded transition-all duration-200 shadow-xl shadow-copper/25 min-h-[44px] inline-flex items-center justify-center"
                >
                  Gå Til Online Booking Nå ↗
                </button>
              </form>
            )}
          </div>

          {/* Structured Hours & Location Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded bg-dark-bg border border-dark-border">
              <h3 className="font-display text-lg font-bold uppercase text-copper mb-3">
                Direkte Telefonbooking
              </h3>
              <p className="text-xs text-paper-muted mb-3">
                Ønsker du rådgivning eller hjelp til å finne en ledig time i dag? Ring oss direkte.
              </p>
              <a
                href="tel:+4773512000"
                className="font-mono text-xl font-bold text-white hover:text-copper transition-colors block py-2 inline-flex items-center"
              >
                +47 73 51 20 00
              </a>
            </div>

            {/* Hours Mini-Table */}
            <div className="p-6 rounded bg-dark-bg border border-dark-border">
              <h3 className="font-display text-lg font-bold uppercase text-copper mb-4">
                Åpningstider Våre Avdelinger
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="pb-2 border-b border-dark-border">
                  <span className="text-white font-bold block">{moholtHubName}</span>
                  <span className="text-paper-muted">{moholtHubAddress}</span>
                  <div className="text-copper mt-1">{moholtHubHours}</div>
                </div>
                <div>
                  <span className="text-white font-bold block">{solsidenHubName}</span>
                  <span className="text-paper-muted">{solsidenHubAddress}</span>
                  <div className="text-copper mt-1">{solsidenHubHours}</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded bg-copper/10 border border-copper/30 text-xs font-mono text-copper text-center">
              ✓ Ingen registrering kreves · Gratis avbestilling inntil 24t før
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
