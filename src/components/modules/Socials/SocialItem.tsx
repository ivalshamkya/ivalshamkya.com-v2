import { ISocial } from "@/common/types/social"

const SocialItem: React.FC<ISocial> = ({id, navigate_url, icon}) => {
    return (
        <>
            <a href={navigate_url} target="_blank" rel="noopener noreferrer"
              key={`${id}`}
              className={`relative p-2 md:p-3 text-sm md:text-base text-center transition-all ease-in duration-75 bg-white dark:bg-zinc-800 border border-neutral-300 dark:border-neutral-700 rounded-md hover:border-neutral-500 hover:dark:border-neutral-600`}
            >
              <div className={`w-5`}>
                {icon}
              </div>
            </a>
        </>
    )
}

export default SocialItem;