import { cn } from "@/lib/utils";

interface IStatus {
  alwaysOpen?: boolean;
  size?: "default" | "sm" | "lg";
  className?: string;
}

const Status: React.FC<IStatus> = ({ 
  alwaysOpen = false, 
  size = "default",
  className
}) => {
  // Define the variant classes
  const containerVariants = {
    sm: "w-[8rem]",
    default: "w-[10.5rem]",
    lg: "w-[12rem]"
  };

  const wrapperVariants = {
    sm: "px-2 py-1",
    default: "px-[11px] py-1.5",
    lg: "px-3 py-2"
  };

  const indicatorVariants = {
    sm: "w-2 h-2",
    default: "w-2.5 h-2.5",
    lg: "w-3 h-3"
  };

  const textVariants = {
    sm: "text-[0.7rem]",
    default: "text-sm",
    lg: "text-base"
  };

  return (
    <div className={cn(containerVariants[size], className)}>
      <div
        className={cn(
          "group relative overflow-hidden inline-flex items-center bg-gradient-to-br from-neutral-100 via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800",
          "border border-neutral-300 dark:border-neutral-700",
          "transition-all duration-300 ease-in-out",
          "hover:border-green-500 hover:dark:border-[#40ffaa]",
          "hover:dark:to-[#40ffaa]/30 hover:to-green-500 backdrop-blur-sm shadow-inner rounded-full",
          wrapperVariants[size],
          alwaysOpen ? "w-full gap-2" : "w-fit hover:w-full hover:gap-2"
        )}
      >
        <div className="relative inline-flex justify-center items-center">
          <div className={cn(
            "bg-gradient-to-r from-green-400 to-green-500 rounded-full",
            indicatorVariants[size]
          )}></div>
          <div className={cn(
            "bg-gradient-to-r from-green-400 to-green-500 rounded-full absolute top-0 left-0 animate-ping",
            indicatorVariants[size]
          )}></div>
          <div className={cn(
            "bg-gradient-to-r from-green-400 to-green-500 rounded-full absolute top-0 left-0 animate-pulse",
            indicatorVariants[size]
          )}></div>
        </div>
        <span className={cn(
          `${ alwaysOpen ? "w-full" : "w-0 group-hover:w-full"} overflow-hidden whitespace-nowrap items-center justify-center transition-all ease-in-out duration-300`,
          textVariants[size]
        )}>
          {" "}
          Available for work.{" "}
        </span>
      </div>
    </div>
  );
};

export default Status;