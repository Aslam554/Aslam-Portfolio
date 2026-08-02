"use client";

import React from 'react';
import { FaLinkedin, FaYoutube, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const Achievements = () => {
  const achievements = [
    { 
      id: "twitter",
      icon: <FaXTwitter className="text-zinc-900 dark:text-white text-xl" />, 
      title: "X (Twitter)",
      handle: "@aslambeg84",
      highlight: "@aslambeg84",
      subHighlight: "Tech Content & Engineering",
      description: "Sharing tech thoughts, full-stack web engineering insights, and daily developer updates.", 
      category: "Social & Tech",
      url: "https://x.com/aslambeg84",
      accentBg: "bg-zinc-500/5",
      accentBorder: "hover:border-zinc-400 dark:hover:border-zinc-500",
      badgeColor: "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700"
    },
    { 
      id: "linkedin",
      icon: <FaLinkedin className="text-[#0A66C2] text-xl" />, 
      title: "LinkedIn Influence",
      handle: "@aslambeg",
      highlight: "11K+ Followers",
      subHighlight: "4.2M+ Impression Reach",
      description: "Sharing insights on web engineering, system design, modern JS frameworks & career growth.", 
      category: "Professional",
      url: "https://www.linkedin.com/in/mirza-aslam-beg-8347661ab/",
      accentBg: "bg-blue-500/5",
      accentBorder: "hover:border-blue-500/50 dark:hover:border-blue-400/50",
      badgeColor: "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border-blue-500/20"
    },
    { 
      id: "youtube",
      icon: <FaYoutube className="text-[#FF0000] text-xl" />, 
      title: "YouTube Educator",
      handle: "@aslamcoding",
      highlight: "Aslam Coding",
      subHighlight: "Mentorship & Tutorials",
      description: "Mentoring student coders on data structures, web development, projects & internships.", 
      category: "Mentorship",
      url: "https://www.youtube.com/@aslamcoding",
      accentBg: "bg-red-500/5",
      accentBorder: "hover:border-red-500/50 dark:hover:border-red-400/50",
      badgeColor: "bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 border-red-500/20"
    }
  ];

  return (
    <section id="achievements" className="py-16 px-6 md:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-semibold block mb-1">
            COMMUNITY & RECOGNITION
          </span>
          <h2 className="text-2xl font-bold font-sans text-zinc-900 dark:text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans mt-1">
            Community presence, content creation, and developer reach across platforms.
          </p>
        </div>

        {/* 3 Bento Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
          {achievements.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-850/70 bg-white/90 dark:bg-[#0c0d11]/90 ${item.accentBorder} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden cursor-pointer`}
            >
              {/* Top Accent Hover Overlay */}
              <div className={`absolute inset-0 ${item.accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative z-10 space-y-3">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.category}
                  </span>
                </div>

                {/* Main Highlight Title */}
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white font-sans tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {item.highlight}
                    </h3>
                    <FaArrowUpRightFromSquare className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                  </div>
                  <p className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {item.subHighlight}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans pt-1">
                  {item.description}
                </p>
              </div>

              {/* Footer Row */}
              <div className="relative z-10 mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-850/60 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-zinc-800 dark:text-zinc-200">
                  {item.handle}
                </span>
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono tracking-wider font-bold flex items-center gap-1 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Verified
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
