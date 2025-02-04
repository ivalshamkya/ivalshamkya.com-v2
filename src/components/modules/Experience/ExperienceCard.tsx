import { IExperience } from "@/common/types/experience";
import Image from "next/image";
import { motion } from "framer-motion"

const ExperienceCard: React.FC<IExperience> = ({ id, company, descriptions }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="p-5 border rounded-md shadow-sm hover:shadow-md transition-shadow"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-20 h-20">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-xl font-semibold mt-4">{company.name}</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3"
        >
          {descriptions}
        </motion.p>
      </motion.div>
    );
  };

export default ExperienceCard;
