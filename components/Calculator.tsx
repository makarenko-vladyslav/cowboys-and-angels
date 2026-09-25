"use client";
import { useState, useMemo } from "react";
import pricingData from "@/lib/pricing.json";

export default function Calculator() {
  const [selectedLocation, setSelectedLocation] = useState(pricingData.locations[0].id);
  const [selectedServices, setSelectedServices] = useState<string[]>(["cowboy_herre"]);
  const [selectedDiscount, setSelectedDiscount] = useState<string>("standard");

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allServices = useMemo(() => {
    return pricingData.categories.flatMap((cat) => cat.services);
  }, []);

  const { discountAmount, total, totalDuration } = useMemo(() => {
    let sum = 0;
    let duration = 0;
    selectedServices.forEach((srvId) => {
      const found = allServices.find((s) => s.id === srvId);
      if (found) {
        sum += found.price;
        duration += found.duration;
      }
    });

    const discObj = pricingData.discounts.find((d) => d.id === selectedDiscount);
    const discPct = discObj ? discObj.percentage : 0;
    const discVal = Math.round((sum * discPct) / 100);
    const finalTotal = Math.max(0, sum - discVal);

    return {
      discountAmount: discVal,
      total: finalTotal,
      totalDuration: duration,
    };
  }, [selectedServices, selectedDiscount, allServices]);

  const formatNOK = (val: number) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0") + " NOK";
  };

  return (
    <section id="beregner" className="py-20 sm:py-28 bg-bg-surface border-y border-border-dark scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
            Interaktiv priskalkulator
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Beregn din behandling
          </h2>
          <p className="text-text-light-muted text-base sm:text-lg">
            Sett sammen ønskede behandlinger og se nøyaktig tidsforbruk og estimert pris.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls side */}
          <div className="lg:col-span-7 bg-bg-dark border border-border-dark rounded-lg p-6 sm:p-8 space-y-8">
            {/* Step 1: Location */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                1. Velg avdeling i Trondheim
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingData.locations.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`p-3 text-left rounded border transition-all text-sm font-medium ${
                      selectedLocation === loc.id
                        ? "border-accent bg-accent/10 text-white"
                        : "border-border-dark text-text-light-muted hover:border-border-light"
                    }`}
                  >
                    {loc.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Service checkboxes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                2. Velg behandlinger (klikk for å legge til)
              </label>
              <div className="space-y-4">
                {pricingData.categories.map((cat) => (
                  <div key={cat.id} className="border-t border-border-dark/60 pt-3">
                    <div className="text-xs font-display uppercase tracking-widest text-text-light-muted mb-2 font-semibold">
                      {cat.name}
                    </div>
                    <div className="space-y-2">
                      {cat.services.map((srv) => {
                        const checked = selectedServices.includes(srv.id);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.id)}
                            className={`flex items-center justify-between p-3 rounded border cursor-pointer transition-all ${
                              checked
                                ? "bg-bg-surface border-accent text-white"
                                : "bg-bg-surface/40 border-border-dark/60 text-text-light-muted hover:border-border-light"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-4 h-4 rounded-sm border flex items-center justify-center text-[10px] ${
                                  checked ? "border-accent bg-accent text-white" : "border-border-dark"
                                }`}
                              >
                                {checked ? "·" : ""}
                              </div>
                              <span className="text-sm font-medium">{srv.name}</span>
                            </div>
                            <div className="text-xs font-display font-semibold text-accent tabular-nums">
                              {srv.price} NOK
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Discounts */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                3. Rabatt / Status
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {pricingData.discounts.map((disc) => (
                  <button
                    key={disc.id}
                    type="button"
                    onClick={() => setSelectedDiscount(disc.id)}
                    className={`p-2 text-center rounded border text-xs font-medium transition-all ${
                      selectedDiscount === disc.id
                        ? "border-accent bg-accent text-white font-semibold"
                        : "border-border-dark text-text-light-muted hover:border-border-light"
                    }`}
                  >
                    {disc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Summary Card */}
          <div className="lg:col-span-5 sticky top-28 bg-bg-dark border-2 border-accent rounded-lg p-6 sm:p-8 shadow-2xl">
            <div className="text-xs uppercase tracking-widest text-accent font-bold mb-1">
              Ditt estimat
            </div>
            <div className="text-xl font-display font-bold text-white uppercase mb-6">
              Oversikt før oppmøte
            </div>

            <div className="space-y-3 border-b border-border-dark pb-6 mb-6 text-sm">
              <div className="flex justify-between text-text-light-muted">
                <span>Valgt avdeling:</span>
                <span className="text-white font-medium capitalize">{selectedLocation}</span>
              </div>
              <div className="flex justify-between text-text-light-muted">
                <span>Antall tjenester:</span>
                <span className="text-white font-medium tabular-nums">{selectedServices.length} stk</span>
              </div>
              <div className="flex justify-between text-text-light-muted">
                <span>Beregnet tidsbruk:</span>
                <span className="text-white font-medium tabular-nums">Ca. {totalDuration} minutter</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-accent">
                  <span>Rabatt fradratt:</span>
                  <span className="tabular-nums">-{formatNOK(discountAmount)}</span>
                </div>
              )}
            </div>

            {/* Big Total Display */}
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-text-light-muted mb-1">
                Totalt å betale i salong:
              </div>
              <div className="font-display text-4xl sm:text-5xl font-bold text-accent transition-all tabular-nums">
                {formatNOK(total)}
              </div>
            </div>

            <a
              href="#bestilling"
              className="w-full inline-flex items-center justify-center py-4 bg-primary hover:bg-accent text-white font-display font-bold uppercase tracking-wider text-sm rounded shadow-lg transition-all"
            >
              Gå til online bestilling
            </a>

            <div className="mt-4 text-[11px] text-center text-text-light-muted">
              Ingen forhåndsbetaling kreves. Du betaler med kort eller Vipps ved oppmøte.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
