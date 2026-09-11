import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { JOURNEY } from '../data/portfolioData';
import { GraduationCap, Flame, Eye, Layers, Compass, ArrowDown, Zap, ArrowUpRight } from 'lucide-react';

function getJourneyIcon(step) {
  if (step.title.includes('CRAFT')) return <Zap className="w-5 h-5 text-amber-400" />;
  if (step.title.includes('B.Tech')) return <GraduationCap className="w-5 h-5 text-amber-400" />;
  if (step.title.includes('Hackathon')) return <Flame className="w-5 h-5 text-orange-400" />;
  if (step.title.includes('Vision') || step.title.includes('AI')) return <Eye className="w-5 h-5 text-cyan-400" />;
  if (step.title.includes('Full-Stack')) return <Layers className="w-5 h-5 text-emerald-400" />;
  return <Compass className="w-5 h-5 text-amber-400" />;
}

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          tag="PATHWAY"
          title="MY JOURNEY"
          description="The progression of skills, student leadership, trials under pressure, and software craftsmanship."
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
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                      {step.period}
                    </span>
                    {step.link && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        Campus Leadership
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">
                    {step.institution}
                  </span>
                </div>

                <div className="flex items-start sm:items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0">
                      {getJourneyIcon(step)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">{step.role}</p>
                    </div>
                  </div>

                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono text-zinc-300 hover:text-white transition-colors shrink-0"
                    >
                      <span>craft.ncamrita.in</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  )}
                </div>

                <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-sans max-w-3xl">
                  {step.description}
                </p>

                {/* Mobile Link if present */}
                {step.link && (
                  <div className="mt-3 sm:hidden">
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:underline"
                    >
                      <span>Visit craft.ncamrita.in ↗</span>
                    </a>
                  </div>
                )}

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
