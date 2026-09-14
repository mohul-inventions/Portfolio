import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

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

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handler);
    return () => motionQuery.removeEventListener('change', handler);
  }, []);

  if (!isPointerDevice || prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* 1. Precision Center Laser Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-amber-400 pointer-events-none shadow-[0_0_8px_#f59e0b]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorState.cursorVariant === 'hover' ? 1.4 : cursorState.cursorVariant === 'project' ? 0 : 1,
          opacity: cursorState.cursorVariant === 'project' ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 2. Premium Trailing Subtle Ring / Morphing Pill */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        style={{
          x: auraX,
          y: auraY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState.cursorVariant === 'project' ? 104 : cursorState.cursorVariant === 'hover' ? 42 : 26,
          height: cursorState.cursorVariant === 'project' ? 34 : cursorState.cursorVariant === 'hover' ? 42 : 26,
          borderRadius: cursorState.cursorVariant === 'project' ? 9999 : 9999,
          borderColor: cursorState.cursorVariant === 'project' ? 'rgba(245, 158, 11, 0.9)' : cursorState.cursorVariant === 'hover' ? 'rgba(245, 158, 11, 0.6)' : 'rgba(245, 158, 11, 0.25)',
          backgroundColor: cursorState.cursorVariant === 'project' ? 'rgba(245, 158, 11, 0.95)' : cursorState.cursorVariant === 'hover' ? 'rgba(245, 158, 11, 0.08)' : 'rgba(245, 158, 11, 0.02)',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 320 }}
      >
        <div className="w-full h-full rounded-full border border-current flex items-center justify-center">
          {cursorState.cursorVariant === 'project' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-black font-mono text-[10px] font-extrabold tracking-widest uppercase px-2"
            >
              EXPLORE ↗
            </motion.span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
