"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="bg-[hsl(25_15%_10%)] text-white py-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Reveal delay={0.0}>
            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-6xl font-extrabold text-[hsl(28_85%_48%)] tabular-nums">
                {t("proof.stat1") as string}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-white/80">
                {t("proof.stat1Label") as string}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-6xl font-extrabold text-[hsl(28_85%_48%)] tabular-nums">
                {t("proof.stat2") as string}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-white/80">
                {t("proof.stat2Label") as string}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-6xl font-extrabold text-[hsl(28_85%_48%)] tabular-nums">
                {t("proof.stat3") as string}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-white/80">
                {t("proof.stat3Label") as string}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-6xl font-extrabold text-[hsl(28_85%_48%)] tabular-nums">
                {t("proof.stat4") as string}
              </div>
              <div className="text-xs font-bold tracking-widest uppercase text-white/80">
                {t("proof.stat4Label") as string}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
