import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import { BiPaperPlane } from "react-icons/bi";

const Introduction: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className="w-full flex md:justify-end">
          <div className="relative w-full h-full rounded-md">
            <Image
              src={
                "https://res.cloudinary.com/dlalunvp7/image/upload/v1700070073/profile/1903gjv0qfjqwAiqwoik9012if901iasd.jpg"
              }
              fill
              alt={"personalImage"}
              className="object-contain rounded-md"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <div>
            <h2 className="font-bold md:text-2xl text-xl h-fit p-0 mb-1.5">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#36e45f] via-[#00ae29] to-[#00420f]">
                Hello
              </span>{" "}
              <span className="text-primary">
                it's me <div className="text-3xl ml-1.5 animate-wave">👋</div>
              </span>
            </h2>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold">Ival Shamkya.</h1>
          <p className="text-sm md:text-base font-normal">
            Welcome to my corner of the web, a digital space where I share my
            thoughts, experiences, and insights on software engineering and
            technology. In my free time, I build coding tutorials and experiment
            with new web app technologies. Also, your comments, questions, and
            shared experiences are always welcome here.
          </p>
          <div className="flex gap-2.5">
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
    </>
  );
};

export default Introduction;
