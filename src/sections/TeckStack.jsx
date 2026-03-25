import React, { useState } from "react";
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
  FaLaptopCode,
  FaGlobe
} from "react-icons/fa";
import { 
  SiCplusplus, 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiPostman
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
  "React.js": <FaReact className="text-brand-cyan text-3xl" />,
  "Node.js": <FaNode className="text-brand-cyan text-3xl" />,
  "Express.js": <SiExpress className="text-brand-cyan text-3xl" />,
  "Python": <FaPython className="text-brand-cyan text-3xl" />,
  "JavaScript": <FaJs className="text-brand-cyan text-3xl" />,
  "Java": <FaJava className="text-brand-cyan text-3xl" />,
  "C++": <SiCplusplus className="text-brand-cyan text-3xl" />,
  "HTML": <FaHtml5 className="text-brand-cyan text-3xl" />,
  "CSS": <FaCss3Alt className="text-brand-cyan text-3xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-brand-cyan text-3xl" />,
  "Git": <FaGitAlt className="text-brand-cyan text-3xl" />,
  "GitHub": <FaGitAlt className="text-brand-cyan text-3xl" />,
  "Postman": <SiPostman className="text-brand-cyan text-3xl" />,
  "MongoDB": <SiMongodb className="text-brand-cyan text-3xl" />,
  "Next.js": <FaGlobe className="text-brand-cyan text-3xl" />,
  "MySQL": <FaDatabase className="text-brand-cyan text-3xl" />,
  "PostgreSQL": <FaDatabase className="text-brand-cyan text-3xl" />,
  "Redis": <FaDatabase className="text-brand-cyan text-3xl" />,
  "VS Code": <FaLaptopCode className="text-brand-cyan text-3xl" />,
  "SQL": <FaDatabase className="text-brand-cyan text-3xl" />,
};

const categorizedStack = [
  { category: "Languages", skills: ["JavaScript", "Python", "Java", "C++", "SQL"] },
  { category: "Backend", skills: ["Express.js", "Node.js"] },
  { category: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS"] },
  { category: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"] },
  { category: "Developer Tools", skills: ["VS Code", "Git", "GitHub", "Postman"] }
];

export default function TeckStack() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...categorizedStack.map(group => group.category)];
  
  const allSkills = categorizedStack.reduce((acc, curr) => {
    return [...acc, ...curr.skills.map(skill => ({ name: skill, category: curr.category }))];
  }, []);

  const filteredSkills = selectedCategory === "All" 
    ? allSkills 
    : allSkills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="tech-stack" className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 border-l-4 border-brand-cyan pl-6">
          <div>
            <p className="text-brand-cyan font-bold tracking-widest text-sm mb-2 uppercase">Expertise</p>
            <h2 className="text-4xl md:text-5xl font-black">
              Technical <span className="text-brand-gradient">Skills</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 border ${
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

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-cyan/20 transition-all duration-300 flex flex-col items-center justify-center gap-4"
              >
                <div className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">
                  {iconMap[skill.name] || <FaDatabase className="text-brand-cyan text-3xl" />}
                </div>
                <p className="text-xs font-semibold text-gray-500 group-hover:text-white transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
