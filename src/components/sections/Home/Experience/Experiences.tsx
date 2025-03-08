"use client"

import { dataExperiences } from "@/common/constant/experiences-list";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion"
import { BsSuitcaseLg } from "react-icons/bs";
import { SectionTitle } from "../../../modules/SectionTitle";

const Experiences: React.FC = () => {
  const container = {
    hidden: { opacity: 0.7 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-4 mt-5 lg:mt-0"
    >
      <SectionTitle title="My Experience" icon={<BsSuitcaseLg />} description={"Navigating diverse environments with adaptability and expertise for holistic solutions."} />
      {dataExperiences?.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </motion.div>
  );
};

export default Experiences;
