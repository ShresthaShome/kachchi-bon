"use client";

import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";
import { Button } from "./ui/button";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 rounded-full w-10 h-10 hover:bg-blue-400 hover:cursor-pointer hover:scale-130 transition-all duration-300 ease-in-out z-50"
        >
          <ChevronsUp className="size-7 -mt-[2px]" />
        </Button>
      )}
    </>
  );
}
