import { JSX } from "react";

interface IExperienceSkill {
    name: string;
    icon: JSX.Element;
}

const ExperienceSkill: React.FC<IExperienceSkill> = ({ icon, name }) => {
    return (
        <>
        <div className="w-fit py-1 px-1 md:py-1.5 md:px-2 flex justify-center items-center gap-2 bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 rounded-md transition-all linear duration-300">
            <div className="w-4">{icon}</div>
            <h1 className="whitespace-nowrap text-primary text-[0.77rem] md:text-xs">{name}</h1>
          </div>
        </>
    );
}

export default ExperienceSkill;