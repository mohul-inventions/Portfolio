import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export function LiveClock({ className = '' }) {
  const [timeString, setTimeString] = useState('');
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to IST (Asia/Kolkata)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setTimeString(formatted);

      // Determine day/night in IST
      const hourOptions = { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false };
      const currentHour = parseInt(new Intl.DateTimeFormat('en-US', hourOptions).format(now), 10);
      setIsDay(currentHour >= 6 && currentHour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeString) return null;

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
      <span className="tabular-nums tracking-wide">{timeString}</span>
      <span className="text-zinc-500 font-semibold text-[10px]">IST</span>
    </div>
  );
}
