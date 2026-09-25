"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string>("");

  // 8 Unique gallery items
  const galleryItems = [
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      caption: "Foilage og balayage med myke overganger",
      tag: "Moholt Salong",
    },
    {
      url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=80",
      caption: "Strukturert styling og volumklipp",
      tag: "Styling",
    },
    {
      url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
      caption: "Presisjonsforming av bryn og farge",
      tag: "Bryn & Farge",
    },
    {
      url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      caption: "Klassisk herreklipp med fade",
      tag: "Solsiden",
    },
    {
      url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      caption: "Varm glans og nærende kur",
      tag: "Farging",
    },
    {
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      caption: "Skarp skjeggtrim med knivkontur",
      tag: "Barbershop",
    },
    {
      url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      caption: "Teksturert herrefrisyre med matt hold",
      tag: "Barbershop",
    },
    {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
      caption: "Fargeforandring og formføn",
      tag: "Moholt",
    },
  ];

  return (
    <section id="galleri" className="py-20 sm:py-28 bg-bg-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-border-dark pb-6">
          <div>
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">
              {String(t("gallery.kicker"))}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-tight">
              {String(t("gallery.title"))}
            </h2>
            <p className="text-text-light-muted text-sm sm:text-base mt-2 max-w-xl">
              {String(t("gallery.lede"))}
            </p>
          </div>
          <p className="text-text-light-muted text-xs font-mono max-w-xs mt-3 sm:mt-0 text-accent">
            {String(t("gallery.instagramNote"))}
          </p>
        </div>

        {/* Responsive Grid of 8 Distinct Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedImg(item.url);
                setIsOpen(true);
              }}
              className="group relative aspect-[3/4] rounded overflow-hidden bg-bg-surface cursor-pointer border border-border-dark hover:border-accent transition-all"
            >
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/95 via-bg-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                <span className="text-accent text-[10px] font-bold uppercase tracking-wider mb-1">
                  {item.tag}
                </span>
                <p className="text-white text-xs font-medium leading-tight">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox with dedicated Close Button */}
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <div
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg}
                alt="Forstørret bilde fra Cowboys and Angels"
                className="w-auto h-auto max-h-[85vh] rounded border border-border-dark shadow-2xl"
              />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white bg-bg-dark/90 hover:bg-accent px-4 py-2.5 min-h-[44px] rounded border border-border-dark text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                aria-label="Lukk bilde"
              >
                Lukk
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
