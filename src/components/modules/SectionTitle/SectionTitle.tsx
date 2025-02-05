import { JSX } from "react";

interface ISectionTitle {
  title: string;
  icon: JSX.Element;
  description: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({
  title,
  icon,
  description,
}) => {
  return (
    <>
      <div className="py-8 border-b border-primary/10 border-dashed">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-2xl">{icon}</div>
          <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
        <p className="font-light text-neutral-700 dark:text-neutral-400">{description}</p>
      </div>
    </>
  );
};

export default SectionTitle;
