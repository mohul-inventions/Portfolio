import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { JOURNEY } from '../data/portfolioData';
import { GraduationCap, Flame, Eye, Layers, Compass, ArrowDown } from 'lucide-react';

function getJourneyIcon(idx) {
  switch (idx) {
    case 0: return <GraduationCap className="w-5 h-5 text-amber-400" />;
    case 1: return <Flame className="w-5 h-5 text-orange-400" />;
    case 2: return <Eye className="w-5 h-5 text-cyan-400" />;
    case 3: return <Layers className="w-5 h-5 text-emerald-400" />;
    default: return <Compass className="w-5 h-5 text-amber-400" />;
  }
}

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          tag="PATHWAY"
          title="MY JOURNEY"
          description="The progression of skills, trials under pressure, and software craftsmanship from 2024 to the present."
        />

        {/* Narrative Stepper Layout */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {JOURNEY.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#09090b] border-2 border-zinc-700 group-hover:border-amber-400 flex items-center justify-center transition-colors">
                <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-125 transition-transform" />
              </div>

              {/* Journey Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                    {step.period}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {step.institution}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                    {getJourneyIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-0.5">{step.role}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-sans max-w-3xl">
                  {step.description}
                </p>

                {/* Focus Areas */}
                <div className="mt-5 pt-4 border-t border-zinc-900 flex flex-wrap gap-2">
                  {step.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900/90 border border-zinc-800 text-zinc-400"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
