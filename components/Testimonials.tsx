"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Carousel } from "./motion";

export default function Testimonials() {
  const { t } = useLocale();

  const reviews = (t("testimonials.reviews") as Array<{ name: string; role: string; text: string; rating: string }>) || [];

  return (
    <section className="py-24 bg-dark-bg border-t border-copper/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("testimonials.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-2">
            {String(t("testimonials.title"))}
          </h2>
          <p className="text-xs font-display uppercase tracking-widest text-copper-light">
            {String(t("testimonials.subtitle"))}
          </p>
        </div>

        {/* Featured Large Pull Quote */}
        <div className="bg-dark-card border border-copper/30 p-8 sm:p-12 mb-12 rounded-sm text-center relative max-w-4xl mx-auto">
          <span className="text-copper/20 font-serif text-8xl absolute top-2 left-6 leading-none select-none pointer-events-none">
            «
          </span>
          <blockquote className="text-lg sm:text-2xl font-serif italic text-white leading-relaxed mb-6 relative z-10">
            «{reviews[0]?.text || ""}»
          </blockquote>
          <div className="text-xs font-display uppercase tracking-widest text-copper-light">
            {reviews[0]?.name} — {reviews[0]?.role}
          </div>
        </div>

        {/* Carousel for all reviews */}
        <Carousel>
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-dark-card p-6 rounded-sm border border-copper/20 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4 text-xs font-display">
                  <span className="text-amber-gold font-bold">{rev.rating}</span>
                  <span className="text-text-light/40 uppercase tracking-wider text-[10px]">{String(t("testimonials.verified"))}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-light/80 font-body italic mb-6 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="border-t border-copper/10 pt-4">
                <div className="font-display font-bold text-white text-xs uppercase">{rev.name}</div>
                <div className="text-[11px] text-copper-light font-body mt-0.5">{rev.role}</div>
              </div>
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
}
