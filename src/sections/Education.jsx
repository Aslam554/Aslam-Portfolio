import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import info from "../educationlogos.json";

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400"
        >
          Academic Journey
        </motion.h2>

        <div className="space-y-12">
          {info?.values?.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 z-10 shadow-lg shadow-rose-500/30"></div>

              {/* Connector Line */}
              {index !== info.values.length - 1 && (
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-500 to-pink-500 opacity-30"></div>
              )}

              <div className="ml-8">
                <div className="relative backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700 group-hover:border-rose-400/50 transition-all duration-300">
                  {/* Glow Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Degree Ribbon */}
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    {edu.branch?.toLowerCase().includes("master") ? "MASTERS" : "BACHELORS"}
                  </div>

                  <div className="p-6 sm:p-8 md:flex gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex-shrink-0 mb-6 md:mb-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 border-2 border-rose-400/30 group-hover:border-rose-400 transition-all duration-300">
                        {edu.branch?.toLowerCase().includes("b.tech") ? (
                          <FaUniversity className="text-rose-400" />
                        ) : (
                          <FaGraduationCap className="text-rose-400" />
                        )}
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{edu.name}</h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <p className="text-gray-300 text-sm md:text-base">{edu.branch}</p>
                        <span className="hidden sm:block text-gray-500">•</span>
                        <p className="text-gray-400 text-sm md:text-base">{edu.year}</p>
                      </div>

                      {/* Grade */}
                      <div className="inline-block border border-gray-600 rounded-full px-3 py-1 mb-4">
                        <p className="text-sm font-medium text-rose-300">{edu.grade}</p>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {(edu.skills || []).map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 rounded-full bg-gradient-to-br from-gray-900 to-gray-800/50 text-xs md:text-sm font-medium text-rose-300 border border-gray-600 hover:bg-rose-500/20 hover:border-rose-400 transition-all duration-300"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
