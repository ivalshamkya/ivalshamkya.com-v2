import { Navbar } from "@/common/types/navbar";

interface ISidenavItem extends Navbar {
  active: string;
}

const SidenavItem: React.FC<ISidenavItem> = ({
  navigate,
  navigate_url,
  icon,
  active,
}) => {
  return (
    <>
      <li
        key={`${navigate}`}
        className={`relative p-2 md:p-3 text-sm md:text-base text-center dark:text-zinc-500 transition-all ease-in duration-75 border border-transparent rounded-md hover:border-neutral-500 hover:dark:border-zinc-700
          ${active === navigate_url ?
          'text-red-500'
          : 'hover:dark:text-white bg-transparent bg-gradient-to-br hover:from-neutral-200 hover:via-neutral-100 hover:to-white hover:dark:from-neutral-950 hover:dark:via-neutral-800 hover:dark:to-neutral-600'
        }
          `}
      >
        <a href={`/${navigate_url}`}>{icon}</a>
      </li>
    </>
  );
};

export default SidenavItem;
