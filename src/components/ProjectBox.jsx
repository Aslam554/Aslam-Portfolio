export default function ProjectBox({ pic, title, desc, github, website }) {
  return (
    <div className="group relative flex flex-col justify-between border border-white/5 rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] hover:border-brand-cyan/20 transition-all duration-500">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-black">
        <img
          src={`/projectsnap/${pic}`}
          alt={title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col justify-between flex-grow p-8">
        <div>
          <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-brand-cyan transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-medium">
            {desc}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-white hover:text-black transition-all"
          >
            GitHub
          </a>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 rounded-xl bg-brand-gradient text-white font-bold text-xs uppercase tracking-widest text-center hover:opacity-90 transition-all shadow-lg shadow-brand-cyan/10"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
