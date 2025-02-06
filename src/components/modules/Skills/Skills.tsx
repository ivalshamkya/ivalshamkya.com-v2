import { JSX } from "react";
import Marquee from "react-fast-marquee";
import { STACKS } from "@/common/constant/skills";
import SkillItem from "./SkillItem";

const Skills: React.FC = () => {
  if (!STACKS) {
    return <></>;
  }

  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(STACKS).sort(() => Math.random() - 0.5);

  return (
    <div className="space-y-2 py-2.5 border-y border-primary/30 border-dashed bg-gradient-to-r from-primary/[0.01] via-transparent to-primary/[0.01]">
      {Array.from({ length: 1 }, (_, index) => {
        const slider = [...stacksInArray].sort(() => Math.random() - 0.5)
        return (
          <Marquee key={index} speed={40} direction={"right"} pauseOnHover>
            {slider.map(([name, icon], index) => (
                <SkillItem key={index} name={name} icon={icon} />
            ))}
          </Marquee>
        )
      })}
    </div>
  );
};

export default Skills;