import { INavbar } from "@/common/types/navbar";
import { Leaf } from "lucide-react";
import { BiSolidContact } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { RiNewsFill } from "react-icons/ri";

export const dataNavbar: INavbar[] = [
    {
      id: 0,
      navigate: "Home",
      navigate_url: "",
      offset: -100,
      icon: <IoHomeOutline />,
    },
    {
      id: 1,
      navigate: "About",
      navigate_url: "about",
      offset: -105,
      icon: <Leaf />,
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