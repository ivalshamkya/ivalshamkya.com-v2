"use client";
import { Fragment } from "react";
import { dataNavbar } from "@/common/constant/navbar-links";
import { METADATA } from "@/common/constant/metadata";
import { ThemeSwitcher } from "@/components/modules/ThemeSwitcher";
import { Status } from "@/components/modules/Status";

interface NavigationProp {
  active: string;
}

const Navbar: React.FC<NavigationProp> = ({ active }) => {
  return (
    <>
      <nav className="w-full p-3 md:p-8 border-b border-neutral-300 dark:border-neutral-800 flex justify-between items-center z-50">
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
                    ? "text-primary font-[500] active doodle-underline"
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
    </>
  );
};

export default Navbar;
