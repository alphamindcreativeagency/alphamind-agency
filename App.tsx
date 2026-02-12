import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Page } from './types';

// Pages
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Process from './views/Process';
import Manifesto from './views/Manifesto';
import Contact from './views/Contact';

const App: React.FC = () => {

  /* =========================
     MAINTENANCE SWITCH
  ========================== */
  const MAINTENANCE_MODE = true;

  const [secondsLeft, setSecondsLeft] = useState(3600); // 1 saat
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /* Countdown */
  useEffect(() => {
    if (!MAINTENANCE_MODE) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* Loading */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  /* =========================
     MAINTENANCE SCREEN
  ========================== */
  if (MAINTENANCE_MODE) {

    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-8">

        <motion.h1
          animate={{ opacity: [0.4, 1, 0.6, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-6xl md:text-8xl font-bold tracking-widest text-[#FF2EB8]"
          style={{ textShadow: "0 0 12px #FF2EB8, 0 0 32px #FF2EB8" }}
        >
          ALPHAMIND
        </motion.h1>

        <div className="mt-12 text-3xl font-mono text-[#F2F2F2]">
          {String(hours).padStart(2, "0")}:
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </div>

        <div className="mt-6 text-[#A8A8A8] text-xs tracking-widest uppercase">
          Updating Creative Intelligence Core...
        </div>

      </div>
    );
  }

  /* =========================
     NORMAL SITE
  ========================== */

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.About: return <About />;
      case Page.Services: return <Services />;
      case Page.Process: return <Process />;
      case Page.Manifesto: return <Manifesto />;
      case Page.Contact: return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[100]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#FF2EB8] text-4xl font-bold tracking-widest"
        >
          ALPHAMIND
        </motion.div>

        <motion.div 
          className="mt-8 w-48 h-1 bg-[#2B2B2B] overflow-hidden rounded-full"
        >
          <motion.div 
            className="h-full bg-[#FF2EB8]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="mt-4 text-[#A8A8A8] text-xs tracking-widest uppercase">
          INITIALIZING INTELLIGENCE LAB...
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-[#F2F2F2]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm bg-black/20">
        <motion.div 
          className="text-[#FF2EB8] font-bold text-xl tracking-tighter cursor-pointer"
          onClick={() => setCurrentPage(Page.Home)}
          whileHover={{ scale: 1.05 }}
        >
          ALPHAMIND.
        </motion.div>
      </nav>

      <main className="relative z-10 pt-24 pb-12 px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-24 py-12 px-8 border-t border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[#A8A8A8] text-xs tracking-widest uppercase">

          <div>
            &copy; {new Date().getFullYear()} ALPHAMIND AGENCY. ALL RIGHTS RESERVED.
          </div>

          <div className="flex space-x-8">
            <a href="https://www.instagram.com/alphamindcreativeagency" target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
            <a href="https://www.linkedin.com/company/alphamind-creative-agency/" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
          </div>

          <div className="text-[#FF2EB8] font-bold normal-case">
            ALPHAMIND, online.
          </div>

        </div>
      </footer>

    </div>
  );
};

export default App;