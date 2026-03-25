export default function ResumeButton() {
  return (
    <a
      href="https://drive.google.com/file/d/12zOq4DCXXo0wC5JfOsFFYTl7llcYCucL/view?usp=drive_link"
      target="_blank"
    >
      <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-gradient text-white font-black uppercase tracking-widest text-[10px] md:text-xs rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95 shadow-lg shadow-brand-cyan/20 border-b border-white/10">
        See My Resume
      </button>
    </a>
  );
}
