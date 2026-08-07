"use client";

import { useLocale } from "@/lib/i18n";

export default function GallerySection() {
  const { t } = useLocale();

  const galleryImages = [
    {
      url: "https://static.wixstatic.com/media/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg/v1/fill/w_576,h_720,al_c,lg_1,q_85,enc_avif,quality_auto/b0aa65_e52759c6217c4d20943414c8a111e51a~mv2.jpg",
      title: "Оформлення бороди та фейд",
      location: "Moholt Studio",
    },
    {
      url: "https://static.wixstatic.com/media/973894_4d8cbed4ea744a8087f047896d4aabc3~mv2.webp/v1/crop/x_0,y_67,w_500,h_492,q_80,enc_auto/973894_4d8cbed4ea744a8087f047896d4aabc3~mv2.webp",
      title: "Складне фарбування Foilage",
      location: "Solsiden Studio",
    },
    {
      url: "https://static.wixstatic.com/media/973894_d0a9efdba4e7459989f9612b17e9c28d~mv2.png/v1/crop/x_0,y_0,w_709,h_450,q_85,enc_auto/973894_d0a9efdba4e7459989f9612b17e9c28d~mv2.png",
      title: "Чоловічий зал Solsiden",
      location: "TMV-kaia 23",
    },
    {
      url: "https://static.wixstatic.com/media/973894_cbcf7ada9f8c487493d3b3941196523e~mv2.jpg/v1/crop/x_0,y_0,w_596,h_447,q_80,enc_auto/973894_cbcf7ada9f8c487493d3b3941196523e~mv2.jpg",
      title: "Класичне гоління бритвою",
      location: "Moholt Studio",
    },
    {
      url: "https://static.wixstatic.com/media/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg/v1/fill/w_442,h_589,fp_0.51_0.38,q_90,enc_avif,quality_auto/973894_4b7c1535cf934543b09fe90984f0ee43~mv2.jpg",
      title: "Балаяж та укладка",
      location: "Solsiden Studio",
    },
    {
      url: "https://static.wixstatic.com/media/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg/v1/fill/w_442,h_589,fp_0.44_0.53,q_90,enc_avif,quality_auto/973894_3dd7396a08554a67a56a59c2775336ca~mv2.jpg",
      title: "Текстурована жіноча стрижка",
      location: "Moholt Studio",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[hsl(25_20%_8%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold">
            {t("gallery.kicker") as string}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-2 mb-4 leading-none">
            {t("gallery.title") as string}
          </h2>
          <p className="text-base text-white/70">
            {t("gallery.subtitle") as string}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/10"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("img-fallback");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25_20%_7%)] via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] font-extrabold text-[hsl(28_85%_52%)] uppercase tracking-widest block mb-1">
                  {item.location}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}