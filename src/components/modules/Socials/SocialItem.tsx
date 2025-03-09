import { INavbar } from "@/common/types/navbar";
import { Button } from "@/components/ui/button";

const SocialItem: React.FC<INavbar> = ({id, navigate_url, icon}) => {
    return (
        <>
            <a href={navigate_url} target="_blank" rel="noopener noreferrer"
              key={`${id}`}
              className={``}
            >
              <Button variant={"space"} size={"icon"}>
                {icon}
              </Button>
            </a>
        </>
    )
}

export default SocialItem;