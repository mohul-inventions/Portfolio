import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CustomCursor({ mousePosition, isPointerDevice }) {
  const [cursorState, setCursorState] = useState({
    isHovered: false,
    cursorText: '',
    cursorVariant: 'default' // 'default' | 'hover' | 'project' | 'view'
  });

  useEffect(() => {
    if (!isPointerDevice) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      
      const projectTarget = target.closest('[data-cursor="project"]');
      const interactiveTarget = target.closest('button, a, input, textarea, select, [role="button"], [data-cursor="hover"]');

      if (projectTarget) {
        setCursorState({
          isHovered: true,
          cursorText: 'VIEW',
          cursorVariant: 'project'
        });
      } else if (interactiveTarget) {
        setCursorState({
          isHovered: true,
          cursorText: '',
          cursorVariant: 'hover'
        });
      } else {
        setCursorState({
          isHovered: false,
          cursorText: '',
          cursorVariant: 'default'
        });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [isPointerDevice]);

  if (!isPointerDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 mix-blend-difference overflow-hidden">
      {/* Central dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-400"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: cursorState.cursorVariant === 'project' ? 0 : 1,
          scale: cursorState.cursorVariant === 'hover' ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 400,
          mass: 0.1,
        }}
      />

      {/* Follower ring or pill */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border border-amber-400/80 transition-colors ${
          cursorState.cursorVariant === 'project'
            ? 'bg-amber-400 text-black font-mono font-bold text-[10px] tracking-widest px-3 py-1'
            : cursorState.cursorVariant === 'hover'
            ? 'bg-amber-400/10 border-amber-400'
            : 'bg-transparent border-amber-400/40'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: cursorState.cursorVariant === 'project' ? 68 : cursorState.cursorVariant === 'hover' ? 44 : 26,
          height: cursorState.cursorVariant === 'project' ? 68 : cursorState.cursorVariant === 'hover' ? 44 : 26,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 220,
          mass: 0.25,
        }}
      >
        <AnimatePresence>
          {cursorState.cursorText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="select-none pointer-events-none text-[10px] uppercase font-bold tracking-wider"
            >
              {cursorState.cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
