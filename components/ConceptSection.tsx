"use client";

import { useLocale } from "@/lib/i18n";

export default function ConceptSection() {
  const { t } = useLocale();

  return (
    <section id="concept" className="py-24 bg-[hsl(35_25%_96%)] text-[hsl(25_20%_12%)] relative overflow-hidden">
      {/* Absolute Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none opacity-[0.04] select-none"
      >
        <span className="font-display font-extrabold text-[20vw] leading-none uppercase tracking-tight text-[hsl(25_20%_8%)]">
          CONCEPT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("concept.kicker") as string}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[hsl(25_20%_8%)] mt-2 mb-4 leading-none">
            {t("concept.title") as string}
          </h2>
          <p className="text-base sm:text-lg text-[hsl(25_10%_35%)] leading-relaxed">
            {t("concept.description") as string}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-[hsl(25_15%_88%)] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-[hsl(28_85%_52%)] uppercase tracking-widest block mb-1">
                МЕРЕЖА
              </span>
              <h3 className="font-display font-extrabold text-3xl text-[hsl(25_20%_8%)] mb-3">
                {t("concept.barberTitle") as string}
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(25_10%_40%)] leading-relaxed mb-6">
                {t("concept.barberDesc") as string}
              </p>
            </div>
            <div className="text-xs font-bold text-[hsl(28_85%_52%)] uppercase tracking-wider border-t border-[hsl(25_15%_90%)] pt-4 tabular-nums">
              Гарячий рушник 65°C · Knivbarbering
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-[hsl(25_15%_88%)] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-[hsl(28_85%_52%)] uppercase tracking-widest block mb-1">
                КОЛЬОРОВИЙ СТИЛЬ
              </span>
              <h3 className="font-display font-extrabold text-3xl text-[hsl(25_20%_8%)] mb-3">
                {t("concept.salonTitle") as string}
              </h3>
              <p className="text-xs sm:text-sm text-[hsl(25_10%_40%)] leading-relaxed mb-6">
                {t("concept.salonDesc") as string}
              </p>
            </div>
            <div className="text-xs font-bold text-[hsl(28_85%_52%)] uppercase tracking-wider border-t border-[hsl(25_15%_90%)] pt-4">
              Формули L'ANZA & KEUNE
            </div>
          </div>

          <div className="bg-[hsl(25_20%_8%)] text-white p-8 rounded-xl shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-[hsl(28_85%_52%)] uppercase tracking-widest block mb-1">
                ШОУРУМ
              </span>
              <h3 className="font-display font-extrabold text-3xl text-white mb-3">
                {t("concept.shopTitle") as string}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                {t("concept.shopDesc") as string}
              </p>
            </div>
            <a
              href="#shop"
              className="text-xs font-extrabold text-[hsl(28_85%_52%)] uppercase tracking-wider border-t border-white/10 pt-4 hover:underline block"
            >
              Переглянути косметику →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}