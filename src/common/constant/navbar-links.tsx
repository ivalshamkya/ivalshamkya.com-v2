import { INavbar } from "@/common/types/navbar";
import { BiSolidContact, BiSolidLeaf } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { MdArticle } from "react-icons/md";

export const dataNavbar: INavbar[] = [
    {
      id: 0,
      navigate: "Home",
      navigate_url: "",
      offset: -100,
      icon: <IoHome />,
    },
    {
      id: 1,
      navigate: "About",
      navigate_url: "about",
      offset: -105,
      icon: <BiSolidLeaf />,
    },
    {
      id: 2,
      navigate: "Blog",
      navigate_url: "blog",
      offset: 0,
      icon: <MdArticle />,
    },
    {
      id: 3,
      navigate: "Contact",
      navigate_url: "contact",
      offset: 0,
      icon: <BiSolidContact />,
    },
  ];