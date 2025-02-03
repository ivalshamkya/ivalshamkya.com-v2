import { METADATA } from "@/common/constant/metadata";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="w-full p-3 md:p-8 border-t border-neutral-300 dark:border-neutral-800 bg-white dark:bg-secondary flex justify-between items-center">
      <div>
        <div className="flex items-center gap-1 text-sm py-1 text-neutral-600 dark:text-neutral-200">
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <span>with</span>
        <div className="relative inline-flex justify-center items-center">
            <div className="text-red-500 rounded-full">❤️</div>
            <div className="text-red-500 absolute top-0 left-0 animate-ping">❤️</div>
            <div className="text-red-500 absolute top-0 left-0 animate-pulse">❤️</div>
        </div>
        <span>by</span>
        <span>{METADATA.authors.name}.</span>
        </div>
    </div>
      </footer>
    </>
  );
};

export default Footer;