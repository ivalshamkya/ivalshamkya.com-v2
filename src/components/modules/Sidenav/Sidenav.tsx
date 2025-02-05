import { Navbar } from "@/common/types/navbar";
import SidenavItem from "./SidenavItem";

interface ISidenav {
  active: string;
  direction: "ltr" | "rtl";
  data: Navbar[]
}

const Sidenav: React.FC<ISidenav> = ({ active, direction = "ltr", data }) => {
  return (
    <>
      <aside
        className={`
        border-neutral-300 dark:border-neutral-800 h-svh hidden lg:block sticky top-0 z-[999]
          ${direction === "ltr" ? "border-r" : "border-l"} 
         `}
      >
        <div
          className={`flex flex-col gap-4 h-screen justify-center
            ${direction === "ltr" ? "items-end mr-8" : "items-start ml-8"} 
            `}
        >
          {data.map((navItem, i) => (
            <SidenavItem key={i} {...navItem} active={active} />
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidenav;
