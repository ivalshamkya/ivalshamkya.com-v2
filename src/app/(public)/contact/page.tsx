import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

export default async function Blog() {

  return (
    <main className="relative overflow-hidden py-5 px-6 md:py-12 md:px-12 lg:py-20 lg:px-28 gap-3 lg:gap-20">
      <div className="absolute inset-0 -z-10 h-1/3 w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:25px_25px] md:bg-[size:45px_45px] lg:bg-[size:55px_55px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      <div
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--tw-gradient-stops))`,
        }}
        className="absolute -z-10 -top-36 h-[65%] w-full overflow-visible blur-3xl bg-gradient-radial from-neutral-500/10 via-neutral-500/5 to-transparent"
      ></div>
      <div className="grid grid-cols-2 gap-5">
        <div className="relative w-full border border-[#1b6c92] bg-gradient-to-br from-[#3199c9] to-[#0e76a8] dark:from-[#0e76a8] dark:to-blue-950 p-7 rounded-xl">
          <div className="mb-5">
            <h1 className="text-xl text-white font-bold">Let`s connect</h1>
            <p className="text-sm text-white">Connect for collaboration or explore my professional experience.</p>
          </div>
          <div>
            <Button variant={"default"}>Go to LinkedIn <MdArrowOutward /></Button>
          </div>
          <SiLinkedin className="text-8xl text-white absolute right-2 bottom-2 opacity-20"/>
        </div>

        <div className="relative w-full border border-neutral-600 bg-gradient-to-br from-neutral-800 to-neutral-950 p-7 rounded-xl">
          <div className="mb-5">
            <h1 className="text-xl text-white font-bold">Explore the code</h1>
            <p className="text-sm text-white">Explore the source code for all my projects on GitHub.</p>
          </div>
          <div>
            <Button variant={"default"}>Go to Github <MdArrowOutward /></Button>
          </div>
          <SiGithub className="text-8xl text-white absolute right-2 bottom-2 opacity-20"/>
        </div>
      </div>
    </main>
  );
}
