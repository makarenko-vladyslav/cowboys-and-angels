"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface TeamMember {
  name: string;
  role: string;
  exp: string;
}

export default function Team() {
  const { t } = useLocale();

  const rawMembers = t("team.members") as TeamMember[];
  const members = Array.isArray(rawMembers) ? rawMembers : [];

  return (
    <section id="team" className="py-24 bg-[hsl(38_25%_96%)] text-[hsl(25_12%_15%)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("team.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[hsl(25_15%_10%)] mb-4">
              {t("team.title") as string}
            </h2>
            <p className="text-base text-[hsl(25_8%_45%)] font-normal">
              {t("team.subtitle") as string}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-xl border border-[hsl(30_15%_85%)] shadow-sm text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 rounded-full bg-[hsl(25_15%_10%)] text-[hsl(28_85%_48%)] flex items-center justify-center font-display font-extrabold text-2xl mx-auto mb-6 shadow-md border-2 border-[hsl(28_85%_48%)]">
                    {member.name.substring(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-[hsl(25_15%_10%)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[hsl(28_85%_48%)] font-bold uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-[hsl(25_8%_45%)] pt-4 border-t border-[hsl(30_15%_85%)]">
                  {member.exp}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
