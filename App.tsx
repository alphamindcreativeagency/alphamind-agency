import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';

// Pages
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Works from './views/Works';
import Process from './views/Process';
import Manifesto from './views/Manifesto';
import Contact from './views/Contact';

const navItems = [
  { label: 'HOME', path: '/' },
  { label: 'HAKKIMIZDA', path: '/about' },
  { label: 'HİZMETLER', path: '/services' },
  { label: 'WORK', path: '/work' },
  { label: 'PROCESS', path: '/process' },
  { label: 'MANIFESTO', path: '/manifesto' },
  { label: 'CONTACT', path: '/contact' },
];

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <main className="relative z-10 pt-24 pb-12 px-8 max-w-7xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Works />} />
            <Route path="/process" element={<Process />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

const AppContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-[#F2F2F2] selection:bg-[#FF2EB8] selection:text-black">

      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-sm bg-black/20">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            className="text-[#FF2EB8] font-bold text-xl tracking-tighter cursor-pointer neon-flicker"
          >
            ALPHAMIND
          </Link>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest transition-all duration-300 hover:text-[#FF2EB8] ${
                  isActive
                    ? 'text-[#FF2EB8] border-b border-[#FF2EB8]'
                    : 'text-[#A8A8A8]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-[#F2F2F2]"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-[60] p-12 flex flex-col justify-center"
          >
            <button
              className="absolute top-8 right-8 text-[#FF2EB8]"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="space-y-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-4xl font-bold hover:text-[#FF2EB8] transition-colors uppercase italic"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatedRoutes />

      <footer className="mt-24 py-12 px-8 border-t border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-[#A8A8A8] text-xs tracking-widest uppercase">
          <div>
            &copy; {new Date().getFullYear()} ALPHAMIND AGENCY. ALL RIGHTS RESERVED.
          </div>

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

          <div className="text-[#FF2EB8] font-bold normal-case">
            ALPHAMIND, online.
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>

        <div className="mt-4 text-[#A8A8A8] text-xs tracking-widest uppercase">
          INITIALIZING INTELLIGENCE LAB...
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;