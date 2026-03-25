import React, { useState } from "react";
import projectsData from "../projects.json";
import ProjectBox from "../components/ProjectBox";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projectsData.projects.map(p => p.category))];

  const filteredProjects = selectedCategory === "All"
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-l-4 border-brand-cyan pl-6">
          <div>
            <p className="text-brand-cyan font-bold tracking-widest text-xs mb-2 uppercase">Work</p>
            <h2 className="text-3xl md:text-4xl font-black">
              Full Stack & <span className="text-brand-gradient">AI Projects</span>
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  selectedCategory === cat 
                  ? "bg-brand-gradient text-white border-transparent shadow-lg shadow-brand-cyan/20" 
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-brand-cyan hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((e) => (
              <motion.div
                layout
                key={e.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectBox
                  pic={e.pic}
                  title={e.title}
                  desc={e.desc}
                  github={e.github}
                  website={e.website}
                  category={e.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
