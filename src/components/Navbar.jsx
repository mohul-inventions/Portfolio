import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SystemModeToggle } from './SystemModeToggle';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#journey' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ activeSection, mode, setMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-1.5 focus:outline-none"
            >
              <span
                className="text-xl sm:text-2xl font-black tracking-tighter text-white group-hover:text-amber-400 transition-colors"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                MOHUL
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 p-1 bg-zinc-950/60 border border-zinc-800/80 rounded-full backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  (item.href === '#home' && activeSection === 'home') ||
                  (item.href === '#about' && activeSection === 'about') ||
                  (item.href === '#projects' && activeSection === 'projects') ||
                  (item.href === '#journey' && activeSection === 'journey') ||
                  (item.href === '#hackathons' && activeSection === 'hackathons') ||
                  (item.href === '#skills' && activeSection === 'skills') ||
                  (item.href === '#contact' && activeSection === 'contact');

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-200 rounded-full ${
                      isActive ? 'text-black font-semibold' : 'text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-amber-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Side: System Mode Toggle & GitHub */}
            <div className="hidden sm:flex items-center gap-3">
              <SystemModeToggle mode={mode} setMode={setMode} />

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 rounded-full transition-all duration-200 group"
              >
                <Github className="w-3.5 h-3.5 text-amber-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Actions: System Toggle + Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <SystemModeToggle mode={mode} setMode={setMode} />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900/90 border border-zinc-800"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-30 p-4 bg-[#09090b]/95 backdrop-blur-2xl border-b border-zinc-800 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 pt-2 pb-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2.5 text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/80 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-3 mt-2 border-t border-zinc-800 flex items-center justify-between px-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white"
                >
                  <Github className="w-4 h-4 text-amber-400" />
                  <span>GitHub Profile ↗</span>
                </a>
                <span className="text-[10px] font-mono text-amber-400/80">
                  {PERSONAL_INFO.education.year}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
