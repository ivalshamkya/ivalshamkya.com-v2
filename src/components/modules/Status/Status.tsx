const Status = () => {
  return (
    <>
      <div className="hidden md:block w-[10.5rem]">
        <div className="group w-fit px-[11px] py-1.5 relative overflow-hidden inline-flex items-center bg-white/70 dark:bg-[#212121] border border-gray-300 dark:border-white/20 backdrop-blur-sm shadow-inner rounded-full hover:w-full hover:gap-2">
          <div className="relative inline-flex justify-center items-center text-sm">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-400 to-green-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
          <span className="w-0 overflow-hidden whitespace-nowrap group-hover:w-full text-sm items-center justify-center transition-all ease-in-out duration-300">
            {" "}
            Available for work.{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Status;
