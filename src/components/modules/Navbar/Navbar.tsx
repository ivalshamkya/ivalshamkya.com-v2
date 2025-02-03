"use client";
import { Fragment, useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { dataNavbar } from "@/common/constant/navbar-links";
// import { CgDarkMode } from "react-icons/cg";
import { METADATA } from "@/common/constant/metadata";
import { Moon, MoonIcon, Sun } from "lucide-react";
import { ThemeSwitcher } from "@/components/modules/ThemeSwitcher";
import { Status } from "@/components/modules/Status";

interface Navigation {
  active: string;
}

const Navbar: React.FC<Navigation> = ({ active }) => {
  return (
    <Fragment>
      <nav className="w-full p-3 md:p-8 border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-secondary flex justify-between items-center z-50">
        {METADATA.authors.isAvailable ? (
          <Status />
        ) : (
          <div className="hidden md:block"></div>
        )}
        <div
          className={`h-fit flex items-center overflow-hidden ${
            METADATA.authors.isAvailable && "md:-ml-40"
          }`}
        >
          <ul className="overflow-auto flex items-center cool-underline">
            {dataNavbar.map(({ id, navigate, navigate_url, offset }) => (
              <li
                key={`${navigate}`}
                className={`relative w-[5rem] p-2 md:p-3 text-sm md:text-base text-center text-primary transition-all ease-in duration-75 ${
                  active === navigate_url
                    ? "text-white font-[500] active doodle-underline"
                    : "text-primary/80 hover:text-primary font-normal"
                }`}
              >
                <a href={`/${navigate_url}`}>{navigate}</a>
              </li>
            ))}
          </ul>
        </div>
        <ThemeSwitcher />
      </nav>
    </Fragment>
  );
};

export default Navbar;
