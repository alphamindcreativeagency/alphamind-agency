
import React from 'react';
import { motion } from 'framer-motion';

const Manifesto: React.FC = () => {
  const words = "Yaratıcılık kaosa teslim olduğunda, düzeni biz kurarız. Gürültünün ortasında tek bir ışık yanar: ALPHAMIND. Bu yalnızca bir vizyon değil — yaratıcı devrimin yükselen ilk bayrağıdır. Biz tasarlamayız. Dönüştürürüz. Sorgularız. Cesaret ederiz. Yeni çağ karanlığın içinden başlar ve biz o karanlığı neonla yararız.".split(" ");

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl"
      >
        <span className="text-[#FF2EB8] text-xs font-bold uppercase tracking-[0.4em] mb-12 block">THE CREATIVE REBELLION</span>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`text-3xl md:text-5xl font-bold uppercase tracking-tighter ${word === 'ALPHAMIND' ? 'text-[#FF2EB8] neon-text-pink' : 'text-[#F2F2F2]'}`}
            >
              {word}
            </motion.span>
          ))}
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
