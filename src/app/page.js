"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeckStack from "@/components/TeckStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Articles from "@/components/Articles";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  const [theme, setTheme] = useState("dark"); // Default sleek dark theme

  useEffect(() => {
    const savedTheme = localStorage.getItem("aslam_theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("aslam_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="w-full min-h-screen bg-mesh-pattern bg-[#fcfcfd] text-zinc-900 dark:bg-[#08080a] dark:text-zinc-50 transition-colors duration-300 relative">
      
      {/* Background Ambient Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Floating Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Main Portfolio Content */}
      <main className="relative z-10">
        <Hero />
        <TeckStack theme={theme} />
        <Experience />
        <Projects />
        <GithubStats theme={theme} />
        <Articles />
        <ContactMe />
      </main>
    </div>
  );
}
