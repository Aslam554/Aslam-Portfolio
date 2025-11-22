import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typing from "react-typing-effect";
import ResumeButton from "../components/ResumeButton";
import Social from "../components/Social";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="hero"
      className="bgclass relative flex justify-center items-center h-screen pt-36 sm:pt-32 md:pt-28 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-rose-950/40 to-pink-950/30 opacity-90" />
      <div className="relative z-10 text-center w-full px-4 md:px-8 lg:px-16">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-10"
          data-aos="fade-up"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 text-transparent bg-clip-text">
            Mirza Aslam Beg
          </span>
        </h1>

        <Typing
          text={[
            "I am a Full Stack Developer",
            "Solved 830+ Leetcode DSA problems",
            "I am a Frontend Developer",
            "I am a Backend Developer",
            "I am a Competitive Coder & Problem Solver",
            "Solved 150+ qsn 3 ⭐⭐⭐Codechef",
            "Solved 230+ qsn pupils max 1255 Codeforces",
            "4⭐ HackerRank DSA & Problem Solving",
          ]}
          className="text-lg md:text-2xl lg:text-4xl text-rose-400 font-medium"
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={1200}
        />

        {/* Glowing Resume Button */}
        <div className="flex justify-center mt-8" data-aos="fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-6 py-3 rounded-full font-semibold bg-black text-white shadow-lg border-2 border-white hover:border-rose-400 transition">
              <ResumeButton />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-10" data-aos="fade-up">
          <Social />
        </div>
      </div>
    </section>
  );
}
