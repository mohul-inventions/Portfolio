import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Scan, ShieldAlert, Activity } from 'lucide-react';

const DETECTIONS = [
  { id: 'd1', label: 'CAR', conf: 98.4, confStr: '98.4%', x: 18, y: 38, w: 22, h: 26, stroke: '#f59e0b', fill: 'rgba(245, 158, 11, 0.12)', textClass: 'text-amber-400 border-amber-400', appearAt: 600 },
  { id: 'd2', label: 'BUS', conf: 94.8, confStr: '94.8%', x: 44, y: 22, w: 26, h: 42, stroke: '#22d3ee', fill: 'rgba(34, 211, 238, 0.12)', textClass: 'text-cyan-400 border-cyan-400', appearAt: 900 },
  { id: 'd3', label: 'MOTORCYCLE', conf: 91.7, confStr: '91.7%', x: 74, y: 48, w: 14, h: 22, stroke: '#34d399', fill: 'rgba(52, 211, 153, 0.12)', textClass: 'text-emerald-400 border-emerald-400', appearAt: 1200 },
  { id: 'd4', label: 'AMBULANCE [PRIORITY OVERRIDE]', conf: 99.2, confStr: '99.2%', x: 14, y: 68, w: 32, h: 24, stroke: '#f87171', fill: 'rgba(248, 113, 113, 0.16)', textClass: 'text-red-400 border-red-400', priority: true, appearAt: 1200 },
];

function AnimatedValue({ target, duration = 0.5, decimals = 0, suffix = '', active }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) {
      setVal(0);
      return;
    }
    let startTimestamp;
    let animId;
    const startVal = 0;
    const endVal = target;

    const step = (now) => {
      if (!startTimestamp) startTimestamp = now;
      const elapsed = (now - startTimestamp) / 1000;
      const p = Math.min(elapsed / duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setVal(startVal + (endVal - startVal) * ease);
      if (p < 1) animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, duration, active]);

  if (!active) return <span>--</span>;
  return <span>{decimals > 0 ? val.toFixed(decimals) : Math.round(val)}{suffix}</span>;
}

