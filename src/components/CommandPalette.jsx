import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Terminal, 
  ArrowRight, 
  FileText, 
  Mail, 
  FolderGit2, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Command, 
  Layers, 
  Home, 
  User, 
  Code2, 
  Trophy, 
  Milestone, 
  Award, 
  X, 
  Check 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export function CommandPalette({
  isOpen,
  onClose,
  mode,
  setMode,
  soundEnabled,
  toggleSound,
  playClick,
  playOpen,
  onOpenResume,
  onTriggerMatrix
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [terminalOutput, setTerminalOutput] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      if (playOpen) playOpen();
      setQuery('');
      setSelectedIndex(0);
      setTerminalOutput(null);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen, playOpen]);

  // Handle global shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(false); // handled by parent toggler
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const scrollToSection = (id) => {
    onClose();
    if (playClick) playClick();
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Commands Definition
  const baseCommands = useMemo(() => [
    // Section Jumps
    { id: 'home', category: 'Navigation', label: 'Home', icon: Home, action: () => scrollToSection('home'), shortcut: 'H' },
    { id: 'about', category: 'Navigation', label: 'About Mohul', icon: User, action: () => scrollToSection('about'), shortcut: 'A' },
    { id: 'projects', category: 'Navigation', label: 'Featured Projects', icon: Layers, action: () => scrollToSection('projects'), shortcut: 'P' },
    { id: 'skills', category: 'Navigation', label: 'Tech Stack & Skills', icon: Code2, action: () => scrollToSection('skills'), shortcut: 'S' },
    { id: 'hackathons', category: 'Navigation', label: 'Hackathons & Competitions', icon: Trophy, action: () => scrollToSection('hackathons') },
    { id: 'journey', category: 'Navigation', label: 'Journey & Experience', icon: Milestone, action: () => scrollToSection('journey') },
    { id: 'certifications', category: 'Navigation', label: 'Certifications & Honors', icon: Award, action: () => scrollToSection('certifications') },
    { id: 'contact', category: 'Navigation', label: 'Contact Transmission', icon: Mail, action: () => scrollToSection('contact'), shortcut: 'C' },

    // Actions
    {
      id: 'resume',
      category: 'Actions',
      label: 'Open Quick Dossier / Resume',
      icon: FileText,
      action: () => {
        onClose();
        if (playClick) playClick();
        if (onOpenResume) onOpenResume();
      }
    },
    {
      id: 'copy-email',
      category: 'Actions',
      label: copiedEmail ? 'Email Copied!' : 'Copy Email Address',
      icon: copiedEmail ? Check : Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        setCopiedEmail(true);
        if (playClick) playClick();
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    },
    {
      id: 'github',
      category: 'External',
      label: 'Visit GitHub Profile',
      icon: Github,
      action: () => {
        if (playClick) playClick();
        window.open(PERSONAL_INFO.github, '_blank');
      }
    },
    {
      id: 'linkedin',
      category: 'External',
      label: 'Connect on LinkedIn',
      icon: Linkedin,
      action: () => {
        if (playClick) playClick();
        window.open(PERSONAL_INFO.linkedin, '_blank');
      }
    },
    {
      id: 'craft',
      category: 'External',
      label: 'Visit CRAFT Club (Council for Real-world Applications)',
      icon: Sparkles,
      action: () => {
        if (playClick) playClick();
        window.open('https://craft.ncamrita.in/', '_blank');
      }
    },
    {
      id: 'mode',
      category: 'System',
      label: mode === 'system' ? 'Switch to Human Mode' : 'Switch to System Diagnostics Mode',
      icon: Terminal,
      action: () => {
        if (playClick) playClick();
        setMode((prev) => (prev === 'human' ? 'system' : 'human'));
      },
      shortcut: 'S'
    },
    {
      id: 'sound',
      category: 'System',
      label: soundEnabled ? 'Mute Sound FX' : 'Enable Subtle UI Sound FX',
      icon: soundEnabled ? VolumeX : Volume2,
      action: () => {
        toggleSound();
        if (playClick) playClick();
      }
    }
  ], [mode, setMode, soundEnabled, toggleSound, playClick, copiedEmail, onOpenResume]);

  // Handle Easter Eggs when query exactly matches commands
  const handleEasterEgg = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (cleanCmd === 'clear') {
      setTerminalOutput(null);
      setQuery('');
      return true;
    }
    if (cleanCmd === 'sudo hire mohul') {
      setTerminalOutput({
        type: 'hire',
        title: 'TRANSMISSION_ACCEPTED',
        content: `✓ Request received.\n\nMohul is ready to build.\nLet's create something meaningful.`
      });
      return true;
    }
    if (cleanCmd === 'neofetch') {
      setTerminalOutput({
        type: 'neofetch',
        title: 'mohul@system-arch: ~',
        stats: {
          OS: 'Portfolio OS v2.4 (x86_64)',
          Host: 'Amrita Vishwa Vidyapeetham',
          Role: 'Computer Science Engineer & Full Stack Dev',
          Kernel: '2.0.26-build-prod',
          Uptime: '2nd Year Undergraduate (2024–2028)',
          Shell: 'zsh / react 19.2 + vite 8',
          Leadership: 'Operations Coordinator @ CRAFT',
          Focus: 'AI Systems, Computer Vision, Web Runtimes',
          Terminal: 'Dev HUD / Linear-inspired'
        }
      });
      return true;
    }
    if (cleanCmd === 'matrix') {
      onClose();
      if (onTriggerMatrix) onTriggerMatrix();
      return true;
    }
    return false;
  };

  // Filter commands by query
  const filteredCommands = useMemo(() => {
    if (!query) return baseCommands;
    const q = query.toLowerCase();
    return baseCommands.filter(
      (cmd) => cmd.label.toLowerCase().includes(q) || cmd.category.toLowerCase().includes(q)
    );
  }, [query, baseCommands]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Check for typed easter eggs first
      if (handleEasterEgg(query)) return;

      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length));
      if (playClick) playClick();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      if (playClick) playClick();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-zinc-950/95 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-2xl z-10 flex flex-col max-h-[80vh]"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-800">
            <Search className="w-4 h-4 text-amber-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search sections, commands, or type 'neofetch', 'matrix'..."
              className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-sans"
            />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  setTerminalOutput(null);
                }}
                className="text-zinc-500 hover:text-zinc-300 p-1 rounded"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded">
              <span>ESC</span>
            </div>
          </div>

          {/* Terminal Output Banner (if Easter Egg triggered) */}
          {terminalOutput && (
            <div className="p-4 bg-black/90 border-b border-zinc-800 font-mono text-xs">
              <div className="flex items-center justify-between text-[11px] text-amber-400 mb-2 border-b border-zinc-800 pb-1">
                <span>{terminalOutput.title}</span>
                <button
                  onClick={() => setTerminalOutput(null)}
                  className="text-zinc-500 hover:text-white"
                >
                  [clear]
                </button>
              </div>
              {terminalOutput.type === 'hire' ? (
                <div className="text-emerald-400 whitespace-pre-line leading-relaxed font-semibold">
                  {terminalOutput.content}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-zinc-400">
                  {Object.entries(terminalOutput.stats).map(([k, v]) => (
                    <div key={k} className="flex items-baseline gap-1.5">
                      <span className="text-amber-400/90 font-medium">{k}:</span>
                      <span className="text-zinc-200 truncate">{v}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Commands List */}
          <div className="overflow-y-auto p-2 space-y-1 flex-1">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-xs font-mono text-zinc-500 mb-2">No matching command found.</p>
                <p className="text-[11px] text-amber-400/80 font-mono">
                  Tip: Press Enter to run <span className="underline">'{query}'</span> as a terminal command!
                </p>
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                const Icon = cmd.icon;

                return (
                  <div
                    key={cmd.id}
                    onClick={() => cmd.action()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? 'bg-amber-400/10 text-amber-300 border border-amber-400/30'
                        : 'text-zinc-300 hover:bg-zinc-900/60 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-amber-400 text-black' : 'bg-zinc-900 text-zinc-400'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium font-sans">{cmd.label}</span>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">{cmd.category}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {cmd.shortcut && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500">
                          {cmd.shortcut}
                        </span>
                      )}
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-0.5 text-amber-400' : 'text-zinc-600'}`} />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2.5 bg-zinc-900/40 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>•</span>
              <span>↵ to select</span>
              <span>•</span>
              <span>esc to exit</span>
            </div>
            <span className="text-amber-400/80 font-semibold">MOHUL.DEV</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
