"use client";

import { useLocale } from "@/lib/i18n";

export default function CraftsmanshipSection() {
  const { t } = useLocale();

  return (
    <section id="craft" className="py-24 bg-[hsl(25_20%_8%)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
              {t("craft.kicker") as string}
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-2 leading-none">
              {t("craft.title") as string}
            </h2>
            <p className="text-base text-white/80 mt-4 leading-relaxed max-w-2xl">
              Ми поєднали норвезьку пунктуальність із класичними ремісничими ритуалами. Кожен візит — це заздалегідь підготовлене робоче місце, прогріті рушники 65°C та вивірені суміші L'ANZA.
            </p>

            {/* Oversized Statement / Pull-Quote */}
            <div className="mt-8 p-6 rounded-lg bg-white/[0.03] border-l-4 border-[hsl(28_85%_52%)] border-y border-r border-white/10">
              <p className="font-display font-extrabold text-2xl text-white uppercase leading-snug">
                "ТРАДИЦІЙНЕ РОЗПАРЮВАННЯ 65°C ТА ТОЧНІСТЬ МІКРОПРЯДКИ FOILAGE В ОДНОМУ САЛОНІ."
              </p>
              <div className="mt-3 text-xs text-white/60 font-semibold tracking-wider uppercase">
                Jan Emil — засновник та головний барбер мережі
              </div>
            </div>
          </div>

          {/* 2-Photo Overlapped Cluster */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://static.wixstatic.com/media/973894_d0a9efdba4e7459989f9612b17e9c28d~mv2.png/v1/crop/x_0,y_0,w_709,h_450,q_85,enc_auto/973894_d0a9efdba4e7459989f9612b17e9c28d~mv2.png"
                alt="Процес роботи Solsiden"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 aspect-[4/3] rounded-xl overflow-hidden border-2 border-[hsl(28_85%_52%)] shadow-2xl hidden sm:block">
              <img
                src="https://static.wixstatic.com/media/973894_cbcf7ada9f8c487493d3b3941196523e~mv2.jpg/v1/crop/x_0,y_0,w_596,h_447,q_80,enc_auto/973894_cbcf7ada9f8c487493d3b3941196523e~mv2.jpg"
                alt="Гоління небезпечною бритвою"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-[11px] text-white/50 border-t border-white/10 pt-2 font-mono">
              Інтер'єр та робочі процеси у філії Solsiden, Trondheim
            </div>
          </div>
        </div>

        {/* 4 Stat Numerals Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-display text-4xl font-extrabold text-[hsl(28_85%_52%)] tabular-nums">65°C</span>
              <h3 className="font-display font-extrabold text-2xl text-white mt-3 mb-2 uppercase">
                {t("craft.item1Title") as string}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {t("craft.item1Desc") as string}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-display text-4xl font-extrabold text-[hsl(28_85%_52%)]">L'ANZA</span>
              <h3 className="font-display font-extrabold text-2xl text-white mt-3 mb-2 uppercase">
                {t("craft.item2Title") as string}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {t("craft.item2Desc") as string}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-display text-4xl font-extrabold text-[hsl(28_85%_52%)] tabular-nums">0 хв</span>
              <h3 className="font-display font-extrabold text-2xl text-white mt-3 mb-2 uppercase">
                {t("craft.item3Title") as string}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {t("craft.item3Desc") as string}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="font-display text-4xl font-extrabold text-[hsl(28_85%_52%)]">2018</span>
              <h3 className="font-display font-extrabold text-2xl text-white mt-3 mb-2 uppercase">
                {t("craft.item4Title") as string}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {t("craft.item4Desc") as string}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="text-xs font-extrabold uppercase tracking-widest text-[hsl(28_85%_52%)] hover:underline"
          >
            Ознайомитися з регламентом майстрів →
          </a>
        </div>
      </div>
    </section>
  );
}