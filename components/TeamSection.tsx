"use client";

import { useLocale } from "@/lib/i18n";

export default function TeamSection() {
  const { t } = useLocale();

  const teamMembers = [
    { name: "Jan Emil", role: "Daglig leder / Засновник", initials: "JE", exp: "8 років досвіду" },
    { name: "Ragnhild Nordvik", role: "Головний колорист Foilage", initials: "RN", exp: "7 років досвіду" },
    { name: "Daniel", role: "Старший барбер (Moholt)", initials: "D", exp: "6 років досвіду" },
    { name: "Yana", role: "Спеціаліст жіночого залу", initials: "Y", exp: "5 років досвіду" },
    { name: "Hamodi", role: "Майстер Knivbarbering", initials: "H", exp: "6 років досвіду" },
    { name: "Austeja", role: "Спеціаліст нігтьового сервісу", initials: "A", exp: "4 роки досвіду" },
  ];

  return (
    <section id="team" className="py-24 bg-[hsl(35_25%_96%)] text-[hsl(25_20%_12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("team.kicker") as string}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[hsl(25_20%_8%)] mt-2 mb-4 leading-none">
            {t("team.title") as string}
          </h2>
          <p className="text-base text-[hsl(25_10%_35%)]">
            {t("team.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-[hsl(25_15%_88%)] text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-[hsl(25_20%_8%)] text-[hsl(28_85%_52%)] font-display font-extrabold text-2xl flex items-center justify-center mb-3 mx-auto shadow-inner">
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-xl text-[hsl(25_20%_8%)] leading-tight mb-1 uppercase">
                  {member.name}
                </h3>
                <p className="text-[10px] text-[hsl(25_10%_45%)] font-extrabold uppercase tracking-wider mb-2">
                  {member.role}
                </p>
              </div>
              <div className="text-[10px] text-[hsl(28_85%_52%)] font-bold uppercase tracking-wider border-t border-[hsl(25_15%_90%)] pt-2 w-full mt-3 tabular-nums">
                {member.exp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}