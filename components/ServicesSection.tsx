"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

interface ServiceItem {
  id: string;
  category: "men" | "women" | "special";
  name: string;
  norwegianName: string;
  price: string;
  description: string;
  duration: string;
  tag?: string;
}

export default function ServicesSection() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<"all" | "men" | "women" | "special">("all");

  const servicesList: ServiceItem[] = [
    {
      id: "1",
      category: "men",
      name: "Чоловіча стрижка",
      norwegianName: "Herreklipp",
      price: "450 NOK",
      duration: "45 хв",
      description: "Персональний підбір форми, миття голови, сушка та фінішний стайлінг Bearburys.",
    },
    {
      id: "2",
      category: "men",
      name: "Стрижка та опрацювання бороди",
      norwegianName: "Skjeggtrim",
      price: "350 NOK",
      duration: "30 хв",
      description: "Контурування ліній, зволоження олією та розпарювання.",
    },
    {
      id: "3",
      category: "men",
      name: "Барбер-комплекс (Стрижка + Борода)",
      norwegianName: "Barbershop Komplett",
      price: "750 NOK",
      duration: "75 хв",
      description: "Повний цикл догляду: стрижка, формування бороди, гарячий рушник 65°C та масаж шкіри голови.",
      tag: "ХІТ ВІЗИТІВ",
    },
    {
      id: "4",
      category: "men",
      name: "Традиційне гоління небезпечною бритвою",
      norwegianName: "Knivbarbering",
      price: "520 NOK",
      duration: "45 хв",
      description: "Класичний ритуал з розпарювальним рушником 65°C та заспокійливим бальзамом.",
    },
    {
      id: "5",
      category: "women",
      name: "Складне фарбування Foilage",
      norwegianName: "Foilage Spesial",
      price: "1 850 NOK",
      duration: "180 хв",
      description: "Спеціалізована техніка створення м'яких відблисків із захистом кератину L'ANZA.",
      tag: "L'ANZA KERATIN",
    },
    {
      id: "6",
      category: "women",
      name: "Фарбування Балаяж",
      norwegianName: "Balayage",
      price: "1 950 NOK",
      duration: "180 хв",
      description: "Плавний перехід кольору без чітких меж. Включає тонування та салонну сушку.",
    },
    {
      id: "7",
      category: "women",
      name: "Жіноча стрижка та стайлінг",
      norwegianName: "Dameklipp og styling",
      price: "790 NOK",
      duration: "60 хв",
      description: "Консультація колориста, миття доглядовим шампунем KEUNE та моделювання зачіски.",
    },
    {
      id: "8",
      category: "women",
      name: "Мелірування та висвітлення",
      norwegianName: "Highlights",
      price: "1 400 NOK",
      duration: "120 хв",
      description: "Акцентні пасма з подальшим захисним тонуванням для блиску.",
    },
    {
      id: "9",
      category: "special",
      name: "Салонний догляд L'ANZA Keratin",
      norwegianName: "L'ANZA Kurbehandling",
      price: "380 NOK",
      duration: "30 хв",
      description: "Глибока реконструкція пошкодженої структури волосся кератиновими білками.",
    },
    {
      id: "10",
      category: "special",
      name: "Класичний манікюр",
      norwegianName: "Manikyr",
      price: "720 NOK",
      duration: "45 хв",
      description: "Гігієнічний догляд за нігтями та кутикулою, надання форми та живлення олією.",
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? servicesList
      : servicesList.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-[hsl(25_20%_8%)] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("services.kicker") as string}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-2 mb-4 leading-none">
            {t("services.title") as string}
          </h2>
          <p className="text-base text-white/75">
            {t("services.subtitle") as string}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded text-xs uppercase font-bold tracking-wider transition-all ${
                activeTab === "all"
                  ? "bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {t("services.tabAll") as string}
            </button>
            <button
              onClick={() => setActiveTab("men")}
              className={`px-5 py-2 rounded text-xs uppercase font-bold tracking-wider transition-all ${
                activeTab === "men"
                  ? "bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {t("services.tabMen") as string}
            </button>
            <button
              onClick={() => setActiveTab("women")}
              className={`px-5 py-2 rounded text-xs uppercase font-bold tracking-wider transition-all ${
                activeTab === "women"
                  ? "bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {t("services.tabWomen") as string}
            </button>
            <button
              onClick={() => setActiveTab("special")}
              className={`px-5 py-2 rounded text-xs uppercase font-bold tracking-wider transition-all ${
                activeTab === "special"
                  ? "bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] shadow-md"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              }`}
            >
              {t("services.tabSpecial") as string}
            </button>
          </div>
        </div>

        {/* Highlight Banner for Signature Service */}
        <div className="max-w-4xl mx-auto mb-8 bg-[hsl(25_15%_12%)] border border-[hsl(28_85%_52%/0.4)] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[hsl(28_85%_52%)] block mb-1">
              РЕКОМЕНДОВАНИЙ РИТУАЛ
            </span>
            <h3 className="font-display font-extrabold text-2xl text-white uppercase">
              BARBERSHOP KOMPLETT + ГАРЯЧИЙ РУШНИК 65°C
            </h3>
            <p className="text-xs text-white/70 mt-1 max-w-xl">
              Стрижка, оформлення бороди з розпарюванням, масаж голови та стайлінг Bearburys.
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <span className="font-display font-extrabold text-3xl text-[hsl(28_85%_52%)] tabular-nums">
              750 NOK
            </span>
            <a
              href="#contact"
              className="bg-[hsl(28_85%_52%)] hover:bg-[hsl(24_90%_45%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-sm uppercase px-5 py-2.5 rounded transition-all tracking-wider whitespace-nowrap"
            >
              Записатись
            </a>
          </div>
        </div>

        {/* Offer Rows with Dotted Leaders */}
        <div className="max-w-4xl mx-auto bg-white/[0.02] rounded-xl border border-white/10 p-6 sm:p-8 space-y-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="group border-b border-white/10 pb-5 last:border-0 last:pb-0">
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-[hsl(28_85%_52%)] transition-colors uppercase">
                    {service.name}
                  </h3>
                  <span className="text-xs font-semibold text-white/40 uppercase hidden sm:inline">
                    ({service.norwegianName})
                  </span>
                  {service.tag && (
                    <span className="px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider bg-[hsl(28_85%_52%/0.2)] text-[hsl(28_85%_52%)] border border-[hsl(28_85%_52%/0.4)]">
                      {service.tag}
                    </span>
                  )}
                </div>

                <div className="flex-1 border-b border-dotted border-white/20 mx-3 hidden sm:block" />

                <div className="flex items-center gap-4">
                  <span className="text-xs text-white/50 font-semibold tabular-nums hidden md:inline">
                    {service.duration}
                  </span>
                  <span className="font-display font-extrabold text-2xl text-[hsl(28_85%_52%)] tabular-nums whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-white/70 max-w-xl">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="text-xs font-bold text-[hsl(28_85%_52%)] hover:underline uppercase tracking-wider hidden sm:inline-block"
                >
                  Забронювати →
                </a>
              </div>
            </div>
          ))}

          {/* Footnote Line */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-2">
            <span>* Вартість фарбування включає консультацію колориста та захисне тонування</span>
            <a href="#contact" className="text-[hsl(28_85%_52%)] hover:underline font-bold uppercase">
              {t("services.bookServiceBtn") as string} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}