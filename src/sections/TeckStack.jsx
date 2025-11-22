import React, { useState } from "react";
import { motion } from "framer-motion";

// Import react-icons
import {
  FaReact,
  FaNode,
  FaPython,
  FaGitAlt,
  FaJs,
  FaDatabase,
 
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { SiCplusplus, SiC, SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const iconMap = {
  "React.js": <FaReact className="text-blue-400 text-4xl md:text-5xl" />,
  "NodeJS": <FaNode className="text-green-500 text-4xl md:text-5xl" />,
  "Express": <SiExpress className="text-white text-4xl md:text-5xl" />,
  "Python": <FaPython className="text-yellow-400 text-4xl md:text-5xl" />,
  "Javascript": <FaJs className="text-yellow-300 text-4xl md:text-5xl" />,
  "TypeScript": <FaJs className="text-blue-400 text-4xl md:text-5xl" />,
  "Java": <FaJava className="text-red-400 text-4xl md:text-5xl" />,
  "C++": <SiCplusplus className="text-blue-300 text-4xl md:text-5xl" />,
  "C": <SiC className="text-gray-300 text-4xl md:text-5xl" />,
  "HTML": <FaHtml5 className="text-orange-500 text-4xl md:text-5xl" />,
  "CSS": <FaCss3Alt className="text-blue-500 text-4xl md:text-5xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-4xl md:text-5xl" />,
  "Bootstrap": <FaBootstrap className="text-purple-400 text-4xl md:text-5xl" />,
  "Git/Github": <FaGitAlt className="text-orange-400 text-4xl md:text-5xl" />,
  "Postman": <SiPostman className="text-orange-500 text-4xl md:text-5xl" />,
  "MongoDB": <SiMongodb className="text-green-400 text-4xl md:text-5xl" />,
  "Databases": <FaDatabase className="text-gray-300 text-4xl md:text-5xl" />,
  
};

// Tags for filters
const filters = [
  { label: "All", value: "all" },
  { label: "Programming", value: "programming" },
  { label: "Web Dev", value: "webdev" },
  { label: "Tools", value: "tools" },
];

// Tech Stack JSON — Add category field here
const techStack = [
  { id: 1, key: "C", category: "programming" },
  { id: 2, key: "C++", category: "programming" },
  { id: 3, key: "Java", category: "programming" },
  { id: 4, key: "Python", category: "programming" },
  { id: 5, key: "React.js", category: "webdev" },
  { id: 6, key: "NodeJS", category: "webdev" },
  { id: 7, key: "Express", category: "webdev" },
  { id: 8, key: "HTML", category: "webdev" },
  { id: 9, key: "CSS", category: "webdev" },
  { id: 10, key: "Javascript", category: "programming" },
  { id: 11, key: "Tailwind CSS", category: "webdev" },
  { id: 12, key: "Bootstrap", category: "webdev" },
  { id: 13, key: "Postman", category: "tools" },
  { id: 14, key: "MongoDB", category: "tools" },
  { id: 15, key: "Git/Github", category: "tools" },
  
];

export default function TeckStack() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = techStack.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section className="bg-black text-white pt-24 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          My Tech Stack 💻
        </h2>
        <div className="w-20 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Tools & Technologies I use regularly
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

      {/* Tech Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {filtered.map((tech, index) => (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-white/10 p-5 shadow-md hover:shadow-xl backdrop-blur-lg hover:border-rose-400 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="mb-3">{iconMap[tech.key]}</div>
              <p className="text-sm text-white font-semibold group-hover:text-rose-300 transition">
                {tech.key}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
