"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectBox({ pic, title, desc, github, website, category }) {
  const mockFilename = `${title.toLowerCase().replace(/[^a-z0-9]/g, "")}.app`;
  const primaryLink = website || github;

  return (
    <div className="group relative flex flex-col justify-between border border-zinc-200/80 dark:border-zinc-850/70 rounded-2xl overflow-hidden bg-white dark:bg-[#0c0d11] hover:border-indigo-500/40 dark:hover:border-indigo-400/40 hover:shadow-xl transition-all duration-300">
      
      {/* macOS Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200/60 dark:border-zinc-850/50 bg-zinc-50 dark:bg-[#0f1015] select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
        </div>
        <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-medium">
          {mockFilename}
        </span>
        <span className="text-[9px] uppercase font-mono tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded-md font-semibold border border-indigo-500/20">
          {category}
        </span>
      </div>

      {/* Project Image Viewport (Clickable link to site) */}
      <a 
        href={primaryLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative block h-44 sm:h-48 overflow-hidden bg-zinc-950 border-b border-zinc-200/40 dark:border-zinc-850/30 group/img cursor-pointer"
      >
        <img
          src={`/projectsnap/${pic}`}
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-500 ease-out"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
          }}
        />
      </a>

      {/* Card Content & Action Buttons */}
      <div className="flex flex-col justify-between flex-grow p-5 space-y-4">
        <div>
          <a
            href={primaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer"
          >
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 font-sans flex items-center gap-1.5">
              <span>{title}</span>
            </h3>
          </a>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-xs leading-relaxed line-clamp-3 font-sans">
            {desc}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-2 font-sans pt-1">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] uppercase font-bold tracking-wider text-center hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-zinc-900 dark:hover:text-white transition-all duration-200"
            >
              <FaGithub className="text-[11px]" /> Source Code
            </a>
          )}
          
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-wider text-center active:scale-95 transition-all duration-200 shadow-sm"
            >
              <FaExternalLinkAlt className="text-[9px]" /> Live Demo
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
