import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { ISocial } from "@/common/types/social";

const iconSize = '100%';

export const dataSocials: ISocial[] = [
  {
    id: 0,
    navigate_url: "https://linkedin.com/in/ivalshamkya",
    icon: <SiLinkedin size={iconSize} className="text-primary" />,
  },
  {
    id: 1,
    navigate_url: "https://github.com/ivalshamkya",
    icon: <SiGithub size={iconSize} className="text-primary" />,

  },
  {
    id: 1,
    navigate_url: "https://instagram.com/ival__shamkya",
    icon: <SiInstagram size={iconSize} className="text-primary" />,

  },
];
