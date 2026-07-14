import React from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    title: "Exotic - Yeri Ayrı Yaz Filmi",
    category: "BEVERAGE / SUMMER BRAND FILM",
    description:
      "A vibrant AI-generated summer film for Exotic, built around joy, freshness, colorful seasonal moments and a playful beverage brand atmosphere.",
    youtubeId: "YNqIE_Nl-S0",
  },
  {
    title: "Palmali Holding - Corporate Image Film",
    category: "CORPORATE / MARITIME IMAGE FILM",
    description:
      "A cinematic corporate image film for Palmali Holding, built around maritime strength, continuity, global routes and operational confidence.",
    youtubeId: "jtyJbFtvmR0",
  },
  {
    title: "Megagen TR - NewBlue Event Film",
    category: "HEALTHCARE / EVENT FILM",
    description:
      "An AI-crafted event film for Megagen Turkey, combining medical technology, brand trust and cinematic event storytelling.",
    youtubeId: "w7olvXDgkhs",
  },
  {
    title: "Daikin - Kombi Konsept Reklam Filmi",
    category: "HOME COMFORT / CONCEPT FILM",
    description:
      "A fully AI-generated concept film built around winter atmosphere, home comfort, warmth and trust through a cinematic brand storytelling language.",
    youtubeId: "vZfyvYca3F0",
  },
  {
    title: "Arzum Okka - Babalar Günü Reklam Filmi",
    category: "EMOTIONAL BRAND FILM",
    description:
      "A fully AI-generated Father's Day concept film shaped around family bonds, coffee rituals, warm home atmosphere and emotional brand storytelling.",
    youtubeId: "BuerBd-CdBY",
  },
  {
    title: "Exotic - Biz Sıkmayız Concept Film",
    category: "BEVERAGE / PRODUCT STORYTELLING",
    description:
      "A fresh and energetic AI-powered commercial concept for Exotic, reimagining natural fruit moments through a cinematic visual language.",
    youtubeId: "97ciVG_C0Q8",
  },
  {
    title: "Shiseido - Concept Film",
    category: "BEAUTY / LUXURY PRODUCT FILM",
    description:
      "A fully AI-generated luxury beauty concept film, combining premium product aesthetics, influencer culture and cinematic visual storytelling.",
    youtubeId: "jLTY-a9NV-o",
  },
  {
    title: "Zeymarine - We Move The World Ahead",
    category: "CORPORATE / MARITIME FILM",
    description:
      "A cinematic corporate film that brings together maritime logistics, global transportation and the visual language of movement, power and operations.",
    youtubeId: "PY2W41at2zo",
  },
  {
    title: "Exotic - Tennis Concept Film",
    category: "BEVERAGE / SPORT CAMPAIGN",
    description:
      "A high-energy AI-powered commercial film for Exotic, blending freshness, summer rhythm and the dynamic world of tennis.",
    youtubeId: "JVnNJ10LFrc",
  },
  {
    title: "OLAPLEX No.3 - AI Beauty Concept Film",
    category: "BEAUTY / AI PRODUCT FILM",
    description:
      "An AI-powered beauty concept film for Olaplex No.3 Hair Perfector, shaped with natural skin detail, cinematic close-ups and modern beauty aesthetics.",
    youtubeId: "aS7N61x8olk",
  },
  {
    title: "Muratbey Misto - Character Concept Film",
    category: "AI ANIMATION / CHARACTER FILM",
    description:
      "A Pixar-inspired AI animation concept film for Muratbey Misto, featuring the Misto character and two children in a playful story world.",
    youtubeId: "pkE7HfyNX_k",
  },
];

const Works: React.FC = () => {
  return (
    <section className="min-h-screen text-white">
      <div className="mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[40px] border border-[#2B2B2B] bg-[#0A0A0A] p-10 md:p-20"
        >
          <div className="absolute top-[-180px] left-[-180px] w-[520px] h-[520px] bg-[#FF2EB8]/20 blur-[180px]" />
          <div className="absolute bottom-[-180px] right-[-180px] w-[520px] h-[520px] bg-[#FF2EB8]/10 blur-[180px]" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-block px-4 py-2 border border-[#FF2EB8]/30 rounded-full text-[#FF2EB8] text-xs tracking-[0.3em] mb-8"
            >
              CREATIVE INTELLIGENCE HUB
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]"
            >
              Selected <span className="text-[#FF2EB8]">Works</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-3xl text-[#A8A8A8] text-lg md:text-xl leading-relaxed"
            >
              Films, campaigns and AI-powered brand stories crafted for modern brands.
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {works.map((work, index) => (
          <motion.div
            key={work.youtubeId}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.7 }}
            className="group hover:-translate-y-3 transition-all duration-700"
          >
            <div className="relative aspect-video overflow-hidden rounded-[32px] border border-[#2B2B2B] bg-[#111] shadow-2xl shadow-[#FF2EB8]/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />

              <iframe
                className="w-full h-full group-hover:scale-[1.03] transition-transform duration-700"
                src={`https://www.youtube.com/embed/${work.youtubeId}?rel=0`}
                title={work.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="mt-7">
              <div className="text-[#FF2EB8] text-xs tracking-[0.35em] mb-4 uppercase">
                {work.category}
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-[#FF2EB8] transition-colors duration-500">
                {work.title}
              </h2>

              <p className="text-[#A8A8A8] leading-relaxed text-lg">
                {work.description}
              </p>

              <a
                href={`https://www.youtube.com/watch?v=${work.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 text-sm tracking-[0.25em] text-white/70 group-hover:text-[#FF2EB8] hover:text-[#FF2EB8] transition-colors duration-500"
              >
                WATCH FILM
                <span className="text-xl">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;