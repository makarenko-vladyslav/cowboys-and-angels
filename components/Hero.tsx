"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { motion } from "framer-motion";
import { MOTION_CURVES, Marquee } from "./motion";

export default function Hero() {
  const { t } = useLocale();

  const videoSrc = "https://videos.pexels.com/video-files/7686555/7686555-hd_1920_1080_24fps.mp4";
  const videoPoster = "https://images.pexels.com/videos/7686555/pexels-photo-7686555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200";

  const tickerItems = [
    String(t("ticker.0") || "MOHOLT SALONG · FOILAGE & DAMEKLIPP"),
    String(t("ticker.1") || "SOLSIDEN BARBERSHOP · SKARPE KANTER & KNIVBARBERING"),
    String(t("ticker.2") || "10% STUDENTRABATT PÅ ALL ORDINÆR BEHANDLING"),
    String(t("ticker.3") || "AUTORISERT FORHANDLER AV L'ANZA OG KEUNE"),
    String(t("ticker.4") || "ONLINE TIMEBESTILLING DØGNET RUNDT")
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-0 overflow-hidden bg-dark-bg">
      {/* Layer 1 & 2: Background Video + Dark Scrim Stack */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={videoPoster}
          className="w-full h-full object-cover scale-105 filter brightness-70 contrast-105"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/95 via-dark-bg/80 to-dark-bg" />
        <div className="absolute inset-0 bg-radial from-transparent via-dark-bg/60 to-dark-bg/90" />
      </div>

      {/* Decorative Watermark Background Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <span className="font-display font-bold text-[18vw] text-white/5 uppercase tracking-widest whitespace-nowrap">
          TRONDHEIM
        </span>
      </div>

      {/* Rotating Text Seal Badge (SVG text path - zero glyphs/icons) */}
      <div className="absolute top-32 right-8 hidden lg:block z-20 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="w-32 h-32 opacity-80"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="sealPath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[10.5px] font-display uppercase tracking-[0.22em] fill-copper-light font-medium">
              <textPath href="#sealPath" startOffset="0%">
                COWBOYS AND ANGELS · EST. 2018 · TRONDHEIM ·
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Main Copy Block (8 cols) */}
          <div className="lg:col-span-8">
            {/* Kicker with REAL Meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: MOTION_CURVES.enter }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm bg-dark-card/90 border border-copper/40 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
              <span className="text-xs font-display uppercase tracking-widest text-copper-light font-bold">
                {String(t("hero.kicker"))}
              </span>
            </motion.div>

            {/* Poster H1 with Special Word Styling */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: MOTION_CURVES.enter }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight leading-[1.02] mb-6"
            >
              <span className="text-copper italic font-serif font-normal">{String(t("hero.mesterlig"))}</span> {String(t("hero.title_rest"))}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: MOTION_CURVES.enterSoft }}
              className="text-base sm:text-lg text-text-light/90 font-body max-w-2xl font-normal leading-relaxed mb-8"
            >
              {String(t("hero.subtitle"))}
            </motion.p>

            {/* CTA Pair */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: MOTION_CURVES.enterSoft }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-3 bg-copper hover:bg-copper-dark text-white font-display font-bold uppercase tracking-widest text-xs sm:text-sm px-8 py-4 rounded-sm transition-all duration-300 shadow-[0_4px_25px_rgba(216,92,26,0.4)]"
              >
                <span>{String(t("hero.cta_book"))}</span>
                <span className="text-sm">→</span>
              </a>

              <a
                href="tel:+4773931100"
                className="inline-flex items-center justify-center gap-2 bg-dark-card/90 hover:bg-dark-card border border-copper/40 text-text-light font-display uppercase tracking-wider text-xs sm:text-sm px-6 py-4 rounded-sm transition-all duration-300 hover:border-copper"
              >
                <span>{String(t("hero.cta_call"))}</span>
              </a>
            </motion.div>

            {/* 3-Item Meta Strip with Hairlines */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-copper/20 text-xs font-display uppercase tracking-wider text-text-light/70"
            >
              <div className="flex items-center gap-2">
                <span className="text-copper font-bold">{String(t("hero.hours_label"))}</span>
                <span>{String(t("hero.hours_val"))}</span>
              </div>
              <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-copper/20 pt-2 sm:pt-0 sm:pl-4">
                <span className="text-copper font-bold">{String(t("hero.loc_label"))}</span>
                <span>{String(t("hero.loc_val"))}</span>
              </div>
              <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-copper/20 pt-2 sm:pt-0 sm:pl-4">
                <span className="text-copper font-bold">{String(t("hero.rating_label"))}</span>
                <span className="text-amber-gold font-bold">{String(t("hero.rating_val"))}</span>
              </div>
            </motion.div>
          </div>

          {/* Flanking Mini-Copy Column (4 cols desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4 border-l border-copper/20 pl-6">
            <div className="bg-dark-card/60 p-4 border border-copper/20 rounded-sm">
              <span className="text-[10px] font-display uppercase tracking-widest text-copper font-bold block mb-1">
                {String(t("hero.flank_left_title"))}
              </span>
              <p className="text-xs text-text-light/70 font-body leading-relaxed">
                {String(t("hero.flank_left_desc"))}
              </p>
            </div>

            <div className="bg-dark-card/60 p-4 border border-copper/20 rounded-sm">
              <span className="text-[10px] font-display uppercase tracking-widest text-copper font-bold block mb-1">
                {String(t("hero.flank_right_title"))}
              </span>
              <p className="text-xs text-text-light/70 font-body leading-relaxed">
                {String(t("hero.flank_right_desc"))}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Classic Scroll Cue */}
      <div className="relative z-10 flex flex-col items-center justify-center my-4">
        <a href="#locations" className="flex flex-col items-center gap-1 group focus:outline-none">
          <span className="text-[9px] font-display uppercase tracking-[0.3em] text-copper-light/80 group-hover:text-copper transition-colors">
            {String(t("hero.scroll"))}
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-copper to-transparent animate-pulse" />
        </a>
      </div>

      {/* Hero Base Ticker */}
      <div className="relative z-20 bg-dark-card border-t border-copper/20 py-3">
        <Marquee items={tickerItems} speed={30} />
      </div>
    </section>
  );
}
