import React from "react";
import ReactTypingEffect from "react-typing-effect";
import ResumeButton from "../components/ResumeButton";
import Social from "../components/Social";

export default function Hero() {
  const profileImage = "/mirza-aslam-beg.jpeg";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 px-6 md:px-24 overflow-hidden bg-black"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content (70%) */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <div>
            <p className="text-[#00e0ff] font-bold tracking-[2px] text-sm mb-3 uppercase opacity-90">
              Introduction
            </p>
            <h1 className="text-5xl md:text-[64px] font-extrabold tracking-tight leading-[1.1] text-white hover:text-brand-cyan transition-colors duration-500 cursor-default">
              MIRZA <span className="text-brand-gradient">ASLAM BEG</span>
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-[22px] font-semibold text-[#00e0ff]">
              Building Apps & Scalable Web Products
            </h2>
            <div className="text-xl md:text-[22px] font-semibold text-gray-300">
              <ReactTypingEffect
                text={["Full Stack Developer", "React Native Developer", "UI/UX Specialist"]}
                speed={70}
                eraseSpeed={50}
                eraseDelay={2000}
                typingDelay={500}
                cursorClassName="text-brand-cyan"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm md:text-base text-[#b0b0b0] font-medium tracking-wide">
              5× Intern • 3× Freelance (USA, Saudi)
            </p>
            <p className="text-sm md:text-base text-[#b0b0b0] font-medium tracking-wide">
              1000+ LeetCode • 4M+ Impressions • 11K+ Audience
            </p>
          </div>

          <p className="text-sm md:text-base text-[#e0e0e0] max-w-[500px] leading-relaxed border-l-2 border-brand-cyan/30 pl-4 py-1 italic">
            I build fast, clean, production-ready applications — not just projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 mt-4">
            <ResumeButton />
            <Social />
          </div>
        </div>

        {/* Right Content - Image (30%) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Image Glow */}
            <div className="absolute inset-0 bg-brand-cyan/20 rounded-[20px] blur-[40px] group-hover:bg-brand-cyan/40 transition-all duration-700"></div>

            <div className="relative z-10 w-full max-w-[350px] aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,224,255,0.2)] hover:scale-[1.02] transition-transform duration-500">
              <img
                src={profileImage}
                alt="Mirza Aslam Beg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
