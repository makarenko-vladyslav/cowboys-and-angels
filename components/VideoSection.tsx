"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-[hsl(25_18%_14%)] text-white border-y border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("video.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
              {t("video.title") as string}
            </h2>
            <p className="text-sm text-white/70 font-normal">
              {t("video.subtitle") as string}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black aspect-video">
            <video
              controls
              muted
              playsInline
              poster={t("video.poster") as string}
              className="w-full h-full object-cover"
            >
              <source src={t("video.src") as string} type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
