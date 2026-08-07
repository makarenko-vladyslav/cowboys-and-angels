"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

export default function CalculatorSection() {
  const { t } = useLocale();
  const [selectedService, setSelectedService] = useState<keyof typeof pricing.basePrices>("herreklipp");
  const [lengthFactor, setLengthFactor] = useState<keyof typeof pricing.lengthMultipliers>("short");
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>([]);

  const toggleTreatment = (key: string) => {
    if (selectedTreatments.includes(key)) {
      setSelectedTreatments(selectedTreatments.filter((t) => t !== key));
    } else {
      setSelectedTreatments([...selectedTreatments, key]);
    }
  };

  const calculateTotal = () => {
    const base = pricing.basePrices[selectedService] || 450;
    const multiplier = pricing.lengthMultipliers[lengthFactor] || 1.0;
    let treatmentSum = 0;
    selectedTreatments.forEach((tKey) => {
      treatmentSum += pricing.additionalTreatments[tKey as keyof typeof pricing.additionalTreatments] || 0;
    });

    return Math.round(base * multiplier + treatmentSum);
  };

  return (
    <section id="calculator" className="py-24 bg-[hsl(35_25%_96%)] text-[hsl(25_20%_12%)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("calculator.kicker") as string}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[hsl(25_20%_8%)] mt-2 mb-4 leading-none">
            {t("calculator.title") as string}
          </h2>
          <p className="text-base text-[hsl(25_10%_35%)]">
            {t("calculator.subtitle") as string}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-[hsl(25_15%_88%)] grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 flex flex-col gap-6">
            <div>
              <label className="block text-xs uppercase font-extrabold text-[hsl(25_20%_8%)] tracking-wider mb-2">
                {t("calculator.serviceLabel") as string}
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value as keyof typeof pricing.basePrices)}
                className="w-full bg-[hsl(35_25%_96%)] border border-[hsl(25_15%_85%)] rounded px-4 py-3 text-sm font-semibold text-[hsl(25_20%_8%)] focus:outline-none focus:border-[hsl(28_85%_52%)]"
              >
                <option value="herreklipp">Herreklipp — Чоловіча стрижка (450 NOK)</option>
                <option value="skjeggtrim">Skjeggtrim — Стрижка бороди (350 NOK)</option>
                <option value="combo_barber">Barbershop Komplett — Стрижка + Борода (750 NOK)</option>
                <option value="knivbarbering">Knivbarbering — Гоління небезпечною бритвою (520 NOK)</option>
                <option value="foilage">Foilage Spesial — Фарбування Foilage (1 850 NOK)</option>
                <option value="balayage">Balayage — Фарбування Балаяж (1 950 NOK)</option>
                <option value="dameklipp">Dameklipp — Жіноча стрижка та укладка (790 NOK)</option>
                <option value="highlights">Highlights — Мелірування (1 400 NOK)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-extrabold text-[hsl(25_20%_8%)] tracking-wider mb-2">
                {t("calculator.lengthLabel") as string}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setLengthFactor("short")}
                  className={`py-2.5 px-3 rounded text-xs font-bold transition-all border ${
                    lengthFactor === "short"
                      ? "bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] border-[hsl(28_85%_52%)] shadow-sm"
                      : "bg-[hsl(35_25%_96%)] text-[hsl(25_10%_35%)] border-[hsl(25_15%_85%)]"
                  }`}
                >
                  Короткі (x1.0)
                </button>
                <button
                  type="button"
                  onClick={() => setLengthFactor("medium")}
                  className={`py-2.5 px-3 rounded text-xs font-bold transition-all border ${
                    lengthFactor === "medium"
                      ? "bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] border-[hsl(28_85%_52%)] shadow-sm"
                      : "bg-[hsl(35_25%_96%)] text-[hsl(25_10%_35%)] border-[hsl(25_15%_85%)]"
                  }`}
                >
                  Середні (x1.15)
                </button>
                <button
                  type="button"
                  onClick={() => setLengthFactor("long")}
                  className={`py-2.5 px-3 rounded text-xs font-bold transition-all border ${
                    lengthFactor === "long"
                      ? "bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] border-[hsl(28_85%_52%)] shadow-sm"
                      : "bg-[hsl(35_25%_96%)] text-[hsl(25_10%_35%)] border-[hsl(25_15%_85%)]"
                  }`}
                >
                  Довгі (x1.35)
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-extrabold text-[hsl(25_20%_8%)] tracking-wider mb-2">
                {t("calculator.treatmentsLabel") as string}
              </label>
              <div className="flex flex-col gap-2">
                {Object.entries(pricing.additionalTreatments).map(([key, price]) => (
                  <label
                    key={key}
                    className="flex items-center justify-between p-3 rounded bg-[hsl(35_25%_96%)] border border-[hsl(25_15%_88%)] cursor-pointer hover:border-[hsl(28_85%_52%)] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedTreatments.includes(key)}
                        onChange={() => toggleTreatment(key)}
                        className="w-4 h-4 accent-[hsl(28_85%_52%)] cursor-pointer"
                      />
                      <span className="text-xs font-medium text-[hsl(25_20%_12%)]">
                        {key === "lanza_treatment" && "Салонний догляд L'ANZA Keratin"}
                        {key === "hot_towel_spa" && "Спа-розпарювання гарячим рушником 65°C"}
                        {key === "eyebrow_styling" && "Моделювання та фарбування брів"}
                        {key === "beard_color" && "Камуфлювання сивини бороди"}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[hsl(28_85%_52%)] tabular-nums">
                      +{price} NOK
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-[hsl(25_20%_8%)] text-white rounded-xl p-6 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs uppercase tracking-widest text-[hsl(28_85%_52%)] font-bold">
                РЕЗУЛЬТАТ РОЗРАХУНКУ
              </span>
              <div className="mt-6">
                <span className="text-xs text-white/60 block mb-1">
                  {t("calculator.estimatedTotal") as string}
                </span>
                <div className="font-display font-extrabold text-5xl text-[hsl(28_85%_52%)] leading-none tabular-nums">
                  {calculateTotal()} NOK
                </div>
              </div>

              <ul className="mt-8 space-y-2 text-xs text-white/70 border-t border-white/10 pt-4">
                <li className="flex items-center justify-between">
                  <span>Фіксований прайс:</span>
                  <span className="text-white font-semibold">Без прихованих націнок</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Час процедури:</span>
                  <span className="text-white font-semibold tabular-nums">45 – 180 хв</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Локації у Тронгеймі:</span>
                  <span className="text-white font-semibold">Moholt або Solsiden</span>
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="mt-8 block w-full text-center bg-[hsl(28_85%_52%)] hover:bg-[hsl(24_90%_45%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-xl uppercase py-3.5 rounded transition-colors shadow-lg tracking-wider"
            >
              {t("calculator.bookCalculatedBtn") as string}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}