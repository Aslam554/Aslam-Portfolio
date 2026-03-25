export default function ProjectBox({ pic, title, desc, github, website, category }) {
  return (
    <div className="group relative flex flex-col justify-between border border-white/5 rounded-2xl overflow-hidden bg-[#0a0a0a] backdrop-blur-md hover:border-brand-cyan/40 transition-all duration-300">
      {/* Project Image */}
      <div className="relative h-44 overflow-hidden bg-black">
        <img
          src={`/projectsnap/${pic}`}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        {category && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 border border-white/10 backdrop-blur-md">
            <span className="text-[9px] font-bold text-brand-cyan uppercase tracking-widest">{category}</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-col justify-between flex-grow p-5 space-y-4">
        <div>
          <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-brand-gradient transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 font-medium">
            {desc}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 rounded-lg border border-white/5 text-gray-400 font-bold text-[10px] uppercase tracking-widest text-center hover:bg-white/10 hover:text-white transition-all"
          >
            Code
          </a>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 rounded-lg bg-brand-gradient text-white font-bold text-[10px] uppercase tracking-widest text-center hover:opacity-90 transition-all shadow-lg shadow-brand-cyan/10"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
