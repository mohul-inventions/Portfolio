import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Terminal } from 'lucide-react';
import { Github } from './Icons';

export function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#0e0e13] border border-zinc-800/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/60 bg-zinc-950/60">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-amber-400 font-semibold tracking-wider">
                PROJECT {project.number}
              </span>
              <span className="text-zinc-600">//</span>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            {/* Title & Subtitle */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-sm sm:text-base text-amber-400/90 font-mono mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                Technical Overview
              </h4>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.detailedOverview || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Key Implementations & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/50 text-xs sm:text-sm text-zinc-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Telemetry Specs */}
            {project.systemStats && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  System Architecture Specs
                </h4>
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 font-mono text-xs space-y-2">
                  {Object.entries(project.systemStats).map(([key, val]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-zinc-900/60 last:border-none">
                      <span className="text-zinc-400 uppercase">{key}:</span>
                      <span className="text-amber-300 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 border-t border-zinc-800/80">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm rounded-lg transition-all shadow-lg shadow-amber-400/10"
              >
                <Github className="w-4 h-4" />
                <span>View Repository ({project.repository})</span>
              </a>

              <a
                href={`https://github.com/mohul-inventions`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-sm rounded-lg border border-zinc-700/60 transition-all"
              >
                <span>All Repositories</span>
                <ExternalLink className="w-4 h-4 text-zinc-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
