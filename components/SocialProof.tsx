"use client";

import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="bg-[hsl(25_20%_8%)] text-white py-12 border-t border-b border-[hsl(28_85%_52%/0.25)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("socialProof.kicker") as string}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded bg-white/[0.03] border border-white/10">
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-[hsl(28_85%_52%)] mb-1 tabular-nums">
              {t("socialProof.stat1Value") as string}
            </div>
            <div className="text-xs text-white/70 font-medium">
              {t("socialProof.stat1Label") as string}
            </div>
          </div>

          <div className="p-5 rounded bg-white/[0.03] border border-white/10">
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-[hsl(28_85%_52%)] mb-1 tabular-nums">
              {t("socialProof.stat2Value") as string}
            </div>
            <div className="text-xs text-white/70 font-medium">
              {t("socialProof.stat2Label") as string}
            </div>
          </div>

          <div className="p-5 rounded bg-white/[0.03] border border-white/10">
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-[hsl(28_85%_52%)] mb-1 tabular-nums">
              {t("socialProof.stat3Value") as string}
            </div>
            <div className="text-xs text-white/70 font-medium">
              {t("socialProof.stat3Label") as string}
            </div>
          </div>

          <div className="p-5 rounded bg-white/[0.03] border border-white/10">
            <div className="font-display font-extrabold text-4xl sm:text-5xl text-[hsl(28_85%_52%)] mb-1 tabular-nums">
              {t("socialProof.stat4Value") as string}
            </div>
            <div className="text-xs text-white/70 font-medium">
              {t("socialProof.stat4Label") as string}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}