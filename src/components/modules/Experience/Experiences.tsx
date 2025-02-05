import { dataExperiences } from "@/common/constant/experiences-list";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion"

const Experiences: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
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
      className="grid grid-cols-1 gap-4 mt-10 md:mt-0"
    >
      {dataExperiences?.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </motion.div>
  );
};

export default Experiences;
