import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ADDITIONAL_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, FolderGit2, Search, Filter } from 'lucide-react';
import { Github } from '../components/Icons';

export function AdditionalProjects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = ADDITIONAL_PROJECTS.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.tech.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative py-20 sm:py-28 bg-[#09090b] overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <SectionHeader
            number="04"
            tag="LAB & EXPERIMENTS"
            title="MORE BUILDS & PROTOYPES"
            description="Exploratory projects, core object-oriented architectures, and experimental scripts."
          />

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search experiments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zinc-900/80 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* High-Density Responsive Table/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/70 hover:border-amber-400/40 hover:bg-zinc-900/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-amber-400/90" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                      {project.category}
                    </span>
                  </div>

                  <a
                    href={`${PERSONAL_INFO.github}/${project.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
                    aria-label={`GitHub repo for ${project.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <h3 className="text-base font-bold text-zinc-200 group-hover:text-amber-300 transition-colors">
                  {project.name}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  {project.tech}
                </span>

                <a
                  href={`${PERSONAL_INFO.github}/${project.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] font-mono text-amber-400/90 hover:text-amber-300 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  <span>Repo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
