"use client";

import React, { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { FaGithub, FaCodeBranch, FaStar, FaFolderOpen, FaUsers, FaArrowUpRightFromSquare, FaFire } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs } from "react-icons/si";

export default function GithubStats({ theme = "dark" }) {
  const [selectedYear, setSelectedYear] = useState("last");
  const [selectedDay, setSelectedDay] = useState(null);
  const [stats, setStats] = useState({
    publicRepos: 28,
    followers: 12,
    following: 15,
    stars: 14,
    forks: 8,
    loading: true,
  });

  const username = "Aslam554";

  useEffect(() => {
    // Fetch live stats from GitHub API with graceful fallback
    const fetchGithubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();

          let totalStars = 0;
          let totalForks = 0;

          if (Array.isArray(reposData)) {
            reposData.forEach((repo) => {
              totalStars += repo.stargazers_count || 0;
              totalForks += repo.forks_count || 0;
            });
          }

          setStats({
            publicRepos: userData.public_repos || 28,
            followers: userData.followers || 12,
            following: userData.following || 15,
            stars: totalStars || 14,
            forks: totalForks || 8,
            loading: false,
          });
        } else {
          setStats((prev) => ({ ...prev, loading: false }));
        }
      } catch (err) {
        console.error("GitHub API fetch error:", err);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchGithubData();
  }, [username]);

  // Classic GitHub Emerald Green palette
  const customTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#14151c", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  const topLanguages = [
    { name: "JavaScript / TypeScript", percent: "45%", color: "#f7df1e", icon: <SiJavascript className="text-[#f7df1e]" /> },
    { name: "React & Next.js", percent: "30%", color: "#61dafb", icon: <SiReact className="text-[#61dafb]" /> },
    { name: "Python / Node.js", percent: "15%", color: "#3776ab", icon: <SiPython className="text-[#3776ab]" /> },
    { name: "HTML/CSS & Tailwind", percent: "10%", color: "#38bdf8", icon: <SiNextdotjs className="text-zinc-400" /> },
  ];

  return (
    <section id="github-activity" className="py-16 px-6 md:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-emerald-500 uppercase font-semibold block mb-1">
              OPEN SOURCE & CONTRIBUTIONS
            </span>
            <h2 className="text-2xl font-bold font-sans text-zinc-900 dark:text-white tracking-tight flex items-center gap-2">
              <FaGithub className="text-zinc-900 dark:text-white text-xl" />
              GitHub Activity & Live Stats
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans mt-1">
              Real-time contribution calendar, public repositories, and open source activity.
            </p>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0d11] hover:border-emerald-500/50 dark:hover:border-emerald-400/50 text-zinc-800 dark:text-zinc-200 font-mono text-xs font-semibold transition-all duration-200 shadow-xs hover:shadow-sm w-fit"
          >
            <span>@{username}</span>
            <FaArrowUpRightFromSquare className="text-[10px] text-zinc-400" />
          </a>
        </div>

        {/* Bento Row 1: Live Profile Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Repositories", value: stats.publicRepos, icon: <FaFolderOpen className="text-emerald-500 text-sm" /> },
            { label: "Stars Earned", value: stats.stars, icon: <FaStar className="text-amber-400 text-sm" /> },
            { label: "Forks Created", value: stats.forks, icon: <FaCodeBranch className="text-emerald-500 text-sm" /> },
            { label: "Followers", value: stats.followers, icon: <FaUsers className="text-blue-500 text-sm" /> },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-850/70 bg-white/80 dark:bg-[#0c0d11]/80 shadow-xs hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider">
                  {card.label}
                </span>
                <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 flex items-center justify-center">
                  {card.icon}
                </div>
              </div>
              <div className="mt-3">
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 font-mono tracking-tight">
                  {card.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bento Row 2: Contribution Heatmap Card */}
        <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-850/70 bg-white/90 dark:bg-[#0c0d11]/90 shadow-xs space-y-4 overflow-hidden">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <FaFire className="text-emerald-500 text-sm animate-pulse" />
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-sans">
                Contribution Calendar
              </h3>
            </div>

            {/* Year Dropdown Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                Year:
              </span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-lg px-2.5 py-1 text-xs font-mono font-bold focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer shadow-xs"
              >
                <option value="last">Last 12 Months</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          {/* GitHub Calendar Container */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
            <div className="min-w-[650px] flex justify-center py-2">
              <GitHubCalendar
                username={username}
                year={selectedYear === "last" ? "last" : Number(selectedYear)}
                blockSize={11}
                blockMargin={4}
                fontSize={12}
                colorScheme={theme === "dark" ? "dark" : "light"}
                theme={customTheme}
                renderBlock={(block, activity) =>
                  React.cloneElement(block, {
                    onClick: () => setSelectedDay(activity),
                    style: { ...block.props.style, cursor: "pointer" }
                  })
                }
              />
            </div>
          </div>

          {/* Selected Day Info Badge */}
          {selectedDay ? (
            <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono transition-all">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold text-zinc-900 dark:text-zinc-100">
                  {new Date(selectedDay.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-lg">
                {selectedDay.count} {selectedDay.count === 1 ? "contribution" : "contributions"}
              </span>
            </div>
          ) : (
            <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono text-center pt-1">
              💡 Click any square on the calendar to view exact contributions for that day
            </p>
          )}
        </div>

        {/* Bento Row 3: Most Used Stack & Quick Repos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Top Languages Distribution */}
          <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-850/70 bg-white/90 dark:bg-[#0c0d11]/90 shadow-xs space-y-3.5">
            <h3 className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              Primary Code Languages
            </h3>
            <div className="space-y-2.5">
              {topLanguages.map((lang, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300">
                      {lang.icon}
                      {lang.name}
                    </span>
                    <span className="font-mono text-zinc-500 dark:text-zinc-400 text-[11px] font-semibold">
                      {lang.percent}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: lang.percent, backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Code Quick Link Banner */}
          <div className="p-5 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/20 flex flex-col justify-between space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 uppercase tracking-wider">
                Explore Codebase
              </div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-white font-sans">
                Check out my open-source repositories on GitHub
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                Including full-stack web applications, e-commerce portals, AI text editors, and EdTech platforms.
              </p>
            </div>

            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-indigo-500/25 active:scale-98 w-full sm:w-auto text-center"
            >
              <FaGithub className="text-sm" />
              View All Repositories on GitHub
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
