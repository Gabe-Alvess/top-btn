import React, { useEffect, useState } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";

type Props = {
  forwardedRef: any;
};

export const TopButton = ({ forwardedRef }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (forwardedRef.current.scrollTop > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    forwardedRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    forwardedRef.current.addEventListener("scroll", toggleVisibility);
    return () => {
      forwardedRef.current.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 w-full flex justify-center">
      <button
        className={`${isVisible ? "opacity-100" : "opacity-0"} topBtn`}
        type="button"
        onClick={scrollToTop}
      >
        <ArrowSmallUpIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