export function AIVisionPlayground({ playClick }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'running' | 'complete'
  const [visibleBoxIds, setVisibleBoxIds] = useState([]);
  const [statsActive, setStatsActive] = useState(false);
  const timeoutsRef = useRef([]);

  const clearTimers = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  const runDetection = () => {
    if (playClick) playClick();
    clearTimers();
    setStatus('running');
    setVisibleBoxIds([]);
    setStatsActive(false);

    // Sequence: 0ms -> Button activates, 200ms -> Scanner sweeps
    // 600ms -> First box appears with SVG path draw
    const t1 = setTimeout(() => {
      setVisibleBoxIds(['d1']);
    }, 600);

    // 900ms -> Second box appears
    const t2 = setTimeout(() => {
      setVisibleBoxIds(['d1', 'd2']);
    }, 900);

    // 1200ms -> Third and fourth boxes appear
    const t3 = setTimeout(() => {
      setVisibleBoxIds(['d1', 'd2', 'd3', 'd4']);
    }, 1200);

    // 1500ms -> Statistics count up into final values
    const t4 = setTimeout(() => {
      setStatus('complete');
      setStatsActive(true);
    }, 1500);

    timeoutsRef.current = [t1, t2, t3, t4];
  };

  const resetDetection = () => {
    if (playClick) playClick();
    clearTimers();
    setStatus('idle');
    setVisibleBoxIds([]);
    setStatsActive(false);
  };

  return (
    <div className="relative rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
      {/* Top Banner / Telemetry Header */}
      <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between gap-2 flex-wrap text-xs font-mono">
        <div className="flex items-center gap-2">
          <Scan className="w-4 h-4 text-amber-400" />
          <span className="font-semibold text-white tracking-wide">YOLOv8 VISION PIPELINE</span>
          <span className="px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-bold">
            SIMULATION
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-zinc-400">
          <span className="hidden sm:inline">Model: <strong className="text-zinc-200">YOLOv8n</strong></span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span>FPS: <strong className="text-emerald-400">
            {statsActive ? <AnimatedValue target={31.4} decimals={1} duration={0.6} active={statsActive} /> : '0.0'}
          </strong></span>
          <span className="text-zinc-600">•</span>
          <span>Latency: <strong className="text-amber-400">
            {statsActive ? <AnimatedValue target={28} decimals={0} suffix="ms" duration={0.6} active={statsActive} /> : '--'}
          </strong></span>
        </div>
      </div>

      {/* Simulated Video Frame Viewport */}
      <div className="relative aspect-[16/9] w-full bg-[#07070a] overflow-hidden select-none">
        {/* Stylized Overhead Urban Road Grid Graphic */}
        <svg className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Road Surfaces */}
          <rect x="10%" y="0" width="80%" height="100%" fill="#121218" />
          {/* Lane Divider Lines */}
          <line x1="36%" y1="0" x2="36%" y2="100%" stroke="#3f3f46" strokeWidth="2" strokeDasharray="12,12" />
          <line x1="64%" y1="0" x2="64%" y2="100%" stroke="#3f3f46" strokeWidth="2" strokeDasharray="12,12" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#f59e0b" strokeWidth="2" opacity="0.4" />
          {/* Intersection Crosswalk */}
          <line x1="10%" y1="65%" x2="90%" y2="65%" stroke="#27272a" strokeWidth="6" strokeDasharray="8,6" />
        </svg>

        {/* Ambient Corner Crosshairs & Timestamp */}
        <div className="absolute top-2.5 left-3 font-mono text-[10px] text-zinc-500 z-10 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CAM-04 // JUNCTION_NORTH // 1080P</span>
        </div>

        {/* Animated Laser Scanline (Requirement 18: sweeps from top to bottom) */}
        {status === 'running' && (
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 1.3, ease: 'linear' }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_16px_#f59e0b] z-20 pointer-events-none"
          />
        )}

        {/* SVG Drawing Bounding Boxes (Requirement 18: stroke-dashoffset draw-in) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-15">
          {DETECTIONS.map((box) => {
            const isVisible = visibleBoxIds.includes(box.id);
            if (!isVisible) return null;

            return (
              <motion.rect
                key={box.id}
                x={`${box.x}%`}
                y={`${box.y}%`}
                width={`${box.w}%`}
                height={`${box.h}%`}
                rx="4"
                fill={box.fill}
                stroke={box.stroke}
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            );
          })}
        </svg>

        {/* Detected Labels Over Bounding Boxes */}
        <AnimatePresence>
          {DETECTIONS.map((box) => {
            const isVisible = visibleBoxIds.includes(box.id);
            if (!isVisible) return null;

            return (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                style={{
                  left: `${box.x}%`,
                  top: `${box.y}%`,
                  width: `${box.w}%`,
                  height: `${box.h}%`
                }}
                className="absolute pointer-events-none z-20"
              >
                {/* Confidence & Class Badge */}
                <div className={`absolute -top-5 left-0 px-1.5 py-0.5 rounded-t bg-black/90 font-mono text-[9px] font-bold tracking-wider flex items-center gap-1 border-t border-l border-r ${box.textClass}`}>
                  {box.priority && <ShieldAlert className="w-2.5 h-2.5 text-red-400 animate-bounce" />}
                  <span>{box.label}</span>
                  <span className="text-zinc-400 font-normal">
                    {statsActive ? (
                      box.confStr
                    ) : (
                      <AnimatedValue target={box.conf} decimals={1} suffix="%" duration={0.4} active={true} />
                    )}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Idle Overlay Placeholder */}
        {status === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] z-20 text-center">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-3">
              <Scan className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-zinc-200 mb-1">
              Ready to execute YOLOv8 Inference Simulation
            </p>
            <p className="text-[11px] font-mono text-zinc-400 max-w-sm">
              Simulates real-time vehicle classification, confidence scoring, and emergency preempt priority logic.
            </p>
          </div>
        )}

        {/* Scanning Overlay Indicator */}
        {status === 'running' && (
          <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/80 border border-amber-400/40 text-amber-400 font-mono text-[11px] z-20 flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 animate-spin" />
            <span>EXTRACTING_TENSORS...</span>
          </div>
        )}
      </div>

      {/* Control Bar & Feedback */}
      <div className="p-3.5 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between gap-3 flex-wrap">
        <div className="text-[11px] font-mono text-zinc-400 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>
            {status === 'complete'
              ? 'Status: 4 targets classified (1 Emergency Vehicle Preempt Triggered)'
              : status === 'running'
              ? 'Status: Scanning frames...'
              : 'Status: Standby'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {status !== 'complete' ? (
            <button
              onClick={runDetection}
              disabled={status === 'running'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-black font-semibold text-xs font-mono uppercase tracking-wider rounded-xl transition-all shadow-md shadow-amber-400/20 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>Run Detection</span>
            </button>
          ) : (
            <button
              onClick={resetDetection}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono uppercase tracking-wider rounded-xl border border-zinc-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>Reset Scanner</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
