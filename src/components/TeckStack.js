"use client";

import React, { useState } from "react";
import { FaReact, FaNode, FaGithub, FaGitAlt, FaJava, FaDatabase, FaChartLine } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiPostman,
  SiFastapi,
  SiFlask,
  SiNumpy,
  SiPandas
} from "react-icons/si";

export default function TeckStack({ theme }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const categories = ["All", "Frontend", "Backend", "Data Science & Python", "Databases & Cloud", "Languages & Tools"];

  const skills = [
    { name: "JavaScript", category: "Languages & Tools", icon: <SiJavascript className="text-[#F7DF1E] text-sm" />, color: "#F7DF1E" },
    { name: "TypeScript", category: "Languages & Tools", icon: <SiTypescript className="text-[#3178C6] text-sm" />, color: "#3178C6" },
    { name: "Python", category: "Languages & Tools", icon: <SiPython className="text-[#3776AB] text-sm" />, color: "#3776AB" },
    { name: "Java", category: "Languages & Tools", icon: <FaJava className="text-[#E76F00] text-sm" />, color: "#E76F00" },
    { name: "C++", category: "Languages & Tools", icon: <SiCplusplus className="text-[#00599C] text-sm" />, color: "#00599C" },
    
    { name: "React.js", category: "Frontend", icon: <FaReact className="text-[#61DAFB] text-sm" />, color: "#61DAFB" },
    { name: "Next.js", category: "Frontend", icon: <SiNextdotjs className="text-zinc-900 dark:text-white text-sm" />, color: "#888888" },
    { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss className="text-[#38BDF8] text-sm" />, color: "#38BDF8" },
    
    { name: "FastAPI", category: "Backend", icon: <SiFastapi className="text-[#009688] text-sm" />, color: "#009688" },
    { name: "Flask", category: "Backend", icon: <SiFlask className="text-zinc-800 dark:text-zinc-200 text-sm" />, color: "#000000" },
    { name: "Node.js", category: "Backend", icon: <FaNode className="text-[#339933] text-base" />, color: "#339933" },
    { name: "Express.js", category: "Backend", icon: <SiExpress className="text-[#828282] text-sm" />, color: "#828282" },
    
    { name: "NumPy", category: "Data Science & Python", icon: <SiNumpy className="text-[#4D77CF] text-sm" />, color: "#4D77CF" },
    { name: "Pandas", category: "Data Science & Python", icon: <SiPandas className="text-[#E70488] text-sm" />, color: "#E70488" },
    { name: "Matplotlib", category: "Data Science & Python", icon: <FaChartLine className="text-[#38BDF8] text-sm" />, color: "#38BDF8" },

    { name: "MongoDB", category: "Databases & Cloud", icon: <SiMongodb className="text-[#47A248] text-sm" />, color: "#47A248" },
    { name: "PostgreSQL", category: "Databases & Cloud", icon: <SiPostgresql className="text-[#4169E1] text-sm" />, color: "#4169E1" },
    { name: "MySQL", category: "Databases & Cloud", icon: <SiMysql className="text-[#4479A1] text-sm" />, color: "#4479A1" },
    { name: "Redis", category: "Databases & Cloud", icon: <SiRedis className="text-[#DC382D] text-sm" />, color: "#DC382D" },
    
    { name: "VS Code", category: "Languages & Tools", icon: <VscVscode className="text-[#007ACC] text-sm" />, color: "#007ACC" },
    { name: "Git", category: "Languages & Tools", icon: <FaGitAlt className="text-[#F05032] text-sm" />, color: "#F05032" },
    { name: "GitHub", category: "Languages & Tools", icon: <FaGithub className="text-zinc-900 dark:text-white text-sm" />, color: "#AAAAAA" },
    { name: "Postman", category: "Languages & Tools", icon: <SiPostman className="text-[#FF6C37] text-sm" />, color: "#FF6C37" }
  ];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="tech-stack" className="py-16 px-6 md:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-semibold block mb-1">
            TECH STACK & TOOLS
          </span>
          <h2 className="text-2xl font-bold font-sans text-zinc-900 dark:text-white tracking-tight">
            Technologies I Master
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans mt-1">
            Languages, frameworks, and database architectures powering my projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 text-xs font-sans rounded-lg transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white font-medium shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="flex flex-wrap items-center gap-2.5 max-w-3xl">
          {filteredSkills.map((skill, index) => {
            const isHovered = hoveredIdx === index;
            const glowColor = skill.color;
            
            const itemStyle = {
              borderColor: isHovered ? glowColor : `${glowColor}25`,
              boxShadow: isHovered 
                ? `0 0 16px ${glowColor}30` 
                : `0 0 8px ${glowColor}05`,
              backgroundColor: isHovered 
                ? `${glowColor}0d` 
                : undefined,
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
            };

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={itemStyle}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border bg-white dark:bg-[#0c0d11] text-zinc-800 dark:text-white shadow-xs cursor-default font-sans text-xs"
              >
                <div className="flex items-center justify-center shrink-0">
                  {skill.icon}
                </div>
                <span className="font-medium select-none">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
