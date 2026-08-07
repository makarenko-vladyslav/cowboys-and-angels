"use client";

import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(25_20%_6%)] text-white border-t border-[hsl(28_85%_52%/0.25)] pt-20 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-2xl flex items-center justify-center">
                CA
              </span>
              <span className="font-display font-bold text-2xl text-white tracking-wider">
                COWBOYS & ANGELS
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed mb-4">
              {t("footer.tagline") as string}
            </p>
            <div className="text-xs text-[hsl(28_85%_52%)] font-bold uppercase tracking-wider">
              Trondheim: Moholt & Solsiden
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl uppercase text-white mb-4 border-b border-white/10 pb-2">
              {t("footer.hoursTitle") as string}
            </h3>
            <p className="text-xs text-white/70 whitespace-pre-line leading-relaxed font-mono">
              {t("footer.hoursText") as string}
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl uppercase text-white mb-4 border-b border-white/10 pb-2">
              {t("footer.navTitle") as string}
            </h3>
            <ul className="space-y-2 text-xs text-white/70 uppercase font-semibold">
              <li>
                <a href="#concept" className="hover:text-[hsl(28_85%_52%)] transition-colors">
                  Концепція мережі
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[hsl(28_85%_52%)] transition-colors">
                  Послуги та фіксований прайс
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[hsl(28_85%_52%)] transition-colors">
                  Калькулятор візиту
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[hsl(28_85%_52%)] transition-colors">
                  Галерея робіт
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-[hsl(28_85%_52%)] transition-colors">
                  Шоурум косметики
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl uppercase text-white mb-4 border-b border-white/10 pb-2">
              {t("footer.socialTitle") as string}
            </h3>
            <div className="flex flex-col gap-3 text-xs text-white/70 uppercase font-bold">
              <a
                href="https://www.facebook.com/cowboysandangelsmoholt"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[hsl(28_85%_52%)] transition-colors"
              >
                Facebook — Moholt
              </a>
              <a
                href="https://www.instagram.com/cowboysandangels_moholt/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[hsl(28_85%_52%)] transition-colors"
              >
                Instagram — @cowboysandangels_moholt
              </a>
              <div className="pt-2 border-t border-white/10 text-[11px] font-normal text-white/50 lowercase">
                адреса: Herman Krags vei 43 / TMV-kaia 23<br />
                тел: +47 73 93 10 00
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <div>{t("footer.copy") as string}</div>
          <div>
            Розроблено{" "}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noreferrer"
              className="text-[hsl(28_85%_52%)] hover:underline font-bold"
            >
              Студія Тест
            </a>
          </div>
        </div>

        {/* Giant Bleeding Wordmark */}
        <div className="mt-12 text-center overflow-hidden pointer-events-none opacity-10 select-none">
          <span className="font-display font-extrabold text-[15vw] leading-none text-white uppercase tracking-tighter whitespace-nowrap block">
            COWBOYS & ANGELS
          </span>
        </div>
      </div>
    </footer>
  );
}