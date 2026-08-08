"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from '@/components/motion';

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  loc?: string;
}

export default function TeamSection() {
  const { t } = useLocale();
  const members = (t('team.members') as TeamMember[]) || [];

  return (
    <section id="team" className="py-24 bg-bg-dark text-text-light scroll-mt-20 relative overflow-hidden">
      
      {/* Background Watermark Word */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-display font-bold uppercase text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          TEAMET
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-display font-semibold">
            {String(t('team.kicker'))}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-white mt-2 mb-4">
            {String(t('team.title'))}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-body">
            {String(t('team.subtitle'))}
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m, idx) => {
            const initials = m.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2);

            return (
              <StaggerItem key={idx}>
                <div className="bg-bg-card border border-border-dark p-6 rounded-lg flex items-start gap-5 hover:border-accent/50 transition-all h-full">
                  {/* Monogram Avatar */}
                  <div className="w-14 h-14 rounded bg-accent/15 border border-accent/40 flex items-center justify-center font-display font-bold text-xl text-accent shrink-0">
                    {initials}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display font-bold uppercase text-lg text-white">
                        {m.name}
                      </h3>
                      {m.loc && (
                        <span className="text-[9px] font-display uppercase tracking-widest text-text-muted border border-border-dark px-1.5 py-0.5 rounded">
                          {m.loc}
                        </span>
                      )}
                    </div>

                    <div className="text-xs uppercase font-display tracking-wider text-accent font-semibold mt-0.5 mb-2">
                      {m.role}
                    </div>
                    <p className="text-text-muted text-xs font-body leading-relaxed">
                      {m.desc}
                    </p>
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
