import React from "react";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import info from "../educationlogos.json";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-black text-white max-w-7xl mx-auto">
      <div className="">
        <div className="text-left mb-12 border-l-4 border-brand-cyan pl-6">
          <p className="text-brand-cyan font-bold tracking-widest text-xs mb-2 uppercase">Learning</p>
          <h2 className="text-3xl md:text-4xl font-black">
            Academic <span className="text-brand-gradient">Journey</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 mt-12">
          {info?.values?.map((edu) => (
            <div
              key={edu.id}
              className="group p-6 md:p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] backdrop-blur-sm hover:border-brand-cyan/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                {edu.branch?.toLowerCase().includes("b.tech") ? (
                  <FaUniversity size={80} className="text-brand-cyan" />
                ) : (
                  <FaGraduationCap size={80} className="text-brand-cyan" />
                )}
              </div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-brand-cyan bg-brand-cyan/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    {edu.year}
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-brand-gradient transition-colors">
                    {edu.name}
                  </h3>
                  <p className="text-gray-400 font-medium">{edu.branch}</p>
                </div>

                <div className="flex-shrink-0">
                  <div className="bg-brand-cyan/5 border border-brand-cyan/10 px-6 py-3 rounded-2xl">
                    <p className="text-brand-cyan text-xs font-black uppercase tracking-widest">
                      Grade: <span className="text-white ml-2 text-lg">{edu.grade}</span>
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
