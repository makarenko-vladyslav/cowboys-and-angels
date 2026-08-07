"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BeforeAfterSection() {
  const { t } = useLocale();
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-24 bg-[hsl(35_25%_96%)] text-[hsl(25_20%_12%)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("beforeAfter.kicker") as string}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[hsl(25_20%_8%)] mt-2 mb-4 leading-none">
            {t("beforeAfter.title") as string}
          </h2>
          <p className="text-base text-[hsl(25_10%_35%)]">
            {t("beforeAfter.subtitle") as string}
          </p>
        </div>

        {/* Display Quote + Attribution + Rating */}
        <div className="max-w-3xl mx-auto mb-12 text-center bg-white p-6 sm:p-8 rounded-xl border border-[hsl(25_15%_88%)] shadow-sm">
          <span className="font-serif text-5xl text-[hsl(28_85%_52%)] leading-none block mb-2">“</span>
          <p className="font-display font-bold text-2xl text-[hsl(25_20%_8%)] uppercase leading-snug mb-4">
            Після року безуспішних спроб отримати холодний блонд без пошкодження, Foilage у Solsiden відновив моє волосся.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[hsl(25_10%_40%)] font-semibold border-t border-[hsl(25_15%_90%)] pt-4">
            <span>Катрін М. — постійна гостя з 2021 року</span>
            <span className="hidden sm:inline text-[hsl(28_85%_52%)]">·</span>
            <span className="tabular-nums font-bold text-[hsl(25_20%_8%)]">4.9/5 · Google Maps · 140+ відгуків</span>
          </div>
        </div>

        {/* Comparison Slider Frame */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl border border-[hsl(25_15%_85%)] select-none">
            <img
              src="https://static.wixstatic.com/media/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg/v1/fill/w_980,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg"
              alt="Після майстра"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement?.classList.add("img-fallback");
              }}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg"
                alt="До візиту"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: "100%", height: "100%" }}
                loading="lazy"
              />
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-[hsl(28_85%_52%)] cursor-ew-resize z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-[10px] uppercase shadow-md whitespace-nowrap">
                {sliderPos}% SLIDE
              </div>
            </div>

            <div className="absolute bottom-4 left-4 z-10 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {t("beforeAfter.labelBefore") as string}
            </div>

            <div className="absolute bottom-4 right-4 z-10 bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] px-3 py-1 rounded text-xs font-extrabold uppercase tracking-wider">
              {t("beforeAfter.labelAfter") as string}
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
}