import { SOCIALS } from "@/common/constant/social-links";
import { SectionTitle } from "@/components/modules/SectionTitle";
import { Button } from "@/components/ui/button";
import { ContactIcon } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <>
      <SectionTitle
        title="Contact"
        description="Let's get in touch with me."
        icon={<ContactIcon />}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        <div className="relative w-full border border-[#2290c3] dark:border-[#1b6c92] bg-gradient-to-br from-[#3199c9] to-[#0e76a8] dark:from-[#0e76a8] dark:to-blue-950 p-7 rounded-xl">
          <div className="mb-5">
            <h1 className="text-xl text-white font-semibold">Let`s connect</h1>
            <p className="text-sm text-white">
              Connect for collaboration or explore my professional experience.
            </p>
          </div>
          <div>
            <Link
              href={SOCIALS[0].navigate_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant={"white"}>
                Go to LinkedIn <MdArrowOutward />
              </Button>
            </Link>
          </div>
          <SiLinkedin className="text-8xl text-white absolute right-2 bottom-2 opacity-20" />
        </div>

        <div className="relative w-full border border-neutral-600 bg-gradient-to-br from-neutral-800 to-neutral-950 p-7 rounded-xl">
          <div className="mb-5">
            <h1 className="text-xl text-white font-semibold">
              Explore the code
            </h1>
            <p className="text-sm text-white">
              Explore the source code for all my projects on GitHub.
            </p>
          </div>
          <div>
            <Link
              href={SOCIALS[1].navigate_url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button variant={"white"}>
                Go to Github <MdArrowOutward />
              </Button>
            </Link>
          </div>
          <SiGithub className="text-8xl text-white absolute right-2 bottom-2 opacity-20" />
        </div>
      </div>
    </>
  );
};

export default Contact;
