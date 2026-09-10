import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, User, Terminal } from 'lucide-react';

export function SystemModeToggle({ mode, setMode }) {
  return (
    <div className="inline-flex items-center p-1 bg-zinc-900/90 border border-zinc-800 rounded-full shadow-inner backdrop-blur-md">
      <button
        onClick={() => setMode('human')}
        type="button"
        className={`relative flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full transition-all duration-300 ${
          mode === 'human'
            ? 'text-black font-semibold'
            : 'text-zinc-400 hover:text-zinc-200'
        }`}
      >
        {mode === 'human' && (
          <motion.div
            layoutId="mode-pill"
            className="absolute inset-0 bg-amber-400 rounded-full"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <User className="w-3.5 h-3.5 relative z-10" />
        <span className="relative z-10 tracking-wide">HUMAN</span>
      </button>

      <button
        onClick={() => setMode('system')}
        type="button"
        className={`relative flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full transition-all duration-300 ${
          mode === 'system'
            ? 'text-black font-semibold'
            : 'text-zinc-400 hover:text-zinc-200'
        }`}
      >
        {mode === 'system' && (
          <motion.div
            layoutId="mode-pill"
            className="absolute inset-0 bg-amber-400 rounded-full"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <Terminal className="w-3.5 h-3.5 relative z-10" />
        <span className="relative z-10 tracking-wide">SYSTEM</span>
      </button>
    </div>
  );
}
