import { IntroductionSection, ExperienceSection, ProjectSection, ServiceSection } from "@/components/sections/Home";

export default function Home() {

  return (
    <main className="relative overflow-hidden grid grid-cols-1 py-12 px-6 md:py-12 md:px-12 lg:py-20 lg:px-28 gap-3 lg:gap-20">
        <IntroductionSection />
        <ExperienceSection />
        <ProjectSection />
        <ServiceSection />
    </main>
  );
}
