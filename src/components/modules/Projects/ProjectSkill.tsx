import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { JSX } from "react";

interface IProjectSkill {
  name: string;
  icon: JSX.Element;
}

const ProjectSkill: React.FC<IProjectSkill> = ({ icon, name }) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="py-1 px-1 md:py-1.5 md:px-2 flex justify-center items-center gap-2 bg-neutral-50 dark:bg-neutral-900 border border-slate-200 dark:border-white/10 rounded-lg transition-all duration-300">
              <div className="w-4">{icon}</div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p className="whitespace-nowrap text-sm">{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default ProjectSkill;
