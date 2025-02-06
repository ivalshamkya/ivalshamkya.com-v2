"use client"

import { motion } from "framer-motion";
import { Project } from "@/common/types/project";
import { FileText } from "lucide-react";
import Image from "next/image";

const ProjectItem: React.FC<{ item: Project }> = ({ item }) => {
  const heightClasses = {
    tall: "row-span-4",
    medium: "row-span-3",
    short: "row-span-2",
  };

  return (
    <motion.div
      className={`
        ${heightClasses[item.height || "medium"]}
        bg-neutral-100 dark:bg-neutral-900 border rounded-xl shadow-md overflow-hidden
        transform transition-transform hover:scale-[1.01] duration-300
        relative
      `}
      initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
    >
      {/* Image */}
      <div className="relative h-full w-full">
        <Image
          src={item.image}
          alt="project"
          fill
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <motion.div
        className="h-fit absolute bottom-0 bg-white dark:bg-neutral-900 p-4 flex flex-col justify-end"
        variants={{
          initial: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-gray-300" />
          <span className="text-sm text-gray-300">Text Card</span>
        </div>
        <p className="text-gray-100">{item.content}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectItem;