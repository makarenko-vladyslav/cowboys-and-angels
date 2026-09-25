"use client";
import { useLocale } from "@/lib/i18n";

export default function Locations() {
  const { t } = useLocale();

  return (
    <section id="salonger" className="py-20 sm:py-28 bg-bg-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
            {String(t("locations.kicker"))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {String(t("locations.title"))}
          </h2>
          <p className="text-text-light-muted text-base sm:text-lg">
            {String(t("locations.lede"))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location 1: Solsiden */}
          <div className="bg-bg-surface border border-border-dark hover:border-accent/60 rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                  {String(t("locations.solsiden.type"))}
                </span>
                <span className="text-xs font-mono text-accent">Postnr 7014</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-3">
                {String(t("locations.solsiden.name"))}
              </h3>
              <p className="text-sm text-text-light-muted leading-relaxed mb-6">
                {String(t("locations.solsiden.desc"))}
              </p>

              <div className="space-y-2.5 text-sm text-text-light border-t border-border-dark/60 pt-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-semibold uppercase text-xs">Adresse:</span>
                  <span>{String(t("locations.solsiden.address"))}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-semibold uppercase text-xs">Telefon:</span>
                  <a
                    href={`tel:${String(t("locations.solsiden.phone")).replace(/\s/g, "")}`}
                    className="text-white hover:text-accent font-bold tabular-nums"
                  >
                    {String(t("locations.solsiden.phone"))}
                  </a>
                </div>
                <div className="border-t border-border-dark/40 pt-2 text-xs text-text-light-muted space-y-1">
                  <div>{String(t("locations.solsiden.hoursWeek"))}</div>
                  <div>{String(t("locations.solsiden.hoursSat"))}</div>
                  <div className="text-accent-light">{String(t("locations.solsiden.hoursSun"))}</div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="rounded overflow-hidden border border-border-dark aspect-[16/9] mb-6 bg-bg-dark">
              <iframe
                title="Cowboys and Angels Solsiden Trondheim"
                src="https://www.google.com/maps?q=Solsiden+Trondheim+Cowboys+and+Angels&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="#bestilling"
              className="w-full py-3.5 bg-primary hover:bg-accent text-white font-display font-semibold uppercase tracking-wider text-sm text-center rounded transition-all"
            >
              Velg Solsiden for time
            </a>
          </div>

          {/* Location 2: Moholt */}
          <div className="bg-bg-surface border border-border-dark hover:border-accent/60 rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                  {String(t("locations.moholt.type"))}
                </span>
                <span className="text-xs font-mono text-accent">Postnr 7050</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-3">
                {String(t("locations.moholt.name"))}
              </h3>
              <p className="text-sm text-text-light-muted leading-relaxed mb-6">
                {String(t("locations.moholt.desc"))}
              </p>

              <div className="space-y-2.5 text-sm text-text-light border-t border-border-dark/60 pt-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-semibold uppercase text-xs">Adresse:</span>
                  <span>{String(t("locations.moholt.address"))}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-semibold uppercase text-xs">Telefon:</span>
                  <a
                    href={`tel:${String(t("locations.moholt.phone")).replace(/\s/g, "")}`}
                    className="text-white hover:text-accent font-bold tabular-nums"
                  >
                    {String(t("locations.moholt.phone"))}
                  </a>
                </div>
                <div className="border-t border-border-dark/40 pt-2 text-xs text-text-light-muted space-y-1">
                  <div>{String(t("locations.moholt.hoursWeek"))}</div>
                  <div>{String(t("locations.moholt.hoursSat"))}</div>
                  <div className="text-accent-light">{String(t("locations.moholt.hoursSun"))}</div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="rounded overflow-hidden border border-border-dark aspect-[16/9] mb-6 bg-bg-dark">
              <iframe
                title="Cowboys and Angels Moholt Trondheim"
                src="https://www.google.com/maps?q=Moholt+Trondheim+Cowboys+and+Angels&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="#bestilling"
              className="w-full py-3.5 bg-primary hover:bg-accent text-white font-display font-semibold uppercase tracking-wider text-sm text-center rounded transition-all"
            >
              Velg Moholt for time
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
