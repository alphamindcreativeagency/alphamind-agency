
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: "01", name: "DECODE", desc: "Karmaşanın içindeki anahtarı buluyoruz. Veriyi ve sezgiyi çözümlüyoruz." },
  { step: "02", name: "DESIGN", desc: "Stratejik bir taslak oluşturuyor, ilk sinyalleri yakıyoruz." },
  { step: "03", name: "DISTILL", desc: "Fikri en saf, en vurucu haline getiriyoruz. Fazlalıklardan arınıyoruz." },
  { step: "04", name: "DEVELOP", desc: "Üretim ve laboratuvar süreci. Fikirler somut birer güce dönüşüyor." },
  { step: "05", name: "DELIVER & SCALE", desc: "Çıktı teslimi ve etkinin büyümesi. Alphamind imzası yayılıyor." }
];

const Process: React.FC = () => {
  return (
    <div className="space-y-24">
      <section>
        <span className="text-[#FF2EB8] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">THE ALPHAMIND METHOD</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">WORKFLOW ENGINEERING</h1>
      </section>

      <div className="border-t border-[#2B2B2B]/50">
        {steps.map((item, idx) => (
          <motion.div 
            key={item.step}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group block border-b border-[#2B2B2B]/50 transition-colors duration-300"
          >
            {/* ROW CONTAINER: items-center ensures true vertical centering of columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 py-12 items-center min-h-[140px]">
              {/* LEFT COLUMN: Numbers + Titles aligned horizontally and vertically */}
              <div className="flex items-center space-x-8 md:space-x-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#2B2B2B] group-hover:border-[#FF2EB8] group-hover:shadow-[0_0_12px_rgba(255,46,184,0.3)] flex items-center justify-center text-[#A8A8A8] group-hover:text-[#FF2EB8] font-mono text-[10px] transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold uppercase italic tracking-tighter text-[#F2F2F2] group-hover:text-[#FF2EB8] group-hover:drop-shadow-[0_0_8px_rgba(255,46,184,0.4)] transition-all duration-300 ease-out leading-none py-2">
                  {item.name}
                </h3>
              </div>

              {/* RIGHT COLUMN: Descriptions centered relative to the title's vertical axis */}
              <div className="mt-6 md:mt-0 flex items-center">
                <p className="text-[#A8A8A8] text-lg font-light leading-relaxed max-w-md transition-colors duration-300 group-hover:text-[#D8D8D8]">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Process;
