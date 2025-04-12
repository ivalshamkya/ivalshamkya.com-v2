import { INavbar } from "@/common/types/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ISidenavItem extends INavbar {
  active: boolean;
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
      <Link href={`/${navigate_url}`}
        rel={external ? "noopener noreferrer": ""}
        target={external ? "_blank" : undefined}
        key={`${navigate}`}
        className={`relative text-sm md:text-xl text-center transition-all ease-in duration-75 border border-transparent rounded-md
          ${active
          ? 'text-primary'
          : 'text-primary/10'
        }
          `}
      >
        <Button variant={"space"} size={"icon"}>{icon}</Button>
      </Link>
    </>
  );
};

export default SidenavItem;
