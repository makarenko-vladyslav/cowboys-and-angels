"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark border-t border-border-dark text-text-light pt-16 pb-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand Wordmark + Voice Line */}
          <div className="lg:col-span-2">
            <img
              src="https://static.wixstatic.com/media/973894_4d8cbed4ea744a8087f047896d4aabc3~mv2.webp/v1/crop/x_0,y_67,w_500,h_492,q_80,enc_auto/973894_4d8cbed4ea744a8087f047896d4aabc3~mv2.webp"
              alt="Cowboys and Angels logo"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-sm text-text-light-muted max-w-sm mb-4 leading-relaxed">
              {String(t("footer.tagline"))}
            </p>
            <p className="text-xs text-accent font-medium mb-6">
              {String(t("footer.brandVoiceLine"))}
            </p>

            {/* Social Row as clean TEXT links */}
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-accent">
              <a
                href="https://www.facebook.com/cowboysandangelsmoholt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
              <span>·</span>
              <a
                href="https://www.instagram.com/cowboysandangels_moholt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
              <span>·</span>
              <a
                href="https://www.cowboysandangels.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Nettbutikk
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              {String(t("footer.navHeader"))}
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-text-light-muted">
              <li>
                <a href="#tjenester" className="hover:text-accent transition-colors">Tjenester</a>
              </li>
              <li>
                <a href="#pakker" className="hover:text-accent transition-colors">Signaturpakker</a>
              </li>
              <li>
                <a href="#priser" className="hover:text-accent transition-colors">Prisliste</a>
              </li>
              <li>
                <a href="#beregner" className="hover:text-accent transition-colors">Kalkulator</a>
              </li>
              <li>
                <a href="#om-oss" className="hover:text-accent transition-colors">Håndverket</a>
              </li>
              <li>
                <a href="#galleri" className="hover:text-accent transition-colors">Galleriet</a>
              </li>
              <li>
                <a href="#team" className="hover:text-accent transition-colors">Frisørene</a>
              </li>
              <li>
                <a href="#salonger" className="hover:text-accent transition-colors">Salongene</a>
              </li>
              <li>
                <a href="#kunnskap" className="hover:text-accent transition-colors">Hårkunnskap</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Solsiden Contact & Hours */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Solsiden Barbershop
            </div>
            <div className="space-y-1.5 text-xs text-text-light-muted leading-relaxed">
              <p className="text-white font-medium">Innherredsveien / Solsiden</p>
              <p>7014 Trondheim</p>
              <p className="pt-1">
                Tlf:{" "}
                <a href="tel:+4773510020" className="text-white hover:text-accent font-bold tabular-nums">
                  73 51 00 20
                </a>
              </p>
              <p className="text-[11px] pt-2 border-t border-border-dark/40">
                Man–Fre: 09:00–19:00<br />Lør: 09:00–16:00<br />Søn: Stengt
              </p>
            </div>
          </div>

          {/* Col 4: Moholt Contact & Hours */}
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Moholt Hovedsalong
            </div>
            <div className="space-y-1.5 text-xs text-text-light-muted leading-relaxed">
              <p className="text-white font-medium">Brøsetvegen / Moholt</p>
              <p>7050 Trondheim</p>
              <p className="pt-1">
                Tlf:{" "}
                <a href="tel:+4773938800" className="text-white hover:text-accent font-bold tabular-nums">
                  73 93 88 00
                </a>
              </p>
              <p className="text-[11px] pt-2 border-t border-border-dark/40">
                Man–Fre: 09:00–19:00<br />Lør: 09:00–16:00<br />Søn: Stengt
              </p>
            </div>
          </div>
        </div>

        {/* Oversized Brand Wordmark Bleeding off the edge */}
        <div className="border-t border-border-dark/60 pt-6 pb-2 text-center overflow-hidden">
          <div className="font-display text-4xl sm:text-7xl lg:text-[8.5rem] font-bold tracking-tighter text-white/[0.07] uppercase select-none pointer-events-none whitespace-nowrap leading-none">
            {String(t("footer.wordmark"))}
          </div>
        </div>

        {/* Legal Row + Mandatory Studio Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-light-muted pt-4 border-t border-border-dark/40">
          <div>{String(t("footer.legalNotice"))}</div>
          <div>
            {String(t("footer.devCreditPrefix"))}{" "}
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              {String(t("footer.devCreditName"))}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs opacity-70"><a href="/privacy" className="underline hover:no-underline">Personvernerklæring</a></div>
    </footer>
  );
}
