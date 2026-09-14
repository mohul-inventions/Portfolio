import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SYSTEM_METRICS } from '../data/systemMetrics';
import { 
  Code2, 
  Layout, 
  Server, 
  Wrench, 
  BrainCircuit, 
  Terminal, 
  Layers, 
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
  { id: 'all', label: 'All Stack', icon: Sparkles },
  { id: 'aiml', label: 'AI / ML', icon: BrainCircuit },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'languages', label: 'Languages', icon: Code2 },
  { id: 'database', label: 'Database', icon: Database },
  { id: 'tools', label: 'Tools', icon: Wrench },
];

const ENRICHED_TECH_STACK = [
  // AI / ML
  { name: 'YOLOv8', level: 'Computer Vision', icon: 'Terminal', note: 'Real-time Detection', categories: ['aiml', 'tools'], linkedProject: 'AI Smart Traffic' },
  { name: 'OpenCV', level: 'Image Processing', icon: 'Cpu', note: 'Computer Vision', categories: ['aiml'], linkedProject: 'AI Smart Traffic' },
  { name: 'Python', level: 'Basics / ML', icon: 'Terminal', note: 'OpenCV, YOLOv8', categories: ['languages', 'aiml'], linkedProject: 'AI Smart Traffic' },

  // Languages
  { name: 'Java', level: 'Proficient', icon: 'Coffee', note: 'NPTEL Elite Gold', categories: ['languages'], linkedProject: 'Academic Systems' },
  { name: 'C', level: 'Foundations', icon: 'Cpu', note: 'Low-level Systems', categories: ['languages'], linkedProject: 'Core Systems' },
  { name: 'C++', level: 'Algorithms', icon: 'Boxes', note: 'OOP & Data Structures', categories: ['languages'], linkedProject: 'Algorithmic Builds' },
  { name: 'JavaScript', level: 'Proficient', icon: 'Code2', note: 'ES6+, Async, DOM', categories: ['languages', 'frontend'], linkedProject: 'Make Insure' },

  // Frontend
  { name: 'React', level: 'Proficient', icon: 'Atom', note: 'Hooks, SPA, State', categories: ['frontend'], linkedProject: 'Make Insure / Portfolio' },
  { name: 'Tailwind CSS', level: 'Proficient', icon: 'Wind', note: 'Modern Utility-First', categories: ['frontend'], linkedProject: 'All UI Systems' },
  { name: 'HTML5', level: 'Advanced', icon: 'Layout', note: 'Semantic Structure', categories: ['frontend'], linkedProject: 'Web Standards' },
  { name: 'CSS3', level: 'Advanced', icon: 'Palette', note: 'Modern layouts & FX', categories: ['frontend'], linkedProject: 'UI & Motion' },

  // Backend
  { name: 'Node.js', level: 'Proficient', icon: 'Server', note: 'Express, APIs, Auth', categories: ['backend'], linkedProject: 'Make Insure Backend' },

  // Database
  { name: 'MongoDB', level: 'Proficient', icon: 'Database', note: 'NoSQL, Mongoose', categories: ['database', 'backend'], linkedProject: 'Make Insure Store' },
  { name: 'MySQL', level: 'Proficient', icon: 'HardDrive', note: 'Relational Schemas', categories: ['database', 'backend'], linkedProject: 'Relational Records' },

  // Tools
  { name: 'Git', level: 'Essential', icon: 'GitBranch', note: 'Version Control', categories: ['tools'], linkedProject: 'All Repositories' },
  { name: 'GitHub', level: 'Workflow', icon: 'Github', note: 'Open Source & CI', categories: ['tools'], linkedProject: 'mohul-inventions' },
  { name: 'VS Code', level: 'Primary IDE', icon: 'FileCode', note: 'Developer Tooling', categories: ['tools'], linkedProject: 'Daily Dev' },
  { name: 'Vercel', level: 'Deployment', icon: 'Cloud', note: 'Edge Hosting & CI/CD', categories: ['tools'], linkedProject: 'Live Deployments' }
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

export function TechStackSection({ mode, playClick }) {
  const [activeCategory, setActiveCategory] = useState('all');

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

        {/* Category Filter Pills (Feature 11 spec) */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  if (playClick) playClick();
                  setActiveCategory(cat.id);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-400/20 scale-[1.02]'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-amber-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid with Stagger & Soft Muting (Feature 11 spec) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4"
        >
          {ENRICHED_TECH_STACK.map((item) => {
            const isMatch = activeCategory === 'all' || item.categories.includes(activeCategory);

            return (
              <motion.div
                layout="position"
                key={item.name}
                whileHover={isMatch ? { y: -4, transition: { duration: 0.2 } } : {}}
                animate={{
                  opacity: isMatch ? 1 : 0.28,
                  scale: isMatch ? 1 : 0.96,
                  filter: isMatch ? 'grayscale(0%)' : 'grayscale(60%)'
                }}
                transition={{
                  layout: { type: 'spring', damping: 25, stiffness: 280 },
                  duration: 0.25
                }}
                className={`group relative p-4 sm:p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isMatch
                    ? 'bg-zinc-900/40 border border-zinc-800/90 hover:border-amber-400/60 hover:bg-zinc-900/80 hover:shadow-lg hover:shadow-amber-400/5'
                    : 'bg-zinc-950/30 border border-zinc-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-400/40 transition-colors">
                      <div className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200">
                        {renderTechIcon(item.icon)}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 group-hover:border-amber-400/40 transition-colors">
                      {item.level}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="truncate" title={`Linked build: ${item.linkedProject}`}>{item.note}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-amber-400 transition-colors shrink-0" />
                </div>
              </motion.div>
            );
          })}
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
