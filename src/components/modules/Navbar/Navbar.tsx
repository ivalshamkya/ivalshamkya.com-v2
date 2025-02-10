"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { dataNavbar } from "@/common/constant/navbar-links";
import { METADATA } from "@/common/constant/metadata";
import { ThemeSwitcher } from "@/components/modules/ThemeSwitcher";
import { Status } from "@/components/modules/Status";
import GradientText from "../TextAnimation/GradientText/GradientText";

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="w-full p-3 md:p-8 border-b border-dashed border-neutral-300 dark:border-neutral-800 flex justify-between items-center z-50">
      {METADATA.authors.isAvailable ? <Status /> : <div className="hidden md:block"></div>}

      <div className={`h-fit flex items-center overflow-hidden ${METADATA.authors.isAvailable && "md:-ml-40"}`}>
        <ul className="flex items-center gap-4 md:gap-6">
          {dataNavbar.map(({ navigate, navigate_url }) => {
            const isActive = pathname === `/${navigate_url}`;

            return (
              <li key={navigate_url} className="relative text-sm md:text-base font-normal">
                <Link
                  href={`/${navigate_url}`}
                  className={`p-2 transition-all duration-150 ease-in-out ${
                    isActive ? "text-primary font-medium" : "text-primary/80 hover:text-primary"
                  }`}
                >
                  {isActive ? (
                    <GradientText
                      colors={["#4079ff", "#40ffaa", "#4079ff", "#40ffaa", "#4079ff"]}
                      animationSpeed={5}
                      className="font-bold"
                    >
                      {navigate}
                    </GradientText>
                  ) : (
                    navigate
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Theme Switcher */}
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
