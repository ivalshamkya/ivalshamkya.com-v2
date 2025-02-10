import { Experiences } from "@/components/modules/Experience";
import { Projects } from "@/components/modules/Projects";
import { Introduction } from "@/components/sections/Introduction";

export default function Home() {
  return (
    <main className="relative overflow-hidden grid grid-cols-1 py-5 px-6 md:py-12 md:px-12 lg:py-20 lg:px-28 gap-3 lg:gap-20">
      <div className="absolute inset-0 -z-10 h-1/3 w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:25px_25px] md:bg-[size:50px_50px] lg:bg-[size:57px_57px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      <div
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--tw-gradient-stops))`,
        }}
        className="absolute -top-36 h-[20%] w-full overflow-visible blur-3xl bg-gradient-radial from-neutral-500/10 via-neutral-500/5 to-transparent"
      ></div>
      <Introduction />
      <Experiences />
      <Projects />
    </main>
  );
}
