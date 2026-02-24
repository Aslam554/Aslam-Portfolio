import React from "react";
import projectsData from "../projects.json";
import ProjectBox from "../components/ProjectBox";

export default function Projects() {
  // Show only top 4 projects
  const displayProjects = projectsData.projects.slice(0, 4);

  return (
    <section id="projects" className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 border-l-4 border-brand-cyan pl-6">
          <p className="text-brand-cyan font-bold tracking-widest text-sm mb-2 uppercase">Work</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Featured <span className="text-brand-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayProjects.map((e) => (
            <div
              key={e.id}
              className="group rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-brand-cyan/20 transition-all duration-500"
            >
              <ProjectBox
                pic={e.pic}
                title={e.title}
                desc={e.desc}
                github={e.github}
                website={e.website}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
