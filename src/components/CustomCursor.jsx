import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

export function CustomCursor({ mousePosition, isPointerDevice }) {
  const [cursorState, setCursorState] = useState({
    isHovered: false,
    cursorText: '',
    cursorVariant: 'default' // 'default' | 'hover' | 'project'
  });

  // Smooth springs for fluid trailing motion
  const springX = useSpring(mousePosition.x, { damping: 28, stiffness: 350, mass: 0.1 });
  const springY = useSpring(mousePosition.y, { damping: 28, stiffness: 350, mass: 0.1 });

  const auraX = useSpring(mousePosition.x, { damping: 45, stiffness: 180, mass: 0.4 });
  const auraY = useSpring(mousePosition.y, { damping: 45, stiffness: 180, mass: 0.4 });

  useEffect(() => {
    springX.set(mousePosition.x);
    springY.set(mousePosition.y);
    auraX.set(mousePosition.x);
    auraY.set(mousePosition.y);
  }, [mousePosition, springX, springY, auraX, auraY]);

  useEffect(() => {
    if (!isPointerDevice) return;

    const handleMouseOver = (e) => {
      const target = e.target;
      
      const projectTarget = target.closest('[data-cursor="project"]');
      const interactiveTarget = target.closest('button, a, input, textarea, select, [role="button"], [data-cursor="hover"]');

      if (projectTarget) {
        setCursorState({
          isHovered: true,
          cursorText: 'EXPLORE // ↗',
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
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen select-none">
      {/* 1. Fluid Ambient Trailing Aura */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-amber-500/20 blur-sm pointer-events-none"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* 2. Precision Center Laser Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-400 pointer-events-none shadow-[0_0_10px_#f59e0b]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorState.cursorVariant === 'hover' ? 1.5 : cursorState.cursorVariant === 'project' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 3. Unique Precision Reticle Frame / Corner Targeting Brackets */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState.cursorVariant === 'project' ? 110 : cursorState.cursorVariant === 'hover' ? 46 : 28,
          height: cursorState.cursorVariant === 'project' ? 42 : cursorState.cursorVariant === 'hover' ? 46 : 28,
          rotate: cursorState.cursorVariant === 'hover' ? 45 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
      >
        {/* Reticle Brackets */}
        {cursorState.cursorVariant !== 'project' ? (
          <div className="relative w-full h-full">
            {/* Top-Left Bracket */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-amber-400/90 rounded-tl-sm" />
            {/* Top-Right Bracket */}
            <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-amber-400/90 rounded-tr-sm" />
            {/* Bottom-Left Bracket */}
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-amber-400/90 rounded-bl-sm" />
            {/* Bottom-Right Bracket */}
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-amber-400/90 rounded-br-sm" />
          </div>
        ) : (
          /* Project Inspection Pill */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-400 text-black font-mono text-[11px] font-bold tracking-wider shadow-lg shadow-amber-400/30"
          >
            <span>{cursorState.cursorText}</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
