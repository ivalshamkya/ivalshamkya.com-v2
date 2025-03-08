"use client";

import { SOCIALS } from "@/common/constant/social-links";
import { Skills } from "@/components/modules/Skills";
import SocialItem from "@/components/modules/Socials/SocialItem";
import GradientText from "@/components/modules/TextAnimation/GradientText/GradientText";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiPaperPlane } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const IntroductionSection: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-1/3 w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:35px_35px] md:bg-[size:40px_40px] lg:bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      <div
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--tw-gradient-stops))`,
        }}
        className="absolute -top-36 h-[20%] w-full overflow-visible blur-3xl bg-gradient-radial from-neutral-200/10 via-neutral-300/5 dark:from-neutral-500/10 dark:via-neutral-500/5 to-transparent"
      ></div>
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-5 mb-10 overflow-hidden">
        <div className="flex flex-row gap-5">
          <div className="relative min-w-[140px] min-h-[140px] md:w-[260px] md:h-[260px] overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dlalunvp7/image/upload/v1700070073/profile/1903gjv0qfjqwAiqwoik9012if901iasd.jpg"
              alt="personalImage"
              layout="fill"
              objectFit="cover"
              className="rounded-lg bg-[#0E0E10]"
              loading="lazy"
            />
          </div>
          <div className="flex md:hidden flex-col w-full h-full gap-1">
            <h1 className="flex text-xl md:text-4xl font-semibold">
              <div className="text-xl md:text-3xl mr-1 animate-wave">👋</div>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                className="custom-class"
              >
                &nbsp;Hi,
              </GradientText>
              <span>&nbsp;I&rsquo;m&nbsp;</span>
            </h1>
            <h1 className="text-4xl font-semibold">Ival Shamkya</h1>
            <div className="flex gap-2 mt-auto">
              {SOCIALS.map((social, i) => (
                <SocialItem key={i} {...social} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hidden md:flex ">
            <h1 className="flex text-xl md:text-4xl font-semibold">
              <div className="text-xl md:text-3xl mr-1 animate-wave">👋</div>
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                className="custom-class"
              >
                &nbsp;Hi,
              </GradientText>
              <span>&nbsp;I&rsquo;m&nbsp;</span>
              <TypeAnimation
                sequence={["Ival Shamkya.", 3333, "a Software Engineer.", 3333]}
                preRenderFirstString
                speed={45}
                deletionSpeed={65}
                repeat={Infinity}
              />
            </h1>
          </div>
          <p className="text-sm md:text-base font-normal">
            Welcome to my corner of the web, a digital space where I share my
            thoughts, experiences, and insights on software engineering and
            technology. In my free time, I build coding tutorials and experiment
            with new web app technologies. Also, your comments, questions, and
            shared experiences are always welcome here.
          </p>
          <div className="flex flex-col sm:flex-row gap-1 md:gap-2.5">
            <Link
              href={
                "https://asset-ivalshamkya.s3.ap-southeast-3.amazonaws.com/Resume/19122024/Resume.pdf"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="w-full" variant={"space"} size={"lg"}>
                <Download />
                Download Resume
              </Button>
            </Link>

            <Link
              href={"mailto:work.ivalshamkya@gmail.com"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="w-full md:w-fit" variant={"space"} size={"lg"}>
                <BiPaperPlane />
                Send Email
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default IntroductionSection;
