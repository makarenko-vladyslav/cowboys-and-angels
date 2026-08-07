"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface ServiceItem {
  id: string;
  cat: string;
  tag?: string;
  name: string;
  price: string;
  desc: string;
}

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<string>("all");

  const rawItems = t("services.items") as ServiceItem[];
  const items = Array.isArray(rawItems) ? rawItems : [];

  const filteredItems = activeTab === "all" ? items : items.filter((i) => i.cat === activeTab);

  return (
    <section id="services" className="py-24 bg-[hsl(35_20%_92%)] text-[hsl(25_12%_15%)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("services.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[hsl(25_15%_10%)] mb-4">
              {t("services.title") as string}
            </h2>
            <p className="text-base text-[hsl(25_8%_45%)] font-normal">
              {t("services.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Filter Tabs */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "all"
                  ? "bg-[hsl(28_85%_48%)] text-white shadow-md"
                  : "bg-white text-[hsl(25_12%_15%)] hover:bg-white/80 border border-[hsl(30_15%_85%)]"
              }`}
            >
              Усі послуги
            </button>
            <button
              onClick={() => setActiveTab("barber")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "barber"
                  ? "bg-[hsl(28_85%_48%)] text-white shadow-md"
                  : "bg-white text-[hsl(25_12%_15%)] hover:bg-white/80 border border-[hsl(30_15%_85%)]"
              }`}
            >
              {t("services.categories.barber") as string}
            </button>
            <button
              onClick={() => setActiveTab("color")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "color"
                  ? "bg-[hsl(28_85%_48%)] text-white shadow-md"
                  : "bg-white text-[hsl(25_12%_15%)] hover:bg-white/80 border border-[hsl(30_15%_85%)]"
              }`}
            >
              {t("services.categories.color") as string}
            </button>
            <button
              onClick={() => setActiveTab("care")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "care"
                  ? "bg-[hsl(28_85%_48%)] text-white shadow-md"
                  : "bg-white text-[hsl(25_12%_15%)] hover:bg-white/80 border border-[hsl(30_15%_85%)]"
              }`}
            >
              {t("services.categories.care") as string}
            </button>
          </div>
        </Reveal>

        {/* Menu Rows Layout */}
        <div className="bg-white rounded-xl p-6 sm:p-10 border border-[hsl(30_15%_85%)] shadow-md">
          <div className="divide-y divide-[hsl(30_15%_85%)]">
            {filteredItems.map((item) => {
              const isHighlight = item.id === "3" || item.id === "6";
              return (
                <div
                  key={item.id}
                  className={`py-6 transition-colors ${
                    isHighlight ? "bg-[hsl(38_25%_96%)] -mx-6 sm:-mx-10 px-6 sm:px-10 rounded-lg border-l-4 border-[hsl(28_85%_48%)] my-2" : ""
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-[hsl(25_15%_10%)] uppercase">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="text-[0.6rem] font-bold tracking-widest text-[hsl(28_85%_48%)] bg-[hsl(28_85%_48%/0.12)] px-2 py-0.5 rounded uppercase">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    {/* Dotted Leader Line */}
                    <div className="hidden md:block flex-1 mx-4 border-b border-dotted border-[hsl(30_15%_85%)]"></div>

                    <div className="font-display font-extrabold text-lg sm:text-2xl text-[hsl(28_85%_48%)] tabular-nums shrink-0">
                      {item.price}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[hsl(25_8%_45%)] mt-2 max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-[hsl(30_15%_85%)] text-xs text-[hsl(25_8%_45%)] flex flex-wrap items-center justify-between gap-4">
            <p>Усі доглядові засоби L'Anza та Keune включено у підсумкову вартість візиту.</p>
            <a href="#calculator" className="font-bold text-[hsl(28_85%_48%)] hover:underline uppercase tracking-wider">
              Розрахувати комбінований візит в калькуляторі →
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
          <a
            href="#booking"
            className="px-8 py-4 rounded-md bg-[hsl(28_85%_48%)] hover:bg-[hsl(28_90%_40%)] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg"
          >
            {t("common.bookNow") as string}
          </a>
        </div>
      </div>
    </section>
  );
}
