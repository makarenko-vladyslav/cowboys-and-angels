"use client";

import { useLocale } from "@/lib/i18n";

export default function ShopSection() {
  const { t } = useLocale();

  return (
    <section id="shop" className="py-24 bg-[hsl(35_25%_96%)] text-[hsl(25_20%_12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("shop.kicker") as string}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[hsl(25_20%_8%)] mt-2 mb-4 leading-none">
            {t("shop.title") as string}
          </h2>
          <p className="text-base text-[hsl(25_10%_35%)]">
            {t("shop.subtitle") as string}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-[hsl(25_15%_88%)] shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-[hsl(28_85%_52%)] uppercase tracking-widest block mb-2">
                L'ANZA Healing Colorcare
              </span>
              <h3 className="font-display font-extrabold text-3xl text-[hsl(25_20%_8%)] mb-2 uppercase">
                {t("shop.prod1Name") as string}
              </h3>
              <p className="text-xs text-[hsl(25_10%_40%)] leading-relaxed mb-6">
                {t("shop.prod1Desc") as string}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-[hsl(25_15%_90%)] pt-4">
              <span className="font-display font-extrabold text-3xl text-[hsl(28_85%_52%)] tabular-nums">
                {t("shop.prod1Price") as string}
              </span>
              <a
                href="#contact"
                className="bg-[hsl(25_20%_8%)] hover:bg-[hsl(28_85%_52%)] text-white hover:text-[hsl(25_20%_8%)] text-xs font-bold uppercase px-4 py-2 rounded transition-colors tracking-wider"
              >
                {t("shop.buyNow") as string}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[hsl(25_15%_88%)] shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-[hsl(28_85%_52%)] uppercase tracking-widest block mb-2">
                KEUNE Haircosmetics
              </span>
              <h3 className="font-display font-extrabold text-3xl text-[hsl(25_20%_8%)] mb-2 uppercase">
                {t("shop.prod2Name") as string}
              </h3>
              <p className="text-xs text-[hsl(25_10%_40%)] leading-relaxed mb-6">
                {t("shop.prod2Desc") as string}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-[hsl(25_15%_90%)] pt-4">
              <span className="font-display font-extrabold text-3xl text-[hsl(28_85%_52%)] tabular-nums">
                {t("shop.prod2Price") as string}
              </span>
              <a
                href="#contact"
                className="bg-[hsl(25_20%_8%)] hover:bg-[hsl(28_85%_52%)] text-white hover:text-[hsl(25_20%_8%)] text-xs font-bold uppercase px-4 py-2 rounded transition-colors tracking-wider"
              >
                {t("shop.buyNow") as string}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-[hsl(25_15%_88%)] shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-[hsl(28_85%_52%)] uppercase tracking-widest block mb-2">
                Bearburys Barber Care
              </span>
              <h3 className="font-display font-extrabold text-3xl text-[hsl(25_20%_8%)] mb-2 uppercase">
                {t("shop.prod3Name") as string}
              </h3>
              <p className="text-xs text-[hsl(25_10%_40%)] leading-relaxed mb-6">
                {t("shop.prod3Desc") as string}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-[hsl(25_15%_90%)] pt-4">
              <span className="font-display font-extrabold text-3xl text-[hsl(28_85%_52%)] tabular-nums">
                {t("shop.prod3Price") as string}
              </span>
              <a
                href="#contact"
                className="bg-[hsl(25_20%_8%)] hover:bg-[hsl(28_85%_52%)] text-white hover:text-[hsl(25_20%_8%)] text-xs font-bold uppercase px-4 py-2 rounded transition-colors tracking-wider"
              >
                {t("shop.buyNow") as string}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}