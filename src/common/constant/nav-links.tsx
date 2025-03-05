import { Navbar } from "@/common/types/navbar";
import { BiRocket } from "react-icons/bi";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";

export const dataNavbar: Navbar[] = [
    {
      id: 0,
      navigate: "Home",
      navigate_url: "",
      offset: -100,
      icon: <IoHomeOutline />,
    },
    {
      id: 1,
      navigate: "Experience",
      navigate_url: "experience",
      offset: 0,
      icon: <BsSuitcaseLg />,
    },
    {
      id: 2,
      navigate: "Projects",
      navigate_url: "projects",
      offset: -105,
      icon: <BiRocket />,
    },
  ];