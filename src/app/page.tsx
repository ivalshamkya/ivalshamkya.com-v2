"use client";

import { dataNavbar } from "@/common/constant/navbar-links";
import { Experiences } from "@/components/modules/Experience";
import { Footer } from "@/components/modules/Footer";
import { Navbar } from "@/components/modules/Navbar";
import { ScrollToTop } from "@/components/modules/ScrollToTop";
import { SectionTitle } from "@/components/modules/SectionTitle";
import { Sidenav } from "@/components/modules/Sidenav";
import { Skills } from "@/components/modules/Skills";
import { Socials } from "@/components/modules/Socials";
import { Introduction } from "@/components/sections/Introduction";
import { BiRocket } from "react-icons/bi";
import { BsSuitcaseLg } from "react-icons/bs";

export default function Home() {
  return (
    <div className="relative lg:grid lg:grid-cols-8 font-[family-name:var(--font-space-grotesk)]">
      <Sidenav active={""} direction={"ltr"} data={dataNavbar} />
      <div className="w-full my-0 mx-auto relative col-span-6" id="home">
        <Navbar active={""} />
        <main className="container grid grid-cols-1 py-5 px-10 md:py-20 md:px-28 gap-3 md:gap-10">
          <Introduction />
          <Skills />

          <SectionTitle title="My Experience" icon={<BsSuitcaseLg />} description={"Navigating diverse environments with adaptability and expertise for holistic solutions."} />
          <Experiences />
          <div className="h-screen bg-green-600/70"></div>
          <SectionTitle title="Projects" icon={<BiRocket />} description={"I love open source and I have been contributing to different projects for the some time. Here is a list of projects that I have contributed to and authored."} />
          <div className="h-screen bg-green-600/70"></div>
        </main>
        <Footer />
      </div>
      <Socials />
      <ScrollToTop />
    </div>
  );
}
