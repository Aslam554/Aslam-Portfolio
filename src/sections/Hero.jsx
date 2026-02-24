import React from "react";
import ResumeButton from "../components/ResumeButton";
import Social from "../components/Social";
import { Briefcase, Youtube, GraduationCap } from "lucide-react";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

export default function Hero() {
  const profileImage = "/mirza-aslam-beg.jpeg";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-black"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="text-left border-l-4 border-brand-cyan pl-6 mb-12">
            <p className="text-brand-cyan font-bold tracking-widest text-sm mb-2 uppercase">
              Introduction
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight uppercase">
              Mirza <span className="text-brand-gradient">Aslam Beg</span>
            </h1>
          </div>

          <div className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl font-medium pl-6 border-l-4 border-white/5">
            I am a <span className="text-brand-cyan font-bold">5x Intern</span> and <span className="text-brand-cyan font-bold">Full Stack Developer</span> currently pursuing <span className="text-brand-cyan font-bold">B.Tech ECE&apos;28</span> with Honors in <span className="text-brand-cyan font-bold">AI ML</span> at Tezpur University.
            I have solved <span className="text-brand-cyan font-bold">1000+ LeetCode problems</span>, while reaching <span className="text-brand-cyan font-bold">3.5M+ impressions</span> and <span className="text-brand-cyan font-bold">11K+ followers</span> as a tech influencer on LinkedIn.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 pl-6">
            <ResumeButton />
            <div className="h-6 w-px bg-white/10 hidden sm:block"></div>
            <Social />
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square">
            {/* Image Glow - Static */}
            <div className="absolute inset-0 bg-brand-cyan/10 rounded-full blur-[60px]"></div>

            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-white/10">
              <img
                src={profileImage}
                alt="Mirza Aslam Beg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
