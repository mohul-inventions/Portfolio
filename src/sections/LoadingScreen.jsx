import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING_CORE');

  useEffect(() => {
    const statusSequence = [
      { at: 15, text: 'LOADING_ENVIRONMENT...' },
      { at: 45, text: 'MOUNTING_SHADERS_AND_COMPONENTS...' },
      { at: 75, text: 'FETCHING_TELEMETRY...' },
      { at: 95, text: 'SYSTEM_READY' }
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 12) + 4;
        const matching = statusSequence.find((s) => s.at <= next);
        if (matching) setStatusText(matching.text);

        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] text-[#f4f4f0]"
    >
      {/* High-tech matrix grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Monogram Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative mb-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-zinc-900/90 border border-zinc-700/60 flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial from-amber-500/20 to-transparent" />
            <span
              className="text-3xl font-black text-amber-400 tracking-tight"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              CR
            </span>
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
          </span>
        </motion.div>

        {/* Brand Name */}
        <h1
          className="text-xl font-bold tracking-widest text-zinc-100 uppercase mb-2 font-mono"
        >
          C R MOHUL RAM
        </h1>

        {/* Status Line */}
        <p className="text-[11px] font-mono text-zinc-500 tracking-widest uppercase mb-6 h-4">
          {statusText}
        </p>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-amber-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Counter */}
        <div className="mt-3 font-mono text-xs text-amber-400/90 font-semibold tracking-widest">
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>
    </motion.div>
  );
}
