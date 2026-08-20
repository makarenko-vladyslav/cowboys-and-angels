"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  const logoUrl = "https://static.wixstatic.com/media/b0aa65_d3b94b7050064f518aadb26445116f9c~mv2.png/v1/fill/w_213,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CA_logo_copper.png";

  return (
    <footer className="bg-dark-bg border-t border-copper/20 pt-16 pb-12 text-text-light/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-copper/15">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src={logoUrl} alt={String(t("footer.brand_alt"))} className="h-10 w-auto object-contain" />
            <p className="text-xs font-body text-text-light/60 leading-relaxed">
              {String(t("footer.tagline"))}
            </p>
            <div className="flex gap-4 pt-2 text-xs font-display uppercase tracking-widest">
              <a
                href="https://www.facebook.com/cowboysandangelsmoholt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper hover:text-white transition-colors"
              >
                {String(t("footer.facebook_link"))}
              </a>
              <a
                href="https://www.instagram.com/cowboysandangels_moholt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper hover:text-white transition-colors"
              >
                {String(t("footer.instagram_link"))}
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-4">
              {String(t("footer.quick_links"))}
            </h4>
            <ul className="space-y-2 text-xs font-body">
              <li><a href="#locations" className="hover:text-copper transition-colors">{String(t("nav.moholt"))} & {String(t("nav.solsiden"))}</a></li>
              <li><a href="#services" className="hover:text-copper transition-colors">{String(t("nav.services"))}</a></li>
              <li><a href="#calculator" className="hover:text-copper transition-colors">{String(t("nav.calculator"))}</a></li>
              <li><a href="#craft" className="hover:text-copper transition-colors">{String(t("nav.craft"))}</a></li>
              <li><a href="#gallery" className="hover:text-copper transition-colors">{String(t("nav.gallery"))}</a></li>
              <li><a href="#team" className="hover:text-copper transition-colors">{String(t("nav.team"))}</a></li>
              <li><a href="#faq" className="hover:text-copper transition-colors">{String(t("nav.faq"))}</a></li>
            </ul>
          </div>

          {/* Location 1: Moholt */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-4">
              {String(t("nav.moholt"))}
            </h4>
            <div className="space-y-2 text-xs font-body text-text-light/70">
              <p>{String(t("footer.moholt_addr"))}</p>
              <p>{String(t("footer.phone_label"))} <a href="tel:+4773931100" className="hover:text-copper">+47 73 93 11 00</a></p>
              <p>{String(t("footer.email_moholt"))}</p>
              <p className="pt-2 text-[11px] text-copper-light font-display">{String(t("footer.hours_moholt"))}</p>
            </div>
          </div>

          {/* Location 2: Solsiden */}
          <div>
            <h4 className="font-display font-bold uppercase text-white text-xs tracking-widest mb-4">
              {String(t("nav.solsiden"))}
            </h4>
            <div className="space-y-2 text-xs font-body text-text-light/70">
              <p>{String(t("footer.solsiden_addr"))}</p>
              <p>{String(t("footer.phone_label"))} <a href="tel:+4773931101" className="hover:text-copper">+47 73 93 11 01</a></p>
              <p>{String(t("footer.email_solsiden"))}</p>
              <p className="pt-2 text-[11px] text-copper-light font-display">{String(t("footer.hours_solsiden"))}</p>
            </div>
          </div>
        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding Off Bottom Edge */}
        <div className="pt-8 text-center overflow-hidden pointer-events-none select-none">
          <span className="font-display font-bold text-5xl sm:text-8xl lg:text-[10rem] uppercase tracking-widest text-copper/10 block leading-none whitespace-nowrap">
            {String(t("footer.giant_wordmark"))}
          </span>
        </div>

        {/* Legal Row & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-body text-text-light/50 gap-4 border-t border-copper/10">
          <div>
            {String(t("footer.copyright"))} {String(t("footer.rights"))}
          </div>

          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-copper transition-colors underline underline-offset-4"
            >
              {String(t("footer.dev_credit"))}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
