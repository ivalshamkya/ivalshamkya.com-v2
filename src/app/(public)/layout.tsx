import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/modules/Navbar";
import { Sidenav } from "@/components/modules/Sidenav";
import { dataNavbar } from "@/common/constant/nav-links";
import { Footer } from "@/components/modules/Footer";
import { ScrollToTop } from "@/components/modules/ScrollToTop";
import { Socials } from "@/components/modules/Socials";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ival Shamkya",
  description: "Ival Shamkya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en" className="dark">
        <body
          className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased
            selection:bg-green-300/70 selection:text-neutral-900 dark:selection:bg-[#49ff9b]/80 dark:selection:text-neutral-900
            `}
        >
          <div className="relative lg:grid lg:grid-cols-8 font-[family-name:var(--font-geist-sans)]">
            <Sidenav active={""} direction={"ltr"} data={dataNavbar} />
            <div
              className="w-full my-0 mx-auto relative col-span-8 md:col-span-6"
              id="home"
            >
              <Navbar />
              {children}
              <Footer />
            </div>
            <Socials />
            <ScrollToTop />
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
