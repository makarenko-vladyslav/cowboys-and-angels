"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function FAQSection() {
  const { t } = useLocale();

  // REAL client FAQ from brief in Norwegian
  const faqList = [
    {
      q: "Hva skal jeg gjøre for at fargen ikke vaskes ut?",
      a: "for at fargen ikke skal vaskes ut like fort så må man bruke enten en fargebevarende sjampo og balsam som for eksempel en av LANZA sine sjampoer og balsamer, vi på Cowboys and angels frisør salong liker disse sjampoer fordi alle produkter er fargebevarende, på sommeren må man bruke sjampo og balsam som er UV-stråle beskyttende som for eksempel KEUNE Sun Shield, dette er fordi sola lysner håret og da slipper fargen fortere."
    },
    {
      q: "Hvorfor skal jeg bruke UV-beskyttelse til håret?",
      a: "UV-stråler skader håret ved å tørke det ut, det gjør håret også porøs som da vil si at det sliter det ut, farge og andre kjemiske behandlinger slipper også fortere ved porøs hår. Produkter med UV-beskyttelse beskytter håret fra strålene ved å være som et skjold mot sola. Vi på cowboys and angels frisør salong anbefaler LANZA sine produkter siden alle produktene deres har UV-stråle beskyttelse."
    },
    {
      q: "Hvor lenge må jeg vente før jeg kan vaske håret etter en permanent?",
      a: "Man skal vente med å vaske eller blaute på håret etter en permanent i 72 timer altså 3 døgn, man skal heller ikke sette håret i hårstrikk eller bruke spenner. Dette er fordi permanenten fortsatt virker etter behandlingen er ferdig."
    },
    {
      q: "Hva skal jeg gjøre for at krøllene mine skal bli mer definerte?",
      a: "Blant annet kan man bruke en god sjampo og balsam for krøller. Vi på Cowboys and Angels anbefaler KEUNE Curl Control sjampo og balsam, samt fuktighetsgivende krøllekrem fra LANZA for god definisjon og hold."
    },
    {
      q: "Kan jeg vaske ansiktet etter vippe/bryns farge?",
      a: "Man skal helst ikke vaske vippene eller brynene med såpe de neste 24 timene etter farging. Dette er fordi fargen kan vaskes ut og slippe mye fortere."
    },
    {
      q: "Hvor ofte bør jeg farge vipper/bryn?",
      a: "En vippe- eller brynsfarge varer vanligvis i 6-8 uker. Farger man med dette intervallet vil man alltid ha et friskt resultat."
    },
    {
      q: "Hva kan jeg gjøre for at håret holder seg rent lengre?",
      a: "Sliter man med fet hodebunn bør man bruke en balanserende sjampo som reduserer talgproduksjonen. Vi anbefaler BEARDBURYS Clear sjampo. Sjamponer gjerne håret to ganger per vask for dyprens."
    },
    {
      q: "Hva kan jeg gjøre for å roe ned en sensitiv hodebunn?",
      a: "Ved sensitiv hodebunn anbefaler vi NECCIN Nr. 1 sjampo. Den virker raskt og pleier hodebunnen effektivt. I tillegg kan du benytte KEUNE Derma Sensitive Lotion."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-primary-light text-text-light scroll-mt-20 border-y border-border-dark relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          SPØRSMÅL
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('faq.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-4">
            {String(t('faq.title'))}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-body">
            {String(t('faq.subtitle'))}
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqList.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.04}>
              <details className="group bg-bg-card border border-border-dark rounded-lg p-6 [&_summary::-webkit-details-marker]:none cursor-pointer hover:border-accent/50 transition-colors">
                <summary className="flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                  <span>{item.q}</span>
                  <span className="text-accent text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="text-text-muted text-xs sm:text-sm font-body leading-relaxed mt-4 pt-4 border-t border-border-dark/60">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12 text-xs text-text-muted font-body">
          Har du flere spørsmål? Ring oss direkte på{' '}
          <a href="tel:+4773931100" className="text-accent underline font-display uppercase tracking-wider">
            +47 73 93 11 00
          </a>{' '}
          eller send e-post til{' '}
          <a href="mailto:post@cowboysandangels.shop" className="text-accent underline font-display uppercase tracking-wider">
            post@cowboysandangels.shop
          </a>
        </div>

      </div>
    </section>
  );
}
