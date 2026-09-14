import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Cpu, Scan, CheckCircle, ShieldAlert, Sparkles, Activity } from 'lucide-react';

const DETECTIONS = [
  { id: 'd1', label: 'CAR', conf: '98.4%', x: 18, y: 38, w: 22, h: 26, color: 'border-amber-400 text-amber-400 bg-amber-400/10' },
  { id: 'd2', label: 'BUS', conf: '94.8%', x: 44, y: 22, w: 26, h: 42, color: 'border-cyan-400 text-cyan-400 bg-cyan-400/10' },
  { id: 'd3', label: 'MOTORCYCLE', conf: '91.7%', x: 74, y: 48, w: 14, h: 22, color: 'border-emerald-400 text-emerald-400 bg-emerald-400/10' },
  { id: 'd4', label: 'AMBULANCE [PRIORITY OVERRIDE]', conf: '99.2%', x: 14, y: 68, w: 32, h: 24, color: 'border-red-400 text-red-400 bg-red-500/10', priority: true },
  { id: 'd5', label: 'CAR', conf: '96.1%', x: 62, y: 72, w: 20, h: 22, color: 'border-amber-400 text-amber-400 bg-amber-400/10' }
];

export function AIVisionPlayground({ playClick }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'scanning' | 'detected'

  const runDetection = () => {
    if (playClick) playClick();
    setStatus('scanning');
    setTimeout(() => {
      setStatus('detected');
    }, 1200);
  };

  const resetDetection = () => {
    if (playClick) playClick();
    setStatus('idle');
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
          <span>FPS: <strong className="text-emerald-400">{status === 'detected' ? '31.4' : '0.0'}</strong></span>
          <span className="text-zinc-600">•</span>
          <span>Latency: <strong className="text-amber-400">{status === 'detected' ? '28ms' : '--'}</strong></span>
        </div>
      </div>

      {/* Simulated Video Frame Viewport */}
      <div className="relative aspect-[16/9] w-full bg-[#07070a] overflow-hidden select-none">
        {/* Stylized Overhead Urban Road Grid Graphic */}
        <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
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

        {/* Animated Laser Scanline (Feature 10 spec) */}
        {status === 'scanning' && (
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 1.1, ease: 'linear' }}
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_#f59e0b] z-20"
          />
        )}

        {/* Detected Bounding Boxes (Feature 10 spec) */}
        <AnimatePresence>
          {status === 'detected' &&
            DETECTIONS.map((box, i) => (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.12 }}
                style={{
                  left: `${box.x}%`,
                  top: `${box.y}%`,
                  width: `${box.w}%`,
                  height: `${box.h}%`
                }}
                className={`absolute border-2 rounded-sm pointer-events-none z-10 transition-all ${box.color}`}
              >
                {/* Confidence & Class Badge */}
                <div className="absolute -top-5 left-0 px-1.5 py-0.5 rounded-t bg-black/90 font-mono text-[9px] font-bold tracking-wider flex items-center gap-1 border-t border-l border-r border-current">
                  {box.priority && <ShieldAlert className="w-2.5 h-2.5 text-red-400 animate-bounce" />}
                  <span>{box.label}</span>
                  <span className="text-zinc-400 font-normal">{box.conf}</span>
                </div>
              </motion.div>
            ))}
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
        {status === 'scanning' && (
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
            {status === 'detected'
              ? 'Status: 5 vehicles identified (1 Emergency Vehicle Flagged for Priority)'
              : status === 'scanning'
              ? 'Status: Scanning frames...'
              : 'Status: Standby'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {status !== 'detected' ? (
            <button
              onClick={runDetection}
              disabled={status === 'scanning'}
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
