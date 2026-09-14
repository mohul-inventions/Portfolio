import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Mail, 
  ArrowUpRight, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2 
} from 'lucide-react';
import { PERSONAL_INFO, TECH_STACK, FEATURED_PROJECTS } from '../data/portfolioData';

export function ResumeDrawer({ isOpen, onClose, playClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    if (playClick) playClick();
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Right Slide-Over Panel */}
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative w-full max-w-xl bg-zinc-950/98 border-l border-zinc-800 shadow-2xl flex flex-col h-full z-10 overflow-y-auto"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-zinc-950/90 border-b border-zinc-800/80 backdrop-blur-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                ENGINEERING DOSSIER // CV
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono text-zinc-200 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800 transition-colors"
                aria-label="Close Dossier"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Dossier Content Body */}
          <div className="p-6 sm:p-8 space-y-8 flex-1 text-zinc-300 font-sans">
            {/* Header / Identity */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {PERSONAL_INFO.name}
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  VERIFIED BUILDER
                </span>
              </div>
              <p className="text-sm font-mono text-amber-400/90 mb-3">
                Computer Science Engineering Student • Full Stack Developer • AI/ML
              </p>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Focused on turning complex computational problems into resilient, deployed systems. Proven track record in computer vision algorithms, real-time reactive web platforms, and university tech leadership.
              </p>
            </div>

            {/* Academic Credentials */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                B.Tech in Computer Science & Engineering
              </h4>
              <p className="text-xs text-zinc-400">
                Amrita Vishwa Vidyapeetham — Nagercoil Campus, Tamil Nadu
              </p>
              <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Undergraduate (2024 – 2028)</span>
                <span className="text-emerald-400 font-medium">Currently Pursuing (2nd Year)</span>
              </div>
            </div>

            {/* Campus Leadership: CRAFT Club */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Campus Leadership</span>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Operations & Logistics Coordinator
                  </h4>
                  <p className="text-xs text-zinc-400">
                    CRAFT (Council for Real-world Applications & Future Tech)
                  </p>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">2026 – PRESENT</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Coordinating hands-on 90-minute Build-Along cohorts, venue logistics, and technical infrastructure for 150+ student developers moving from classroom theory to production code.
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div>
              <div className="flex items-center gap-2 mb-3 font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>Core Technical Capabilities</span>
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/60 flex items-start gap-2">
                  <span className="text-zinc-500 w-24 shrink-0">LANGUAGES:</span>
                  <span className="text-zinc-200">Java (NPTEL Elite Gold), Python, C, C++, JavaScript</span>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/60 flex items-start gap-2">
                  <span className="text-zinc-500 w-24 shrink-0">FRONTEND:</span>
                  <span className="text-zinc-200">React, HTML5, CSS3, Tailwind CSS, Vite</span>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/60 flex items-start gap-2">
                  <span className="text-zinc-500 w-24 shrink-0">BACKEND / DB:</span>
                  <span className="text-zinc-200">Node.js, Express, MongoDB, MySQL, REST APIs</span>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/60 flex items-start gap-2">
                  <span className="text-zinc-500 w-24 shrink-0">AI / ML:</span>
                  <span className="text-zinc-200">YOLOv8, OpenCV, Image Preprocessing, Density Estimation</span>
                </div>
                <div className="p-2.5 rounded-lg bg-zinc-900/30 border border-zinc-800/60 flex items-start gap-2">
                  <span className="text-zinc-500 w-24 shrink-0">DEVOPS & TOOLS:</span>
                  <span className="text-zinc-200">Git, GitHub, Vercel, VS Code, CI Workflows</span>
                </div>
              </div>
            </div>

            {/* Key Engineering Projects */}
            <div>
              <div className="flex items-center gap-2 mb-3 font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>Selected Production Builds</span>
              </div>
              <div className="space-y-3">
                {FEATURED_PROJECTS.slice(0, 3).map((p) => (
                  <div key={p.id} className="p-3.5 rounded-xl bg-zinc-900/30 border border-zinc-800/60">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{p.title}</span>
                      <span className="text-[10px] font-mono text-amber-400">{p.category}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-2">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {p.technologies.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Hackathon Track Record */}
            <div>
              <div className="flex items-center gap-2 mb-3 font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Honors & Track Record</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-400 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>NPTEL Elite Gold Certificate</strong> — Programming in Java (Top Tier Performance).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>Top 15 Finalist // HackXpertise 3.0</strong> — Built high-concurrency civic tech platform.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                  <span><strong>Shortlisted & Participant</strong> — GitHub DevDays Hackathon & Hack Hustle 2.0.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Drawer Bottom Actions */}
          <div className="p-6 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry%20regarding%20Mohul%20Ram`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider rounded-xl transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email Mohul</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </motion.aside>
      </div>
    </AnimatePresence>
  );
}
