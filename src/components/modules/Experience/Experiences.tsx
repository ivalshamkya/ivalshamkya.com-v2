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
      className="grid grid-cols-1 gap-4"
    >
      {dataExperiences?.map((experience, index) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </motion.div>
  );
};

export default Experiences;
