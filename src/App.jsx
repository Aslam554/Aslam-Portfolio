import { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import TeckStack from "./sections/TeckStack";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Achievement from "./sections/Achievement";
import Experience from "./sections/Experience";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`w-full h-full ${theme} bg-white text-black dark:bg-black dark:text-white font-sans overflow-x-hidden selection:bg-brand-cyan selection:text-black transition-colors duration-300`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <div id="hero">
          <Hero />
        </div>


        <div id="tech-stack">
          <TeckStack />
        </div>

        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="achievements">
          <Achievement />
        </div>

        <div id="contact-me">
          <ContactMe />
        </div>
      </main>
    </div>
  );
}

export default App;
