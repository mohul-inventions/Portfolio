import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useMousePosition } from './hooks/useMousePosition';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useSoundFX } from './hooks/useSoundFX';
import { useKonamiCode } from './hooks/useKonamiCode';

// Components
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { AmbientGlow } from './components/AmbientGlow';
import { NoiseOverlay } from './components/NoiseOverlay';
import { CommandPalette } from './components/CommandPalette';
import { ResumeDrawer } from './components/ResumeDrawer';
import { HackerOverlay } from './components/HackerOverlay';

// Sections
import { LoadingScreen } from './sections/LoadingScreen';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { TechStackSection } from './sections/TechStackSection';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { AdditionalProjects } from './sections/AdditionalProjects';
import { HackathonsSection } from './sections/HackathonsSection';
import { JourneySection } from './sections/JourneySection';
import { CertificationsSection } from './sections/CertificationsSection';
import { GithubSection } from './sections/GithubSection';
import { CreativeSection } from './sections/CreativeSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'hackathons', 'journey', 'contact'];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState('human'); // 'human' | 'system'
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(false);

  const { mousePosition, isPointerDevice } = useMousePosition();
  const activeSection = useScrollSpy(SECTION_IDS, 140);
  const { soundEnabled, toggleSound, playClick, playOpen, playMode } = useSoundFX();

  // Konami Code Easter Egg (↑ ↑ ↓ ↓ ← → ← → B A)
  const { isHackerMode, deactivate: deactivateHackerMode } = useKonamiCode(() => {
    if (soundEnabled) playMode();
  });

  // Smooth scroll progress bar at top of viewport
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001
  });

  // Keyboard shortcut: Press 's' or 'S' to toggle System / Human mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't toggle if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 's' || e.key === 'S') {
        setMode((prev) => {
          const next = prev === 'human' ? 'system' : 'human';
          if (soundEnabled) playMode();
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [soundEnabled, playMode]);

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f0] font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Ambient Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200 origin-left z-50 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
        style={{ scaleX }}
      />

      {/* Noise Texture Overlay */}
      <NoiseOverlay />

      {/* Mouse Spotlight Amber Glow */}
      <AmbientGlow mousePosition={mousePosition} isPointerDevice={isPointerDevice} />

      {/* Unique Precision Reticle & Aura Cursor (Desktop only) */}
      <CustomCursor mousePosition={mousePosition} isPointerDevice={isPointerDevice} />

      {/* Fast High-Tech Bootloader */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Experience */}
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          {/* Sticky Navigation */}
          <Navbar 
            activeSection={activeSection} 
            mode={mode} 
            setMode={setMode}
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
            soundEnabled={soundEnabled}
            toggleSound={toggleSound}
            playClick={playClick}
          />

          {/* Section Storyline Flow */}
          <main className="flex-1">
            <HeroSection 
              mode={mode} 
              onOpenResume={() => setIsResumeOpen(true)}
              playClick={playClick}
            />
            <AboutSection mode={mode} playClick={playClick} />
            <TechStackSection mode={mode} playClick={playClick} />
            <FeaturedProjects mode={mode} playClick={playClick} />
            <AdditionalProjects playClick={playClick} />
            <HackathonsSection playClick={playClick} />
            <JourneySection playClick={playClick} />
            <CertificationsSection playClick={playClick} />
            <GithubSection playClick={playClick} />
            <CreativeSection playClick={playClick} />
            <ContactSection playClick={playClick} />
          </main>

          {/* Footer */}
          <Footer onOpenResume={() => setIsResumeOpen(true)} playClick={playClick} />
        </div>
      )}

      {/* Command Palette Modal (Cmd+K / Ctrl+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        mode={mode}
        setMode={setMode}
        soundEnabled={soundEnabled}
        toggleSound={toggleSound}
        playClick={playClick}
        playOpen={playOpen}
        onOpenResume={() => setIsResumeOpen(true)}
        onTriggerMatrix={() => setIsMatrixActive(true)}
      />

      {/* Quick Dossier / Resume Slide-over Drawer */}
      <ResumeDrawer
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        playClick={playClick}
      />

      {/* Konami Code & Command Palette Matrix Easter Egg Overlay */}
      <HackerOverlay
        isActive={isHackerMode || isMatrixActive}
        onClose={() => {
          deactivateHackerMode();
          setIsMatrixActive(false);
        }}
        playClick={playClick}
      />
    </div>
  );
}

