"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === "uk" ? "en" : "uk");
  };

  const navLinks = [
    { href: "#concept", label: t("nav.concept") as string },
    { href: "#services", label: t("nav.services") as string },
    { href: "#calculator", label: t("nav.calculator") as string },
    { href: "#craft", label: t("nav.craft") as string },
    { href: "#portfolio", label: t("nav.portfolio") as string },
    { href: "#team", label: t("nav.team") as string },
    { href: "#shop", label: t("nav.shop") as string },
    { href: "#faq", label: t("nav.faq") as string },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(25_20%_8%/0.95)] backdrop-blur-md py-3 shadow-xl border-b border-[hsl(28_85%_52%/0.25)]"
            : "bg-gradient-to-b from-[hsl(25_20%_7%/0.95)] via-[hsl(25_20%_7%/0.6)] to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-2xl flex items-center justify-center transition-transform group-hover:scale-105">
              CA
            </span>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-wider leading-none">
                COWBOYS & ANGELS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[hsl(28_85%_52%)] font-bold">
                BARBERSHOP & FOILAGE STUDIO · TRONDHEIM
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase font-bold text-white/80 hover:text-[hsl(28_85%_52%)] transition-colors tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={toggleLocale}
              className="text-xs font-bold px-2.5 py-1 rounded border border-white/20 text-white/90 hover:border-[hsl(28_85%_52%)] hover:text-[hsl(28_85%_52%)] transition-all uppercase"
            >
              {locale === "uk" ? "EN" : "UA"}
            </button>

            <a
              href="tel:+4773931000"
              className="text-xs font-bold text-white hover:text-[hsl(28_85%_52%)] transition-colors hidden md:block tabular-nums"
            >
              {t("nav.phone") as string}
            </a>

            <a
              href="#contact"
              className="bg-[hsl(28_85%_52%)] hover:bg-[hsl(24_90%_45%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-sm uppercase px-5 py-2.5 rounded transition-all shadow-md tracking-wider"
            >
              {t("nav.bookNow") as string}
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden px-3 py-1.5 border border-white/20 rounded text-xs font-bold uppercase tracking-wider text-white hover:text-[hsl(28_85%_52%)] hover:border-[hsl(28_85%_52%)] focus:outline-none"
          >
            {menuOpen ? "ЗАКРИТИ" : "МЕНЮ"}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(25_20%_7%)] text-white flex flex-col justify-between p-8 pt-24 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-3xl uppercase text-white/90 hover:text-[hsl(28_85%_52%)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60 uppercase font-bold tracking-wider">Мова / Language</span>
              <button
                onClick={toggleLocale}
                className="text-xs font-bold px-3 py-1 bg-white/10 rounded text-[hsl(28_85%_52%)] uppercase"
              >
                {locale === "uk" ? "Switch to English" : "Перейти на Українську"}
              </button>
            </div>
            <a
              href="tel:+4773931000"
              className="text-center font-display font-bold text-xl text-[hsl(28_85%_52%)] tabular-nums"
            >
              +47 73 93 10 00
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center bg-[hsl(28_85%_52%)] text-[hsl(25_20%_8%)] font-display font-extrabold text-lg uppercase py-3 rounded tracking-wider"
            >
              {t("nav.bookNow") as string}
            </a>
          </div>
        </div>
      )}
    </>
  );
}