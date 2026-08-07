"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingContactSection() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[hsl(25_20%_8%)] text-white relative overflow-hidden">
      {/* Decorative Watermark */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 pointer-events-none opacity-[0.03] select-none"
      >
        <span className="font-display font-extrabold text-[22vw] leading-none uppercase tracking-tighter text-white">
          BOOKING
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
                {t("contact.kicker") as string}
              </span>
              {/* Invitation Heading (Never brand name) */}
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-2 mb-4 leading-none">
                ОБЕРІТЬ СВІЙ ЧАС ТА ФІЛІЮ У ТРОНГЕЙМІ
              </h2>
              <p className="text-base text-white/80 mb-8 leading-relaxed">
                Миттєве підтвердження за 30 секунд без створення персонального кабінету чи підтвердження по пошті.
              </p>

              {/* Structured Hours Mini-Table */}
              <div className="bg-white/5 p-5 rounded-xl border border-white/10 mb-8 max-w-md">
                <span className="text-[10px] uppercase font-bold text-[hsl(28_85%_52%)] tracking-widest block mb-3">
                  ГРАФІК ОБСЛУГОВУВАННЯ
                </span>
                <div className="space-y-2 text-xs font-semibold">
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <span className="text-white/70">Понеділок — П'ятниця</span>
                    <span className="text-white tabular-nums">09:00 – 18:00</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                    <span className="text-white/70">Субота</span>
                    <span className="text-white tabular-nums">09:00 – 16:00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Неділя</span>
                    <span className="text-[hsl(28_85%_52%)] uppercase">Зачинено</span>
                  </div>
                </div>
              </div>

              {/* Studio Addresses */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h3 className="font-display font-extrabold text-2xl text-white mb-1 uppercase">
                    {t("contact.moholtTitle") as string}
                  </h3>
                  <p className="text-xs text-white/70 mb-2">
                    {t("contact.moholtDesc") as string}
                  </p>
                  <a
                    href="https://www.google.com/maps?q=Herman+Krags+vei+43+Trondheim"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[hsl(28_85%_52%)] hover:underline uppercase"
                  >
                    Карта Google →
                  </a>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h3 className="font-display font-extrabold text-2xl text-white mb-1 uppercase">
                    {t("contact.solsidenTitle") as string}
                  </h3>
                  <p className="text-xs text-white/70 mb-2">
                    {t("contact.solsidenDesc") as string}
                  </p>
                  <a
                    href="https://www.google.com/maps?q=TMV-kaia+23+Trondheim"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[hsl(28_85%_52%)] hover:underline uppercase"
                  >
                    Карта Google →
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Call Banner */}
            <div className="p-4 bg-white/10 text-white rounded-xl flex items-center justify-between border border-white/10">
              <div>
                <span className="text-[10px] text-[hsl(28_85%_52%)] uppercase tracking-widest block font-bold">
                  Прямий телефон адміністратора
                </span>
                <a href="tel:+4773931000" className="font-display font-extrabold text-2xl tabular-nums">
                  +47 73 93 10 00
                </a>
              </div>
              <a
                href="tel:+4773931000"
                className="bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] font-display font-bold text-sm uppercase px-4 py-2 rounded"
              >
                Дзвінок
              </a>
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="lg:col-span-6 bg-white text-[hsl(25_20%_12%)] rounded-2xl p-6 sm:p-10 border border-[hsl(25_15%_88%)] shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(28_85%_52%/0.2)] text-[hsl(28_85%_52%)] font-extrabold text-2xl flex items-center justify-center mb-4 font-mono">
                  OK
                </div>
                <h3 className="font-display font-extrabold text-3xl text-[hsl(25_20%_8%)] mb-2 uppercase">
                  БРОНЮВАННЯ ПРИЙНЯТО
                </h3>
                <p className="text-sm text-[hsl(25_10%_35%)] max-w-md mb-6 leading-relaxed">
                  {t("contact.successMsg") as string}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[hsl(25_20%_8%)] text-white font-display font-bold text-sm uppercase px-6 py-2.5 rounded tracking-wider"
                >
                  Забронювати ще один візит
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs uppercase font-extrabold text-[hsl(25_20%_8%)] mb-1">
                    {t("contact.formName") as string} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Олександр"
                    className="w-full bg-[hsl(35_25%_96%)] border border-[hsl(25_15%_85%)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[hsl(28_85%_52%)]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[hsl(25_20%_8%)] mb-1">
                    {t("contact.formPhone") as string} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+47 00 00 00 00"
                    className="w-full bg-[hsl(35_25%_96%)] border border-[hsl(25_15%_85%)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[hsl(28_85%_52%)]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[hsl(25_20%_8%)] mb-1">
                    {t("contact.formLocation") as string}
                  </label>
                  <select className="w-full bg-[hsl(35_25%_96%)] border border-[hsl(25_15%_85%)] rounded px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[hsl(28_85%_52%)]">
                    <option value="moholt">Moholt (Herman Krags vei 43)</option>
                    <option value="solsiden">Solsiden (TMV-kaia 23)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[hsl(25_20%_8%)] mb-1">
                    {t("contact.formService") as string}
                  </label>
                  <select className="w-full bg-[hsl(35_25%_96%)] border border-[hsl(25_15%_85%)] rounded px-4 py-3 text-sm font-semibold focus:outline-none focus:border-[hsl(28_85%_52%)]">
                    <option value="herreklipp">Чоловіча стрижка (Herreklipp)</option>
                    <option value="skjeggtrim">Стрижка бороди (Skjeggtrim)</option>
                    <option value="barber_komplett">Комплекс Барбер + Борода</option>
                    <option value="foilage">Складне фарбування Foilage</option>
                    <option value="dameklipp">Жіноча стрижка та стайлінг</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-extrabold text-[hsl(25_20%_8%)] mb-1">
                    {t("contact.formDate") as string}
                  </label>
                  <input
                    type="datetime-local"
                    className="w-full bg-[hsl(35_25%_96%)] border border-[hsl(25_15%_85%)] rounded px-4 py-3 text-sm focus:outline-none focus:border-[hsl(28_85%_52%)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full bg-[hsl(28_85%_52%)] hover:bg-[hsl(24_90%_45%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-xl uppercase py-4 rounded transition-colors shadow-lg tracking-wider"
                >
                  {loading ? "Обробка..." : (t("contact.submitBtn") as string)}
                </button>

                <div className="text-[10px] text-center text-[hsl(25_10%_50%)] mt-2 uppercase font-semibold">
                  Понад 100 підтверджених відгуків гостей на Google Maps
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}