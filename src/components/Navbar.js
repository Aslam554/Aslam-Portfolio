"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Send } from "lucide-react";

const Navbar = ({ theme, toggleTheme }) => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Skills", id: "tech-stack" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("hero");
      return;
    }
    const section = document.getElementById(id);
    if (section) {
      const topOffset = section.offsetTop - 85;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-3.5 pointer-events-none transition-all duration-300">
      <div className="max-w-3xl mx-auto flex items-center justify-center pointer-events-auto">
        
        {/* Unified Sleek Floating Glass Pill Container */}
        <div className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-3 py-1.5 transition-all duration-300 border ${
          scrolled
            ? "bg-white/90 dark:bg-[#0c0d11]/90 backdrop-blur-xl border-zinc-200/80 dark:border-zinc-800/80 shadow-md"
            : "bg-white/70 dark:bg-[#0c0d11]/70 backdrop-blur-md border-zinc-200/50 dark:border-zinc-800/50 shadow-xs"
        }`}>
          
          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-zinc-950 dark:text-white bg-zinc-200/90 dark:bg-zinc-800 shadow-xs font-bold"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Divider between Nav Items and Right Controls on Desktop */}
          <div className="hidden md:block h-4 w-px bg-zinc-200 dark:bg-zinc-800 mx-1" />

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact-me")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-sans font-medium rounded-full transition-colors cursor-pointer"
          >
            <Send size={12} className="text-indigo-500" />
            <span>Contact</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 active:scale-90"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={15} className="transition-transform hover:-rotate-12" />
            ) : (
              <Sun size={15} className="text-amber-400 transition-transform hover:rotate-45" />
            )}
          </button>

          {/* Mobile Hamburger toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1.5 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden pointer-events-auto max-w-sm mx-auto mt-2 p-4 bg-white/95 dark:bg-[#0c0d11]/95 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col gap-2 font-sans text-xs animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left py-2.5 px-3.5 rounded-xl transition-colors cursor-pointer ${
                active === item.id
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 font-semibold"
                  : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-1"></div>
          <button
            onClick={() => scrollToSection("contact-me")}
            className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl text-center shadow-md active:scale-98 transition-transform cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
