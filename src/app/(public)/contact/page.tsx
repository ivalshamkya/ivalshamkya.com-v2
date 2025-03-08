import { ContactSection, MessageSection } from "@/components/sections/Contact";

export default function Contact() {
  return (
    <main className="relative overflow-hidden py-5 px-6 md:py-6 md:px-12 lg:py-7 lg:px-28 gap-3 lg:gap-20">
      <ContactSection />
      <MessageSection />
    </main>
  );
}
