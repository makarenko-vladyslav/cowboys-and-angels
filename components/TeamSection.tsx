"use client";
import React from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "./motion";

export default function TeamSection() {
  const { t } = useLocale();

  const teamMembers = (t("team.members") as Array<{ name: string; role: string; loc: string; photo?: string }>) || [];

  return (
    <section id="team" className="py-24 bg-dark-card border-t border-copper/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("team.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            {String(t("team.title"))}
          </h2>
          <p className="text-xs sm:text-sm text-text-light/70 font-body">
            {String(t("team.subtitle"))}
          </p>
        </div>

        {/* Dense Team Grid */}
        <Stagger className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {teamMembers.map((m, idx) => {
            const initials = m.name.split(" ").map(n => n[0]).join("");
            return (
              <StaggerItem key={idx}>
                <div className="bg-dark-bg p-5 rounded-sm border border-copper/20 hover:border-copper transition-all text-center flex flex-col items-center justify-between h-full group">
                  {m.photo ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-copper/40 mb-4 group-hover:scale-105 transition-all shrink-0">
                      <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-copper/20 border border-copper/40 flex items-center justify-center text-copper font-display font-bold text-base mb-4 group-hover:scale-105 group-hover:bg-copper group-hover:text-white transition-all shrink-0">
                      {initials}
                    </div>
                  )}
                  <div className="flex-1 flex flex-col justify-between w-full">
                    <div>
                      <h3 className="text-sm font-display font-bold text-white mb-1 uppercase">
                        {m.name}
                      </h3>
                      <p className="text-[11px] text-copper-light font-body font-medium mb-2">
                        {m.role}
                      </p>
                    </div>
                    <span className="block text-[9px] font-display uppercase tracking-wider text-text-light/50 bg-dark-card px-2 py-0.5 border border-copper/10 mt-auto">
                      {m.loc}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

      </div>
    </section>
  );
}
