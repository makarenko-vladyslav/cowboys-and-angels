"use client";

import React, { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

const faqData = [
  {
    q: "Hva skal jeg gjøre for at fargen ikke vaskes ut?",
    a: "For at fargen ikke skal vaskes ut må man bruke en fargebevarende sjampo og balsam som L'ANZA sine produkter. Om sommeren anbefaler vi Keune Sun Shield med UV-strålebeskyttelse fordi sollys lysner håret og gjør at fargen slipper fortere."
  },
  {
    q: "Hvorfor bør jeg bruke UV-beskyttelse til håret?",
    a: "UV-stråler tørker ut håret og gjør det porøst. Porøst hår mister farge og kjemiske behandlinger raskere. L'ANZA Neem Plant Serum tilsetter keratinproteiner som styrker håret og forebygger slitasje."
  },
  {
    q: "Hvor lenge må jeg vente før jeg kan vaske håret etter permanent?",
    a: "Du må vente i 72 timer (3 døgn) før du vasker eller fukter håret etter en permanent. Du skal heller ikke bruke hårstrikk eller spenner i denne perioden da fikseringen fortsetter å virke."
  },
  {
    q: "Hva kan jeg gjøre for at krøllene mine skal bli mer definerte?",
    a: "Bruk en krøllestyrkende sjampo som Keune Curl Control, kombinert med fuktighetsgivende krøllekrem eller gel fra L'ANZA for optimal definisjon og hold."
  },
  {
    q: "Kan jeg vaske ansiktet etter vippe- eller brynsfarge?",
    a: "Unngå såpe på vippene og brynene de første 24 timene etter farging for å forhindre at pigmentene vaskes ut for tidlig."
  },
  {
    q: "Hvor ofte bør jeg farge vipper og bryn?",
    a: "Farge på vipper og bryn varer normalt i 6–8 uker. Ved å vedlikeholde med dette intervallet beholder du alltid en frisk innramming av ansiktet."
  },
  {
    q: "Hva kan jeg gjøre for å roe ned en sensitiv hodebunn?",
    a: "Bruk en konsentrert hodebunnssjampo som Neccin Nr. 1, eller Keune Derma Sensitive Lotion. Disse virker raskt mot kløe, rødhet og flass."
  },
  {
    q: "Er det prisforskjell på Moholt og Solsiden?",
    a: "Prisene er stort sett identiske, med små tilpasninger for spesifikke herre- og barbershop-pakker på Solsiden. Du ser alltid eksakt pris i vår booking."
  }
];

export default function FAQ() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const eyebrow = (t('faq.eyebrow') as string) || 'EKSPERTENE SVARER';
  const title = (t('faq.title') as string) || 'Ofte Stilte Spørsmål';
  const subtitle = (t('faq.subtitle') as string) || 'Lurer du på fargebevaring, permanent eller brynspleie? Her er svarene.';

  return (
    <section id="faq" className="py-20 bg-dark-surface border-y border-dark-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-3">
            {title}
          </h2>
          <p className="text-sm text-paper-muted">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded bg-dark-bg border border-dark-border overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:text-copper transition-colors"
                >
                  <span className="font-display text-lg font-bold uppercase text-paper">
                    {item.q}
                  </span>
                  <span className="font-mono text-copper font-bold text-xl">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-paper-muted leading-relaxed border-t border-dark-border/40">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
