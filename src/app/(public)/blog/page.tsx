import { fetchBlogs } from "@/app/api/devto/devto";
import { SectionTitle } from "@/components/modules/SectionTitle";
import Card from "@/components/ui/Card";
import { IoPencil } from "react-icons/io5";
export default async function Blog() {
  
  const blogs = await fetchBlogs("ivalshamkya");

  return (
    <main className="relative overflow-hidden py-5 px-6 md:py-6 md:px-12 lg:py-7 lg:px-28 gap-3 lg:gap-20">
      <SectionTitle title="Blog" description="My personal collection of code snippets, starter guides, tutorials, and interesting things I found online." icon={<IoPencil />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 mt-4 bg-transparent transition-all duration-700">
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
