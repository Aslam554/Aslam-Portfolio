"use client";

import React, { useState } from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import info from "../data/educationlogos.json";

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 md:px-12 bg-transparent transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase font-semibold block mb-1">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-2xl font-bold font-sans text-zinc-900 dark:text-white tracking-tight">
            Education & Credentials
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans mt-1">
            Formal education, degree coursework, and academic excellence.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="flex flex-col gap-4">
          {info?.values?.map((edu) => (
            <div
              key={edu.id}
              className="group p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-850/60 bg-white/80 dark:bg-[#0c0d11]/80 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 transition-all duration-300 relative overflow-hidden shadow-xs hover:shadow-md"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* School Details */}
                <div className="flex items-start gap-4">
                  {/* Icon Avatar */}
                  <div className="w-12 h-12 shrink-0 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-2 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xs">
                    {edu.branch?.toLowerCase().includes("btech") || edu.branch?.toLowerCase().includes("b.tech") ? (
                      <FaUniversity className="text-xl" />
                    ) : (
                      <FaGraduationCap className="text-xl" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {edu.year}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200 font-sans">
                      {edu.name}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs font-sans">{edu.branch}</p>
                  </div>
                </div>

                {/* Grade Badge */}
                <div className="flex-shrink-0 self-start md:self-center pl-16 md:pl-0">
                  <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 px-4 py-1.5 rounded-xl text-center">
                    <p className="text-zinc-400 dark:text-zinc-500 text-[10px] font-mono font-bold uppercase tracking-wider">
                      Grade
                    </p>
                    <p className="text-zinc-900 dark:text-zinc-100 text-xs font-bold font-sans">
                      {edu.grade}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
