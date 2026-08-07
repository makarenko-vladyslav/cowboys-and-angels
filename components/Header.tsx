"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav.locations") as string, href: "#locations" },
    { label: t("nav.services") as string, href: "#services" },
    { label: t("nav.calculator") as string, href: "#calculator" },
    { label: t("nav.process") as string, href: "#process" },
    { label: t("nav.shop") as string, href: "#shop" },
    { label: t("nav.gallery") as string, href: "#gallery" },
    { label: t("nav.team") as string, href: "#team" },
    { label: t("nav.faq") as string, href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[hsl(25_15%_10%/0.95)] backdrop-blur-md border-b border-[hsl(28_85%_48%/0.2)] py-3 shadow-lg"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3 text-white">
            <div className="w-9 h-9 rounded-md bg-[hsl(28_85%_48%)] flex items-center justify-center font-bold text-lg text-white shadow-md">
              C&A
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold tracking-wider text-lg leading-none uppercase">
                COWBOYS <span className="text-[hsl(28_85%_48%)]">&</span> ANGELS
              </span>
              <span className="text-[0.65rem] tracking-widest text-white/70 uppercase">
                Frisørsalong & Barbershop
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-wider uppercase text-white/80 hover:text-[hsl(28_85%_48%)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full bg-white/10 p-1 border border-white/15 text-xs text-white">
              <button
                onClick={() => setLocale("uk")}
                className={`px-2.5 py-0.5 rounded-full font-bold transition-all ${
                  locale === "uk" ? "bg-[hsl(28_85%_48%)] text-white" : "hover:text-white/80 text-white/60"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-0.5 rounded-full font-bold transition-all ${
                  locale === "en" ? "bg-[hsl(28_85%_48%)] text-white" : "hover:text-white/80 text-white/60"
                }`}
              >
                EN
              </button>
            </div>

            {/* Call button */}
            <a
              href="tel:+4773000000"
              className="text-xs font-bold text-white hover:text-[hsl(28_85%_48%)] transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Solsiden & Moholt
            </a>

            {/* CTA */}
            <a
              href="#booking"
              className="px-4 py-2 rounded-md bg-[hsl(28_85%_48%)] hover:bg-[hsl(28_90%_40%)] text-white font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-[1.02] shadow-md"
            >
              {t("common.quickBook") as string}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`h-0.5 w-full bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-full bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[hsl(25_15%_10%)] flex flex-col justify-between p-8 pt-24 text-white lg:hidden">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-widest text-[hsl(28_85%_48%)]">Меню навігації</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLocale("uk")}
                  className={`px-3 py-1 rounded text-xs font-bold ${locale === "uk" ? "bg-[hsl(28_85%_48%)] text-white" : "bg-white/10"}`}
                >
                  UA
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={`px-3 py-1 rounded text-xs font-bold ${locale === "en" ? "bg-[hsl(28_85%_48%)] text-white" : "bg-white/10"}`}
                >
                  EN
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-2xl uppercase tracking-wide hover:text-[hsl(28_85%_48%)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center bg-[hsl(28_85%_48%)] font-bold text-sm uppercase tracking-wider rounded text-white"
            >
              {t("common.bookNow") as string}
            </a>
            <p className="text-xs text-white/60 text-center">
              Тронгейм · Solsiden & Moholt · Est. 2018
            </p>
          </div>
        </div>
      )}
    </>
  );
}
