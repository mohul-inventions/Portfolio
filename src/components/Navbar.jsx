import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Search, Volume2, VolumeX, FileText } from 'lucide-react';
import { Github } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SystemModeToggle } from './SystemModeToggle';
import { MagneticButton } from './MagneticButton';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#journey' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ 
  activeSection, 
  mode, 
  setMode, 
  onOpenCommandPalette, 
  onOpenResume, 
  soundEnabled, 
  toggleSound,
  playClick 
}) {
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
    if (playClick) playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center ${
          scrolled ? 'pt-2.5 sm:pt-3.5 px-3 sm:px-6' : 'pt-5 sm:pt-6 px-4 sm:px-8'
        }`}
      >
        <div
          className={`w-full max-w-7xl transition-all duration-300 ${
            scrolled
              ? 'px-4 sm:px-6 py-2.5 rounded-2xl bg-[#09090b]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.6)] scale-[0.99]'
              : 'px-2 sm:px-4 py-1.5 bg-transparent border border-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-1.5 focus:outline-none"
            >
              <span
                className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
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

            {/* Right Side: Command Palette, Sound FX, System Mode, Resume & GitHub */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Command Palette Trigger */}
              <button
                onClick={() => {
                  if (playClick) playClick();
                  onOpenCommandPalette();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 rounded-full transition-all duration-200 cursor-pointer group"
                title="Open Command Palette (Cmd+K / Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-[10px] text-zinc-400 font-mono">
                  ⌘K
                </kbd>
              </button>

              {/* Sound FX Toggle */}
              <button
                onClick={() => {
                  toggleSound();
                  if (playClick) playClick();
                }}
                className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
                title={soundEnabled ? "Mute UI Sound FX" : "Enable Subtle UI Sound FX"}
                aria-label="Toggle UI Audio"
              >
                {soundEnabled ? (
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                )}
              </button>

              {/* System Diagnostics Mode Toggle */}
              <SystemModeToggle mode={mode} setMode={setMode} />

              {/* Quick Dossier / Resume Trigger */}
              <MagneticButton strength={0.2}>
                <button
                  onClick={() => {
                    if (playClick) playClick();
                    onOpenResume();
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 hover:text-black bg-amber-400/10 hover:bg-amber-400 border border-amber-400/30 rounded-full transition-all duration-200 cursor-pointer font-semibold"
                  title="View Engineering Dossier / Resume"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Dossier</span>
                </button>
              </MagneticButton>

              {/* GitHub Link */}
              <MagneticButton strength={0.2}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 rounded-full transition-all duration-200 group"
                >
                  <Github className="w-3.5 h-3.5 text-amber-400" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </MagneticButton>
            </div>

            {/* Mobile Actions: Search + System Toggle + Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => {
                  if (playClick) playClick();
                  onOpenCommandPalette();
                }}
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900/90 border border-zinc-800"
                aria-label="Open Command Search"
              >
                <Search className="w-4 h-4 text-amber-400" />
              </button>

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
      </motion.header>

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

              {/* Mobile Quick Dossier Trigger */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-mono uppercase tracking-wider text-amber-400 hover:bg-zinc-900/80 rounded-lg transition-colors text-left"
              >
                <FileText className="w-4 h-4" />
                <span>View Quick Dossier / Resume</span>
              </button>
              
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

