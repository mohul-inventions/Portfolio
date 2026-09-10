import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export function Footer() {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-[#060608] border-t border-zinc-900 text-zinc-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span
              className="text-base font-extrabold text-white uppercase tracking-wider font-mono"
            >
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline text-zinc-700">//</span>
            <span className="text-zinc-400">
              Building. Learning. Experimenting.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-amber-400 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Location & Time + Back to Top */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>TAMIL NADU, IN: {currentTime || 'IST'}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright line */}
        <div className="mt-8 pt-6 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-500 text-[11px]">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div>
            Designed with precision • React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
