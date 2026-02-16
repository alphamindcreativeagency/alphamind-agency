import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { id: "01", title: "CREATIVE DIRECTION", desc: "UNIFYING BRAND IDEA AND VOICE" },
  { id: "02", title: "STRATEGY", desc: "DATA-DRIVEN, RESULTS-FOCUSED COMMUNICATION" },
  { id: "03", title: "BRAND ENGINEERING", desc: "BUILDING SUSTAINABLE BRAND SYSTEMS" },
  { id: "04", title: "AI-DRIVEN CONTENT LAB", desc: "SCALABLE AI-POWERED CONTENT PRODUCTION" },
  { id: "05", title: "INNOVATIVE DESIGN WORLD", desc: "CONTEMPORARY DESIGN THAT DIFFERENTIATES" },
  { id: "06", title: "CINEMATIC STORYTELLING", desc: "EMOTIONAL, VISUAL, CINEMATIC NARRATIVES" },
  { id: "07", title: "DIGITAL CAMPAIGNS & SOCIAL MEDIA CRAFTING", desc: "STRATEGIC DIGITAL VISIBILITY AND ENGAGEMENT" },
  { id: "08", title: "PRINT & BESPOKE DESIGN WORKS", desc: "PREMIUM PRINTED BRAND EXPERIENCES" }
];

const Services: React.FC = () => {
  return (
    <div className="space-y-24">
      <section className="max-w-2xl">
        <span className="text-[#FF2EB8] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
          SUITE
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          CREATIVE ENGINEERING SUITE
        </h1>
      </section>

      <div className="grid grid-cols-1 gap-px bg-[#2B2B2B] border border-[#2B2B2B]">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[100px_1fr_300px] items-center p-12 bg-black hover:bg-[#0A0A0A] transition-all cursor-crosshair"
          >
            <div className="text-[#A8A8A8] font-mono text-sm group-hover:text-[#FF2EB8] transition-colors">
              {service.id}
            </div>

            <div className="text-3xl font-bold uppercase tracking-tight py-4 md:py-0 group-hover:translate-x-4 transition-transform">
              {service.title}
            </div>

            <div className="text-[#A8A8A8] text-xs uppercase tracking-widest text-right">
              {service.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
