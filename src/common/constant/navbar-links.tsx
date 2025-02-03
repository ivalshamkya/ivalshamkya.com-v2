import { Navbar } from "@/common/types/navbar";
import { BiSolidContact } from "react-icons/bi";
import { BsHouseFill, BsSuitcaseLgFill } from "react-icons/bs";
import { RiNewsFill } from "react-icons/ri";

export const dataNavbar: Navbar[] = [
    {
      id: 0,
      navigate: "Home",
      navigate_url: "",
      offset: -100,
      icon: <BsHouseFill />,
    },
    {
      id: 1,
      navigate: "Projects",
      navigate_url: "projects",
      offset: -105,
      icon: <BsSuitcaseLgFill />,
    },
    {
      id: 3,
      navigate: "Blog",
      navigate_url: "blog",
      offset: 0,
      icon: <RiNewsFill />,
    },
    {
      id: 4,
      navigate: "Contact",
      navigate_url: "contact",
      offset: 0,
      icon: <BiSolidContact />,
    },
  ];