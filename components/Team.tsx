"use client";
import { useLocale } from "@/lib/i18n";

interface TeamMember {
  name: string;
  role: string;
  location: string;
  spec: string;
  url?: string;
  image?: string;
  photo?: string;
}

export default function Team() {
  const { t } = useLocale();

  const members = (t("team.members") || t("team.items")) as TeamMember[];

  const staffList: TeamMember[] = Array.isArray(members) && members.length > 0 ? members : [
    { name: "Jan Emil", role: "Daglig leder & Frisør", location: "Solsiden & Moholt", spec: "15+ års erfaring · Fagbrev" },
    { name: "Daniel", role: "Barberer & Skjeggspesialist", location: "Solsiden", spec: "Knivbarbering & Varme omslag", url: "https://static.wixstatic.com/media/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg/v1/fill/w_442,h_589,fp_0.51_0.38,q_90,enc_avif,quality_auto/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg" },
    { name: "Ragnhild Nordvik", role: "Senior Stylist & Fargeekspert", location: "Moholt", spec: "Foilage, Balayage & Kur", url: "https://static.wixstatic.com/media/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg/v1/fill/w_442,h_589,fp_0.44_0.53,q_90,enc_avif,quality_auto/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg" },
    { name: "Yana", role: "Frisør & Foilage Master", location: "Moholt", spec: "Fargeteknikk & Kjemisk form", url: "https://static.wixstatic.com/media/973894_b0dc977af7f4442398681c008281315c~mv2.jpg/v1/fill/w_442,h_589,fp_0.57_0.56,q_90,enc_avif,quality_auto/973894_b0dc977af7f4442398681c008281315c~mv2.jpg" },
    { name: "Austeja", role: "Stylist & Hårpleier", location: "Moholt", spec: "Hodebunns-SPA & Dameklipp", url: "https://static.wixstatic.com/media/973894_5b010104c11b4317979a8959a6ebf3a8~mv2.jpg/v1/fill/w_442,h_589,fp_0.64_0.49,q_90,enc_avif,quality_auto/973894_5b010104c11b4317979a8959a6ebf3a8~mv2.jpg" },
    { name: "Hamodi", role: "Barberer & Fade Master", location: "Solsiden", spec: "Skin fade & Skjeggdesign", url: "https://static.wixstatic.com/media/973894_14733a7245d04b8b845a45e8415e5584~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/973894_14733a7245d04b8b845a45e8415e5584~mv2.jpg" },
    { name: "Maneewan", role: "Frisør & Negledesign", location: "Moholt", spec: "Dameklipp & Manikyr", url: "https://static.wixstatic.com/media/973894_314ea4e82dff4c38b1e91a230562457f~mv2.jpg/v1/fill/w_442,h_589,fp_0.24_0.6,q_90,enc_avif,quality_auto/973894_314ea4e82dff4c38b1e91a230562457f~mv2.jpg" },
    { name: "Leo Casanova", role: "Barberer & Knivspesialist", location: "Solsiden", spec: "Klassisk barber & Kontur", url: "https://static.wixstatic.com/media/973894_e38de253b652467890683b9212aca318~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/973894_e38de253b652467890683b9212aca318~mv2.jpg" },
    { name: "Amin Cadie", role: "Stylist & Klipp", location: "Moholt", spec: "Herre- og dameklipp" },
    { name: "Abshir", role: "Lærling (rabatterte priser)", location: "Moholt", spec: "-30% lærlingavslag" },
  ];

  return (
    <section id="team" className="py-20 sm:py-28 bg-bg-surface border-y border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
            {String(t("team.kicker"))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {String(t("team.title"))}
          </h2>
          <p className="text-text-light-muted text-base sm:text-lg">
            {String(t("team.lede"))}
          </p>
        </div>

        {/* 10 Real Staff Members Grid: Real portraits when url provided, initials otherwise */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {staffList.map((person, index) => {
            const initials = person.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            const portraitUrl = person.url || person.photo || person.image;

            return (
              <div
                key={index}
                className="bg-bg-dark border border-border-dark hover:border-accent p-5 rounded flex flex-col justify-between text-center transition-all group shadow-sm hover:shadow-lg"
              >
                <div>
                  {portraitUrl ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-border-dark group-hover:border-accent mx-auto mb-4 transition-colors">
                      <img
                        src={portraitUrl}
                        alt={person.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-bg-surface border-2 border-border-dark group-hover:border-accent flex items-center justify-center font-display text-xl sm:text-2xl font-bold text-accent mx-auto mb-4 transition-colors">
                      {initials}
                    </div>
                  )}

                  <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase group-hover:text-accent transition-colors">
                    {person.name}
                  </h3>
                  <div className="text-xs text-text-light font-medium mt-1">
                    {person.role}
                  </div>
                  <div className="text-[11px] text-accent-light uppercase tracking-wider mt-2">
                    {person.location}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border-dark/60 text-[10px] text-text-light-muted font-mono leading-tight">
                  {person.spec}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
