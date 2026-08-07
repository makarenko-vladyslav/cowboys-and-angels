"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  stars: number;
}

export default function Testimonials() {
  const { t } = useLocale();
  const [activeSlide, setActiveSlide] = useState(0);

  const rawItems = t("testimonials.items") as TestimonialItem[];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section className="py-24 bg-[hsl(35_20%_92%)] text-[hsl(25_12%_15%)] border-t border-[hsl(30_15%_85%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("testimonials.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[hsl(25_15%_10%)] mb-4">
              {t("testimonials.title") as string}
            </h2>
            <p className="text-base text-[hsl(25_8%_45%)] font-normal">
              {t("testimonials.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Featured Quote Block */}
        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl border border-[hsl(30_15%_85%)] shadow-md mb-12 relative overflow-hidden">
            <span className="font-display font-extrabold text-8xl text-[hsl(28_85%_48%/0.15)] absolute top-2 left-6 leading-none select-none">
              «
            </span>
            <div className="relative z-10 space-y-6">
              <p className="font-display text-xl sm:text-2xl font-bold uppercase italic text-[hsl(25_15%_10%)] leading-snug">
                {t("testimonials.featuredQuote") as string}
              </p>
              <div className="flex items-center justify-between border-t border-[hsl(30_15%_85%)] pt-6">
                <div>
                  <div className="font-display font-bold text-base uppercase text-[hsl(25_15%_10%)]">
                    {t("testimonials.featuredAuthor") as string}
                  </div>
                  <div className="text-xs text-[hsl(25_8%_45%)]">
                    {t("testimonials.featuredMeta") as string}
                  </div>
                </div>
                <div className="text-xs font-extrabold tracking-widest uppercase text-[hsl(28_85%_48%)] bg-[hsl(38_25%_96%)] px-3 py-1 rounded-full">
                  4.6 / 5.0 Google Maps
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-xl border border-[hsl(30_15%_85%)] shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="text-xs font-extrabold text-[hsl(28_85%_48%)] mb-3 uppercase tracking-widest">
                    ОЦІНКА 5.0 / 5.0
                  </div>
                  <p className="text-xs sm:text-sm text-[hsl(25_12%_15%)] leading-relaxed italic mb-6">
                    "{item.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[hsl(30_15%_85%)]">
                  <div className="font-display font-bold text-sm uppercase text-[hsl(25_15%_10%)]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[hsl(25_8%_45%)]">
                    {item.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                activeSlide === idx ? "w-8 bg-[hsl(28_85%_48%)]" : "w-2 bg-[hsl(30_15%_85%)] hover:bg-[hsl(28_85%_48%/0.5)]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
