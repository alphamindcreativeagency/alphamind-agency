import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Work = {
  title: string;
  youtubeId: string;
  thumbnail?: string;
};

const works: Work[] = [
  {
    title: "Exotic - Yeri Ayrı Yaz Filmi",
    youtubeId: "YNqIE_Nl-S0",
  },
  {
    title: "Palmali Holding - Corporate Image Film",
    youtubeId: "jtyJbFtvmR0",
  },
  {
    title: "Megagen TR - NewBlue Event Film",
    youtubeId: "w7olvXDgkhs",
  },
  {
    title: "Daikin - Kombi Konsept Reklam Filmi",
    youtubeId: "vZfyvYca3F0",
  },
  {
    title: "Arzum Okka - Babalar Günü Reklam Filmi",
    youtubeId: "BuerBd-CdBY",
  },
  {
    title: "Exotic - Biz Sıkmayız Concept Film",
    youtubeId: "97ciVG_C0Q8",
  },
  {
    title: "Shiseido - Concept Film",
    youtubeId: "jLTY-a9NV-o",
  },
  {
    title: "Zeymarine - We Move The World Ahead",
    youtubeId: "PY2W41at2zo",
    thumbnail: "https://img.youtube.com/vi/PY2W41at2zo/0.jpg",
  },
  {
    title: "Exotic - Tennis Concept Film",
    youtubeId: "JVnNJ10LFrc",
  },
  {
    title: "OLAPLEX No.3 - AI Beauty Concept Film",
    youtubeId: "aS7N61x8olk",
  },
  {
    title: "Muratbey Misto - Character Concept Film",
    youtubeId: "pkE7HfyNX_k",
    thumbnail: "https://img.youtube.com/vi/pkE7HfyNX_k/0.jpg",
  },
];

const Showroom: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Alphamind Showroom';

    let robotsMeta = document.querySelector('meta[name="robots"]');

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }

    robotsMeta.setAttribute('content', 'noindex, nofollow');
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <section className="relative px-5 md:px-10 lg:px-14 py-8 md:py-12">
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute top-[-220px] left-[-220px] w-[520px] h-[520px] bg-[#FF2EB8]/10 blur-[180px]" />
          <div className="absolute bottom-[-260px] right-[-260px] w-[620px] h-[620px] bg-[#FF2EB8]/10 blur-[200px]" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10 md:mb-14 flex items-center"
          >
            <div className="text-3xl md:text-5xl font-black tracking-tighter text-[#FF2EB8]">
  ALPHAMIND
</div>

            <div className="hidden md:block h-px flex-1 ml-8 bg-white/10" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
            {works.map((work, index) => {
              const thumbnail =
                work.thumbnail ||
                `https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg`;

              return (
                <motion.button
                  key={work.youtubeId}
                  type="button"
                  onClick={() => setActiveVideo(work.youtubeId)}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.045, duration: 0.55 }}
                  className="group relative aspect-video overflow-hidden rounded-[24px] md:rounded-[30px] border border-white/10 bg-[#101010] text-left shadow-2xl shadow-black/40 outline-none"
                >
                  <img
                    src={thumbnail}
                    alt={work.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full border border-white/20 bg-black/45 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF2EB8]/60 group-hover:bg-[#FF2EB8]/20">
                      <span className="ml-1 text-2xl md:text-3xl">▶</span>
                    </div>
                  </div>

                  <div className="absolute left-5 right-5 bottom-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="text-lg md:text-xl font-semibold leading-tight">
                      {work.title}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 md:px-10 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute -top-14 right-0 text-white/60 hover:text-white transition-colors text-sm tracking-[0.25em]"
              >
                CLOSE
              </button>

              <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl shadow-[#FF2EB8]/20">
              <div className="aspect-video overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-2xl shadow-[#FF2EB8]/20">
  <iframe
    className="w-full h-full"
    src={`https://www.youtube-nocookie.com/embed/${activeVideo}?rel=0&modestbranding=1&playsinline=1`}
    title="Alphamind Showroom Video"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>

<a
  href={`https://www.youtube.com/watch?v=${activeVideo}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-flex text-xs tracking-[0.25em] text-white/60 hover:text-[#FF2EB8] transition-colors"
>
  OPEN ON YOUTUBE →
</a>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Showroom;