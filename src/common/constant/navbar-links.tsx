import { Navbar } from "@/common/types/navbar";
import { BiRocket, BiSolidContact } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { RiNewsFill } from "react-icons/ri";

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
      navigate: "Projects",
      navigate_url: "projects",
      offset: -105,
      icon: <BiRocket />,
    },
    {
      id: 2,
      navigate: "Blog",
      navigate_url: "blog",
      offset: 0,
      icon: <RiNewsFill />,
    },
    {
      id: 3,
      navigate: "Contact",
      navigate_url: "contact",
      offset: 0,
      icon: <BiSolidContact />,
    },
  ];