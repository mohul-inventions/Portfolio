import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export function LiveClock({ className = '' }) {
  const [timeParts, setTimeParts] = useState({ prefix: '', second: '', period: '' });
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST (Asia/Kolkata)
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).formatToParts(now);

      const hour = parts.find((p) => p.type === 'hour')?.value || '12';
      const minute = parts.find((p) => p.type === 'minute')?.value || '00';
      const second = parts.find((p) => p.type === 'second')?.value || '00';
      const dayPeriod = parts.find((p) => p.type === 'dayPeriod')?.value || 'PM';

      setTimeParts({
        prefix: `${hour}:${minute}:`,
        second,
        period: dayPeriod
      });

      // Determine day/night in IST
      const hourNum = parseInt(
        new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false }).format(now),
        10
      );
      setIsDay(hourNum >= 6 && hourNum < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeParts.prefix) return null;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950/70 border border-zinc-800/80 text-xs font-mono text-zinc-300 shadow-sm backdrop-blur-md ${className}`}
      title="Live Local Time (Asia/Kolkata • IST)"
    >
      {isDay ? (
        <Sun className="w-3 h-3 text-amber-400 shrink-0" />
      ) : (
        <Moon className="w-3 h-3 text-amber-300/80 shrink-0" />
      )}
      <div className="flex items-center tabular-nums tracking-wide">
        <span>{timeParts.prefix}</span>
        <span className="relative inline-block overflow-hidden h-[1.25em] w-[2.2ch] align-bottom">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={timeParts.second}
              initial={{ y: -3, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 3, opacity: 0.3 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="inline-block tabular-nums"
            >
              {timeParts.second}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="ml-0.5 text-[10px] text-zinc-400 font-sans">{timeParts.period}</span>
      </div>
      <span className="text-zinc-500 font-semibold text-[10px]">IST</span>
    </div>
  );
}
