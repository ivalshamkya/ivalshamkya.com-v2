import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { JSX } from "react";

interface SkillInterfaces {
  name: string;
  icon: JSX.Element;
}

const SkillItem: React.FC<SkillInterfaces> = ({ name, icon }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-fit py-2 px-2.5 my-1 mx-3 md:mx-4 flex justify-center items-center space-x-2 rounded text-primary/10">
            <div className="w-9">{icon}</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <h1 className="whitespace-nowrap text-sm">{name}</h1>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillItem;
