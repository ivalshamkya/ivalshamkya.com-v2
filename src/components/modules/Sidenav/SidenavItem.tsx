import { INavbar } from "@/common/types/navbar";
import { Button } from "@/components/ui/button";

interface ISidenavItem extends INavbar {
  active: string;
  external?: boolean;
}

const SidenavItem: React.FC<ISidenavItem> = ({
  navigate,
  navigate_url,
  icon,
  active,
  external,
}) => {
  return (
    <>
      <a href={`${navigate_url}`}
        rel={external ? "noopener noreferrer": ""}
        target={external ? "_blank" : undefined}
        key={`${navigate}`}
        className={`relative text-sm md:text-xl text-center transition-all ease-in duration-75 border border-transparent rounded-md
          ${active === navigate_url ?
          'text-primary'
          : 'text-primary/10'
        }
          `}
      >
        <Button variant={"space"} size={"icon"}>{icon}</Button>
      </a>
    </>
  );
};

export default SidenavItem;
