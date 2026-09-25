"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Exact 10 client FAQ items from brief data
  const faqList = [
    {
      q: "Hva skal jeg gjøre for at hårfargen ikke vaskes ut like fort?",
      a: "For at fargen ikke skal vaskes ut må man bruke en fargebevarende sjampo og balsam, som for eksempel en av LANZA sine serier. Vi på Cowboys and Angels liker disse fordi alle produktene er fargebevarende. På sommeren bør du bruke produkter med UV-skjold, som KEUNE Sun Shield, fordi solen lysner håret og får fargen til å slippe raskere.",
    },
    {
      q: "Hvorfor skal jeg bruke UV-beskyttelse til håret?",
      a: "UV-stråler tørker ut håret og gjør det porøst. Ved porøst hår slipper både farge og kjemiske behandlinger betraktelig fortere. Produkter med UV-filter fungerer som et beskyttende skjold mot solen. En varm anbefaling fra oss er LANZA Neem Plant Serum, som tilfører keratinproteiner, styrker håret og forebygger slitasje.",
    },
    {
      q: "Hvor lenge må jeg vente før jeg kan vaske håret etter en permanent?",
      a: "Du skal vente i 72 timer (3 hele døgn) før du vasker eller gjør håret vått etter en permanent. Unngå også hårstrikk og klemmer. Kjemien fortsetter å arbeide i hårstrukturen i opptil 72 timer. Vasker du for tidlig mister krøllene spenst og holdbarhet.",
    },
    {
      q: "Hva kan jeg gjøre for at krøllene mine skal bli mer definerte?",
      a: "Bruk en fuktighetsgivende krøllesjampo og balsam, som KEUNE Curl Control. I tillegg er en god krøllekrem eller gelé essensiell. LANZA sine krølleprodukter tilfører rikelig med fuktighet og gir ekstremt god definisjon uten at håret blir stivt.",
    },
    {
      q: "Er det noe jeg kan gjøre for å holde håret og hodebunnen ren lengre?",
      a: "Sliter du med fett hår skyldes det som oftest overskudd av talg i hodebunnen. Bruk en balanserende sjampo. Vi anbefaler BEARDBURYS Clear sjampo for menn og unisex-bruk med frisk limesitrus, som fjerner overflødig olje effektivt. Sjamponer gjerne 2 ganger per vask og unngå å ta deg i håret gjennom dagen.",
    },
    {
      q: "Hva kan jeg gjøre for å roe ned sensitiv hodebunn?",
      a: "Ved kløe, rødhet eller flass anbefaler vi på Cowboys and Angels NECCIN Nr. 1 sjampo. Den er konsentrert, pleiende og virker ofte allerede etter 1–2 vask. I tillegg er KEUNE Derma Sensitive Lotion fantastisk for å gjenopprette hudbarrieren.",
    },
    {
      q: "Hvor ofte bør jeg farge vipper og bryn?",
      a: "En vippe- eller brynsfarge holder normalt i 6–8 uker. Farger du med dette intervallet opprettholder du en jevn og markert ramme rundt ansiktet. Husk å unngå såpevask på brynene de første 24 timene etter behandling.",
    },
    {
      q: "Hvilke produkter bør jeg bruke for tykt, grovt hår?",
      a: "Grovt hår krever mye mykgjørende fuktighet og keratin. LANZA Lustrous sjampo og balsam gjør hårstråene mer medgjørlige, gir speilblank glans og beskytter mot varme og UV-slitasje.",
    },
    {
      q: "Hva kan jeg gjøre for å få mer volum i fint hår?",
      a: "Start med LANZA Thickening sjampo og balsam med naturlig bambusekstrakt som gir fylde uten å tynge. Føn deretter inn en lett skum, som KEUNE Strong Mousse eller LANZA Root Effects, ved røttene.",
    },
    {
      q: "Tilbyr dere studentrabatt og honnørrabatt i Trondheim?",
      a: "Ja! Studenter ved NTNU, BI og andre høyskoler i Trondheim samt honnør får 10% rabatt på klipp ved fremvisning av gyldig bevis. Vi har også lærlingklipp på Moholt med opptil 30% avslag.",
    },
  ];

  return (
    <section id="kunnskap" className="py-20 sm:py-28 bg-bg-surface border-y border-border-dark scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
            {String(t("faq.kicker"))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {String(t("faq.title"))}
          </h2>
          <p className="text-text-light-muted text-base sm:text-lg">
            {String(t("faq.lede"))}
          </p>
        </div>

        {/* Accordion spanning full container width */}
        <div className="space-y-3">
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-bg-dark border border-border-dark rounded overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg uppercase text-white hover:text-accent transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="text-accent text-xl font-mono">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-text-light-muted leading-relaxed border-t border-border-dark/40">
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
