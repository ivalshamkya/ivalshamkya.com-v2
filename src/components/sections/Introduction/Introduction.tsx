"use client";

import { Skills } from "@/components/modules/Skills";
import GradientText from "@/components/modules/TextAnimation/GradientText/GradientText";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { BiPaperPlane } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";

const Introduction: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center gap-5 mb-10 overflow-hidden">
        <div className="md:w-full">
          <div className="relative w-[120px] h-[120px] md:w-[260px] md:h-[260px] overflow-hidden rounded-lg">
            <Image
              src="https://res.cloudinary.com/dlalunvp7/image/upload/v1700070073/profile/1903gjv0qfjqwAiqwoik9012if901iasd.jpg"
              alt="personalImage"
              layout="fill"
              objectFit="cover"
              className="rounded-lg bg-[#0E0E10]"
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="flex text-2xl md:text-4xl font-semibold">
            <div className="text-3xl mr-1 animate-wave">👋</div>
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
          <p className="text-sm md:text-base font-normal">
            Welcome to my corner of the web, a digital space where I share my
            thoughts, experiences, and insights on software engineering and
            technology. In my free time, I build coding tutorials and experiment
            with new web app technologies. Also, your comments, questions, and
            shared experiences are always welcome here.
          </p>
          <div className="flex flex-row gap-1 md:gap-2.5">
            <Button variant={"space"} size={"lg"}>
              <Download />
              Download Resume
            </Button>
            <Button variant={"space"} size={"lg"}>
              <BiPaperPlane />
              Send Email
            </Button>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default Introduction;
