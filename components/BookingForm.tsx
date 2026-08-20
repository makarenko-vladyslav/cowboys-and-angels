"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function BookingForm() {
  const { t } = useLocale();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Moholt Salong",
    service: "Cowboy Herreklipp",
    date: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-dark-bg border-t border-copper/20 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("booking.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            {String(t("booking.title"))}
          </h2>
          <p className="text-xs sm:text-sm text-text-light/70 font-body mb-2">
            {String(t("booking.subtitle"))}
          </p>
          <p className="text-[11px] font-display uppercase tracking-wider text-copper-light">
            {String(t("booking.trust_line"))}
          </p>
        </div>

        <Reveal direction="up">
          <div className="max-w-4xl mx-auto bg-dark-card border border-copper/30 rounded-sm p-6 sm:p-10 shadow-2xl">
            
            {/* Structured Hours & Contacts Mini Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-8 mb-8 border-b border-copper/15 text-xs font-body text-text-light/70">
              <div className="space-y-1">
                <span className="font-display font-bold text-copper uppercase block text-[11px]">{String(t("booking.moholt_name"))}</span>
                <p>{String(t("booking.moholt_details"))}</p>
                <p>{String(t("booking.moholt_hours"))}</p>
              </div>
              <div className="space-y-1">
                <span className="font-display font-bold text-copper uppercase block text-[11px]">{String(t("booking.solsiden_name"))}</span>
                <p>{String(t("booking.solsiden_details"))}</p>
                <p>{String(t("booking.solsiden_hours"))}</p>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500 rounded-full flex items-center justify-center font-bold text-xl mx-auto font-mono">
                  {String(t("booking.success_badge"))}
                </div>
                <h3 className="text-2xl font-display font-bold text-white uppercase">{String(t("booking.success_title"))}</h3>
                <p className="text-xs sm:text-sm text-text-light/80 font-body max-w-md mx-auto">
                  {String(t("booking.success_text_1"))} {formData.name}. {String(t("booking.success_text_2"))} {formData.phone} {String(t("booking.success_text_3"))}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-copper text-white font-display uppercase tracking-widest text-xs px-6 py-3 rounded-sm mt-4"
                >
                  {String(t("booking.new_booking"))}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-display uppercase text-copper-light mb-2">
                      {String(t("booking.form.name"))} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={String(t("booking.form.name_placeholder"))}
                      className="w-full bg-dark-bg border border-copper/20 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-copper"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase text-copper-light mb-2">
                      {String(t("booking.form.phone"))} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={String(t("booking.form.phone_placeholder"))}
                      className="w-full bg-dark-bg border border-copper/20 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-copper"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-display uppercase text-copper-light mb-2">
                      {String(t("booking.form.location"))}
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-dark-bg border border-copper/20 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-copper"
                    >
                      <option value="Moholt Salong">{String(t("booking.moholt_name"))}</option>
                      <option value="Solsiden Barbershop">{String(t("booking.solsiden_name"))}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase text-copper-light mb-2">
                      {String(t("booking.form.service"))}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-dark-bg border border-copper/20 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-copper"
                    >
                      <option value="Cowboy Herreklipp">{String(t("booking.services.item1"))}</option>
                      <option value="Angel Klipp Dame">{String(t("booking.services.item2"))}</option>
                      <option value="Hårklipp & Skjegg">{String(t("booking.services.item3"))}</option>
                      <option value="Skjeggtrim med Kniv">{String(t("booking.services.item4"))}</option>
                      <option value="Foilage / Balayage">{String(t("booking.services.item5"))}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase text-copper-light mb-2">
                      {String(t("booking.form.date"))} *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-dark-bg border border-copper/20 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-copper"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display uppercase text-copper-light mb-2">
                    {String(t("booking.form.notes"))}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={String(t("booking.notes_placeholder"))}
                    className="w-full bg-dark-bg border border-copper/20 rounded-sm px-4 py-3 text-xs text-white focus:outline-none focus:border-copper"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-copper hover:bg-copper-dark text-white font-display font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-sm transition-all shadow-xl"
                  >
                    {String(t("booking.form.submit"))}
                  </button>

                  <a
                    href="tel:+4773931100"
                    className="text-xs font-display uppercase tracking-wider text-copper hover:underline shrink-0"
                  >
                    {String(t("booking.call_direct"))}
                  </a>
                </div>
              </form>
            )}

          </div>
        </Reveal>
      </div>
    </section>
  );
}
