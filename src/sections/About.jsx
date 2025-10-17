import React from "react";
import { Briefcase, Youtube, GraduationCap } from "lucide-react";
import photo from "../images/profile.png";
import Social from "../components/Social";

export default function About() {
  return (
    <section className="bg-cover bg-center text-white py-20 px-6 md:px-12 font-sans relative bg-black">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>

      {/* Gradient Title */}
      <p
        className="text-center text-2xl md:text-3xl font-extrabold tracking-wider mb-4 relative z-10"
        style={{
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        DEVELOPER
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 relative z-10">
        Meet Aslam Beg: Crafting Code, Building Dreams
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto relative z-10">
        {/* Image on Left Now */}
        <div className="lg:w-[40%] rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500">
          <img
            src={photo}
            alt="Mirza Aslam Beg"
            className="rounded-xl border-4 border-[#00b09b] shadow-lg w-full h-auto"
          />
        </div>

        {/* Info Section on Right */}
        <div className="lg:w-[60%] bg-[#1a1a1a] rounded-xl p-6 md:p-10 shadow-xl transform hover:scale-105 transition duration-500">
          <h3 className="text-3xl font-bold mb-1 text-[#00b09b]">Aslam Beg</h3>
          <p className="text-lg text-gray-400 mb-4">
            Full Stack Developer | 5x Intern | Nemi Wealth | Tech Influencer
          </p>

          <ul className="text-white text-base md:text-lg space-y-2 mb-6 leading-relaxed">
            <li>• B.Tech ECE'28 + Hons in AI ML@ Tezpur University</li>
            <li>• 5x Internship experience at multiple startups</li>
            <li>• Solved 1400+ DSA problems (910+ on LeetCode, 4⭐ HackerRank)</li>
            <li>• CodeChef 3⭐ (Max 1612), Codeforces Pupil (Max 1255)</li>
            <li>• Intern @ Nemi Wealth working on financial tech</li>
            <li>• 2.5M+ Impressions as a tech mentor & 9.6k+ followers @LinkedIn</li>
          </ul>

          {/* Lucide Icons */}
          <div className="flex gap-6 items-center text-white mt-4 flex-wrap">
            <div className="flex items-center gap-2 hover:text-[#00b09b] transition duration-300">
              <Briefcase size={20} />
              <span className="text-sm">Nemi Wealth</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#00b09b] transition duration-300">
              <Youtube size={20} />
              <span className="text-sm">YouTube Channel</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#00b09b] transition duration-300">
              <GraduationCap size={20} />
              <span className="text-sm">Tezpur University</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6">
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
}
