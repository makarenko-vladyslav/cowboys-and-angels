"use client";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();
  const items = t("services.items") as Array<{
    id: string;
    title: string;
    tag: string;
    desc: string;
    price: string;
    duration: string;
  }>;

  // Real client images from brief, each exactly once across site
  const serviceImages: Record<string, string> = {
    barber: "https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg",
    klipp: "https://static.wixstatic.com/media/973894_cbcf7ada9f8c487493d3b3941196523e~mv2.jpg/v1/crop/x_0,y_0,w_596,h_447,q_80,enc_auto/973894_cbcf7ada9f8c487493d3b3941196523e~mv2.jpg",
    farge: "https://static.wixstatic.com/media/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg/v1/fill/w_980,h_576,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0aa65_ab4b3f643b7549a08bb9d8b7dc1f1289~mv2.jpg",
    styling: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    pleie: "https://static.wixstatic.com/media/973894_d0a9efdba4e7459989f9612b17e9c28d~mv2.png/v1/crop/x_0,y_0,w_709,h_450,q_85,enc_auto/973894_d0a9efdba4e7459989f9612b17e9c28d~mv2.png",
    bryn: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80",
  };

  return (
    <section id="tjenester" className="py-20 sm:py-28 bg-bg-dark scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Kicker + Display Heading + Lede + Corner note */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-border-dark">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
              {String(t("services.kicker"))}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4">
              {String(t("services.title"))}
            </h2>
            <p className="text-text-light-muted text-base sm:text-lg">
              {String(t("services.lede"))}
            </p>
          </div>
          <div className="mt-4 lg:mt-0 text-xs font-mono text-accent uppercase tracking-wider">
            {String(t("services.cornerNote"))}
          </div>
        </div>

        {/* 3x2 Editorial Service Cards with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(items) &&
            items.map((srv) => (
              <div
                key={srv.id}
                className="group bg-bg-surface border border-border-dark hover:border-accent/60 rounded overflow-hidden flex flex-col transition-all duration-300 shadow-lg"
              >
                {/* Photo Header with Scrim */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-bg-dark">
                  <img
                    src={serviceImages[srv.id] || serviceImages.barber}
                    alt={srv.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-85" />
                  <span className="absolute top-3 left-3 bg-bg-dark/90 border border-border-dark text-accent text-[11px] font-semibold uppercase px-2.5 py-1 rounded">
                    {srv.tag}
                  </span>
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <span className="bg-bg-dark/80 text-text-light-muted text-[11px] font-mono px-2 py-0.5 rounded">
                      {srv.duration}
                    </span>
                    <span className="bg-primary text-white text-xs font-display font-semibold uppercase px-3 py-1 rounded tabular-nums">
                      {srv.price}
                    </span>
                  </div>
                </div>

                {/* Content: Title, 2-3 sentence factual description, link */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white uppercase mb-3 group-hover:text-accent transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-text-light-muted text-sm leading-relaxed mb-6">
                      {srv.desc}
                    </p>
                  </div>

                  <a
                    href="#bestilling"
                    className="inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-accent-light transition-colors py-3 min-h-[44px] border-t border-border-dark"
                  >
                    <span>Reserver stol for denne behandlingen</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
