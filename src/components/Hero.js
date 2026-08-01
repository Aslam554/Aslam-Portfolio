"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope, FaCode, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TechTag = ({ name, label, color = "#fff", logoBg }) => {
  return (
    <span className="inline-tech-tag hover:scale-105 active:scale-95 transition-all duration-200 cursor-default">
      <span 
        className="tag-icon text-[9px] flex items-center justify-center rounded-xs" 
        style={{ backgroundColor: logoBg, color: color }}
      >
        {name}
      </span>
      <span className="text-[11px] font-mono font-medium">{label}</span>
    </span>
  );
};

export default function Hero() {
  const [visitorCount, setVisitorCount] = useState(24185);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("aslam_total_views");
    if (saved) {
      setVisitorCount(parseInt(saved, 10));
    }

    const visited = sessionStorage.getItem("aslam_visited_session");
    const endpoint = visited
      ? "https://api.counterapi.dev/v1/aslambeg-portfolio-2026/views"
      : "https://api.counterapi.dev/v1/aslambeg-portfolio-2026/views/up";

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          sessionStorage.setItem("aslam_visited_session", "true");
          const totalViews = 24185 + data.count;
          setVisitorCount(totalViews);
          localStorage.setItem("aslam_total_views", totalViews.toString());
          window.dispatchEvent(new CustomEvent("visitorUpdate", { detail: totalViews }));
        }
      })
      .catch((err) => {
        console.error("Counter API error:", err);
      });
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const topOffset = section.offsetTop - 85;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-36 pb-16 px-6 md:px-12 bg-transparent transition-colors duration-300"
    >
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto w-full flex flex-col gap-8">
        
        {/* Row 1: Profile photo & Name Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="relative w-22 h-22 shrink-0 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-md">
            <div className="w-full h-full rounded-[14px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <img
                src="/mirza-aslam-beg.jpeg"
                alt="Mirza Aslam Beg"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80";
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-sans">
                Mirza Aslam Beg
              </h1>
              
              {/* Green available for work status badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold shadow-xs backdrop-blur-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available for work
              </div>
            </div>
            
            <h2 className="text-base sm:text-lg font-sans text-indigo-600 dark:text-indigo-400 font-semibold tracking-tight">
              Software Engineer & Full Stack Developer
            </h2>
          </div>
        </div>

        {/* Row 2: Bio Description with Tech Tags */}
        <div className="space-y-4">
          <p className="text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
            Hi, I'm Mirza Aslam Beg. I build fast, scalable, and production-ready web applications for startups and businesses. 
            I've delivered 5+ production projects, worked with clients in the USA and Saudi Arabia, and completed 5 software engineering internships.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-mono">
            Primary Tech Stack: <TechTag name="TS" label="TypeScript" logoBg="#3178C6" color="#fff" />, <TechTag name="Py" label="Python" logoBg="#3776AB" color="#fff" />, <TechTag name="Nx" label="Next.js" logoBg="#000" color="#fff" />, <TechTag name="Re" label="React" logoBg="#61DAFB" color="#000" /> & <TechTag name="Nd" label="Node.js" logoBg="#339933" color="#fff" />.
          </p>
        </div>

        {/* Row 3: Action Buttons & Social Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Resume CTA */}
          <a
            href="https://drive.google.com/file/d/1u_DyQsGQfL4clbzhCBxY0EVnVSI3hr_9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 bg-white dark:bg-[#0e0f14] hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 font-mono text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <FaFileAlt className="text-indigo-500 text-xs" />
            Resume
          </a>

          {/* Open To Work CTA */}
          <button
            onClick={() => scrollToSection("contact-me")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-mono text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-indigo-500/20 active:scale-98"
          >
            <FaEnvelope className="text-xs" />
            Hire Me
          </button>

          {/* Open Source / Projects CTA */}
          <button
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white/50 dark:bg-[#0e0f14]/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 font-mono text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
          >
            <FaCode className="text-zinc-400 text-xs" />
            Projects <FaArrowRight className="text-[10px] text-zinc-400" />
          </button>

          <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-1 hidden sm:block"></div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {[
              { icon: <FaXTwitter />, url: "https://x.com/aslambeg84", label: "X (Twitter)" },
              { icon: <FaGithub />, url: "https://github.com/Aslam554", label: "GitHub" },
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mirza-aslam-beg-8347661ab/", label: "LinkedIn" },
              { icon: <FaEnvelope />, url: "mailto:begaslam405@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8.5 h-8.5 flex items-center justify-center border border-zinc-200/80 dark:border-zinc-800 hover:border-indigo-500/40 dark:hover:border-indigo-400/40 bg-white dark:bg-[#0e0f14] hover:bg-indigo-50 dark:hover:bg-indigo-950/30 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-all duration-200 text-xs shadow-xs"
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
