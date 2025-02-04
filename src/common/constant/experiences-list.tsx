import { IExperience } from "@/common/types/experience";
import { FaJava } from "react-icons/fa";
import { SiMongodb, SiSpring } from "react-icons/si";

export const dataExperiences: IExperience[] = [
  {
    id: 0,
    company: {
        name: 'Jobseeker Company',
        logo: 'https://www.jobseeker.software/logo-js.png',
        website: 'https://www.jobseeker.software'
    },
    position: "Fullstack Engineer",
    startDate: new Date("2024-03-01"),
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut vel hic accusamus labore quaerat, omnis nemo ea, quidem asperiores pariatur nulla, dolorem maiores nesciunt obcaecati nisi consequatur optio blanditiis laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis, perspiciatis sint cumque, dolores suscipit dolorem nisi possimus porro eligendi odio perferendis inventore a eveniet enim explicabo nulla numquam officiis.",
    skills: {
      Java: <FaJava size={"100%"} className="text-primary" />,
      Spring: <SiSpring size={"100%"} className="text-[#77bc1f]" />,
      MongoDB: <SiMongodb size={"100%"} className="text-[#589636]" />,
    }
  },
  {
    id: 1,
    company: {
        name: 'Pao Dev',
        logo: 'https://www.jobseeker.software/logo-js.png'
    },
    position: "Software Engineer",
    startDate: new Date("2021-01-01"),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis, perspiciatis sint cumque, dolores suscipit dolorem nisi possimus porro eligendi odio perferendis inventore a eveniet enim explicabo nulla numquam officiis.",
    skills: {}
  },
];
