"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function FaqAccordion() {
  const { t } = useLocale();

  const faqs = (t("faq.items") as Array<{ q: string; a: string }>) || [];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark-card border-t border-copper/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("faq.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight">
            {String(t("faq.title"))}
          </h2>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.05}>
                <div className="bg-dark-bg border border-copper/20 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-display font-bold text-white text-base sm:text-lg uppercase">
                      {item.q}
                    </span>
                    <span className="text-copper font-mono font-bold text-lg">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-text-light/70 font-body leading-relaxed border-t border-copper/10 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
