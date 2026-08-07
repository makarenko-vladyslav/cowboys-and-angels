"use client";

export default function VideoShowcase() {
  return (
    <section className="py-20 bg-[hsl(25_20%_7%)] text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-[hsl(28_85%_52%)] font-bold block mb-2">
              Атмосфера салонів
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-4 leading-none">
              РИТУАЛИ, ДЕТАЛІ ТА СТИЛЬ У КОЖНОМУ РУСІ
            </h2>
            <p className="text-sm text-white/75 leading-relaxed mb-6">
              Від гарячого розпарювального рушника перед голінням до мікроскопічного вивірення фольги під час Foilage. Пориньте у процес створення вашого нового образу.
            </p>

            <div className="space-y-3 text-xs font-bold text-[hsl(28_85%_52%)] uppercase tracking-wider border-t border-white/10 pt-4">
              <div>Салонна акустика та затишок</div>
              <div>Безкоштовна свіжообсмажена еспресо-кава</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <video
                controls
                playsInline
                poster="https://images.pexels.com/videos/9738001/pexels-photo-9738001.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
                className="w-full h-full object-cover"
              >
                <source
                  src="https://videos.pexels.com/video-files/9738001/9738001-hd_1280_720_24fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}