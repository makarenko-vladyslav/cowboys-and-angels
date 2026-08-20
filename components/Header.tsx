"use client";
import React, { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoUrl = "/cowboys-and-angels/media/217ee0c8d84a6632.png/v1/fill/w_213,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CA_logo_copper.png";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#locations", label: String(t("nav.moholt")) + " & " + String(t("nav.solsiden")) },
    { href: "#services", label: String(t("nav.services")) },
    { href: "#calculator", label: String(t("nav.calculator")) },
    { href: "#craft", label: String(t("nav.craft")) },
    { href: "#gallery", label: String(t("nav.gallery")) },
    { href: "#team", label: String(t("nav.team")) },
    { href: "#faq", label: String(t("nav.faq")) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/95 backdrop-blur-md py-3 border-b border-copper/20 shadow-2xl"
          : "bg-gradient-to-b from-dark-bg/95 via-dark-bg/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none py-2">
          <img
            src={logoUrl}
            alt={String(t("header.brand_alt"))}
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[11px] font-display uppercase tracking-widest text-text-light/80 hover:text-copper transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-copper hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+4773931100"
            className="text-[11px] font-display uppercase tracking-wider text-copper-light hover:text-copper transition-colors bg-dark-card border border-copper/30 px-3.5 py-2.5 rounded-sm"
          >
            TLF: +47 73 93 11 00
          </a>

          <a
            href="#booking"
            className="bg-copper hover:bg-copper-dark text-white text-[11px] font-display font-bold uppercase tracking-widest px-5 py-3 rounded-sm transition-all duration-300 shadow-[0_4px_20px_rgba(216,92,26,0.35)]"
          >
            {String(t("nav.book"))}
          </a>

          <div className="flex items-center border border-copper/30 rounded-sm overflow-hidden bg-dark-card/80 text-[10px] font-display">
            <button
              onClick={() => setLocale("nb")}
              className={`px-2 py-1.5 transition-colors ${locale === "nb" ? "bg-copper text-white font-bold" : "text-text-light/60 hover:text-white"}`}
            >
              NO
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-1.5 transition-colors ${locale === "en" ? "bg-copper text-white font-bold" : "text-text-light/60 hover:text-white"}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href="#booking"
            className="bg-copper text-white text-[10px] font-display font-bold uppercase tracking-wider px-3 py-2 rounded-sm"
          >
            {String(t("header.mobile_bestill"))}
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-light hover:text-copper transition-colors focus:outline-none"
            aria-label={String(t("header.toggle_menu"))}
          >
            <span className="text-xs font-display uppercase tracking-widest text-copper-light">
              {mobileMenuOpen ? String(t("header.close")) : String(t("header.menu"))}
            </span>
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-dark-bg/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center pb-4 border-b border-copper/20">
                <span className="text-xs font-display text-copper uppercase tracking-widest">{String(t("header.brand_title"))}</span>
                <div className="flex gap-2 text-xs font-display">
                  <button
                    onClick={() => setLocale("nb")}
                    className={`px-3 py-1.5 rounded-sm ${locale === "nb" ? "bg-copper text-white" : "border border-copper/30"}`}
                  >
                    NO
                  </button>
                  <button
                    onClick={() => setLocale("en")}
                    className={`px-3 py-1.5 rounded-sm ${locale === "en" ? "bg-copper text-white" : "border border-copper/30"}`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-display font-bold text-text-light hover:text-copper transition-colors py-1 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-copper/20 pt-6">
              <a
                href="tel:+4773931100"
                className="w-full text-center bg-dark-card border border-copper/40 text-copper-light py-3.5 rounded-sm text-xs font-display uppercase tracking-widest"
              >
                {String(t("header.mobile_ring_moholt"))}
              </a>

              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-copper text-white py-3.5 rounded-sm text-xs font-display font-bold uppercase tracking-widest shadow-lg"
              >
                {String(t("nav.book"))}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
