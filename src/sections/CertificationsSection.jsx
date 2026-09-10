import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export function CertificationsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          tag="CREDENTIALS"
          title="CERTIFICATIONS & ACADEMIC MERIT"
          description="Verified coursework, standardized technical assessments, and core competencies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Spotlight: NPTEL Elite Gold Java */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-zinc-900/90 to-zinc-950 border border-amber-400/40 relative overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 blur-3xl pointer-events-none rounded-full" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 font-mono text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>ELITE GOLD TOP PERFORMER</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>VERIFIED NPTEL CREDENTIAL</span>
                </div>
              </div>

              <div className="mt-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Programming in Java
                </h3>
                <p className="text-sm font-mono text-amber-400 mt-1">
                  NPTEL / IIT Kharagpur
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-black text-amber-400 font-mono">
                  92%
                </span>
                <span className="text-lg font-mono text-zinc-300">
                  // Elite + Gold Score
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-sans">
                Rigorous multi-week examination covering Object-Oriented System Architecture, JVM internals,
                Multithreading, Java Collections Framework, Exception Handling, and Bytecode execution.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>EXAM BOARD: IIT KHARAGPUR</span>
              <span className="text-amber-400 font-medium">SCORE: 92/100</span>
            </div>
          </motion.div>

          {/* Secondary Credential: Hindi Praveen Poorvardh */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                </span>

                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-zinc-900 text-zinc-300 border border-zinc-800">
                  Completed
                </span>
              </div>

              <h4 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                Hindi Course – Praveen Poorvardh
              </h4>

              <p className="text-xs font-mono text-zinc-500 mb-4">
                Dakshina Bharat Hindi Prachar Sabha
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                Advanced language proficiency curriculum certifying dedication to cross-cultural linguistic communication and literary translation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Certified Qualification</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
