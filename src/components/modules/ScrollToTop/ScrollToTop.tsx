'use client'

import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant={"space"}
          className="fixed bottom-[1rem] right-[1rem] w-11 h-11 rounded-full shadow-lg hover:shadow-xl transition-shadow
          "
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="text-xl" size={20} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
