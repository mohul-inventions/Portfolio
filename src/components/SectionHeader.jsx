import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeader({ number, tag, title, description, align = 'left' }) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {/* Editorial Meta Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-3 text-xs font-mono tracking-widest uppercase text-amber-400/90"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
        <span>{number}</span>
        <span className="text-zinc-600">//</span>
        <span className="text-zinc-400">{tag}</span>
      </motion.div>

      {/* Main Heading with Masked Word-by-Word Upward Reveal (Requirement 10) */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#f4f4f0]"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        {typeof title === 'string' ? (
          title.split(' ').map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden mr-[0.28em] last:mr-0 align-bottom">
              <motion.span
                initial={{ y: '100%', opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))
        ) : (
          title
        )}
      </h2>

      {/* Optional Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
