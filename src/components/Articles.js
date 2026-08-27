"use client";

import React, { useState, useEffect } from "react";
import { FaArrowUpRightFromSquare, FaBookOpen, FaLinkedin, FaEye, FaClock } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import initialArticlesData from "../data/articles.json";

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [readsMap, setReadsMap] = useState({});

  useEffect(() => {
    // Load persisted reads count from localStorage
    const savedMap = {};
    initialArticlesData.articles.forEach((art) => {
      const savedCount = localStorage.getItem(`aslam_article_reads_${art.id}`);
      savedMap[art.id] = savedCount ? parseInt(savedCount, 10) : art.baseReads;
    });
    setReadsMap(savedMap);
  }, []);

  const handleArticleClick = (artId) => {
    setReadsMap((prevMap) => {
      const currentReads = prevMap[artId] || 0;
      const newReads = currentReads + 1;
      localStorage.setItem(`aslam_article_reads_${artId}`, newReads.toString());
      return { ...prevMap, [artId]: newReads };
    });
  };

  const categories = ["All", "Medium", "X Threads"];

  const filteredArticles = initialArticlesData.articles.filter((art) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Medium") return art.platform === "Medium";
    if (activeCategory === "X Threads") return art.platform === "X Thread";
    return true;
  });

  const getPlatformBadge = (platform) => {
    switch (platform) {
      case "Medium":
        return {
          icon: <FaMediumM className="text-black dark:text-white text-xs" />,
          label: "Medium",
          style: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700"
        };
      default:
        return {
          icon: <FaXTwitter className="text-zinc-900 dark:text-white text-xs" />,
          label: "X Thread",
          style: "bg-zinc-900/10 dark:bg-zinc-100/10 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700"
        };
    }
  };

  return (
    <section id="articles" className="py-16 px-6 md:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-semibold block mb-1">
              WRITING & THOUGHTS
            </span>
            <h2 className="text-2xl font-bold font-sans text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
              Featured Articles & Insights
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans mt-1">
              Tech guides, system architecture breakdowns, and industry insights.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white dark:bg-[#121319] text-zinc-950 dark:text-white shadow-xs font-bold"
                    : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredArticles.map((art) => {
            const badge = getPlatformBadge(art.platform);
            const readsCount = readsMap[art.id] || art.baseReads;

            return (
              <a
                key={art.id}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleArticleClick(art.id)}
                className="group relative flex flex-col justify-between p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-850/70 bg-white/90 dark:bg-[#0c0d11]/90 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer"
              >
                <div className="space-y-3.5">
                  {/* Article Banner Image */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800">
                    <img
                      src={art.banner}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Platform Badge Overlay */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border backdrop-blur-md shadow-xs ${badge.style}`}>
                        {badge.icon}
                        {badge.label}
                      </span>
                    </div>

                    {/* Date Tag Overlay */}
                    <div className="absolute bottom-2.5 right-2.5">
                      <span className="text-[10px] font-mono text-white/90 bg-zinc-950/70 backdrop-blur-md px-2 py-0.5 rounded-md font-semibold">
                        {art.date}
                      </span>
                    </div>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-sans tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                      <FaArrowUpRightFromSquare className="text-xs text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1" />
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer Meta Info */}
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-850/60 flex items-center justify-between text-xs font-mono">
                  {/* Tags */}
                  <div className="flex items-center gap-1.5">
                    {art.tags.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded-md">
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Read Time & Live Read Counter */}
                  <div className="flex items-center gap-3 text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[10px] text-indigo-500" />
                      {art.readTime}
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                      <FaEye className="text-[10px]" />
                      {readsCount.toLocaleString()}+ reads
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
