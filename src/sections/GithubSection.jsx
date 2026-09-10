import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitPullRequest, GitBranch, Star, Code2, ArrowUpRight, Terminal } from 'lucide-react';
import { Github } from '../components/Icons';

export function GithubSection() {
  const [profileData, setProfileData] = useState({
    public_repos: 15,
    followers: 10,
    following: 12,
    bio: 'Computer Science Engineering Student | Full Stack & AI Enthusiast'
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Graceful optional fetch from GitHub Public API with immediate fallback
    const fetchGitHub = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}`);
        if (res.ok) {
          const data = await res.json();
          setProfileData((prev) => ({
            ...prev,
            public_repos: data.public_repos ?? prev.public_repos,
            followers: data.followers ?? prev.followers,
            following: data.following ?? prev.following,
            bio: data.bio || prev.bio
          }));
        }
      } catch (err) {
        // Silently preserve resilient fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  return (
    <section className="relative py-24 sm:py-32 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          tag="OPEN SOURCE"
          title="OPEN SOURCE / BUILDS / EXPERIMENTS"
          description="A continuous stream of code commits, open-source repositories, and public technical artifacts."
        />

        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900/70 to-zinc-950 border border-zinc-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center text-amber-400">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-mono">
                    github.com/{PERSONAL_INFO.githubUsername}
                  </h3>
                  <p className="text-xs font-mono text-amber-400/90">
                    C R MOHUL RAM // ACTIVE REPOSITORIES
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                Every project, experiment, and hackathon build is committed openly.
                Explore the source code, review commit histories, and check out modular architectures directly.
              </p>

              {/* GitHub Metrics Row */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 font-mono text-xs text-zinc-300">
                  <span className="text-amber-400 font-bold mr-2">{profileData.public_repos}+</span>
                  <span className="text-zinc-500">Public Repositories</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 font-mono text-xs text-zinc-300">
                  <span className="text-emerald-400 font-bold mr-2">100%</span>
                  <span className="text-zinc-500">Public Code Access</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 font-mono text-xs text-zinc-300">
                  <span className="text-cyan-400 font-bold mr-2">10+</span>
                  <span className="text-zinc-500">Sprinted Builds</span>
                </div>
              </div>
            </div>

            {/* CTA Outlink Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-amber-400 hover:bg-amber-300 text-black font-semibold text-sm rounded-xl transition-all shadow-xl shadow-amber-400/20 hover:-translate-y-0.5"
              >
                <Github className="w-5 h-5" />
                <span>Visit mohul-inventions ↗</span>
              </a>

              <a
                href={`${PERSONAL_INFO.github}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider rounded-xl border border-zinc-800 transition-colors"
              >
                <span>Browse All Repos</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            </div>
          </div>

          {/* Aesthetic Heatmap Simulation */}
          <div className="mt-8 pt-6 border-t border-zinc-900 hidden sm:block">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-500">
              <span>CONTRIBUTION ACTIVITY MATRIX</span>
              <span>RECENT CYCLE</span>
            </div>
            <div className="grid grid-flow-col grid-rows-4 gap-1.5 overflow-x-auto pb-2">
              {Array.from({ length: 48 }).map((_, i) => {
                const opacityLevels = [
                  'bg-zinc-900',
                  'bg-zinc-800',
                  'bg-amber-950/60',
                  'bg-amber-600/40',
                  'bg-amber-500/80',
                  'bg-amber-400'
                ];
                // deterministic pseudo-pattern
                const level = (i * 7 + 3) % opacityLevels.length;
                return (
                  <div
                    key={i}
                    className={`w-3.5 h-3.5 rounded-sm ${opacityLevels[level]} transition-colors hover:ring-1 hover:ring-amber-400`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
