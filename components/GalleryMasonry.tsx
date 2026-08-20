"use client";
import React, { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "./motion";

export default function GalleryMasonry() {
  const { t } = useLocale();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const rawTags = (t("gallery.items") as Array<{ tag: string }>) || [];

  const images = [
    { url: "https://static.wixstatic.com/media/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg/v1/fill/w_442,h_589,fp_0.51_0.38,q_90,enc_avif,quality_auto/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg", tag: rawTags[0]?.tag || "Moholt Salong" },
    { url: "https://static.wixstatic.com/media/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg/v1/fill/w_442,h_589,fp_0.44_0.53,q_90,enc_avif,quality_auto/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg", tag: rawTags[1]?.tag || "Foilage Balayage" },
    { url: "https://static.wixstatic.com/media/973894_b0dc977af7f4442398681c008281315c~mv2.jpg/v1/fill/w_442,h_589,fp_0.57_0.56,q_90,enc_avif,quality_auto/973894_b0dc977af7f4442398681c008281315c~mv2.jpg", tag: rawTags[2]?.tag || "Solsiden Barbershop" },
    { url: "https://static.wixstatic.com/media/973894_5b010104c11b4317979a8959a6ebf3a8~mv2.jpg/v1/fill/w_442,h_589,fp_0.64_0.49,q_90,enc_avif,quality_auto/973894_5b010104c11b4317979a8959a6ebf3a8~mv2.jpg", tag: rawTags[3]?.tag || "Skjeggtrim & Kniv" },
    { url: "https://static.wixstatic.com/media/973894_14733a7245d04b8b845a45e8415e5584~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/973894_14733a7245d04b8b845a45e8415e5584~mv2.jpg", tag: rawTags[4]?.tag || "Skarpe Linjer" },
    { url: "https://static.wixstatic.com/media/973894_314ea4e82dff4c38b1e91a230562457f~mv2.jpg/v1/fill/w_442,h_589,fp_0.24_0.6,q_90,enc_avif,quality_auto/973894_314ea4e82dff4c38b1e91a230562457f~mv2.jpg", tag: rawTags[5]?.tag || "Farge & Glans" },
    { url: "https://static.wixstatic.com/media/973894_e38de253b652467890683b9212aca318~mv2.jpg/v1/fill/w_442,h_589,q_90,enc_avif,quality_auto/973894_e38de253b652467890683b9212aca318~mv2.jpg", tag: rawTags[6]?.tag || "Herreklipp" },
    { url: "https://static.wixstatic.com/media/973894_cd5924039a46493ca9a4f4d21e5118e4~mv2.jpg/v1/fill/w_442,h_589,fp_0.49_0.44,q_90,enc_avif,quality_auto/973894_cd5924039a46493ca9a4f4d21e5118e4~mv2.jpg", tag: rawTags[7]?.tag || "Styling Finish" },
  ];

  return (
    <section id="gallery" className="py-24 bg-dark-card border-t border-copper/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-display uppercase tracking-widest text-copper font-bold mb-2">
            {String(t("gallery.kicker"))}
          </p>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tight mb-4">
            {String(t("gallery.title"))}
          </h2>
          <p className="text-xs sm:text-sm text-text-light/70 font-body">
            {String(t("gallery.subtitle"))}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.05}>
              <div
                onClick={() => setSelectedImg(item.url)}
                className="relative h-64 sm:h-80 rounded-sm overflow-hidden border border-copper/20 cursor-pointer group shadow-lg"
              >
                <img
                  src={item.url}
                  alt={`${String(t("gallery.alt_prefix"))} ${item.tag}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-bg/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <span className="text-[10px] font-display uppercase tracking-widest text-copper bg-dark-bg/90 px-2 py-1 border border-copper/30 self-start">
                    {item.tag}
                  </span>
                  <span className="text-white font-display text-xs uppercase tracking-widest border border-copper/60 px-3 py-1.5 self-center">
                    {String(t("gallery.enlarge"))}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={selectedImg} alt={String(t("gallery.lightbox_alt"))} className="max-w-full max-h-[85vh] object-contain rounded-sm" />
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 bg-copper text-white px-3 py-1 text-xs font-display uppercase font-bold"
            >
              {String(t("gallery.close"))}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
