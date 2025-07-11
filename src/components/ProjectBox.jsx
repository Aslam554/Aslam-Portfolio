export default function ProjectBox({ pic, title, desc, github, website }) {
  return (
    <div className="group relative flex flex-col justify-between border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-teal-400">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={`/projectsnap/${pic}`}
          alt={title}
          className="w-full h-52 object-contain transition-transform duration-300 group-hover:scale-105 bg-black"
        />
      </div>

      {/* Project Content */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
            {desc}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-sm px-4 py-2 rounded-lg text-center transition-all duration-300"
          >
            GitHub
          </a>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-700 hover:to-teal-900 text-white text-sm px-4 py-2 rounded-lg text-center transition-all duration-300"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
