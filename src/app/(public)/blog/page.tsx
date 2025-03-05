import { fetchBlogs } from "@/app/api/devto/devto";
import { SectionTitle } from "@/components/modules/SectionTitle";
import Card from "@/components/ui/Card";
export default async function Blog() {
  
  const blogs = await fetchBlogs("ivalshamkya");

  return (
    <main className="relative overflow-hidden py-5 px-6 md:py-12 md:px-12 lg:py-12 lg:px-28 gap-3 lg:gap-20">
      <div className="absolute inset-0 -z-10 h-1/3 w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:25px_25px] md:bg-[size:45px_45px] lg:bg-[size:55px_55px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      <div
        style={{
          backgroundImage: `radial-gradient(circle at center, var(--tw-gradient-stops))`,
        }}
        className="absolute -z-10 -top-36 h-[65%] w-full overflow-visible blur-3xl bg-gradient-radial from-neutral-500/10 via-neutral-500/5 to-transparent"
      ></div>
      <SectionTitle title="Blog" description="My personal collection of code snippets, starter guides, tutorials, and interesting things I found online." icon={<></>} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-7 mt-4 bg-transparent">
        {blogs.length > 0 ? (
          blogs.map((blog: any, index: number) => (
            <Card {...blog} key={index} />
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </main>
  );
}
