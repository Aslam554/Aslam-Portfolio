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
  FaBootstrap,
} from "react-icons/fa";
import { SiCplusplus, SiC, SiTailwindcss, SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const iconMap = {
  "React.js": <FaReact className="text-brand-cyan text-4xl" />,
  "NodeJS": <FaNode className="text-brand-cyan text-4xl" />,
  "Express": <SiExpress className="text-brand-cyan text-4xl" />,
  "Python": <FaPython className="text-brand-cyan text-4xl" />,
  "Javascript": <FaJs className="text-brand-cyan text-4xl" />,
  "TypeScript": <FaJs className="text-brand-cyan text-4xl" />,
  "Java": <FaJava className="text-brand-cyan text-4xl" />,
  "C++": <SiCplusplus className="text-brand-cyan text-4xl" />,
  "C": <SiC className="text-brand-cyan text-4xl" />,
  "HTML": <FaHtml5 className="text-brand-cyan text-4xl" />,
  "CSS": <FaCss3Alt className="text-brand-cyan text-4xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-brand-cyan text-4xl" />,
  "Bootstrap": <FaBootstrap className="text-brand-cyan text-4xl" />,
  "Git/Github": <FaGitAlt className="text-brand-cyan text-4xl" />,
  "Postman": <SiPostman className="text-brand-cyan text-4xl" />,
  "MongoDB": <SiMongodb className="text-brand-cyan text-4xl" />,
  "Databases": <FaDatabase className="text-brand-cyan text-4xl" />,
};

const techStack = [
  { id: 1, key: "C" },
  { id: 2, key: "C++" },
  { id: 3, key: "Java" },
  { id: 4, key: "Python" },
  { id: 5, key: "React.js" },
  { id: 6, key: "NodeJS" },
  { id: 7, key: "Express" },
  { id: 8, key: "HTML" },
  { id: 9, key: "CSS" },
  { id: 10, key: "Javascript" },
  { id: 11, key: "Tailwind CSS" },
  { id: 12, key: "Git/Github" },
  { id: 13, key: "Postman" },
  { id: 14, key: "MongoDB" },
];

export default function TeckStack() {
  return (
    <section id="tech-stack" className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 border-l-4 border-brand-cyan pl-6">
          <p className="text-brand-cyan font-bold tracking-widest text-sm mb-2 uppercase">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Technical <span className="text-brand-gradient">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-cyan/20 transition-all duration-300 flex flex-col items-center justify-center gap-4"
            >
              <div className="grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">
                {iconMap[tech.key]}
              </div>
              <p className="text-xs font-semibold text-gray-500 group-hover:text-white transition-colors">
                {tech.key}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
