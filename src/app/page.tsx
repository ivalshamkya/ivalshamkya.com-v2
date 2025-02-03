"use client";

import { dataNavbar } from "@/common/constant/navbar-links";
import { Footer } from "@/components/modules/Footer";
import { Navbar } from "@/components/modules/Navbar";
import { ScrollToTop } from "@/components/modules/ScrollToTop";
import { Sidenav } from "@/components/modules/Sidenav";
import { Socials } from "@/components/modules/Socials";

export default function Home() {
  return (
    <div className="relative lg:grid lg:grid-cols-8 font-[family-name:var(--font-space-grotesk)]">
      <Sidenav active={""} direction={"ltr"} data={dataNavbar} />
      <div className="w-full my-0 mx-auto relative col-span-6" id="home">
        <Navbar active={""} />

        <main className="container p-4 md:p-2">
          <div className="h-screen bg-green-600/70"></div>
          <div className="h-screen bg-green-600/70"></div>
          <div className="h-screen bg-green-600/70"></div>
        </main>
        <Footer />
      </div>
      <Socials />
      <ScrollToTop />
    </div>
  );
}
