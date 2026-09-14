import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, CheckCircle } from 'lucide-react';

export function HackerOverlay({ isActive, onClose, playClick }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    // Auto-dismiss after 7 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 7000);

    const canvas = canvasRef.current;
    if (!canvas) return () => clearTimeout(timer);
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = '0123456789ABCDEFΣΩΨλπ√∫≈≠±';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    let animId;
    const render = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#f59e0b';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animId);
    };
  }, [isActive, onClose]);

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-hidden select-none"
      >
        {/* Matrix Canvas Rain */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-black/90 pointer-events-none" />

        {/* Center Alert Banner */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-md p-6 rounded-2xl bg-zinc-950/95 border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.4)] backdrop-blur-xl font-mono text-center text-zinc-300"
          >
            <button
              onClick={() => {
                if (playClick) playClick();
                onClose();
              }}
              className="absolute top-3 right-3 p-1 rounded-md text-zinc-500 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 mx-auto rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 mb-4">
              <Terminal className="w-6 h-6 animate-pulse" />
            </div>

            <div className="inline-block px-2.5 py-0.5 rounded bg-amber-400/15 text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">
              EASTER EGG DETECTED // 0x7F
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              HACKER MODE ACTIVATED
            </h3>

            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Konami sequence verified. Accessing root dev matrix.
              Returning to production portfolio in a few moments.
            </p>

            <div className="p-2.5 rounded-lg bg-black/80 border border-zinc-800 text-[11px] text-emerald-400 flex items-center justify-center gap-2">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Systems Nominal • Welcome, Engineer</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
