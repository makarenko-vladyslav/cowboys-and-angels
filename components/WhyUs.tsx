"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

interface CardItem {
  title: string;
  desc: string;
}

export default function WhyUs() {
  const { t } = useLocale();

  const rawCards = t("whyUs.cards") as CardItem[];
  const cards = Array.isArray(rawCards) ? rawCards : [];

  return (
    <section className="py-24 bg-[hsl(25_15%_10%)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("whyUs.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              {t("whyUs.title") as string}
            </h2>
            <p className="text-base text-white/70 font-normal">
              {t("whyUs.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Pull quote */}
        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto my-12 text-center p-8 bg-[hsl(25_18%_14%)] rounded-xl border border-white/10">
            <p className="font-display text-xl sm:text-2xl font-bold uppercase italic text-[hsl(38_25%_96%)] leading-snug">
              «Майстерність вимірюється не хвилинами, а геометрією лінії та станом волосся після процедури»
            </p>
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[hsl(28_85%_48%)]">
              Jan Emil — Daglig leder, Solsiden Studio
            </div>
          </div>
        </Reveal>

        {/* Cards Grid */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <StaggerItem key={i}>
              <div className="bg-[hsl(25_18%_14%)] p-8 rounded-xl border border-white/10 hover:border-[hsl(28_85%_48%)] transition-colors h-full flex flex-col justify-between">
                <div>
                  <div className="font-display text-3xl font-extrabold text-[hsl(28_85%_48%)] mb-4 tabular-nums">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* 2-Photo Cluster with Hairline Borders */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-xl aspect-[16/10]">
            <img
              src="https://static.wixstatic.com/media/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg/v1/fill/w_980,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg"
              alt="Solsiden Studio interior"
              className="w-full h-full object-cover filter brightness-90"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 rounded text-[0.65rem] font-bold uppercase tracking-wider text-white">
              Solsiden Studio — Takara Belmont
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-xl aspect-[16/10]">
            <img
              src="https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg"
              alt="Barbering process"
              className="w-full h-full object-cover filter brightness-90"
              loading="lazy"
            />
            <div className="absolute bottom-3 left-3 bg-black/70 px-3 py-1 rounded text-[0.65rem] font-bold uppercase tracking-wider text-white">
              Moholt Campus — Skjeggtrim & Barbering
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
