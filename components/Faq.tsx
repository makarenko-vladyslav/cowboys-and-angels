"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const rawItems = t("faq.items") as FaqItem[];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section id="faq" className="py-24 bg-[hsl(38_25%_96%)] text-[hsl(25_12%_15%)] scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("faq.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[hsl(25_15%_10%)] mb-4">
              {t("faq.title") as string}
            </h2>
            <p className="text-base text-[hsl(25_8%_45%)] font-normal">
              {t("faq.subtitle") as string}
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-[hsl(30_15%_85%)] overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left p-6 font-display font-bold text-base sm:text-lg text-[hsl(25_15%_10%)] flex items-center justify-between gap-4 hover:text-[hsl(28_85%_48%)] transition-colors uppercase"
                  >
                    <span>{item.q}</span>
                    <span className="text-sm font-extrabold text-[hsl(28_85%_48%)] font-mono">
                      {isOpen ? "ЗГОРНУТИ" : "РОЗГОРНУТИ"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[hsl(25_8%_45%)] leading-relaxed border-t border-[hsl(38_25%_96%)] pt-4">
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
