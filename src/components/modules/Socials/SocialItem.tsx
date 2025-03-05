import { ISocial } from "@/common/types/social"
import { Button } from "@/components/ui/button";

const SocialItem: React.FC<ISocial> = ({id, navigate_url, icon}) => {
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