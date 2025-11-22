import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ResumeButton from "../components/ResumeButton";
import logo from "../images/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Experience", id: "experience" }, // ✅ NEW
    { name: "Tech-stack", id: "tech-stack" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact Me", id: "contact-me" }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
      setActive(id);
      setMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("hero");
    setMenuOpen(false);
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#111]/90 py-2 border-b border-rose-500/30" : "bg-[#111]/70 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo and Name */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 group cursor-pointer"
          onClick={scrollToTop}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
            <img
              src={logo}
              alt="Mirza Aslam Beg"
              className="relative w-10 h-10 rounded-full object-cover border-2 border-white group-hover:border-rose-400 transition"
            />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Mirza Aslam Beg
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-all ${
                  active === item.id
                    ? "text-white bg-gradient-to-r from-rose-500 to-pink-500"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
                data-aos="fade-up"
              >
                {item.name}
              </button>
            </li>
          ))}
          {/* Glowing Resume Button - Desktop */}
          <div className="relative ml-3 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-4 py-2 rounded-xl font-semibold bg-black text-white border-2 border-white group-hover:border-rose-400 shadow transition-all duration-300">
              <ResumeButton />
            </div>
          </div>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg focus:outline-none hover:bg-white/10 transition"
        >
          {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-[#111]/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-4 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full max-w-xs text-center px-4 py-3 rounded-md text-lg font-medium transition-all ${
                  active === item.id
                    ? "text-white bg-gradient-to-r from-rose-500 to-pink-500"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </button>
            ))}
            {/* Glowing Resume Button - Mobile */}
            <div className="relative w-full max-w-xs mt-3 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative py-2 rounded-xl font-semibold bg-black text-white text-center border-2 border-white group-hover:border-rose-400 shadow transition-all duration-300">
                <ResumeButton />
              </div>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
