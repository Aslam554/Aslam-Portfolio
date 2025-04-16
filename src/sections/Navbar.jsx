import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ResumeButton from "../components/ResumeButton";
import logo from "../images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleClick = (val) => {
    document.getElementById(val)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Tech-stack", id: "tech-stack" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact Me", id: "contact-me" }
  ];

  return (
    <nav className="bg-[#111] shadow-md border-b border-teal-600 w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 flex justify-between items-center">
        {/* Logo and Name */}
        <button
          onClick={() => handleClick("hero")}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full border-2 border-white hover:border-teal-400 transition"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Mirza Aslam Beg
          </h1>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-lg font-semibold hover:text-teal-300 transition"
              data-aos="fade-up"
            >
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {item.name}
              </span>
            </button>
          ))}

          <div className="px-4 py-2 rounded font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow hover:shadow-lg transition">
            <ResumeButton />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111] px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="block py-2 text-base font-semibold text-white hover:text-teal-300 transition w-full text-left"
              data-aos="fade-up"
            >
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                {item.name}
              </span>
            </button>
          ))}
          <div className="w-full mt-3 py-2 font-semibold rounded bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-center shadow hover:shadow-lg">
            <ResumeButton />
          </div>
        </div>
      )}
    </nav>
  );
}
