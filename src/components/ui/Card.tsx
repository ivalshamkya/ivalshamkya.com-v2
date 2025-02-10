"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export default function Card({ title, description, imageUrl, link }: CardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.01, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="block bg-neutral-50 dark:bg-neutral-900 border rounded-2xl shadow overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image Section */}
      <div className="relative w-full h-52">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </motion.a>
  );
}
