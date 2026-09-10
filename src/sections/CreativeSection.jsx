import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { CREATIVE_INTERESTS } from '../data/portfolioData';
import { Compass, Code2, Flame, Sparkles, PenTool } from 'lucide-react';

function getInterestIcon(iconName) {
  switch (iconName) {
    case 'Compass': return <Compass className="w-5 h-5 text-amber-400" />;
    case 'Code2': return <Code2 className="w-5 h-5 text-amber-400" />;
    case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-400" />;
    case 'PenTool': return <PenTool className="w-5 h-5 text-amber-400" />;
    default: return <Sparkles className="w-5 h-5 text-amber-400" />;
  }
}

export function CreativeSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="09"
          tag="PERSPECTIVES"
          title="WHEN I'M NOT CODING..."
          description="The ongoing pursuits, creative experiments, and design explorations that fuel my engineering perspective."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CREATIVE_INTERESTS.map((interest, idx) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getInterestIcon(interest.icon)}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {interest.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {interest.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-600">
                <span>0{idx + 1} // PURSUIT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-amber-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
