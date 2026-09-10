import React from 'react';
import { motion } from 'framer-motion';

export function AmbientGlow({ mousePosition, isPointerDevice }) {
  if (!isPointerDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-radial from-amber-500/10 via-amber-600/3 to-transparent blur-3xl opacity-70"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 150,
          mass: 0.8,
        }}
      />
    </div>
  );
}
