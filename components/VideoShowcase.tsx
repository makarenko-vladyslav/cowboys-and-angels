"use client";
import { useLocale } from "@/lib/i18n";

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="py-20 sm:py-28 bg-bg-surface border-y border-border-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
            {String(t("videoShowcase.kicker"))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {String(t("videoShowcase.title"))}
          </h2>
          <p className="text-text-light-muted text-base sm:text-lg">
            {String(t("videoShowcase.lede"))}
          </p>
        </div>

        {/* Video Player Card with distinct clip 2 */}
        <div className="relative rounded-lg overflow-hidden border border-border-dark shadow-2xl max-w-5xl mx-auto aspect-[16/9] bg-bg-dark">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            poster="https://images.pexels.com/videos/4178342/barber-barber-shop-barbering-barbershop-4178342.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            className="w-full h-full object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/4178342/4178342-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto mt-4 text-xs text-text-light-muted border-t border-border-dark/60 pt-3">
          <span>{String(t("videoShowcase.caption"))}</span>
          <span className="font-mono text-accent">{String(t("videoShowcase.metaNote"))}</span>
        </div>
      </div>
    </section>
  );
}
