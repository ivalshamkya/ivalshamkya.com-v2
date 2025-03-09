"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="relative group" ref={cardRef} onMouseMove={handleMouseMove}>
      {/* Animated border background */}
      <div className="absolute inset-0 z-10 h-full w-full bg-[linear-gradient(to_right,#50505018_1px,transparent_1px),linear-gradient(to_bottom,#50505018_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>

      <div className="absolute -inset-[1.5px] rounded-xl opacity-0 group-hover:opacity-100 duration-300 overflow-hidden p-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-400 to-green-500 animate-border-flow"></div>
      </div>

      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 duration-300 overflow-hidden bg-radial-gradient pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle 120px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.4), transparent 100%)`,
        }}
      />

      {/* Card content */}
      <motion.div
        className="relative p-6 rounded-xl border bg-gradient-to-br from-neutral-50 via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 flex flex-col h-full z-0 backdrop-blur-sm overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <div className="w-fit mb-4 text-primary p-3 bg-white dark:bg-neutral-800 inline-block rounded-lg relative z-50 backdrop-blur-sm transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-primary/70 tracking-tight relative z-10 transition-all duration-300 group-hover:text-neutral-900 group-hover:dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed relative z-10 transition-all duration-300 group-hover:text-neutral-900 group-hover:dark:text-white">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default ServiceCard;