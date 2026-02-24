import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ResumeButton from "../components/ResumeButton";
import logo from "../images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Tech", id: "tech-stack" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact-me" }
  ];

  useEffect(() => {
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
      className="w-full fixed top-0 z-50 transition-all duration-300 bg-black/80 py-3 border-b border-white/5 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo and Name */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={scrollToTop}
        >
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 rounded-full border border-white/20 transition-colors group-hover:border-brand-cyan"
          />
          <h1 className="text-lg font-bold text-brand-gradient">
            Aslam Beg
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${active === item.id
                    ? "text-brand-cyan"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="h-4 w-px bg-white/10"></div>
          <ResumeButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white hover:text-brand-cyan transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-black/95 z-40 p-6 flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-2xl font-bold ${active === item.id ? "text-brand-cyan" : "text-white"
                  }`}
              >
                {item.name}
              </button>
            ))}
            <div className="mt-4">
              <ResumeButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
