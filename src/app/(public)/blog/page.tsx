import { fetchBlogs } from "@/app/api/devto/devto"
import Card from "@/components/ui/Card";
export default async function Blog() {

  const blogs = await fetchBlogs("ivalshamkya");
  console.log(blogs)

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Latest Blogs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
        {blogs.length > 0 ? (
          blogs.map((blog: any, index: number) => (
            <Card
            title={blog.title}
            description={blog.description}
            imageUrl={blog.cover_image}
            link={blog.link}
            key={index}
            />
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </main>
  );
}
