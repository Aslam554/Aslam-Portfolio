import React, { useState } from 'react';
import {
  FaTrophy, FaLinkedin, FaUserGraduate, FaChalkboardTeacher, FaLaptopCode, FaGlobe
} from 'react-icons/fa';
import {
  SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef
} from 'react-icons/si';

const Achievements = () => {
  const achievements = [
    { icon: <SiLeetcode className="text-orange-500" />, title: "1000+ LeetCode Problems", description: "Max Rating: 1818", category: "coding" },
    { icon: <SiHackerrank className="text-green-400" />, title: "4★ HackerRank", description: "DSA and Problem Solving", category: "coding" },
    { icon: <SiCodechef className="text-purple-400" />, title: "CodeChef 3★", description: "Competitive Coding", category: "coding" },
    { icon: <SiCodeforces className="text-blue-400" />, title: "Codeforces Pupil", description: "Active Contender", category: "coding" },
    { icon: <FaUserGraduate className="text-brand-cyan" />, title: "100/100 CS Score", description: "Perfect academic record", category: "academic" },
    { icon: <FaTrophy className="text-brand-cyan" />, title: "AIR 28 UCO", description: "Unified Cyber Olympiad", category: "academic" },
    { icon: <FaChalkboardTeacher className="text-brand-cyan" />, title: "YouTube Mentor", description: "Educating thousands", category: "professional" },
    { icon: <FaLinkedin className="text-brand-cyan" />, title: "11K+ Followers", description: "Tech Creator at LinkedIn", category: "professional" },
  ];

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 border-l-4 border-brand-cyan pl-6">
          <p className="text-brand-cyan font-bold tracking-widest text-sm mb-2 uppercase">Success</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Key <span className="text-brand-gradient">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-cyan/20 transition-all duration-300"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{item.description}</p>
              <span className="inline-block mt-4 text-[10px] uppercase font-black tracking-widest text-brand-cyan opacity-50">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
