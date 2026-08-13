"use client";

import React from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from '@/components/motion';

export default function Team() {
  const { t } = useLocale();

  const eyebrow = (t('team.eyebrow') as string) || 'MØT VÅRE EKSPERTER';
  const title = (t('team.title') as string) || 'Handplukkede Mestre & Stylister';
  const subtitle = (t('team.subtitle') as string) || 'Hver enkelt medarbeider hos Cowboys and Angels bringer sin unike fagkompetanse.';
  const teamMembers = (t('team.members') as Array<{ name: string; role: string; hub: string; photo?: string }>) || [];

  return (
    <section id="team" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-copper block mb-2">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-paper-muted mb-4">{subtitle}</p>
          <span className="inline-block px-3 py-1 rounded bg-copper/10 border border-copper/30 text-copper text-xs font-mono">
            {(t('team.bookingNotice') as string) || 'Du kan velge din foretrukne stylist direkte i vårt booking-system.'}
          </span>
        </div>

        {/* Team Grid showing ALL team members with real portraits if provided */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {teamMembers.map((m, idx) => {
            return (
              <Reveal key={idx} delay={idx * 0.04}>
                <div className="p-5 rounded-lg bg-dark-surface border border-dark-border hover:border-copper/50 transition-all flex flex-col items-center text-center group h-full justify-between">
                  <div>
                    {m.photo ? (
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-copper mx-auto mb-4 group-hover:scale-105 transition-transform">
                        <img
                          src={m.photo}
                          alt={m.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-dark-bg border-2 border-copper flex items-center justify-center font-display text-xl font-bold text-copper mx-auto mb-4 group-hover:scale-105 transition-transform">
                        {m.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                      </div>
                    )}

                    <h3 className="font-display text-lg font-bold uppercase text-paper mb-1 group-hover:text-copper transition-colors">
                      {m.name}
                    </h3>
                    <span className="text-xs text-copper font-medium block mb-3">{m.role}</span>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-dark-bg border border-dark-border text-paper-muted w-full block">
                    {m.hub}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
