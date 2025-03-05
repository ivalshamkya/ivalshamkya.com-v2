import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-svh bg-neutral-50 dark:bg-neutral-900">
      <div className="absolute inset-0 -z-10 h-1/3 w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:25px_25px] md:bg-[size:50px_50px] lg:bg-[size:57px_57px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      <div
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--tw-gradient-stops))`,
        }}
        className="absolute -top-36 h-[65%] w-full overflow-visible blur-3xl bg-gradient-radial from-neutral-500/10 via-neutral-500/5 to-transparent"
      ></div>

      <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-500">
        Why am i here?
      </h1>

      <p className="text-sm md:text-xl text-neutral-900 dark:text-neutral-300 mt-4">
        It seems like the page that you are looking for is no longer here.
      </p>

      <div className="mt-6">
        <Link href={"/"}>
          <Button variant={"default"} size={"lg"}>
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}
