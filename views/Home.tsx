
import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../types';
import { ArrowRight, Zap, Cpu, Layers, Activity, Code } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="inline-block px-3 py-1 bg-[#2B2B2B] text-[#FF2EB8] text-[10px] tracking-[0.3em] font-bold uppercase mb-8 border border-[#FF2EB8]/20">
            CREATIVE INTELLIGENCE HUB
          </span>
          <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tighter mb-8 max-w-5xl text-[#F2F2F2]">
            Where the Chaos Ends<br />
            <span className="neon-premium-pulse">Productivity</span> Begins.
          </h1>
          <p className="text-xl md:text-2xl text-[#D8D8D8] font-light max-w-4xl mb-12 leading-[1.6]">
            Alphamind markanızı anlatmanızın en verimli yoludur. Güçlü bir marka stratejisinin,
            hikayesi olan tasarımların, gündemi takip eden zengin içeriklerin ve etkili yapay zeka
            kullanımının buluştuğu bir laboratuvardır.
          </p>
          <button 
            onClick={() => onNavigate(Page.Contact)}
            className="group relative inline-flex items-center px-10 py-5 bg-[#FF2EB8] text-black font-bold uppercase tracking-widest text-sm rounded-sm overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,46,184,0.6)]"
          >
            <span className="relative z-10 flex items-center">
              ENTER THE LAB <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
        </motion.div>
      </section>

      {/* What We Are Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-square bg-[#1A1A1A] rounded-sm overflow-hidden border border-[#2B2B2B] group">
            <img 
              src="https://picsum.photos/seed/cyber1/1000/1000" 
              alt="Cyber Lab" 
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 text-[#FF2EB8] text-5xl font-bold opacity-20">01</div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#FF2EB8]/30 hidden lg:block" />
        </div>
        
        <div className="space-y-8">
          <h2 className="text-4xl font-bold uppercase tracking-tight text-[#F2F2F2]">What We Are</h2>
          <p className="text-lg text-[#D8D8D8] leading-relaxed">
            Yaratıcılığın sezgisel tarafını, verinin keskin noktasını ve yapay zekânın sınırsız üretim gücünü tek bir merkezde topluyoruz. 
            Burada fikirler yalnızca üretilmez—dönüştürülür, keskinleştirilir ve etki yaratmak üzere tasarlanır.
          </p>
          <blockquote className="border-l-2 border-[#FF2EB8] pl-8 py-2">
             <p className="text-xl italic font-light text-[#A8A8A8]">"Yaratıcılık kaosa teslim olursa, düzeni biz kurarız."</p>
          </blockquote>
        </div>
      </section>

      {/* Capabilities / Cards */}
      <section className="space-y-16">
        <h2 className="text-sm tracking-[0.4em] uppercase font-bold text-[#A8A8A8]">CAPABILITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "CREATIVE DIRECTION", icon: <Layers size={24} /> },
            { title: "STRATEGY", icon: <Zap size={24} /> },
            { title: "AI-DRIVEN CONTENT LAB", icon: <Cpu size={24} /> },
            { title: "3D & MOTION", icon: <Activity size={24} /> },
            { title: "CINEMATIC STORYTELLING", icon: <ArrowRight size={24} /> },
            { title: "BRANDING ENGINEERING", icon: <Code size={24} /> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, borderColor: '#FF2EB8' }}
              className="p-10 bg-[#0A0A0A] border border-[#2B2B2B] rounded-sm transition-all duration-300"
            >
              <div className="text-[#FF2EB8] mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{item.title}</h3>
              <p className="text-[#A8A8A8] text-sm leading-relaxed">ENGINEERING PREMIUM EXPERIENCES THROUGH INTELLIGENCE AND AESTHETIC PRECISION.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
