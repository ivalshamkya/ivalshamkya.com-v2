import { IExperience } from "@/common/types/experience";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/date-format";
import Link from "next/link";
import { JSX } from "react";
import ExperienceSkill from "./ExperienceSkill";

const ExperienceCard: React.FC<IExperience> = ({
  id,
  company,
  position,
  description,
  startDate,
  endDate,
  skills,
}) => {
  const skillsInArray: Array<[string, JSX.Element]> = Object.entries(skills);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-5 border rounded-lg"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-between mb-7 md:mb-10"
      >
        <div className="flex items-center gap-5">
          <div className="relative p-8 bg-neutral-100 dark:bg-neutral-900 border rounded-lg">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">{company.name}</h1>
            {company.website ? (
              <Link
                href={company.website}
                target="_blank"
                className="text-xs md:text-sm hover:underline"
              >
                {company.website}
              </Link>
            ) : (
              <h1 className="text-xs md:text-sm">-</h1>
            )}
            <h1 className="block md:hidden text-sm md:text-base">{`${formatDate(
              startDate.toISOString(),
              "MMMM, YYYY"
            )} - ${endDate?.getFullYear() || "Present"}`}</h1>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <h1>{`${formatDate(startDate.toISOString(), "MMMM, YYYY")} - ${
            endDate?.getFullYear() || "Present"
          }`}</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-2 mt-2"
      >
        {skillsInArray.map(([name, icon], index) => (
          <ExperienceSkill key={index} icon={icon} name={name} />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-3 bg-neutral-50 dark:bg-neutral-900 border rounded-lg p-5"
      >
        <h1 className="text-xl mb-2.5 font-semibold">{position}</h1>
        <p className="text-primary/80 text-sm">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
