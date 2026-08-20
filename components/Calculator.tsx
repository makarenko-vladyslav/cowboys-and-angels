"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import pricingData from "@/lib/pricing.json";
import { Reveal } from "./motion";

export default function Calculator() {
  const { t } = useLocale();

  const [selectedBase, setSelectedBase] = useState<keyof typeof pricingData.baseServices>("herreklipp");
  const [addons, setAddons] = useState<Record<string, boolean>>({
    wash: false,
    toning: false,
    bryn: false,
    spa: false,
  });
  const [discountType, setDiscountType] = useState<"none" | "student" | "laerling">("none");

  const toggleAddon = (key: string) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const baseObj = pricingData.baseServices[selectedBase];
  let total = baseObj.price;

  Object.keys(addons).forEach((key) => {
    if (addons[key] && key in pricingData.addons) {
      total += pricingData.addons[key as keyof typeof pricingData.addons].price;
    }
  });

  if (discountType === "student") {
    total = Math.round(total * (1 - pricingData.discounts.student));
  } else if (discountType === "laerling") {
    total = Math.round(total * (1 - pricingData.discounts.laerling));
  }

  const money = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");

  return (
    <section id="calculator" className="py-24 bg-dark-bg scroll-mt-20 border-t border-copper/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("calculator.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            {String(t("calculator.title"))}
          </h2>
          <p className="text-xs sm:text-sm text-text-light/70 font-body">
            {String(t("calculator.subtitle"))}
          </p>
        </div>

        <Reveal direction="up">
          <div className="max-w-4xl mx-auto bg-dark-card border border-copper/30 rounded-sm p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Options Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-display uppercase tracking-widest text-copper-light mb-3">
                  {String(t("calculator.step1"))}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(Object.keys(pricingData.baseServices) as Array<keyof typeof pricingData.baseServices>).map((key) => {
                    const item = pricingData.baseServices[key];
                    const active = selectedBase === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedBase(key)}
                        className={`text-left p-3.5 rounded-sm border transition-all ${
                          active
                            ? "bg-copper/20 border-copper text-white shadow-md"
                            : "bg-dark-bg border-copper/10 text-text-light/70 hover:border-copper/30"
                        }`}
                      >
                        <div className="text-xs font-display font-bold uppercase">{item.name}</div>
                        <div className="text-[11px] font-mono text-copper-light mt-1">{money(item.price)} {String(t("calculator.currency_unit"))} ({item.duration})</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-display uppercase tracking-widest text-copper-light mb-3">
                  {String(t("calculator.step2"))}
                </label>
                <div className="space-y-2">
                  {(Object.keys(pricingData.addons) as Array<keyof typeof pricingData.addons>).map((key) => {
                    const item = pricingData.addons[key];
                    const active = !!addons[key];
                    return (
                      <button
                        key={key}
                        onClick={() => toggleAddon(key)}
                        className={`w-full flex items-center justify-between p-3 rounded-sm border text-xs font-body transition-all ${
                          active
                            ? "bg-copper/20 border-copper text-white"
                            : "bg-dark-bg border-copper/10 text-text-light/70 hover:border-copper/30"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[9px] ${active ? 'bg-copper border-copper text-white font-bold' : 'border-copper/30'}`}>
                            {active ? "X" : ""}
                          </span>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-display font-bold text-copper-light">+{money(item.price)} {String(t("calculator.currency_unit"))}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-display uppercase tracking-widest text-copper-light mb-2">
                  {String(t("calculator.step3"))}
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setDiscountType("none")}
                    className={`flex-1 py-2 text-xs font-display uppercase tracking-wider rounded-sm border ${discountType === "none" ? "bg-copper text-white border-copper font-bold" : "bg-dark-bg border-copper/20 text-text-light/60"}`}
                  >
                    {String(t("calculator.ordinar"))}
                  </button>
                  <button
                    onClick={() => setDiscountType("student")}
                    className={`flex-1 py-2 text-xs font-display uppercase tracking-wider rounded-sm border ${discountType === "student" ? "bg-copper text-white border-copper font-bold" : "bg-dark-bg border-copper/20 text-text-light/60"}`}
                  >
                    {String(t("calculator.student"))}
                  </button>
                  <button
                    onClick={() => setDiscountType("laerling")}
                    className={`flex-1 py-2 text-xs font-display uppercase tracking-wider rounded-sm border ${discountType === "laerling" ? "bg-copper text-white border-copper font-bold" : "bg-dark-bg border-copper/20 text-text-light/60"}`}
                  >
                    {String(t("calculator.laerling"))}
                  </button>
                </div>
              </div>
            </div>

            {/* Price Output Column */}
            <div className="lg:col-span-5 bg-dark-bg rounded-sm border border-copper/20 p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-display uppercase tracking-widest text-copper font-bold">
                  {String(t("calculator.calculated_label"))}
                </span>
                <div className="my-6">
                  <div className="text-4xl sm:text-5xl font-display font-bold text-copper-light font-mono">
                    {money(total)} <span className="text-lg font-body text-text-light/60">{String(t("calculator.currency_unit"))}</span>
                  </div>
                  <p className="text-xs text-text-light/50 mt-2 font-body">
                    {String(t("calculator.estimated_time"))}{baseObj.duration}
                  </p>
                </div>

                <div className="border-t border-copper/10 pt-4 space-y-2 text-xs text-text-light/70 font-body">
                  <div className="flex justify-between">
                    <span>{baseObj.name}</span>
                    <span className="font-mono">{money(baseObj.price)} {String(t("calculator.currency_unit"))}</span>
                  </div>
                  {Object.keys(addons).map((k) => addons[k] && (
                    <div key={k} className="flex justify-between text-copper-light">
                      <span>+ {pricingData.addons[k as keyof typeof pricingData.addons].name}</span>
                      <span className="font-mono">+{money(pricingData.addons[k as keyof typeof pricingData.addons].price)} {String(t("calculator.currency_unit"))}</span>
                    </div>
                  ))}
                  {discountType !== "none" && (
                    <div className="flex justify-between text-emerald-400 font-medium pt-1 border-t border-copper/10">
                      <span>Rabatt ({discountType === "student" ? "10%" : "30%"})</span>
                      <span>{String(t("calculator.calculated_label"))}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-copper/20">
                <a
                  href="#booking"
                  className="w-full block text-center bg-copper hover:bg-copper-dark text-white font-display font-bold uppercase tracking-widest text-xs py-3.5 rounded-sm transition-all shadow-lg"
                >
                  {String(t("calculator.book_btn"))}
                </a>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
