"use client"

import { INavbar } from "@/common/types/navbar";
import SidenavItem from "./SidenavItem";
import { usePathname } from "next/navigation";

interface ISidenav {
  direction: "ltr" | "rtl";
  data: INavbar[];
  defaultActive?: string;
  external?: boolean;
}

const Sidenav: React.FC<ISidenav> = ({ 
  direction = "ltr", 
  data,
  defaultActive = "",
  external = false,
}) => {

  const pathname = usePathname();

  return (
    <aside
      className={`
      border-dashed border-neutral-300 dark:border-neutral-800 h-svh hidden lg:block sticky top-0 z-[999]
        ${direction === "ltr" ? "border-r" : "border-l"} 
       `}
    >
      <div
        className={`flex flex-col gap-4 h-screen justify-center
          ${direction === "ltr" ? "items-end mr-8" : "items-start ml-8"} 
          `}
      >
        {data.map((navItem, i) => (
          <SidenavItem 
            key={i} 
            {...navItem} 
            active={pathname === `/${navItem.navigate_url}`} 
            external={external}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidenav;