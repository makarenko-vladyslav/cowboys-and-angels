"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export default function RitualProcess() {
  const { t } = useLocale();

  const rawSteps = t("process.steps") as StepItem[];
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  return (
    <section id="process" className="py-24 bg-[hsl(38_25%_96%)] text-[hsl(25_12%_15%)] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("process.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[hsl(25_15%_10%)] mb-4">
              {t("process.title") as string}
            </h2>
            <p className="text-base text-[hsl(25_8%_45%)] font-normal">
              {t("process.subtitle") as string}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.num} delay={index * 0.1}>
              <div className="relative bg-white p-8 rounded-xl border border-[hsl(30_15%_85%)] shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                <div>
                  <div className="font-display text-4xl font-extrabold text-[hsl(28_85%_48%)] mb-4 tabular-nums">
                    {step.num}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-[hsl(25_15%_10%)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[hsl(25_8%_45%)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[hsl(30_15%_85%)] text-[0.65rem] font-bold uppercase tracking-widest text-[hsl(28_85%_48%)]">
                  ЕТАП {step.num} / 04
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
