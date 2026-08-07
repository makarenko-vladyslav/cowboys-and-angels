"use client";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion";

interface GalleryItem {
  url: string;
  alt: string;
}

export default function Gallery() {
  const { t } = useLocale();

  const rawItems = t("gallery.items") as GalleryItem[];
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section id="gallery" className="py-24 bg-[hsl(25_15%_10%)] text-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs font-extrabold tracking-[0.25em] text-[hsl(28_85%_48%)] uppercase block mb-3">
              {t("gallery.kicker") as string}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              {t("gallery.title") as string}
            </h2>
            <p className="text-base text-white/70 font-normal">
              {t("gallery.subtitle") as string}
            </p>
          </Reveal>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((img, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-xl bg-black aspect-[4/3] border border-white/10 shadow-lg">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    {img.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
