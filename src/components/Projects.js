"use client";

import React, { useState } from "react";
import projectsData from "../data/projects.json";
import ProjectBox from "./ProjectBox";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Full Stack", "Web App", "AI"];

  const filteredProjects = selectedCategory === "All"
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 px-6 md:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-semibold block mb-1">
            FEATURED PROJECTS
          </span>
          <h2 className="text-2xl font-bold font-sans text-zinc-900 dark:text-white tracking-tight">
            Selected Works
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans mt-1">
            Production applications built with modern web technologies.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-sans rounded-xl transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white font-semibold shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((e) => (
            <ProjectBox
              key={e.id}
              pic={e.pic}
              title={e.title}
              desc={e.desc}
              github={e.github}
              website={e.website}
              category={e.category}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
