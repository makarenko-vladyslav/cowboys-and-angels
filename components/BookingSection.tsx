"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BookingSection() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "solsiden",
    service: "Cowboy Herreklipp",
    date: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(String(t("bookingForm.errorMessage")));
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="bestilling" className="py-20 sm:py-28 bg-bg-dark scroll-mt-20 relative overflow-hidden">
      {/* Decorative subtle copper glow blob */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
            {String(t("bookingForm.kicker"))}
          </div>
          {/* Invitation Heading (never the brand name) */}
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {String(t("bookingForm.invitationHeading"))}
          </h2>
          <p className="text-text-light-muted text-base sm:text-lg">
            {String(t("bookingForm.lede"))}
          </p>
        </div>

        {/* Dual Booking Choices */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Choice: Direct Realtime Booking Link + Hours Mini-table + Address */}
          <div className="md:col-span-5 bg-bg-surface border-2 border-accent p-6 sm:p-8 rounded-lg flex flex-col justify-between h-full shadow-2xl">
            <div>
              <div className="text-xs text-accent font-bold uppercase tracking-widest mb-1">
                Raskest stolreservering
              </div>
              <h3 className="font-display text-2xl font-bold text-white uppercase mb-4">
                {String(t("bookingForm.realtimeTitle"))}
              </h3>
              <p className="text-sm text-text-light-muted leading-relaxed mb-6">
                {String(t("bookingForm.realtimeDesc"))}
              </p>

              <ul className="space-y-2.5 text-xs text-text-light-muted mb-6">
                <li className="flex items-center gap-2">
                  <span className="text-accent font-mono font-bold">·</span>
                  <span>{String(t("bookingForm.point1"))}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent font-mono font-bold">·</span>
                  <span>{String(t("bookingForm.point2"))}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent font-mono font-bold">·</span>
                  <span>{String(t("bookingForm.point3"))}</span>
                </li>
              </ul>

              {/* Structured Hours Mini-Table */}
              <div className="border-t border-border-dark/60 pt-4 mb-6 text-xs text-text-light">
                <div className="font-display uppercase tracking-wider text-accent mb-2">
                  Salongenes åpningstider
                </div>
                <div className="space-y-1 text-text-light-muted">
                  <div className="flex justify-between">
                    <span>Mandag – Fredag:</span>
                    <span className="font-mono text-white">09:00 – 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lørdag:</span>
                    <span className="font-mono text-white">09:00 – 16:00</span>
                  </div>
                  <div className="flex justify-between text-accent-light">
                    <span>Søndag:</span>
                    <span>Stengt</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.cowboysandangels.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 bg-accent hover:bg-accent-light text-white font-display font-bold uppercase tracking-wider text-sm rounded shadow-lg transition-all"
              >
                {String(t("bookingForm.openRealtime"))} ↗
              </a>
              <div className="text-center text-[11px] text-text-light-muted">
                Ring direkte: Solsiden <a href="tel:+4773510020" className="text-accent underline font-semibold tabular-nums">73 51 00 20</a> / Moholt <a href="tel:+4773938800" className="text-accent underline font-semibold tabular-nums">73 93 88 00</a>
              </div>
            </div>
          </div>

          {/* Right Choice: Quick Friction-Free Form (No Login Required) */}
          <div className="md:col-span-7 bg-bg-surface border border-border-dark p-6 sm:p-8 rounded-lg shadow-xl">
            <div className="text-xs text-text-light-muted uppercase tracking-wider font-semibold mb-1">
              Forespørsel
            </div>
            <h3 className="font-display text-xl font-bold text-white uppercase mb-6">
              {String(t("bookingForm.requestTitle"))}
            </h3>

            {submitted ? (
              <div className="p-6 bg-accent/15 border border-accent rounded text-center space-y-3">
                <div className="text-accent font-display text-2xl font-bold uppercase">
                  Forespørsel sendt
                </div>
                <p className="text-sm text-text-light">
                  {String(t("bookingForm.successMessage"))}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent underline"
                >
                  Send en ny henvendelse
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-light-muted mb-1">
                      {String(t("bookingForm.nameLabel"))} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={String(t("bookingForm.namePlaceholder"))}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-dark border border-border-dark text-white text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-light-muted mb-1">
                      {String(t("bookingForm.phoneLabel"))} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={String(t("bookingForm.phonePlaceholder"))}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-dark border border-border-dark text-white text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-light-muted mb-1">
                      {String(t("bookingForm.emailLabel"))}
                    </label>
                    <input
                      type="email"
                      placeholder={String(t("bookingForm.emailPlaceholder"))}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-dark border border-border-dark text-white text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-light-muted mb-1">
                      {String(t("bookingForm.locationLabel"))}
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-dark border border-border-dark text-white text-sm focus:border-accent focus:outline-none"
                    >
                      <option value="solsiden">Solsiden (Barbershop & Herre)</option>
                      <option value="moholt">Moholt (Fullsalong, Dame & Farge)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-light-muted mb-1">
                      {String(t("bookingForm.serviceLabel"))}
                    </label>
                    <input
                      type="text"
                      placeholder="f.eks. Herreklipp & Skjegg"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-dark border border-border-dark text-white text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-light-muted mb-1">
                      {String(t("bookingForm.dateLabel"))}
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-bg-dark border border-border-dark text-white text-sm focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-light-muted mb-1">
                    {String(t("bookingForm.notesLabel"))}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={String(t("bookingForm.notesPlaceholder"))}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-bg-dark border border-border-dark text-white text-sm focus:border-accent focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-primary hover:bg-accent text-white font-display font-semibold uppercase tracking-wider text-sm rounded shadow-lg transition-all"
                >
                  {loading ? String(t("bookingForm.submitting")) : String(t("bookingForm.submit"))}
                </button>

                <div className="text-center text-[11px] text-text-light-muted pt-1">
                  {String(t("bookingForm.trustLine"))}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
