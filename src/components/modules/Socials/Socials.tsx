'use client'

import { dataSocials } from "@/common/constant/social-links";
import SocialItem from "./SocialItem";

const Socials: React.FC = () => {
  return (
    <>
      <aside
        className={`
        border-l border-dashed border-neutral-300 dark:border-neutral-800 h-svh hidden lg:block sticky top-0`}
      >
        <div
          className={`flex flex-col gap-4 h-screen justify-center items-start ml-8 
            `}
        >
          {dataSocials.map((social, i) => (
            <SocialItem key={i} {...social}/>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Socials;
