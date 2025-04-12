import { fetchBlogs } from "@/app/api/devto/devto";
import { METADATA } from "@/common/constant/metadata";
import { SectionTitle } from "@/components/modules/SectionTitle";
import Card from "@/components/ui/Card";
import { IoPencil } from "react-icons/io5";
export default function About() {

  return (
    <main className="relative overflow-hidden py-5 px-6 md:py-6 md:px-12 lg:py-7 lg:px-28 gap-3 lg:gap-20">
      <SectionTitle title="About" description="A short story of me." icon={<IoPencil />} />
      <div className="flex flex-col gap-7">
        <p>Hi! I’m {METADATA.authors.name}, a Fullstack Software Engineer passionate about building scalable and efficient applications. With expertise in Java, Spring Framework, PostgreSQL, MongoDB, and Next.js, I specialize in developing robust backend architectures and creating seamless frontend experiences.</p>
        <p>I enjoy working on end-to-end solutions, from designing APIs and optimizing database queries to crafting interactive UIs. With experience in AWS Lambda and cloud-based infrastructures, I thrive in building high-performance systems that handle complex data processing and deliver smooth user experiences.</p>
        <p>I believe in clean, maintainable code and continuously improving both technical and architectural decisions. This website is my space to share insights, experiences, and discoveries in the ever-evolving world of software development.</p>
        <p>Thanks for visiting! Let’s connect and build something amazing together. 🚀</p>
      </div>
    </main>
  );
}
