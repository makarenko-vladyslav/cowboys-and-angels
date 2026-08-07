"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";
import pricingData from "@/lib/pricing.json";

export default function PriceCalculator() {
  const { t } = useLocale();

  const [selectedService, setSelectedService] = useState<string>("herreklipp");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("solsiden");

  const basePrice = pricingData.basePrices[selectedService as keyof typeof pricingData.basePrices] || 450;
  
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = pricingData.options.additions.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalEstimate = basePrice + addonsTotal;

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[hsl(38_25%_96%)] text-[hsl(25_12%_15%)] scroll-mt-16 border-t border-[hsl(30_15%_85%)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("calculator.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[hsl(25_15%_10%)] mb-4">
              {t("calculator.title") as string}
            </h2>
            <p className="text-base text-[hsl(25_8%_45%)] font-normal">
              {t("calculator.subtitle") as string}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[hsl(30_15%_85%)] shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Options selection */}
            <div className="md:col-span-7 space-y-6">
              {/* Location selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(25_12%_15%)] mb-3">
                  1. Оберіть салон у Тронгеймі
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {pricingData.options.locations.map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`p-3.5 rounded-lg text-xs font-bold uppercase border transition-all text-center ${
                        selectedLocation === loc.id
                          ? "bg-[hsl(25_15%_10%)] text-white border-[hsl(25_15%_10%)] shadow-md"
                          : "bg-[hsl(38_25%_96%)] text-[hsl(25_12%_15%)] border-[hsl(30_15%_85%)] hover:bg-white"
                      }`}
                    >
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(25_12%_15%)] mb-3">
                  2. Основна послуга
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-3.5 bg-[hsl(38_25%_96%)] border border-[hsl(30_15%_85%)] rounded-lg text-xs font-bold text-[hsl(25_12%_15%)] focus:ring-2 focus:ring-[hsl(28_85%_48%)] outline-none uppercase tracking-wider"
                >
                  <option value="herreklipp">Чоловіча стрижка (Herreklipp) — 450 NOK</option>
                  <option value="skjeggtrim">Оформлення бороди (Skjeggtrim) — 320 NOK</option>
                  <option value="barber_kompleks">Барбер-Комплекс (Стрижка + Борода) — 720 NOK</option>
                  <option value="knivbarbering">Традиційне гоління бритвою — 480 NOK</option>
                  <option value="dameklipp">Жіноча стрижка та укладка — 680 NOK</option>
                  <option value="foilage">Складне фарбування Foilage — 1 850 NOK</option>
                  <option value="balayage">Фарбування Балаяж — 1 950 NOK</option>
                  <option value="manikyr">Манікор (Manikyr) — 720 NOK</option>
                </select>
              </div>

              {/* Addons */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[hsl(25_12%_15%)] mb-3">
                  3. Додаткові доглядові ритуали
                </label>
                <div className="space-y-2">
                  {pricingData.options.additions.map((addon) => (
                    <label
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        selectedAddons.includes(addon.id)
                          ? "bg-[hsl(35_20%_92%)] border-[hsl(28_85%_48%)] text-[hsl(25_12%_15%)] font-bold shadow-sm"
                          : "bg-[hsl(38_25%_96%)] border-[hsl(30_15%_85%)] text-[hsl(25_8%_45%)] hover:bg-white"
                      }`}
                    >
                      <span>{addon.label}</span>
                      <span className="font-display font-extrabold text-[hsl(28_85%_48%)] tabular-nums">
                        +{addon.price} NOK
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Total Display */}
            <div className="md:col-span-5 bg-[hsl(25_15%_10%)] text-white p-8 rounded-xl flex flex-col justify-between h-full border border-white/10 shadow-2xl">
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[hsl(28_85%_48%)] block mb-2">
                  ПІДСУМКОВИЙ РОЗРАХУНОК
                </span>
                <div className="font-display text-5xl font-extrabold text-[hsl(28_85%_48%)] tabular-nums my-4">
                  {totalEstimate} <span className="text-xl text-white font-normal">NOK</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  Фіксований прайс без прихованих платежів. Усі матеріали та шампуні включено.
                </p>
              </div>

              <a
                href="#booking"
                className="w-full py-4 text-center rounded bg-[hsl(28_85%_48%)] hover:bg-[hsl(28_90%_40%)] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                {t("calculator.bookCalculated") as string}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
