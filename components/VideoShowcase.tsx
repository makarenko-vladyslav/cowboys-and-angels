"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function VideoShowcase() {
  const { t } = useLocale();

  const videoSrc = "https://videos.pexels.com/video-files/4178342/4178342-hd_1920_1080_30fps.mp4";
  const videoPoster = "https://images.pexels.com/videos/4178342/barber-barber-shop-barbering-barbershop-4178342.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200";

  return (
    <section className="py-24 bg-dark-bg border-t border-copper/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Info Column */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
                {String(t("video_section.kicker"))}
              </p>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-6">
                {String(t("video_section.title"))}
              </h2>
              <p className="text-xs sm:text-sm text-text-light/80 font-body leading-relaxed mb-8">
                {String(t("video_section.desc"))}
              </p>

              <div className="space-y-3 border-l-2 border-copper pl-4 text-xs font-display uppercase tracking-wider text-text-light/70">
                <p>{String(t("video_section.bullet1"))}</p>
                <p>{String(t("video_section.bullet2"))}</p>
                <p>{String(t("video_section.bullet3"))}</p>
              </div>
            </Reveal>
          </div>

          {/* Video Player Box Column */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <div className="relative rounded-sm overflow-hidden border border-copper/30 shadow-2xl bg-dark-card group">
                <video
                  controls
                  loop
                  playsInline
                  poster={videoPoster}
                  className="w-full aspect-video object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="p-3 bg-dark-card border-t border-copper/20 flex justify-between items-center text-[10px] font-display uppercase tracking-widest text-text-light/60">
                  <span>{String(t("video_section.badge"))}</span>
                  <span>1080P HD</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
