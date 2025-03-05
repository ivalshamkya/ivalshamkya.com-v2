"use client"; // Required for Next.js App Router

import { motion } from "framer-motion";
import React from "react";

type MovingBorderProps = {
  className?: string;
  children: React.ReactNode;
};

const MovingBorder: React.FC<MovingBorderProps> = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden group ${className}`}
    >
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-lg"
      ></motion.span>

      <span className="absolute inset-[2px] bg-neutral-900 rounded-lg"></span>

      {children}
    </motion.div>
  );
};

export default MovingBorder;
