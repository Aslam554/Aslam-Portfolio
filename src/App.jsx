import { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Education from "./sections/Education";
import TeckStack from "./sections/TeckStack";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Achievement from "./sections/Achievement";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="w-full h-full bg-black text-white font-sans overflow-x-hidden selection:bg-brand-cyan selection:text-black">
      <Navbar />

      <main>
        <div id="hero">
          <Hero />
        </div>


        <div id="tech-stack">
          <TeckStack />
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
