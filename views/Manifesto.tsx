import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  const text =
    "YARATICILIK KAOSA TESLİM OLDUĞUNDA, DÜZENİ BİZ KURARIZ. GÜRÜLTÜNÜN ORTASINDA TEK BİR IŞIK YANAR: ALPHAMIND. BU YALNIZCA BİR VİZYON DEĞİL — YARATICI DEVRİMİN YÜKSELEN İLK BAYRAĞIDIR. BİZ TASARLAMAYIZ. DÖNÜŞTÜRÜRÜZ. SORGULARIZ. CESARET EDERİZ. YENİ ÇAĞ KARANLIĞIN İÇİNDEN BAŞLAR VE BİZ O KARANLIĞI YARATICILIĞIN IŞIĞIYLA YARARIZ.";

  const words = text.split(" ");

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      
      {/* Blink Animation */}
      <style>
        {`
          @keyframes alphaBlink {
            0%, 100% {
              opacity: 1;
              text-shadow: 0 0 12px rgba(255, 46, 184, 0.8);
            }
            50% {
              opacity: 0.35;
              text-shadow: 0 0 4px rgba(255, 46, 184, 0.3);
            }
          }

          .blink-alpha {
            animation: alphaBlink 1.6s ease-in-out infinite;
          }
        `}
      </style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl"
      >
        <span className="text-[#FF2EB8] text-xs font-bold uppercase tracking-[0.4em] mb-12 block">
          THE CREATIVE REBELLION
        </span>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
          {words.map((word, i) => {
            const cleanWord = word.replace(/[.:—]/g, '');

            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className={`text-3xl md:text-5xl font-bold uppercase tracking-tighter ${
                  cleanWord === 'ALPHAMIND'
                    ? 'text-[#FF2EB8] blink-alpha'
                    : 'text-[#F2F2F2]'
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-20 pt-12 border-t border-[#2B2B2B] text-[#FF2EB8] font-mono text-sm tracking-[0.5em]"
        >
          ALPHAMIND ONLINE.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Manifesto;