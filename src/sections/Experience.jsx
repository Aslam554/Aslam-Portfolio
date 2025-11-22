import React, { useEffect, useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const [textGradient, setTextGradient] = useState('text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500');

  useEffect(() => {
    const current = localStorage.getItem('theme') || 'cyan-teal';
    const gradients = {
      'cyan-teal': 'text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400',
      'blue-purple': 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500',
      'red-orange': 'text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500',
      'green-teal': 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500',
    };
    setTextGradient(gradients[current] || gradients['cyan-teal']);
  }, []);

  const experiences = [
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "Frontend Developer Intern",
      company: "SWE180",
      duration: "May 2025 - June 2025 · Remote",
      description: "Worked on the frontend of the SWE180 project, implementing reusable UI components and page flows using React and Tailwind.",
      skills: ["React.js", "Tailwind CSS", "Responsive UI", "Component Design"]
    },
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "Frontend Developer Intern",
      company: "Nemi Wealth",
      duration: "Feb 2025 - Present · Mumbai, Maharashtra",
      description: "Building the website for a fintech startup. Responsible for frontend architecture and dynamic dashboard components.",
      skills: ["React.js", "Tailwind CSS", "React Chart.js", "Fintech UI"]
    },
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "Software Developer Intern",
      company: "ChatterPy",
      duration: "Jan 2025 - March 2025 · Chennai, Tamil Nadu",
      description: "Developed full-stack features using React.js for frontend and Flask for backend on the ChatterPy AI platform.",
      skills: ["React.js", "Flask", "Full-Stack", "API Integration"]
    },
  ];

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-extrabold tracking-tight ${textGradient}`}
        >
          My Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
        >
          Startups, internships & projects that shaped my dev journey.
        </motion.p>
      </div>

      <div className="relative pl-8 sm:pl-12">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-rose-400 to-pink-500 opacity-20"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative mb-12 pl-8 sm:pl-12"
          >
            <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 shadow-md"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-rose-400 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-r from-rose-400 to-pink-500 bg-opacity-10 group-hover:bg-opacity-20 transition-all">
                  <span className="text-rose-300">{exp.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-sm text-gray-400">{exp.duration}</span>
                  </div>
                  <h4 className={`text-lg font-semibold mb-3 ${textGradient}`}>{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-rose-300 hover:bg-rose-600/20 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
