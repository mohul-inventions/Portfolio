import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { HACKATHONS } from '../data/portfolioData';
import { Flame, Clock, Award, ShieldAlert, Sparkles, MapPin } from 'lucide-react';

export function HackathonsSection() {
  return (
    <section id="hackathons" className="relative py-24 sm:py-32 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          tag="CRUCIBLE SPRINTS"
          title="BUILT UNDER PRESSURE."
          description="High-velocity hackathons and engineering summits where ideas are forged into production within strict deadlines."
        />

        {/* Featured Callout: Smart India Hackathon Shortlisted */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-zinc-900/80 to-zinc-950 border border-amber-500/40 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-amber-400/20 text-amber-400 border border-amber-400/30">
                <Flame className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  NATIONAL RECOGNITION // 2024
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Smart India Hackathon (SIH)
                </h3>
              </div>
            </div>

            <span className="self-start sm:self-auto px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-400 text-black shadow-lg shadow-amber-400/20">
              Shortlisted
            </span>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 max-w-3xl leading-relaxed">
            Shortlisted in India's premier nationwide innovation initiative organized by the Ministry of Education,
            competing against top engineering teams across the country to solve real-world civic challenges.
          </p>
        </motion.div>

        {/* Timeline Grid of Verified Hackathons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {HACKATHONS.map((hack, index) => {
            const isShortlisted = hack.badgeType === 'shortlisted';

            return (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`group p-5 sm:p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isShortlisted
                    ? 'bg-zinc-900/80 border-amber-400/40 border'
                    : 'bg-zinc-950/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {hack.year}
                    </span>

                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-medium ${
                        isShortlisted
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                          : 'bg-zinc-900 text-zinc-400 border border-zinc-800'
                      }`}
                    >
                      {hack.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-zinc-100 group-hover:text-amber-300 transition-colors">
                    {hack.title}
                  </h4>

                  <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-amber-400/90 font-medium">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{hack.organizer}</span>
                  </div>

                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-sans">
                    {hack.highlight}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-900/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span className="uppercase">{hack.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-amber-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
