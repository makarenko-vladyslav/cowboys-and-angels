"use client";

import React, { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

interface ServiceItem {
  name: string;
  location: string;
  price: string;
  desc: string;
  category: 'barber' | 'dame' | 'skjegg' | 'pleie';
  highlight?: boolean;
  badge?: string;
}

const serviceData: ServiceItem[] = [
  { name: 'Cowboy Herre Klipp', location: 'Moholt & Solsiden', price: '890 NOK', desc: 'Presisjonsklipp inkludert dyptgående hårvask, hodebunnsmassasje, føn og personlig produktstyling.', category: 'barber', badge: 'POPULÆR' },
  { name: 'Hårklipp & Skjegg Signaturpakke', location: 'Moholt & Solsiden', price: '1300 NOK', desc: 'Komplett herrestyling: herreklipp kombinert med full skjeggmodellering og knivfinisjering.', category: 'barber', highlight: true, badge: 'SIGNATUR' },
  { name: 'Maskinklipp (Buzz Cut)', location: 'Moholt & Solsiden', price: '495 NOK', desc: 'Rask og ren maskinklipp over hele hodet med skarpe linjer langs nakke og tinning.', category: 'barber' },
  { name: 'Barneklipp (opp til 12 år)', location: 'Moholt & Solsiden', price: '720 NOK', desc: 'Tilpasset og tålmodig klipp for de yngste i trygge, hyggelige rammer.', category: 'barber' },

  { name: 'Angel Klipp Dame', location: 'Moholt', price: '890 NOK', desc: 'Modellklipp tilpasset ansiktsform, inkludert dyptgående vask, føn og formstyling.', category: 'dame' },
  { name: 'Foilage & Balayage Fargedesign', location: 'Moholt', price: '1500 NOK/t', desc: 'Spesialisert folie- og frihåndsteknikk for naturlig solkysset resultat med myk overgang.', category: 'dame', highlight: true, badge: 'SPESIALITET' },
  { name: 'Ettervekst & Helfarging', location: 'Moholt', price: '1500 NOK/t', desc: 'Premium fargedekk med næringsrike pigmenter fra L’ANZA og Keune.', category: 'dame' },
  { name: 'Tonering & Glossing', location: 'Moholt', price: '350 NOK', desc: 'Oppfriskning av glans og nyanse i kombinasjon med fargebehandling.', category: 'dame' },

  { name: 'Skjeggtrim med Kniv & Omslag', location: 'Moholt & Solsiden', price: '720 NOK', desc: 'Varme omslag, presis knivkontur, trimming av lengde og beroligende skjeggolje.', category: 'skjegg', badge: 'ANBEFALT' },
  { name: 'Klassisk Helbarbering Ansikt', location: 'Moholt & Solsiden', price: '660 NOK', desc: 'Tradisjonell knivbarbering med varme handkler, barberskum og etterbarberingsbalsam.', category: 'skjegg' },
  { name: 'Standard Skjeggtrim', location: 'Moholt & Solsiden', price: '575 NOK', desc: 'Forming og kapping av skjegg med maskin og saks for et ryddig uttrykk.', category: 'skjegg' },

  { name: 'Intensiv Keratin Hårkur', location: 'Moholt', price: '400 NOK', desc: 'Gjenoppbyggende Keratin-behandling for slitt, farget eller tørt hår.', category: 'pleie' },
  { name: 'Form & Farge Bryn', location: 'Moholt', price: '535 NOK', desc: 'Napping/voksing og opptegning av bryn for innramming av ansiktet.', category: 'pleie' },
  { name: 'Manikyr Neglebehandling', location: 'Moholt', price: '720 NOK', desc: 'Pleie av neglebånd, filing og polering for velstelte hender.', category: 'pleie' }
];

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<'all' | 'barber' | 'dame' | 'skjegg' | 'pleie'>('all');

  const eyebrow = (t('services.eyebrow') as string) || 'GJENNOMSKUELIGE PRISER · INGEN SKJULTE TILLEGG';
  const title = (t('services.title') as string) || 'Behandlinger & Prisliste';
  const subtitle = (t('services.subtitle') as string) || 'Utforsk vårt omfattende utvalg av frisør- og barberingstjenester. Alle behandlinger inkluderer personlig konsultasjon.';
  const notice = (t('services.notice') as string) || '* Student og senior får 10% rabatt. Lærlingbehandlinger gir opptil 30% rabatt.';

  const filtered = activeTab === 'all' ? serviceData : serviceData.filter((s) => s.category === activeTab);

  return (
    <section id="tjenester" className="py-20 bg-dark-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Layer 1: Section Header with Kicker, Heading, Lede */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-paper-muted">{subtitle}</p>
        </div>

        {/* Layer 2: Category Filter Labels */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-dark-border pb-4">
          {[
            { id: 'all', label: 'Alle Tjenester' },
            { id: 'barber', label: 'BARBERSHOP & HERRE' },
            { id: 'dame', label: 'DAMESTIL & FOILAGE' },
            { id: 'skjegg', label: 'SKJEGG & KNIV' },
            { id: 'pleie', label: 'PLEIE & BRYN' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-copper text-white font-bold shadow-md shadow-copper/20'
                  : 'bg-dark-surface text-paper-muted hover:text-paper hover:bg-dark-card border border-dark-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Layer 3: Editorial Offer Rows with Dotted Leader Lines */}
        <div className="space-y-4">
          {filtered.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.03}>
              <div
                className={`p-5 rounded transition-all duration-200 group relative ${
                  item.highlight
                    ? 'bg-dark-surface border-2 border-copper shadow-lg shadow-copper/10'
                    : 'bg-dark-surface hover:bg-dark-card border border-dark-border hover:border-copper/40'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-paper group-hover:text-copper transition-colors">
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-copper text-white uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-bg border border-dark-border text-copper">
                      {item.location}
                    </span>
                  </div>

                  {/* Dotted Leader Line */}
                  <div className="hidden md:block flex-1 mx-4 border-b border-dotted border-dark-border/60" />

                  {/* Tabular Price Display */}
                  <span className="font-display text-xl sm:text-2xl font-bold text-copper whitespace-nowrap">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-paper-muted max-w-3xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Layer 4: Footnote & Secondary CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded bg-dark-surface/60 border border-dark-border text-xs text-paper-muted font-mono">
          <span>{notice}</span>
          <a
            href="#booking"
            className="text-copper hover:underline font-bold uppercase tracking-wider text-xs whitespace-nowrap"
          >
            Bestill Time i Online Kalenderen ↗
          </a>
        </div>
      </div>
    </section>
  );
}
