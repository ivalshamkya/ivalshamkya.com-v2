"use client";

import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "@/context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className={`w-10 h-10 flex text-primary ${
        theme !== "light" ? "opacity-80" : "opacity-70"
      } justify-center items-center text-center text-xl rounded-md transition-all ease-in duration-50 font-semibold cursor-pointer hover:bg-accent hover:text-accent-foreground`}
    >
      {theme !== "light" ? <BiMoon /> : <BiSun />}
    </button>
  );
};

export default ThemeSwitcher;