"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function Locations() {
  const { t } = useLocale();

  return (
    <section id="locations" className="py-24 bg-[hsl(38_25%_96%)] text-[hsl(25_12%_15%)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("locations.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[hsl(25_15%_10%)] mb-4">
              {t("locations.title") as string}
            </h2>
            <p className="text-base text-[hsl(25_8%_45%)] font-normal">
              {t("locations.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* 2 Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Solsiden Studio Card */}
          <Reveal delay={0.1}>
            <div className="bg-white rounded-xl overflow-hidden border border-[hsl(30_15%_85%)] shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[hsl(30_15%_85%)] pb-4">
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[hsl(28_85%_48%)] bg-[hsl(35_20%_92%)] px-3 py-1 rounded-full">
                      Центральний район Solsiden
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[hsl(25_15%_10%)] mt-3">
                      {t("locations.solsidenTitle") as string}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[hsl(25_8%_45%)] leading-relaxed">
                  {t("locations.solsidenDesc") as string}
                </p>

                <div className="space-y-3 pt-4 border-t border-[hsl(30_15%_85%)] text-xs text-[hsl(25_12%_15%)] font-semibold">
                  <div className="flex items-center justify-between">
                    <span className="text-[hsl(25_8%_45%)] uppercase tracking-wider">Адреса:</span>
                    <span className="font-bold">{t("locations.solsidenAddr") as string}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[hsl(25_8%_45%)] uppercase tracking-wider">Графік:</span>
                    <span className="font-bold">{t("locations.solsidenHours") as string}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <a
                  href="#booking"
                  className="block w-full text-center py-3.5 rounded bg-[hsl(25_15%_10%)] hover:bg-[hsl(28_85%_48%)] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Записатися на Solsiden
                </a>
              </div>
            </div>
          </Reveal>

          {/* Moholt Campus Card */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-xl overflow-hidden border border-[hsl(30_15%_85%)] shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between border-b border-[hsl(30_15%_85%)] pb-4">
                  <div>
                    <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[hsl(28_85%_48%)] bg-[hsl(35_20%_92%)] px-3 py-1 rounded-full">
                      NTNU Кампус & Студенти
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[hsl(25_15%_10%)] mt-3">
                      {t("locations.moholtTitle") as string}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[hsl(25_8%_45%)] leading-relaxed">
                  {t("locations.moholtDesc") as string}
                </p>

                <div className="space-y-3 pt-4 border-t border-[hsl(30_15%_85%)] text-xs text-[hsl(25_12%_15%)] font-semibold">
                  <div className="flex items-center justify-between">
                    <span className="text-[hsl(25_8%_45%)] uppercase tracking-wider">Адреса:</span>
                    <span className="font-bold">{t("locations.moholtAddr") as string}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[hsl(25_8%_45%)] uppercase tracking-wider">Графік:</span>
                    <span className="font-bold">{t("locations.moholtHours") as string}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <a
                  href="#booking"
                  className="block w-full text-center py-3.5 rounded bg-[hsl(25_15%_10%)] hover:bg-[hsl(28_85%_48%)] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Записатися на Moholt
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
