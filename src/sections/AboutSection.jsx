import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { STATS, PERSONAL_INFO } from '../data/portfolioData';
import { SYSTEM_METRICS } from '../data/systemMetrics';
import { Terminal, Code, Cpu, Trophy, Sparkles, ArrowRight } from 'lucide-react';

export function AboutSection({ mode }) {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#09090b] overflow-hidden border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          tag="ABOUT ME"
          title="A DEVELOPER WHO LIKES TO BUILD."
          description="Transforming conceptual blueprints into working code, autonomous systems, and high-performance applications."
        />

        {/* Editorial Layout: Two-column asymmetrical design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Primary Statement Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden group hover:border-zinc-700/60 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none" />
              <p className="text-xl sm:text-2xl text-zinc-100 font-normal leading-relaxed">
                I am a Computer Science Engineering student interested in{' '}
                <span className="text-amber-400 font-medium">software development</span>,{' '}
                <span className="text-white font-medium">full-stack web applications</span>,{' '}
                <span className="text-amber-300 font-medium">artificial intelligence</span>,{' '}
                problem solving, and experimental technology projects.
              </p>
            </div>

            {/* Secondary Statement Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800/60 relative">
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
                I enjoy turning ideas into working products and participating in hackathons and technical challenges.
                Whether developing computer vision models for urban traffic or crafting responsive full-stack architectures,
                I focus on clean code, solid engineering fundamentals, and software that actually runs in the wild.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                  Amrita Vishwa Vidyapeetham
                </span>
                <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                  Nagercoil Campus
                </span>
                <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  2nd Year Undergraduate
                </span>
              </div>
            </div>

            {/* System Mode Extra Info */}
            {mode === 'system' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-5 rounded-xl bg-zinc-950 border border-amber-500/30 font-mono text-xs text-zinc-300 space-y-2"
              >
                <div className="text-amber-400 font-bold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>RUNTIME_ENVIRONMENT_TELEMETRY</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 pt-2 border-t border-zinc-900">
                  <div>BASE: {SYSTEM_METRICS.locationCoordinates}</div>
                  <div>UPTIME: {SYSTEM_METRICS.uptime}</div>
                  <div>VERSION: {SYSTEM_METRICS.version}</div>
                  <div>KERNEL: {SYSTEM_METRICS.kernel}</div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column: Key Statistics Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight block font-mono">
                    {stat.number}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold uppercase tracking-wider text-zinc-200">
                    {stat.label}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-zinc-500 leading-normal">
                  {stat.sublabel}
                </p>
              </div>
            ))}

            {/* Quick Summary Pill */}
            <div className="sm:col-span-2 p-5 rounded-2xl bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold">
                    Always Shipping Code
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Driven by curious experimentation & clean craft
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
