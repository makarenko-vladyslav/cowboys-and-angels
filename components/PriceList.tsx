"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface PriceRow {
  name: string;
  price: string;
  desc: string;
  tag?: string;
  signature?: boolean;
}

export default function PriceList() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<"solsiden" | "moholt">("solsiden");

  const solsidenRows: PriceRow[] = [
    {
      name: "Cowboy Herreklipp",
      price: "870 NOK",
      desc: "Konsultasjon, saks- og maskinarbeid, nakkerensing og premium styling.",
      tag: "Klassiker",
    },
    {
      name: "Hårklipp & Skjegg Kombo",
      price: "1 300 NOK",
      desc: "Vår komplette signaturbehandling: full herreklipp kombinert med skarp knivbarbering og varme omslag.",
      signature: true,
      tag: "Signatur",
    },
    {
      name: "Skjeggtrim med kniv & varme omslag",
      price: "720 NOK",
      desc: "Tradisjonell barbering med varme omslag, skarp knivkontur og nærende skjeggolje.",
    },
    {
      name: "Helbarbering med kniv",
      price: "660 NOK",
      desc: "Glattbarbering av hele ansiktet med forbehandling, pisket skum og kjølende balm.",
    },
    {
      name: "Enkel Skjeggtrim (maskin)",
      price: "520 NOK",
      desc: "Rask formklipp av skjegget med maskin for vedlikehold mellom fullbehandlinger.",
    },
    {
      name: "Maskinklipp (Fade / Snau)",
      price: "495 NOK",
      desc: "Kort maskinklipp med nøyaktig gradering av sider og nakke.",
    },
    {
      name: "Barneklipp (opp til 12 år)",
      price: "720 NOK",
      desc: "Tålmodig tilpasning og klipp for de yngre gjestene.",
    },
    {
      name: "Lærling herreklipp",
      price: "609 NOK",
      desc: "Fullverdig klipp utført av lærling under veiledning av senior barberer.",
      tag: "-30%",
    },
  ];

  const moholtRows: PriceRow[] = [
    {
      name: "Angel Dameklipp & Føn",
      price: "890 NOK",
      desc: "Inngående konsultasjon, hårvask med tilpasset kur, modellklipp og formføn.",
      tag: "Bestselger",
    },
    {
      name: "Cowboy Herreklipp",
      price: "890 NOK",
      desc: "Presis herreklipp tilpasset virvler og ansiktsform med vask og styling.",
    },
    {
      name: "Foilage / Balayage (timepris)",
      price: "1 500 NOK",
      desc: "Avansert fargeteknikk med folie for myke overganger og holdbart fargespill uten hard ettervekst.",
      signature: true,
      tag: "Fargespesialitet",
    },
    {
      name: "Helfarging & Ettervekst (timepris)",
      price: "1 500 NOK",
      desc: "Dekking av grå hår eller helfarging med fargebevarende produkter fra LANZA.",
    },
    {
      name: "Tonering / Glossing",
      price: "350 NOK",
      desc: "Rask oppfriskning av fargetonen for å nøytralisere uønskede nyanser mellom fargetimer.",
    },
    {
      name: "Forming og farge av bryn",
      price: "535 NOK",
      desc: "Napping, voksing og farging for en markert, ren ramme rundt ansiktet.",
    },
    {
      name: "Vask, kur og profesjonell føn",
      price: "750 NOK",
      desc: "Dyprens og pleiende kur med hodebunnsmassasje og volumføn.",
    },
    {
      name: "Brudepakke komplett",
      price: "5 000 NOK",
      desc: "Prøvetime i forkant, oppsett på bryllupsdagen og koordinert tidsplan.",
    },
  ];

  const activeRows = activeTab === "solsiden" ? solsidenRows : moholtRows;

  return (
    <section id="priser" className="py-20 sm:py-28 bg-bg-dark scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (Kicker, Heading, Lede) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
            {String(t("pricingSection.kicker"))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {String(t("pricingSection.title"))}
          </h2>
          <p className="text-text-light-muted text-base sm:text-lg">
            {String(t("pricingSection.lede"))}
          </p>
        </div>

        {/* Named Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-bg-surface p-1.5 rounded border border-border-dark inline-flex">
            <button
              type="button"
              onClick={() => setActiveTab("solsiden")}
              className={`px-6 py-2.5 rounded font-display text-sm font-semibold uppercase tracking-wider transition-all ${
                activeTab === "solsiden"
                  ? "bg-accent text-white shadow-md"
                  : "text-text-light-muted hover:text-white"
              }`}
            >
              {String(t("pricingSection.tabSolsiden"))}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("moholt")}
              className={`px-6 py-2.5 rounded font-display text-sm font-semibold uppercase tracking-wider transition-all ${
                activeTab === "moholt"
                  ? "bg-accent text-white shadow-md"
                  : "text-text-light-muted hover:text-white"
              }`}
            >
              {String(t("pricingSection.tabMoholt"))}
            </button>
          </div>
        </div>

        {/* Price Rows with Dotted Leaders & Muted Descriptions */}
        <div className="bg-bg-surface border border-border-dark rounded-lg p-6 sm:p-10 divide-y divide-border-dark/60 shadow-2xl">
          {activeRows.map((item, index) => (
            <div
              key={index}
              className={`py-4 first:pt-0 last:pb-0 transition-colors ${
                item.signature
                  ? "bg-accent/10 border-l-4 border-accent pl-4 -ml-4 pr-2 rounded-r my-2"
                  : "group"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                <div className="flex-1 flex items-baseline flex-wrap sm:flex-nowrap">
                  <span className="font-display text-lg font-bold text-white uppercase group-hover:text-accent transition-colors">
                    {item.name}
                  </span>
                  {item.tag && (
                    <span className="ml-2 bg-primary/20 text-accent text-[10px] uppercase font-semibold px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  )}
                  <span className="hidden sm:inline-block flex-grow mx-3 border-b border-dotted border-border-dark" />
                </div>
                <div className="font-display text-lg font-bold text-accent whitespace-nowrap tabular-nums">
                  {item.price}
                </div>
              </div>
              <p className="text-xs text-text-light-muted max-w-xl mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote and Secondary CTA Pair */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-light-muted border-t border-border-dark/40 pt-4">
          <p>{String(t("pricingSection.footnote"))}</p>
          <div className="flex items-center gap-4">
            <a href="#beregner" className="text-accent hover:underline font-semibold uppercase tracking-wider">
              {String(t("pricingSection.secondaryLink"))} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
