import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import info from "../educationlogos.json";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 border-l-4 border-brand-cyan pl-6">
          <p className="text-brand-cyan font-bold tracking-widest text-sm mb-2 uppercase">Learning</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Academic <span className="text-brand-gradient">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {info?.values?.map((edu) => (
            <div
              key={edu.id}
              className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-cyan/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                {edu.branch?.toLowerCase().includes("b.tech") ? (
                  <FaUniversity size={80} className="text-brand-cyan" />
                ) : (
                  <FaGraduationCap size={80} className="text-brand-cyan" />
                )}
              </div>

              <div className="relative z-10">
                <span className="text-xs font-bold text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {edu.year}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-1">{edu.name}</h3>
                <p className="text-gray-400 font-medium mb-4">{edu.branch}</p>
                <p className="text-brand-cyan text-sm font-bold bg-white/5 inline-block px-3 py-1 rounded-lg">
                  Grade: {edu.grade}
                </p>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                  {(edu.skills || []).map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 group-hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
