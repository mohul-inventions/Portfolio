import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export function Footer({ onOpenResume, playClick }) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    if (playClick) playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    ...(onOpenResume ? [{ label: 'Dossier / CV', action: onOpenResume, isButton: true }] : []),
    { label: 'GitHub', href: PERSONAL_INFO.github },
    { label: 'LinkedIn', href: PERSONAL_INFO.linkedin },
    { label: 'Email', href: `mailto:${PERSONAL_INFO.email}` }
  ];

  return (
    <footer className="relative py-12 bg-[#060608] border-t border-zinc-900 text-zinc-400 text-xs font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="text-base font-extrabold text-white uppercase tracking-wider font-mono">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-zinc-700">//</span>
            <span className="text-zinc-400">
              Building. Learning. Experimenting.
            </span>
          </div>

          {/* Social Links with Subtle Stagger (Requirement 28) */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                {link.isButton ? (
                  <button
                    onClick={() => {
                      if (playClick) playClick();
                      link.action();
                    }}
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Location & Time + Back to Top */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>TAMIL NADU, IN: {currentTime || 'IST'}</span>
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Copyright line with subtle fade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-6 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-500 text-[11px]"
        >
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div>
            Designed with precision • React &amp; Tailwind CSS
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
