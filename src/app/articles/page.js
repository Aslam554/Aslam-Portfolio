"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft, FaMagnifyingGlass, FaArrowUpRightFromSquare, FaBookOpen, FaLinkedin, FaEye, FaClock } from "react-icons/fa6";
import { FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Sun, Moon } from "lucide-react";
import articlesData from "@/data/articles.json";

export default function ArticlesPage() {
  const [theme, setTheme] = useState("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [readsMap, setReadsMap] = useState({});

  useEffect(() => {
    const savedTheme = localStorage.getItem("aslam_theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.add("dark");
    }

    // Load persisted reads count
    const savedMap = {};
    articlesData.articles.forEach((art) => {
      const savedCount = localStorage.getItem(`aslam_article_reads_${art.id}`);
      savedMap[art.id] = savedCount ? parseInt(savedCount, 10) : art.baseReads;
    });
    setReadsMap(savedMap);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("aslam_theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleArticleClick = (artId) => {
    setReadsMap((prevMap) => {
      const currentReads = prevMap[artId] || 0;
      const newReads = currentReads + 1;
      localStorage.setItem(`aslam_article_reads_${artId}`, newReads.toString());
      return { ...prevMap, [artId]: newReads };
    });
  };

  const categories = ["All", "Medium", "X Threads", "LinkedIn", "Blog"];

  const filteredArticles = articlesData.articles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      activeCategory === "All" ||
      (activeCategory === "Medium" && art.platform === "Medium") ||
      (activeCategory === "X Threads" && art.platform === "X Thread") ||
      (activeCategory === "LinkedIn" && art.platform === "LinkedIn") ||
      (activeCategory === "Blog" && art.platform === "Aslam Blog");

    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articlesData.articles[0];

  const getPlatformBadge = (platform) => {
    switch (platform) {
      case "Medium":
        return {
          icon: <FaMediumM className="text-black dark:text-white text-xs" />,
          label: "Medium",
          style: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700"
        };
      case "X Thread":
        return {
          icon: <FaXTwitter className="text-zinc-900 dark:text-white text-xs" />,
          label: "X Thread",
          style: "bg-zinc-900/10 dark:bg-zinc-100/10 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700"
        };
      case "LinkedIn":
        return {
          icon: <FaLinkedin className="text-[#0A66C2] text-xs" />,
          label: "LinkedIn",
          style: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
        };
      default:
        return {
          icon: <FaBookOpen className="text-indigo-500 text-xs" />,
          label: "Tech Blog",
          style: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
        };
    }
  };

  return (
    <div className="w-full min-h-screen bg-mesh-pattern bg-[#fcfcfd] text-zinc-900 dark:bg-[#08080a] dark:text-zinc-50 transition-colors duration-300 relative">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-3.5 pointer-events-none">
        <div className="max-w-4xl mx-auto flex items-center justify-between pointer-events-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/80 dark:bg-[#0c0d11]/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shadow-xs"
          >
            <FaArrowLeft className="text-xs" /> Back to Portfolio
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/80 dark:bg-[#0c0d11]/80 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer shadow-xs"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} className="text-amber-400" />}
          </button>
        </div>
      </header>

      {/* Main Articles Container */}
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 space-y-10">
        
        {/* Page Title & Subtitle */}
        <div className="space-y-3 text-center sm:text-left">
          <span className="inline-block text-[10px] font-mono tracking-widest text-indigo-500 dark:text-indigo-400 uppercase font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            TECHNICAL PUBLICATIONS & THOUGHTS
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-sans">
            Articles & Writing
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
            Deep-dives on web engineering, system architecture, database optimization, and modern developer tooling by Mirza Aslam Beg.
          </p>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2 bg-white/70 dark:bg-[#0c0d11]/70 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl shadow-xs">
          
          {/* Search Box */}
          <div className="relative w-full sm:w-72 flex items-center">
            <FaMagnifyingGlass className="absolute left-3.5 text-zinc-400 text-xs" />
            <input
              type="text"
              placeholder="Search articles or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 text-xs font-sans placeholder-zinc-400 border border-transparent focus:border-indigo-500/50 focus:outline-none transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 w-full sm:w-auto justify-start sm:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white font-bold shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Featured Article Card (Shown when not searching) */}
        {!searchQuery && activeCategory === "All" && featuredArticle && (
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
              Featured Article
            </span>
            <a
              href={featuredArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleArticleClick(featuredArticle.id)}
              className="group relative flex flex-col md:flex-row items-stretch gap-6 p-6 rounded-3xl border border-indigo-500/20 dark:border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 via-white dark:via-[#0c0d11] to-purple-500/5 transition-all duration-300 hover:shadow-2xl hover:border-indigo-500/50 overflow-hidden cursor-pointer"
            >
              {/* Featured Banner Image */}
              <div className="w-full md:w-1/2 h-52 md:h-auto rounded-2xl overflow-hidden relative shrink-0 border border-zinc-200 dark:border-zinc-800">
                <img
                  src={featuredArticle.banner}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-3 py-1 rounded-lg border backdrop-blur-md bg-zinc-950/80 text-white border-white/20">
                    <FaBookOpen className="text-indigo-400 text-xs" /> Featured Read
                  </span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="flex flex-col justify-between space-y-4 md:w-1/2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                      {featuredArticle.date}
                    </span>
                    <FaArrowUpRightFromSquare className="text-xs text-zinc-400 group-hover:text-indigo-500 transition-colors" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white font-sans tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    {featuredArticle.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded-md">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <FaEye className="text-xs" />
                    {(readsMap[featuredArticle.id] || featuredArticle.baseReads).toLocaleString()}+ reads
                  </span>
                </div>
              </div>
            </a>
          </div>
        )}

        {/* Articles Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              {filteredArticles.length} {filteredArticles.length === 1 ? "Article" : "Articles"} Found
            </h2>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="p-12 text-center border border-dashed border-zinc-300 dark:border-zinc-800 rounded-2xl space-y-2">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-sans">No articles matching your search query.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="text-xs font-mono text-indigo-500 hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
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
                      <div className="relative w-full h-40 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800">
                        <img
                          src={art.banner}
                          alt={art.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        {/* Platform Badge */}
                        <div className="absolute top-2.5 left-2.5">
                          <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg border backdrop-blur-md shadow-xs ${badge.style}`}>
                            {badge.icon}
                            {badge.label}
                          </span>
                        </div>

                        {/* Date Tag */}
                        <div className="absolute bottom-2.5 right-2.5">
                          <span className="text-[10px] font-mono text-white/90 bg-zinc-950/70 backdrop-blur-md px-2 py-0.5 rounded-md font-semibold">
                            {art.date}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
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

                    {/* Card Footer */}
                    <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-850/60 flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5">
                        {art.tags.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded-md">
                            #{t}
                          </span>
                        ))}
                      </div>

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
          )}
        </div>

      </main>
    </div>
  );
}
