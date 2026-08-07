"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[hsl(25_15%_10%)] text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-[hsl(28_85%_48%)] flex items-center justify-center font-bold text-xl text-white">
                C&A
              </div>
              <span className="font-display font-extrabold tracking-wider text-2xl uppercase">
                COWBOYS <span className="text-[hsl(28_85%_48%)]">&</span> ANGELS
              </span>
            </div>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              {t("footer.tagline") as string}
            </p>

            <div className="space-y-1 text-xs text-white/80">
              <div>Тел: <a href="tel:+4773000000" className="text-[hsl(28_85%_48%)] font-bold hover:underline">+47 73 00 00 00</a></div>
              <div>Email: <a href="mailto:post@cowboysandangels.no" className="hover:underline">post@cowboysandangels.no</a></div>
            </div>
          </div>

          {/* Solsiden Location */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(28_85%_48%)] block">
              Solsiden Studio
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              {t("footer.solsidenAddr") as string}
            </p>
            <p className="text-xs text-white/60">
              Пн-Пт: 09:00 - 19:00<br />
              Сб: 09:00 - 17:00
            </p>
          </div>

          {/* Moholt Location */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(28_85%_48%)] block">
              Moholt Campus
            </span>
            <p className="text-xs text-white/80 leading-relaxed">
              {t("footer.moholtAddr") as string}
            </p>
            <p className="text-xs text-white/60">
              Пн-Пт: 09:00 - 18:00<br />
              Сб: 09:00 - 16:00
            </p>
          </div>

          {/* Social Text Links */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[hsl(28_85%_48%)] block">
              Соціальні мережі
            </span>
            <div className="flex flex-col gap-2 text-xs font-bold text-white/80">
              <a
                href="https://www.instagram.com/cowboysandangels_moholt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(28_85%_48%)] uppercase tracking-wider"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/cowboysandangelsmoholt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(28_85%_48%)] uppercase tracking-wider"
              >
                Facebook
              </a>
              <a
                href="#locations"
                className="hover:text-[hsl(28_85%_48%)] uppercase tracking-wider"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Giant Bleeding Wordmark */}
        <div className="py-6 border-y border-white/10 text-center select-none overflow-hidden -mx-4 sm:-mx-6">
          <span className="font-display font-extrabold text-6xl sm:text-9xl md:text-[11rem] uppercase tracking-tighter text-white/5 whitespace-nowrap block leading-none">
            COWBOYS & ANGELS
          </span>
        </div>

        {/* Legal & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>{t("footer.copyright") as string}</div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[hsl(28_85%_48%)] transition-colors underline"
            >
              {t("footer.devCredit") as string}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
