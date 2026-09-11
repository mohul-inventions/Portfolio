import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useMousePosition } from './hooks/useMousePosition';
import { useScrollSpy } from './hooks/useScrollSpy';

// Components
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { AmbientGlow } from './components/AmbientGlow';
import { NoiseOverlay } from './components/NoiseOverlay';

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

  const { mousePosition, isPointerDevice } = useMousePosition();
  const activeSection = useScrollSpy(SECTION_IDS, 140);

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
        setMode((prev) => (prev === 'human' ? 'system' : 'human'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
          <Navbar activeSection={activeSection} mode={mode} setMode={setMode} />

          {/* Section Storyline Flow */}
          <main className="flex-1">
            <HeroSection mode={mode} />
            <AboutSection mode={mode} />
            <TechStackSection mode={mode} />
            <FeaturedProjects mode={mode} />
            <AdditionalProjects />
            <HackathonsSection />
            <JourneySection />
            <CertificationsSection />
            <GithubSection />
            <CreativeSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
}
