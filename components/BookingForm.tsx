"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function BookingForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    location: "solsiden",
    service: "herreklipp",
    name: "",
    phone: "",
    date: "",
    time: "12:00",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-[hsl(25_15%_10%)] text-white scroll-mt-16 relative overflow-hidden">
      {/* Background Watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 flex items-center justify-center opacity-[0.03]"
      >
        <span className="font-display font-extrabold text-[22vw] uppercase tracking-tighter text-white whitespace-nowrap">
          RESERVATION
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("booking.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              Забронюйте час для вашого візиту
            </h2>
            <p className="text-base text-white/70 font-normal">
              {t("booking.subtitle") as string}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="bg-[hsl(25_18%_14%)] p-8 sm:p-12 rounded-2xl border border-white/15 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold mx-auto border border-emerald-500/40">
                  OK
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-white">
                  Запис прийнято!
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto">
                  {t("booking.form.successMsg") as string}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      {t("booking.form.locationLabel") as string}
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full p-3.5 bg-black/40 border border-white/20 rounded-lg text-xs font-bold uppercase text-white focus:border-[hsl(28_85%_48%)] outline-none"
                    >
                      <option value="solsiden" className="bg-[hsl(25_15%_10%)]">Solsiden Studio (Beddingen, 7014)</option>
                      <option value="moholt" className="bg-[hsl(25_15%_10%)]">Moholt Campus (Brøsetveien, 7050)</option>
                    </select>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      {t("booking.form.serviceLabel") as string}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3.5 bg-black/40 border border-white/20 rounded-lg text-xs font-bold uppercase text-white focus:border-[hsl(28_85%_48%)] outline-none"
                    >
                      <option value="herreklipp" className="bg-[hsl(25_15%_10%)]">Чоловіча стрижка (Herreklipp)</option>
                      <option value="skjeggtrim" className="bg-[hsl(25_15%_10%)]">Оформлення бороди (Skjeggtrim)</option>
                      <option value="barber_kompleks" className="bg-[hsl(25_15%_10%)]">Барбер-Комплекс (Стрижка + Борода)</option>
                      <option value="knivbarbering" className="bg-[hsl(25_15%_10%)]">Традиційне гоління бритвою</option>
                      <option value="dameklipp" className="bg-[hsl(25_15%_10%)]">Жіноча стрижка та укладка</option>
                      <option value="foilage" className="bg-[hsl(25_15%_10%)]">Складне фарбування Foilage</option>
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      {t("booking.form.nameLabel") as string}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Олександр Коваленко"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3.5 bg-black/40 border border-white/20 rounded-lg text-xs font-bold text-white focus:border-[hsl(28_85%_48%)] outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      {t("booking.form.phoneLabel") as string}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+47 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3.5 bg-black/40 border border-white/20 rounded-lg text-xs font-bold text-white focus:border-[hsl(28_85%_48%)] outline-none"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      {t("booking.form.dateLabel") as string}
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full p-3.5 bg-black/40 border border-white/20 rounded-lg text-xs font-bold text-white focus:border-[hsl(28_85%_48%)] outline-none"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                      {t("booking.form.timeLabel") as string}
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full p-3.5 bg-black/40 border border-white/20 rounded-lg text-xs font-bold text-white focus:border-[hsl(28_85%_48%)] outline-none"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                    {t("booking.form.notesLabel") as string}
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Додаткові деталі..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3.5 bg-black/40 border border-white/20 rounded-lg text-xs font-bold text-white focus:border-[hsl(28_85%_48%)] outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                  <div className="text-xs text-white/70">
                    Або зателефонуйте для швидкого бронювання:{" "}
                    <a href="tel:+4773000000" className="text-[hsl(28_85%_48%)] font-bold hover:underline">
                      +47 73 00 00 00
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-md bg-[hsl(28_85%_48%)] hover:bg-[hsl(28_90%_40%)] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg"
                  >
                    {t("booking.form.submitBtn") as string}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
