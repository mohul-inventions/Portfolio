import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectModal } from '../components/ProjectModal';
import { 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  ExternalLink, 
  Check, 
  Terminal, 
  Sparkles, 
  Car, 
  Shield, 
  Compass, 
  BookOpen, 
  Smile, 
  GraduationCap 
} from 'lucide-react';
import { Github } from '../components/Icons';

function getProjectIcon(id) {
  switch (id) {
    case 'smart-traffic': return <Car className="w-5 h-5 text-amber-400" />;
    case 'make-insure': return <Shield className="w-5 h-5 text-emerald-400" />;
    case 'transit-tracker': return <Compass className="w-5 h-5 text-blue-400" />;
    case 'memoryverse-ai': return <BookOpen className="w-5 h-5 text-purple-400" />;
    case 'kiddo': return <Smile className="w-5 h-5 text-amber-300" />;
    case 'student-management-system': return <GraduationCap className="w-5 h-5 text-cyan-400" />;
    default: return <Terminal className="w-5 h-5 text-amber-400" />;
  }
}

export function FeaturedProjects({ mode }) {
  const [selectedProjectId, setSelectedProjectId] = useState(FEATURED_PROJECTS[0].id);
  const [modalProject, setModalProject] = useState(null);

  const currentProject =
    FEATURED_PROJECTS.find((p) => p.id === selectedProjectId) || FEATURED_PROJECTS[0];

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeader
            number="03"
            tag="FEATURED BUILDS"
            title="SYSTEMS BUILT TO PERFORM."
            description="From computer vision pipelines and priority traffic algorithms to full-stack platforms and civic tools."
          />

          <div className="hidden md:flex items-center gap-2 mb-8 font-mono text-xs text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>SELECT A PROJECT TO INSPECT ARCHITECTURE</span>
          </div>
        </div>

        {/* Desktop Immersive Project Showcase (Split Visualizer + Interactive Selector) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Project Selector List */}
          <div className="col-span-5 space-y-3">
            {FEATURED_PROJECTS.map((project) => {
              const isSelected = project.id === selectedProjectId;

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  data-cursor="project"
                  className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? 'bg-zinc-900/90 border-amber-400/50 shadow-xl shadow-amber-400/5 border'
                      : 'bg-zinc-950/40 hover:bg-zinc-900/40 border border-zinc-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs font-bold tracking-wider ${
                          isSelected ? 'text-amber-400' : 'text-zinc-600 group-hover:text-zinc-400'
                        }`}
                      >
                        {project.number}
                      </span>
                      <span className="w-1 h-3 rounded-full bg-zinc-800 group-hover:bg-amber-400 transition-colors" />
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Collapsible mini snippet on active */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 pt-3 border-t border-zinc-800/80 text-xs text-zinc-400 leading-relaxed font-sans"
                    >
                      {project.description}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Architectural Preview Canvas */}
          <div className="col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-3xl bg-zinc-950 border border-zinc-800/90 overflow-hidden shadow-2xl p-8"
              >
                {/* Visual Accent Glow */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${currentProject.accentColor} blur-3xl opacity-30 pointer-events-none`} />

                {/* Top Header */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      {getProjectIcon(currentProject.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-semibold">
                        PROJECT {currentProject.number} // {currentProject.badge}
                      </span>
                      <h4 className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {currentProject.title}
                      </h4>
                    </div>
                  </div>

                  <button
                    onClick={() => setModalProject(currentProject)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-700/60 transition-colors"
                  >
                    <span>Inspect Specs</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>

                {/* Tech Pills */}
                <div className="py-5 flex flex-wrap gap-2">
                  {currentProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-900/80 border border-zinc-800 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Subtitle / Overview */}
                <div className="space-y-4">
                  {currentProject.subtitle && (
                    <p className="text-xs font-mono uppercase tracking-widest text-amber-400/90 font-medium">
                      {currentProject.subtitle}
                    </p>
                  )}
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {currentProject.detailedOverview || currentProject.description}
                  </p>
                </div>

                {/* Key Features Pill Grid */}
                <div className="mt-6 pt-6 border-t border-zinc-900 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                    System Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentProject.features.slice(0, 4).map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-zinc-400 p-2.5 rounded-lg bg-zinc-900/40 border border-zinc-800/40"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Repository Link & Actions */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-amber-400/10"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository ↗</span>
                  </a>

                  <button
                    onClick={() => setModalProject(currentProject)}
                    className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    View Complete Details →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / Tablet Dedicated Vertical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {project.number}
                    </span>
                    <span className="text-zinc-600">//</span>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase">
                      {project.category}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
                    {getProjectIcon(project.id)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs text-amber-400/90 font-mono mb-3">{project.subtitle}</p>
                )}

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 font-semibold hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repo ↗</span>
                </a>

                <button
                  onClick={() => setModalProject(project)}
                  className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-1 rounded bg-zinc-900 border border-zinc-800"
                >
                  Deep Specs
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep-dive specs modal */}
      <ProjectModal
        project={modalProject}
        isOpen={Boolean(modalProject)}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
