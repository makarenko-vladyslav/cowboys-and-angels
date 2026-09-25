"use client";
import { useLocale } from "@/lib/i18n";

export default function CraftPhilosophy() {
  const { t } = useLocale();
  const pillars = t("craftPhilosophy.pillars") as Array<{ title: string; desc: string }>;
  const stats = t("craftPhilosophy.stats") as Array<{ value: string; caption: string }>;

  return (
    <section id="om-oss" className="py-20 sm:py-28 bg-bg-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column: Kicker, Heading, Lede, Pull-quote, Pillars, Secondary Link */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
              {String(t("craftPhilosophy.kicker"))}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
              {String(t("craftPhilosophy.title"))}
            </h2>
            <p className="text-text-light-muted text-base sm:text-lg mb-6 leading-relaxed">
              {String(t("craftPhilosophy.lede"))}
            </p>

            {/* Oversized pull-quote with attribution */}
            <div className="p-4 sm:p-5 bg-bg-surface border-l-4 border-accent rounded-r mb-8">
              <p className="font-display text-lg sm:text-xl text-white uppercase leading-snug mb-2">
                {String(t("craftPhilosophy.pullQuote"))}
              </p>
              <div className="text-xs text-text-light-muted">
                <span className="font-bold text-accent">{String(t("craftPhilosophy.directorName"))}</span> — {String(t("craftPhilosophy.directorRole"))}
              </div>
            </div>

            {/* 4 Pillars without numbered labels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {Array.isArray(pillars) &&
                pillars.map((p, idx) => (
                  <div key={idx} className="p-4 bg-bg-surface border border-border-dark rounded">
                    <h3 className="font-display text-sm font-bold text-white uppercase mb-1.5 text-accent-light">
                      {p.title}
                    </h3>
                    <p className="text-xs text-text-light-muted leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
            </div>

            <a
              href="#salonger"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-light transition-colors py-3 min-h-[44px]"
            >
              <span>{String(t("craftPhilosophy.secondaryLink"))}</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Column: 2-Photo Cluster + Stat Row + Rule Caption */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              {/* Primary Photo */}
              <div className="relative rounded overflow-hidden border border-border-dark shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.pexels.com/videos/9738001/pexels-photo-9738001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
                  alt="Tradisjonell barbering på Solsiden"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
              </div>

              {/* Overlapping secondary tilted photo with distinct URL */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-60 rounded overflow-hidden border-2 border-accent shadow-2xl rotate-2 hidden sm:block bg-bg-dark">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                  alt="Foilage og farging på Moholt"
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Photo caption with hairline rule */}
            <div className="border-t border-border-dark pt-3 text-xs text-text-light-muted flex justify-between items-center">
              <span>{String(t("craftPhilosophy.photoCaption"))}</span>
              <span className="font-mono text-accent">7014 / 7050</span>
            </div>

            {/* Stat Row of 3 Real Numerals */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {Array.isArray(stats) &&
                stats.map((s, sIdx) => (
                  <div key={sIdx} className="p-3 bg-bg-surface border border-border-dark rounded">
                    <div className="font-display text-xl sm:text-2xl font-bold text-accent tabular-nums">
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-text-light-muted leading-tight mt-1">
                      {s.caption}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
