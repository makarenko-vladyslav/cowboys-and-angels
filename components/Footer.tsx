"use client";

import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-text-light pt-20 pb-12 border-t border-border-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-border-dark">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-accent flex items-center justify-center text-bg-dark font-display font-bold text-xl">
                C&amp;A
              </div>
              <span className="font-display font-bold text-2xl uppercase tracking-wider text-white">
                Cowboys <span className="text-accent">&amp;</span> Angels
              </span>
            </a>

            <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-sm font-body">
              {String(t('footer.tagline'))}
            </p>

            <p className="text-xs text-accent font-display uppercase tracking-wider">
              {String(t('footer.brandVoice'))}
            </p>

            <div className="flex gap-4 text-xs font-display font-bold uppercase tracking-wider pt-2">
              <a
                href="https://www.facebook.com/cowboysandangelsmoholt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
              >
                Facebook ↗
              </a>
              <a
                href="https://www.instagram.com/cowboysandangels_moholt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-display font-bold uppercase text-xs tracking-widest text-accent">
              {String(t('footer.quickLinks'))}
            </div>
            <ul className="space-y-2 text-xs font-body text-text-muted">
              <li><a href="#konsept" className="hover:text-white transition-colors">Konsept &amp; Filosofi</a></li>
              <li><a href="#tjenester" className="hover:text-white transition-colors">Prisliste &amp; Tjenester</a></li>
              <li><a href="#kalkulator" className="hover:text-white transition-colors">Priskalkulator</a></li>
              <li><a href="#galleri" className="hover:text-white transition-colors">Bildegalleri</a></li>
              <li><a href="#butikk" className="hover:text-white transition-colors">Nettbutikk</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Møt Teamet</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Spørsmål og Svar</a></li>
              <li><a href="#avdelinger" className="hover:text-white transition-colors">Solsiden &amp; Moholt</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-display font-bold uppercase text-xs tracking-widest text-accent">
              {String(t('footer.contactHeader'))}
            </div>
            <div className="text-xs text-text-muted space-y-2 font-body">
              <p className="text-white font-bold font-display text-sm">{String(t('footer.phone'))}</p>
              <p className="font-display">{String(t('footer.email'))}</p>
              <div className="pt-2 space-y-1">
                <p className="text-text-light font-medium">Solsiden Barbershop:</p>
                <p>Beddingen 8, 7014 Trondheim</p>
              </div>
              <div className="pt-2 space-y-1">
                <p className="text-text-light font-medium">Moholt Salong &amp; Barber:</p>
                <p>Brøsetveien 168, 7050 Trondheim</p>
              </div>
            </div>
          </div>

        </div>

        {/* Oversized Brand Typography Banner Bleeding Off Edge */}
        <div className="py-12 text-center select-none overflow-hidden">
          <span className="font-display font-bold text-5xl sm:text-8xl lg:text-[11rem] uppercase tracking-tighter text-border-dark/30 block leading-none whitespace-nowrap">
            COWBOYS &amp; ANGELS
          </span>
        </div>

        {/* Legal & Developer Credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-dark/60 text-xs text-text-muted font-body">
          <div>{String(t('footer.copyright'))}</div>
          
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent underline transition-colors"
            >
              {String(t('footer.studioCredit'))}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
