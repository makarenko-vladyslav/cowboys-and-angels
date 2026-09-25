"use client";
import { useLocale } from "@/lib/i18n";

export default function Packages() {
  const { t } = useLocale();
  const packages = t("packages.items") as Array<{
    name: string;
    forWhom: string;
    price: string;
    popular?: boolean;
    desc: string;
    points: string[];
  }>;

  return (
    <section id="pakker" className="py-20 bg-bg-surface border-y border-border-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
            {String(t("packages.kicker"))}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {String(t("packages.title"))}
          </h2>
          <p className="text-text-light-muted text-base sm:text-lg">
            {String(t("packages.lede"))}
          </p>
        </div>

        {/* 4 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(packages) &&
            packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative rounded p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? "bg-bg-dark border-2 border-accent shadow-xl shadow-accent/15"
                    : "bg-bg-dark/80 border border-border-dark hover:border-border-light"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                    Mest bestilt
                  </span>
                )}

                <div>
                  <div className="text-xs text-accent uppercase tracking-wider font-semibold mb-1">
                    {pkg.forWhom}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white uppercase mb-2">
                    {pkg.name}
                  </h3>
                  <div className="font-display text-2xl font-semibold text-accent-light mb-4 tabular-nums">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-text-light-muted leading-relaxed mb-6">
                    {pkg.desc}
                  </p>

                  <ul className="space-y-2 mb-8 text-xs text-text-light-muted border-t border-border-dark/60 pt-4">
                    {pkg.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-accent font-mono font-bold">·</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#bestilling"
                  className={`w-full py-3 text-center text-xs font-display uppercase tracking-widest font-bold rounded transition-all ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent-light text-white"
                      : "bg-bg-surface hover:bg-border-dark text-text-light border border-border-dark"
                  }`}
                >
                  Reserver pakke
                </a>
              </div>
            ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-text-light-muted">
          {String(t("packages.footnote"))}
        </div>
      </div>
    </section>
  );
}
