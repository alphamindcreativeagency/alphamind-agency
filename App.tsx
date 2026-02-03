
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Zap, Cpu, Layers, Radio, Activity, Code } from 'lucide-react';
import { Page } from './types';

// Pages
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Process from './views/Process';
import Manifesto from './views/Manifesto';
import Contact from './views/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
          className="text-[#FF2EB8] text-4xl font-bold tracking-widest neon-text-pink"
        >
          ALPHAMIND
        </motion.div>
        <motion.div 
          className="mt-8 w-48 h-1 bg-[#2B2B2B] overflow-hidden rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div 
            className="h-full bg-[#FF2EB8]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
        <div className="mt-4 text-[#A8A8A8] text-xs tracking-widest uppercase">INITIALIZING INTELLIGENCE LAB...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-[#F2F2F2] selection:bg-[#FF2EB8] selection:text-black">
      {/* Background Grid & Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: `radial-gradient(#FF2EB8 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm bg-black/20">
        <motion.div 
          className="text-[#FF2EB8] font-bold text-xl tracking-tighter cursor-pointer neon-flicker"
          onClick={() => setCurrentPage(Page.Home)}
          whileHover={{ scale: 1.05 }}
        >
          ALPHAMIND.
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {Object.values(Page).filter(p => p !== Page.Projects && p !== Page.Clients).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page as Page)}
              className={`text-xs uppercase tracking-widest transition-all duration-300 hover:text-[#FF2EB8] ${currentPage === page ? 'text-[#FF2EB8] border-b border-[#FF2EB8]' : 'text-[#A8A8A8]'}`}
            >
              {page}
            </button>
          ))}
        </div>

        <button 
          className="md:hidden text-[#F2F2F2]"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 bg-black z-[60] p-12 flex flex-col justify-center items-start"
          >
            <button 
              className="absolute top-8 right-8 text-[#FF2EB8]"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="space-y-8">
              {Object.values(Page).map((page, idx) => (
                <motion.button
                  key={page}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => {
                    setCurrentPage(page as Page);
                    setIsMenuOpen(false);
                  }}
                  className="block text-4xl font-bold hover:text-[#FF2EB8] transition-colors uppercase italic"
                >
                  {page}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="relative z-10 pt-24 pb-12 px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sticky Lab Status Overlay */}
      <div className="fixed bottom-8 left-8 z-50 hidden lg:block text-[#A8A8A8] text-[10px] tracking-[0.2em] font-mono opacity-50">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#FF2EB8] animate-pulse shadow-[0_0_5px_#FF2EB8]" />
          <span>STATUS: ONLINE</span>
        </div>
        <div>HUB_LOC: ENCRYPTED</div>
        <div>TIME: {new Date().toLocaleTimeString()}</div>
      </div>
      
      <footer className="mt-24 py-12 px-8 border-t border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[#A8A8A8] text-xs tracking-widest uppercase">
          <div>&copy; {new Date().getFullYear()} ALPHAMIND AGENCY. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-8">
            <a 
              href="https://www.instagram.com/alphamindcreativeagency" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#FF2EB8] transition-colors"
            >
              INSTAGRAM
            </a>
            <a 
              href="https://www.linkedin.com/company/alphamind-creative-agency/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#FF2EB8] transition-colors"
            >
              LINKEDIN
            </a>
          </div>
          <div className="text-[#FF2EB8] font-bold">ALPHAMIND ONLINE.</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
