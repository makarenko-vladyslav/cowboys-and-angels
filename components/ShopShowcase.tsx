"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface ProductItem {
  name: string;
  tag: string;
  desc: string;
}

export default function ShopShowcase() {
  const { t } = useLocale();

  const rawProducts = t("shop.products") as ProductItem[];
  const products = Array.isArray(rawProducts) ? rawProducts : [];

  return (
    <section id="shop" className="py-24 bg-[hsl(35_20%_92%)] text-[hsl(25_12%_15%)] scroll-mt-16 border-t border-[hsl(30_15%_85%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("shop.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[hsl(25_15%_10%)] mb-4">
              {t("shop.title") as string}
            </h2>
            <p className="text-base text-[hsl(25_8%_45%)] font-normal">
              {t("shop.subtitle") as string}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-6 rounded-xl border border-[hsl(30_15%_85%)] shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between">
                <div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[hsl(28_85%_48%)] bg-[hsl(35_20%_92%)] px-2.5 py-1 rounded-full inline-block mb-4">
                    {prod.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[hsl(25_15%_10%)] mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[hsl(25_8%_45%)] leading-relaxed">
                    {prod.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[hsl(30_15%_85%)]">
                  <a
                    href="https://www.cowboysandangels.shop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[hsl(28_85%_48%)] hover:underline uppercase tracking-wider block text-center"
                  >
                    Придбати у шоурумі
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
