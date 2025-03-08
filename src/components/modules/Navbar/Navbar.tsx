"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { dataNavbar } from "@/common/constant/navbar-links";
import { METADATA } from "@/common/constant/metadata";
import { ThemeSwitcher } from "@/components/modules/ThemeSwitcher";
import { Status } from "@/components/modules/Status";
import GradientText from "../TextAnimation/GradientText/GradientText";
import { HiMenuAlt4 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full py-3 px-4 md:py-8 md:px-8 border-b border-dashed border-neutral-300 dark:border-neutral-800 flex justify-between items-center z-10">
        {/* Status indicator - visible only on desktop */}
        {METADATA.authors.isAvailable ? (
            <Status />
        ) : (
          <div className="hidden md:block"></div>
        )}

        {/* Desktop Navigation Links - hidden on mobile */}
        <div
          className={`h-fit hidden md:flex items-center overflow-hidden ${
            METADATA.authors.isAvailable && "md:-ml-40"
          }`}
        >
          <ul className="flex items-center gap-4 md:gap-6">
            {dataNavbar.map(({ navigate, navigate_url }) => {
              const isActive = pathname === `/${navigate_url}`;

              return (
                <li
                  key={navigate_url}
                  className="relative text-sm md:text-base font-normal"
                >
                  <Link
                    href={`/${navigate_url}`}
                    className={`p-2 transition-all duration-150 ease-in-out ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-primary/80 hover:text-primary"
                    }`}
                  >
                    {isActive ? (
                      <GradientText
                        colors={[
                          "#4079ff",
                          "#40ffaa",
                          "#4079ff",
                          "#40ffaa",
                          "#4079ff",
                        ]}
                        animationSpeed={5}
                        className="p-2"
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
        {/* Mobile menu button - visible only on mobile */}
        <button 
          className="md:hidden text-primary p-2" 
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiMenuAlt4 className="w-6 h-6" />
        </button>
        <div className="hidden md:block">
          <ThemeSwitcher />
        </div>
      </nav>

      {/* iOS-Style Slide-up Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 z-50 md:hidden w-screen bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Menu Panel */}
              <motion.div 
                className="fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 rounded-t-3xl border shadow-2xl max-h-[90vh] overflow-y-auto"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "linear" }}
                onClick={(e) => e.stopPropagation()}
                drag="y"
                dragConstraints={{ top: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.y > 100 || info.velocity.y > 500) {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {/* Handle for pulling down */}
                <div className="w-full flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing">
                  <div className="w-12 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
                </div>
                
                <div className="px-6 py-10">
                  {/* Navigation Links */}
                  <ul className="grid gap-2">
                    {dataNavbar.map(({ navigate, navigate_url }, index) => {
                      const isActive = pathname === `/${navigate_url}`;

                      return (
                        <motion.li 
                          key={navigate_url} 
                          className="relative border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          <Link
                            href={`/${navigate_url}`}
                            className={`
                              block p-3 transition-all duration-150 ease-in-out
                              ${isActive 
                                ? "bg-neutral-50 dark:bg-neutral-800/60 text-primary font-medium" 
                                : "bg-white dark:bg-neutral-900 text-primary/70 hover:text-primary"}
                            `}
                          >
                            {isActive ? (
                              <GradientText
                                colors={[
                                  "#4079ff",
                                  "#40ffaa",
                                  "#4079ff",
                                  "#40ffaa",
                                  "#4079ff",
                                ]}
                                animationSpeed={5}
                              >
                                {navigate}
                              </GradientText>
                            ) : (
                              <span>{navigate}</span>
                            )}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                  
                  {/* Additional options */}
                  <motion.div 
                    className="mt-6 pt-6 border-t border-dashed border-neutral-300 dark:border-neutral-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-neutral-500 dark:text-neutral-400">Toggle theme</span>
                      <ThemeSwitcher />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;