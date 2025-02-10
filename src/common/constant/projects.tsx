import { SiAstro, SiFramer, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Project } from "../types/project";

const iconSize = "100%";

export const dataProjects: Project[] = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dlalunvp7/image/upload/v1738949216/neobruu.png",
      title: "neobruu",
      content: "A collection of Neo-Brutalist reusable components written in React and Tailwind CSS. A collection of Neo-Brutalist reusable components written in React and Tailwind CSS. A collection of Neo-Brutalist reusable components written in React and Tailwind CSS. A collection of Neo-Brutalist reusable components written in React and Tailwind CSS.",
      url: "https://neobruu.vercel.app/",
      owner: "ivalshamkya",
      isAuthored: true,
      techStack: {
        "Next.js": <SiNextdotjs size={iconSize} className="transition-icon text-primary/80 group-hover:text-primary" />,
        TailwindCSS: <SiTailwindcss size={iconSize} className="transition-icon group-hover:text-cyan-300" />,
        TypeScript: <SiTypescript size={iconSize} className="transition-icon group-hover:text-blue-400" />,
      },
      height: "tall",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dlalunvp7/image/upload/v1738952028/ivalshamkya-portfolio.jpg",
      title: "ivalshamkya.com",
      content: "Personal website, portfolio and blog built with AstroJs, Tailwind CSS, and Typescript.",
      url: "https://www.ivalshamkya.com/",
      isAuthored: true,
      owner: "ivalshamkya",
      techStack: {
        "Astro.js": <SiAstro size={iconSize} className="transition-icon group-hover:text-primary" />,
        TailwindCSS: <SiTailwindcss size={iconSize} className="transition-icon group-hover:text-cyan-300" />,
        "Framer Motion": <SiFramer size={iconSize} className="transition-icon group-hover:text-primary" />,
        TypeScript: <SiTypescript size={iconSize} className="transition-icon group-hover:text-blue-400" />,
      },
      height: "tall",
    },
    // {
    //   id: 5,
    //   image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    //   height: "tall",
    //   content: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
    // },
    // {
    //   id: 6,
    //   image: "https://images.unsplash.com/photo-1682687221038-404670f05144",
    //   height: "tall",
    //   content: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit"
    // },
  ];