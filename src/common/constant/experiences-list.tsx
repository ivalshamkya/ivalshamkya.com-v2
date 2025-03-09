import { IExperience } from "@/common/types/experience";
import { FaJava } from "react-icons/fa";
import { SiMongodb, SiSpring } from "react-icons/si";

export const dataExperiences: IExperience[] = [
  {
    id: 0,
    company: {
        name: 'Jobseeker Company',
        logo: 'https://media.licdn.com/dms/image/v2/C560BAQEslRlbfdMkcA/company-logo_200_200/company-logo_200_200/0/1673241564608/jobseeker_company_logo?e=2147483647&v=beta&t=xrWxj42oKGlaTYxaI09c6dGSYEAsfG4GOeiT4RC1bhU',
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
        logo: 'https://media.licdn.com/dms/image/v2/D560BAQGYtgTadofvWQ/company-logo_200_200/company-logo_200_200/0/1704953826751?e=1746662400&v=beta&t=IlZ59pL8DXuNJ3xthGISW5KA2ccPonby_2LHpzVUTfM'
    },
    position: "Software Engineer",
    startDate: new Date("2021-01-01"),
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis, perspiciatis sint cumque, dolores suscipit dolorem nisi possimus porro eligendi odio perferendis inventore a eveniet enim explicabo nulla numquam officiis.",
    skills: {}
  },
];
