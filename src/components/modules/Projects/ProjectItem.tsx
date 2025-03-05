"use client";

import { motion } from "framer-motion";
import { Project } from "@/common/types/project";
import Image from "next/image";
import ProjectSkill from "./ProjectSkill";
import { JSX } from "react";

const ProjectItem: React.FC<{ item: Project; delay: number }> = ({
  item,
  delay,
}) => {

  // const [repository, setRepository] = useState<Repository | null>(null);

  // useEffect(() => {
  //     async function fetchRepo() {
  //         try {
  //           const response = await fetchRepository(item.owner, item.title);
  //           setRepository(response);
  //         } catch (error) {
  //           console.error('Error fetching repository:', error);
  //         }
  //       }
  //       fetchRepo();
  // }, [])

  const heightClasses = {
    tall: "row-span-4",
    medium: "row-span-3",
    short: "row-span-2",
  };

  const techStacks: Array<[string, JSX.Element]> = Object.entries(
    item.techStack || []
  );

  return (
    <motion.div
      className={`
        ${heightClasses[item.height || "medium"]}
        group bg-white dark:bg-neutral-900 border rounded-2xl shadow-sm overflow-hidden
        transform transition-transform hover:scale-[1.01] hover:border-[#4079ff] hover:dark:border-[#40ffaa] duration-300
        flex flex-col relative
      `}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 + delay }}
    >
      {item.isAuthored && (
        <div className="absolute top-0 right-0 bg-gradient-to-br from-[#4079ff] via-[#0044e4] to-[#163785] dark:from-[#2fc280] dark:via-[#00a95d] dark:to-[#009a55] text-white text-sm font-medium px-3 py-1.5 rounded-tr-xl rounded-bl-xl shadow-lg z-10">
          Authored
        </div>
      )}

      <div className="relative h-1/2 flex-1">
        <Image
          src={item.image}
          alt="project"
          fill
          className="h-full w-full object-cover hover:scale-[1.02] transition-all ease-in duration-150"
          loading="lazy"
        />
      </div>

      <motion.div
        className="h-1/2 p-5 flex flex-col"
        variants={{
          initial: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <a
                href={item.url}
                target="_blank"
                className="text-xl text-primary font-semibold group-hover:text-[#4079ff] group-hover:dark:text-[#40ffaa]"
              >
                {item.title}
              </a>
            </div>
            <p className="text-neutral-800 dark:text-neutral-100 font-light text-sm line-clamp-3">
              {item.content}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStacks.map(([name, icon], index) => (
              <ProjectSkill key={index} icon={icon} name={name} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectItem;
