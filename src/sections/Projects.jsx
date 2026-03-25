import React from "react";
import projectsData from "../projects.json";
import ProjectBox from "../components/ProjectBox";

export default function Projects() {
  const displayProjects = projectsData.projects.slice(0, 6);

  return (
    <section id="projects" className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16 border-l-4 border-brand-cyan pl-6">
          <p className="text-brand-cyan font-bold tracking-widest text-xs mb-2 uppercase">Work</p>
          <h2 className="text-3xl md:text-4xl font-black">
            Featured <span className="text-brand-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((e) => (
            <ProjectBox
              key={e.id}
              pic={e.pic}
              title={e.title}
              desc={e.desc}
              github={e.github}
              website={e.website}
              category={e.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
