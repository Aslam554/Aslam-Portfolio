import React, { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../projects.json";
import ProjectBox from "../components/ProjectBox";

// Shuffle utility
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Filters (Open Source removed)
const filters = [
  { label: "All", value: "all" },
  { label: "Web App", value: "Web App" },
  { label: "Full Stack", value: "Full Stack" },
  { label: "AI", value: "AI" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const shuffledProjects = shuffleArray([...projectsData.projects]);

  const filteredProjects =
    activeCategory === "all"
      ? shuffledProjects
      : shuffledProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-black text-white pt-24 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          My Projects 🚀
        </h2>
        <div className="w-20 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Real-world projects showcasing my dev skills
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveCategory(value)}
            className={`px-4 py-2 rounded-full capitalize text-sm font-medium transition-all border border-gray-700 ${
              activeCategory === value
                ? "bg-rose-600/30 text-rose-300 border-rose-400"
                : "text-gray-400 hover:bg-gray-700/50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((e, index) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <ProjectBox
              pic={e.pic}
              title={e.title}
              desc={e.desc}
              github={e.github}
              website={e.website}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
