import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { TECH_STACK } from '../data/portfolioData';
import { SYSTEM_METRICS } from '../data/systemMetrics';
import { 
  Code2, 
  Layout, 
  Server, 
  Wrench, 
  BrainCircuit, 
  Terminal, 
  Layers, 
  ExternalLink,
  Sparkles,
  Coffee,
  Cpu,
  Boxes,
  Palette,
  Atom,
  Wind,
  Database,
  HardDrive,
  GitBranch,
  FileCode,
  Cloud,
  Binary,
  Component,
  Lightbulb,
  Bug
} from 'lucide-react';
import { Github } from '../components/Icons';

const CATEGORIES = [
  { id: 'all', label: 'All Technologies', icon: Sparkles },
  { id: 'languages', label: 'Languages', icon: Code2 },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend / Database', icon: Server },
  { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  { id: 'concepts', label: 'CS Concepts', icon: BrainCircuit }
];

// Helper to render relevant Lucide icon
function renderTechIcon(iconName) {
  const iconProps = { className: "w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" };
  switch (iconName) {
    case 'Coffee': return <Coffee {...iconProps} />;
    case 'Cpu': return <Cpu {...iconProps} />;
    case 'Boxes': return <Boxes {...iconProps} />;
    case 'Terminal': return <Terminal {...iconProps} />;
    case 'Layout': return <Layout {...iconProps} />;
    case 'Palette': return <Palette {...iconProps} />;
    case 'Code2': return <Code2 {...iconProps} />;
    case 'Atom': return <Atom {...iconProps} />;
    case 'Wind': return <Wind {...iconProps} />;
    case 'Server': return <Server {...iconProps} />;
    case 'Database': return <Database {...iconProps} />;
    case 'HardDrive': return <HardDrive {...iconProps} />;
    case 'GitBranch': return <GitBranch {...iconProps} />;
    case 'Github': return <Github {...iconProps} />;
    case 'FileCode': return <FileCode {...iconProps} />;
    case 'Cloud': return <Cloud {...iconProps} />;
    case 'Binary': return <Binary {...iconProps} />;
    case 'Component': return <Component {...iconProps} />;
    case 'Lightbulb': return <Lightbulb {...iconProps} />;
    case 'Bug': return <Bug {...iconProps} />;
    default: return <Code2 {...iconProps} />;
  }
}

export function TechStackSection({ mode }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const getAllItems = () => {
    return [
      ...TECH_STACK.languages.map((item) => ({ ...item, category: 'languages' })),
      ...TECH_STACK.frontend.map((item) => ({ ...item, category: 'frontend' })),
      ...TECH_STACK.backend.map((item) => ({ ...item, category: 'backend' })),
      ...TECH_STACK.tools.map((item) => ({ ...item, category: 'tools' })),
      ...TECH_STACK.concepts.map((item) => ({ ...item, category: 'concepts' }))
    ];
  };

  const filteredItems =
    activeCategory === 'all'
      ? getAllItems()
      : TECH_STACK[activeCategory]?.map((item) => ({ ...item, category: activeCategory })) || [];

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          tag="TECH STACK"
          title="THE STACK I BUILD WITH"
          description="A battle-tested foundation of systems languages, modern web runtimes, and engineering fundamentals."
        />

        {/* System Mode: Architectural Stack Layers Schematic */}
        {mode === 'system' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-6 rounded-2xl bg-zinc-950/80 border border-amber-500/30"
          >
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-amber-400 font-bold uppercase tracking-widest">
              <Layers className="w-4 h-4" />
              <span>STACK_ARCHITECTURE_LAYER_MAPPING</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SYSTEM_METRICS.architectureLayers.map((layer, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[11px] font-mono text-amber-400 font-semibold block mb-1">
                    {layer.layer}
                  </span>
                  <div className="text-xs font-mono text-zinc-200 mb-2 font-medium">
                    {layer.tech}
                  </div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">
                    {layer.purpose}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-400/20'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-amber-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative p-4 sm:p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      {renderTechIcon(item.icon)}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                      {item.level}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="truncate">{item.note}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-amber-400 transition-colors shrink-0" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Subtle Horizontal Tech Marquee */}
        <div className="mt-16 pt-8 border-t border-zinc-900/80 overflow-hidden relative">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {[
              'PYTHON • OPENCV • YOLOV8',
              'REACT • TAILWIND CSS • JAVASCRIPT',
              'NODE.JS • MONGODB • MYSQL',
              'JAVA • C • C++',
              'GIT • GITHUB • VS CODE • VERCEL',
              'DATA STRUCTURES • OOP • PROBLEM SOLVING'
            ].map((text, i) => (
              <span
                key={i}
                className="text-xs font-mono tracking-widest uppercase text-zinc-600 hover:text-amber-400/80 transition-colors"
              >
                {text}
                <span className="mx-6 text-zinc-800">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
