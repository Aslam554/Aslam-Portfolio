"use client";

import React, { useState } from "react";
import { FaChevronDown, FaExternalLinkAlt, FaBriefcase } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CompanyLogo = ({ logo, company, initials }) => {
  const [error, setError] = useState(false);

  return (
    <div className="h-11 w-11 shrink-0 flex items-center justify-center rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs relative z-10 font-bold text-sm text-indigo-600 dark:text-indigo-400">
      {logo && !error ? (
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-full h-full object-contain p-1"
          onError={() => setError(true)}
        />
      ) : (
        initials
      )}
    </div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default open first one

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Nemi Wealth",
      type: "Internship",
      url: "https://nemiwealth.com",
      duration: "Feb 2025 – Aug 2025",
      location: "Mumbai, India (Remote)",
      keyImpact: "Built responsive client dashboard interfaces for mutual fund and investment portfolio allocations. Collaborated on designing goal-based wealth planning modules with high-performance React components.",
      points: [
        "Collaborated on designing goal-based wealth planning modules with high-end React components",
        "Optimized client-side performance and state management, reducing API loading state latency"
      ],
      skills: ["React.js", "Tailwind CSS", "API Integration", "State Management"],
      initials: "NW",
      logo: "/nemiwealth.jpg"
    },
    {
      title: "Full Stack Developer",
      company: "ArabicO",
      type: "Freelance",
      url: "https://www.arabico.online",
      duration: "Dec 2025 – Feb 2026",
      location: "Remote",
      keyImpact: "Built a complete learning platform from scratch — now serving 100+ active students. Designed scalable architecture to handle live classes and user management seamlessly.",
      points: [
        "Automated lead flow & booking system → reduced manual work significantly",
        "Integrated email automation + Excel-based CRM for streamlined operations",
        "Delivered premium UI/UX tailored for high-conversion learning experience"
      ],
      skills: ["React.js", "Node.js", "Email Integration", "Excel Automation", "UI/UX Design"],
      initials: "AO",
      logo: "/projectsnap/arabico.png"
    },
    {
      title: "Frontend Developer Intern",
      company: "SWE180",
      type: "Internship",
      url: "https://www.swe180.com",
      duration: "May 2025 – June 2025",
      location: "Remote",
      keyImpact: "Improved website responsiveness by 40% using optimized React + Tailwind architecture. Built structured UI for core CS subjects (OS, CN, DBMS, DSA).",
      points: [
        "Increased user engagement by 30% with interactive quiz system",
        "Reduced dev time by 25% via reusable component architecture"
      ],
      skills: ["React.js", "Tailwind CSS", "Responsive UI", "Component Design"],
      initials: "SE",
      logo: "https://swe180.com/favicon.ico"
    },
    {
      title: "Backend Developer Intern",
      company: "Bael Tea",
      type: "Internship",
      duration: "Dec 2024 – Jan 2025",
      location: "Remote",
      keyImpact: "Built scalable MERN backend with role-based architecture (Admin + Client). Developed complaint management + order tracking system.",
      points: [
        "Implemented real-time analytics dashboards for business insights",
        "Reduced API response time by 20% using optimized REST APIs + JWT auth"
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "JWT", "MERN Stack", "Dashboard Analytics"],
      initials: "BT"
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 px-6 md:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-semibold block mb-1">
            WORK & INTERNSHIPS
          </span>
          <h2 className="text-2xl font-bold font-sans text-zinc-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans mt-1">
            Where I've built real-world software, shipped products, and contributed.
          </p>
        </div>

        {/* Experience List - Accordion Cards */}
        <div className="flex flex-col gap-3">
          {experiences.map((exp, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-indigo-500/30 dark:border-indigo-400/30 bg-white dark:bg-[#0c0d11] shadow-md" 
                    : "border-zinc-200/80 dark:border-zinc-850/60 bg-white/60 dark:bg-[#0c0d11]/60 hover:border-zinc-300 dark:hover:border-zinc-800"
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-5 flex items-center gap-4 text-left cursor-pointer group select-none"
                >
                  <CompanyLogo
                    logo={exp.logo}
                    company={exp.company}
                    initials={exp.initials}
                  />

                  {/* Company & Role info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {exp.url ? (
                          <a 
                            href={exp.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-sans font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {exp.company}
                            <FaExternalLinkAlt className="text-[10px] text-zinc-400" />
                          </a>
                        ) : (
                          <span className="font-sans font-bold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base tracking-tight">
                            {exp.company}
                          </span>
                        )}
                        
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold">
                          {exp.type}
                        </span>
                      </div>

                      <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 hidden sm:block">
                        {exp.duration}
                      </span>
                    </div>

                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-medium font-sans">
                        {exp.title}
                      </p>
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 sm:hidden">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="pl-2">
                    <FaChevronDown 
                      className={`text-zinc-400 transition-transform duration-300 text-xs ${
                        isOpen ? "rotate-180 text-indigo-500" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Collapsible Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-zinc-100 dark:border-zinc-850/40 space-y-3">
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans mt-3">
                          {exp.keyImpact}
                        </p>

                        {exp.points && exp.points.length > 0 && (
                          <ul className="space-y-1.5 list-none text-xs sm:text-sm">
                            {exp.points.map((point, i) => (
                              <li key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-2 font-mono text-xs">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
