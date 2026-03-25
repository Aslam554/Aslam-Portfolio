import React from 'react';
import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "Full Stack Developer",
      company: "ArabicO (Freelance)",
      url: "https://www.arabico.online",
      duration: "Dec 2025 - Feb 2026 · Saudi Arabia (Remote)",
      keyImpact: "Built a complete learning platform from scratch — now serving 100+ active students",
      points: [
        "Built a complete Arabic learning platform from scratch — now serving 100+ active students",
        "Designed scalable architecture to handle live classes + user management seamlessly",
        "Automated lead flow & booking system → reduced manual work significantly",
        "Integrated email automation + Excel-based CRM for streamlined operations",
        "Delivered premium UI/UX tailored for high-conversion learning experience"
      ],
      skills: ["React.js", "Node.js", "Email Integration", "Excel Automation", "UI/UX Design"]
    },
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "Frontend Developer Intern",
      company: "SWE180",
      url: "https://www.swe180.com",
      duration: "May 2025 - June 2025 · Remote",
      keyImpact: "Improved performance by 40% | Reduced dev time by 25%",
      points: [
        "Improved website responsiveness by 40% using optimized React + Tailwind architecture",
        "Built structured UI for core CS subjects (OS, CN, DBMS, DSA)",
        "Increased user engagement by 30% with interactive quiz system",
        "Reduced dev time by 25% via reusable component architecture"
      ],
      skills: ["React.js", "Tailwind CSS", "Responsive UI", "Component Design"]
    },
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "Backend Developer Intern",
      company: "Bael Tea",
      duration: "Dec 2024 - Jan 2025 · Tezpur, Assam",
      keyImpact: "Reduced latency by 20% | Built scalable MERN architecture",
      points: [
        "Built scalable MERN backend with role-based architecture (Admin + Client)",
        "Developed complaint management + order tracking system",
        "Implemented real-time analytics dashboards for business insights",
        "Reduced API response time by 20% using optimized REST APIs + JWT auth"
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "JWT", "MERN Stack", "Dashboard Analytics"]
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-left mb-16 border-l-4 border-brand-cyan pl-6">
        <p className="text-brand-cyan font-bold tracking-widest text-xs mb-2 uppercase">Work Experience</p>
        <h2 className="text-3xl md:text-4xl font-black mb-2">
          Real Impact. <span className="text-brand-gradient">Real Results.</span>
        </h2>
        <p className="text-gray-400 text-xs italic">Building products that solve real problems.</p>
      </div>

      <div className="relative pl-8 sm:pl-12">
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-cyan/20"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative mb-8 pl-8 sm:pl-12"
          >
            {/* Minimal Timeline Dot */}
            <div className="absolute left-0 top-7 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-brand-cyan shadow-[0_0_10px_#00e0ff]"></div>

            {/* Clean Experience Card */}
            <div className="bg-[#0a0a0a] p-5 md:p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
                {/* Left Side: Meta & Icon */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-brand-cyan/5 border border-brand-cyan/10">
                      <span className="text-brand-cyan text-xl">{exp.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white tracking-tight">{exp.title}</h3>
                      <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded-full inline-block mt-1">{exp.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-brand-gradient uppercase tracking-widest">
                      {exp.company}
                    </h4>
                    {exp.url && (
                      <a 
                        href={exp.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-cyan hover:text-white transition-colors"
                      >
                        <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[8px] font-bold uppercase rounded-full bg-white/5 text-gray-500 border border-white/5 hover:border-brand-cyan/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Side: Impact & Bullets */}
                <div className="space-y-4 lg:border-l lg:border-white/5 lg:pl-8">
                  {/* Impact Highlight */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-cyan/5 border border-brand-cyan/10 rounded-lg w-full lg:w-auto">
                    <span className="text-[10px] font-bold text-brand-cyan tracking-wide uppercase">
                      Key Impact: <span className="text-gray-300 ml-1 normal-case font-medium">{exp.keyImpact}</span>
                    </span>
                  </div>

                  <ul className="space-y-2.5 list-none">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
                        <span className="text-brand-cyan mt-2 w-1.5 h-1.5 rounded-full bg-brand-cyan/40"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
