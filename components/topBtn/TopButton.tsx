import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type Props = {
  forwardedRef: any;
};

export const TopButton = ({ forwardedRef }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (forwardedRef.current.scrollTop > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    forwardedRef.current.addEventListener("scroll", toggleVisibility);
  }, [forwardedRef]);

  const scrollToTop = () => {
    forwardedRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
