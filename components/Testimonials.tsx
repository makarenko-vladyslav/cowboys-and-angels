"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { Carousel } from '@/components/motion';

const reviews = [
  {
    quote: "Beste frisøropplevelsen i Trondheim! Yana på Moholt reddet håret mitt etter mislykket bleking andre steder. Foilage-teknikken hennes gir et fantastisk naturlig fargespill.",
    author: "Ingrid M.",
    descriptor: "Fast kunde på Moholt siden 2019",
    hub: "Moholt Salong",
    service: "Foilage & Balayage"
  },
  {
    quote: "Herreklippen og skjeggtrimmen med kniv hos Daniel på Solsiden var førsteklasses. Varme omslag, skarpe konturer og topp service. Kommer garantert tilbake!",
    author: "Kristian B.",
    descriptor: "Fast kunde på Solsiden siden 2020",
    hub: "Solsiden Barbershop",
    service: "Klipp & Skjegg Pakke"
  },
  {
    quote: "Fantastisk atmosfære! Som student setter jeg stor pris på 10% studentrabatt og at prisene er helt tydelige før man setter seg i stolen.",
    author: "Sander H.",
    descriptor: "Student ved NTNU Gløshaugen",
    hub: "Moholt Salong",
    service: "Herreklipp"
  },
  {
    quote: "Anbefaler L’Anza-produktene de solgte meg. Fargen har holdt seg like strålende i ukevis etter hettestriper og tonering.",
    author: "Camilla T.",
    descriptor: "Fargekunde på Moholt",
    hub: "Moholt Salong",
    service: "Hårfarging & Pleie"
  }
];

export default function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            EKTE OMTALER FRA TRONDHEIM
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-3">
            Kundeerfaringer &amp; Vurderinger
          </h2>
          <p className="text-sm font-mono text-copper">
            4.9 / 5.0 · Google · over 580 verifiserte anmeldelser
          </p>
        </div>

        {/* Carousel with Oversized Quote Mark */}
        <Carousel>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 rounded-lg bg-dark-surface border border-copper/30 text-center max-w-3xl mx-auto relative"
            >
              {/* Oversized Quote Mark */}
              <span className="font-serif text-7xl font-bold text-copper/20 absolute top-4 left-6 pointer-events-none select-none">
                “
              </span>

              <p className="font-serif italic text-lg sm:text-2xl text-paper mb-6 leading-relaxed relative z-10">
                "{rev.quote}"
              </p>

              <div className="flex flex-col items-center">
                <span className="font-display text-lg font-bold uppercase text-white">
                  {rev.author}
                </span>
                <span className="text-xs text-paper-muted mb-1">
                  {rev.descriptor}
                </span>
                <span className="text-xs font-mono text-copper">
                  {rev.service} · {rev.hub}
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
