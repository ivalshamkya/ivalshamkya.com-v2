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
      <a href={`/${navigate_url}`}
        key={`${navigate}`}
        className={`relative p-2 md:p-3 text-sm md:text-xl text-center transition-all ease-in duration-75 border border-transparent rounded-md
          ${active === navigate_url ?
          'text-primary'
          : 'text-primary/10'
        }
          `}
      >
        {icon}
      </a>
    </>
  );
};

export default SidenavItem;
