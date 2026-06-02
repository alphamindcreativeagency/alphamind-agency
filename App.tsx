import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Services from './views/Services';
import Works from './views/Works';
import Process from './views/Process';
import Contact from './views/Contact';

const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-[#F2F2F2] overflow-x-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-5 flex justify-between items-center backdrop-blur-md bg-black/20">
        <a
          href="#home"
          className="text-[#FF2EB8] font-bold text-sm md:text-xl tracking-tighter"
        >
          ALPHAMIND
        </a>

        <a
          href="#contact"
          className="text-xs uppercase tracking-widest text-[#A8A8A8] hover:text-[#FF2EB8] transition-colors"
        >
          Start Project
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF2EB8]/10 blur-[140px] rounded-full pointer-events-none" />

            <p className="text-[#FF2EB8] text-sm tracking-[0.18em] mb-8 relative">
              Creative Intelligence Hub
            </p>

            <h1 className="relative text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9]">
              Let’s build your next{' '}
              <span className="text-[#FF2EB8]">brand film.</span>
            </h1>

            <p className="relative mt-8 text-[#A8A8A8] text-lg md:text-2xl max-w-3xl mx-auto">
              Creative direction, AI-powered production and cinematic storytelling
              systems for modern brands.
            </p>

            <a
              href="#contact"
              className="inline-flex mt-12 bg-[#FF2EB8] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-wider hover:scale-105 transition-transform"
            >
              Start a Project
            </a>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="max-w-7xl mx-auto px-6 md:px-8 py-20"
        >
          <Services />
        </section>

        {/* WORKS */}
        <section
          id="work"
          className="max-w-7xl mx-auto px-6 md:px-8 py-20"
        >
          <Works />
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="max-w-7xl mx-auto px-6 md:px-8 py-20"
        >
          <Process />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-6 md:px-8 py-20"
        >
          <Contact />
        </section>
      </main>

      <footer className="border-t border-[#2B2B2B] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest text-[#A8A8A8] uppercase">
          <div>
            © {new Date().getFullYear()} ALPHAMIND AGENCY. ALL RIGHTS RESERVED.
          </div>

          <div className="flex gap-8">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>

          <div className="text-[#FF2EB8] normal-case font-bold">
            ALPHAMIND, online.
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <div className="text-[#FF2EB8] text-4xl font-bold tracking-widest">
          ALPHAMIND
        </div>

        <div className="mt-8 w-48 h-1 bg-[#2B2B2B] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#FF2EB8]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    );
  }

  return <AppContent />;
};

export default App;