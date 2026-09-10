import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, ShieldCheck, MapPin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function HeroSection({ mode }) {
  const canvasRef = useRef(null);

  // Subtle interactive particle mesh in hero background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(245, 158, 11, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic interactive canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        aria-hidden="true"
      />

      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-[120px] rounded-full" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Top Status & Identity Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Location & Year */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/60 border border-zinc-800/80 text-xs font-mono text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>TAMIL NADU, INDIA</span>
            <span className="text-zinc-600">•</span>
            <span>CSE 2ND YEAR</span>
          </div>

          {/* System Mode Indicator */}
          {mode === 'system' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>SYSTEM_DIAGNOSTICS_ACTIVE</span>
            </motion.div>
          )}
        </motion.div>

        {/* Large Editorial Headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white leading-[0.95]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            BUILDING IDEAS <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-amber-200 to-amber-400">
              INTO DIGITAL
            </span>{' '}
            EXPERIENCES.
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed"
          >
            Computer Science Engineering student building{' '}
            <span className="text-zinc-200 font-medium">full-stack applications</span>,{' '}
            <span className="text-amber-300 font-medium">AI-powered systems</span>, and experimental digital products.
          </motion.p>

          {/* Technical Metadata Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-zinc-400"
          >
            <span className="text-amber-400 font-semibold">C R MOHUL RAM</span>
            <span className="text-zinc-700">|</span>
            {PERSONAL_INFO.metaTags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span className="px-2.5 py-1 rounded bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:border-amber-500/40 transition-colors">
                  {tag}
                </span>
                {i < PERSONAL_INFO.metaTags.length - 1 && <span className="text-zinc-700 hidden sm:inline">•</span>}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* CTA Buttons & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm rounded-xl transition-all duration-200 shadow-xl shadow-amber-400/20 hover:shadow-amber-400/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-200"
          >
            <span>Let's Connect</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </button>

          {/* GitHub Outlink */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-zinc-400 hover:text-zinc-100 font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <Code2 className="w-4 h-4 text-amber-400" />
            <span>View GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Editorial Meta & Scroll Down Prompt */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>AMRITA VISHWA VIDYAPEETHAM</span>
          <span className="text-zinc-700">//</span>
          <span className="text-zinc-400">NAGERCOIL CAMPUS</span>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors group cursor-pointer"
        >
          <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
