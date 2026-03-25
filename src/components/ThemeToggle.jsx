import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 hover:text-brand-cyan dark:hover:text-brand-cyan active:scale-95 flex items-center justify-center border border-gray-200 dark:border-white/10"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={20} className="transition-transform duration-500 rotate-0" />
      ) : (
        <Sun size={20} className="transition-transform duration-500 rotate-0" />
      )}
    </button>
  );
};

export default ThemeToggle;
