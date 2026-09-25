"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#tjenester", label: t("nav.services") },
    { href: "#priser", label: t("nav.prices") },
    { href: "#beregner", label: t("nav.calculator") },
    { href: "#om-oss", label: t("nav.experience") },
    { href: "#galleri", label: t("nav.gallery") },
    { href: "#team", label: t("nav.team") },
    { href: "#salonger", label: t("nav.locations") },
    { href: "#kunnskap", label: t("nav.faq") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-bg-dark/95 backdrop-blur-md border-b border-border-dark py-3 shadow-2xl"
            : "bg-gradient-to-b from-bg-dark/90 via-bg-dark/40 to-transparent py-5"
        }`}
      >
        <div className="gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="shrink-0 flex items-center gap-3 group focus:outline-none min-h-[44px]">
            <img
              src="https://static.wixstatic.com/media/b0aa65_d3b94b7050064f518aadb26445116f9c~mv2.png/v1/fill/w_213,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CA_logo_copper.png"
              alt="Cowboys and Angels logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-text-light/80 hover:text-accent transition-colors uppercase py-3 min-h-[44px] inline-flex items-center"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Direct Phone & Booking CTA */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+4773510020"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-light px-3 py-3 min-h-[44px] border border-border-dark rounded hover:border-accent hover:text-accent transition-all"
              aria-label="Ring Cowboys and Angels"
            >
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>73 51 00 20</span>
            </a>

            <a
              href="#bestilling"
              className="inline-flex items-center justify-center px-4 py-3 min-h-[44px] bg-primary hover:bg-accent text-white font-display font-semibold text-sm tracking-wider uppercase rounded transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-accent/40 active:scale-95"
            >
              {t("nav.bookCta")}
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded text-text-light hover:text-accent focus:outline-none"
              aria-label="Åpne hovedmeny"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-bg-dark/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 animate-fadeIn"
        >
          <div className="flex items-center justify-between border-b border-border-dark pb-4">
            <img
              src="https://static.wixstatic.com/media/b0aa65_d3b94b7050064f518aadb26445116f9c~mv2.png/v1/fill/w_213,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CA_logo_copper.png"
              alt="Cowboys and Angels"
              className="h-10 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-text-light-muted hover:text-white rounded border border-border-dark"
              aria-label="Lukk meny"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-4 py-8 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl sm:text-3xl uppercase tracking-wider text-text-light hover:text-accent transition-colors py-2 min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-border-dark">
            <div className="text-xs text-text-light-muted uppercase tracking-widest mb-1">
              Direkte kontakt & timebestilling
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a
                href="tel:+4773510020"
                className="p-3 min-h-[44px] flex items-center justify-center bg-bg-surface border border-border-dark text-center rounded text-accent font-semibold"
              >
                Solsiden: 73 51 00 20
              </a>
              <a
                href="tel:+4773938800"
                className="p-3 min-h-[44px] flex items-center justify-center bg-bg-surface border border-border-dark text-center rounded text-accent font-semibold"
              >
                Moholt: 73 93 88 00
              </a>
            </div>
            <a
              href="#bestilling"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 min-h-[44px] flex items-center justify-center bg-primary text-white font-display uppercase tracking-widest font-semibold rounded text-base"
            >
              {t("nav.bookCta")}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
