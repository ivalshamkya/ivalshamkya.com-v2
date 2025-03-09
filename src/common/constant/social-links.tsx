import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { INavbar } from "../types/navbar";

const iconSize = '100%';

export const SOCIALS: INavbar[] = [
  {
    id: 0,
    navigate: "LinkedIn",
    navigate_url: "https://linkedin.com/in/ivalshamkya",
    icon: <SiLinkedin size={iconSize} className="text-primary" />,
  },
  {
    id: 1,
    navigate: "Github",
    navigate_url: "https://github.com/ivalshamkya",
    icon: <SiGithub size={iconSize} className="text-primary" />,

  },
  {
    id: 2,
    navigate: "Instagram",
    navigate_url: "https://instagram.com/ival__shamkya",
    icon: <SiInstagram size={iconSize} className="text-primary" />,

  },
];
