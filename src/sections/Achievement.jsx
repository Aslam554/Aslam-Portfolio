import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  FaTrophy, FaLinkedin, FaUserGraduate, FaChalkboardTeacher, FaLaptopCode, FaGlobe
} from 'react-icons/fa';
import {
  SiLeetcode, SiHackerrank, SiCodeforces, SiCodechef
} from 'react-icons/si';

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const controls = useAnimation();

  const textGradient = 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400';

  const achievements = [
    // 🧠 CODING
    { icon: <SiLeetcode className="text-orange-500" />, title: "580+ Problems on LeetCode", description: "Max Rating: 1818 | Strong problem-solving consistency", category: "coding" },
    { icon: <SiHackerrank className="text-green-400" />, title: "4★ HackerRank DSA", description: "Achieved 4-star badge in Data Structures and Algorithms", category: "coding" },
    { icon: <SiCodechef className="text-purple-400" />, title: "CodeChef 3★", description: "Max Rating: 1612 | Regular Contest Participant", category: "coding" },
    { icon: <SiCodeforces className="text-blue-400" />, title: "Codeforces Pupil", description: "Max Rating: 1255 | Focused on competitive problem solving", category: "coding" },

    // 🎓 ACADEMIC
    { icon: <FaUserGraduate className="text-cyan-400" />, title: "100/100 in Computer Science", description: "Perfect academic score in CS subject in board exams", category: "academic" },
    { icon: <FaTrophy className="text-yellow-400" />, title: "AIR 28 - UCO Olympiad", description: "National Rank 28 in Unified Cyber Olympiad", category: "academic" },

    // 💼 PROFESSIONAL
    { icon: <FaChalkboardTeacher className="text-pink-400" />, title: "Tutor at Aslam Coding", description: "Educating 1000s via YouTube and social platforms", category: "professional" },
    { icon: <FaLaptopCode className="text-teal-400" />, title: "5x Internship Experience", description: "Worked at multiple startups in dev roles", category: "professional" },
    { icon: <FaGlobe className="text-indigo-400" />, title: "2x US Freelance Projects", description: "Delivered full-stack freelance projects overseas", category: "professional" },
    { icon: <FaLinkedin className="text-blue-500" />, title: "8.4K+ Followers on LinkedIn", description: "2M+ Impressions as a tech creator and mentor", category: "professional" },
  ];

  const filtered = activeFilter === 'all'
    ? [...achievements, ...achievements]
    : [...achievements.filter(a => a.category === activeFilter), ...achievements.filter(a => a.category === activeFilter)];

  useEffect(() => {
    if (isAutoScrolling) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }
      });
    } else {
      controls.stop();
    }
  }, [isAutoScrolling]);

  return (
    <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-12">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textGradient}`}>
          My Achievements 🚀
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Coding, academic, and professional highlights from my journey.
        </p>
      </div>

      <div className="flex justify-center mb-10 flex-wrap gap-3">
        {['all', 'coding', 'academic', 'professional'].map((filter) => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              controls.start({ x: 0 });
            }}
            className={`px-4 py-1 rounded-full capitalize font-medium transition-all ${
              activeFilter === filter
                ? 'bg-cyan-700 text-white shadow'
                : 'text-gray-300 hover:text-white hover:bg-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div
        className="relative py-6"
        onMouseEnter={() => setIsAutoScrolling(false)}
        onMouseLeave={() => setIsAutoScrolling(true)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

        <motion.div
          className="flex gap-6 w-max"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1000, right: 1000 }}
        >
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-80 md:w-96"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="p-0.5 rounded-xl bg-gradient-to-br from-cyan-600/40 to-teal-400/40">
                <div className="bg-gray-900 p-6 rounded-xl h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl p-3 rounded-lg bg-gray-800">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-700 text-cyan-300 capitalize">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
