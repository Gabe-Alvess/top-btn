import React from "react";

type Props = {
  scrollRef: any;
};

export const Header = ({ scrollRef }: Props) => {
  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToAbout = () => {
    scrollRef.current.scrollTo({
      top: 929,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    scrollRef.current.scrollTo({
      top: 1858,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    scrollRef.current.scrollTo({
      top: 2787,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 w-screen h-14 px-7 bg-black text-amber-400 flex justify-between items-center">
      <button
        type="button"
        onClick={scrollToTop}
        className="rounded-full transition-all duration-500 hover:ring-2 ring-amber-400"
      >
        <div className="w-11 h-11">
          <img src="/images/gamepad.svg" alt="logo" />
        </div>
      </button>
      <div className="flex justify-evenly gap-3">
        <button type="button" onClick={scrollToAbout}>
          <div>
            <p className="uppercase font-semibold p-2 rounded-sm transition-all duration-500 hover:text-red-600 hover:ring-2 ring-amber-400">
              about
            </p>
          </div>
        </button>
        <button type="button" onClick={scrollToProjects}>
          <div>
            <p className="uppercase font-semibold p-2 rounded-sm transition-all duration-500 hover:text-red-600 hover:ring-2 ring-amber-400">
              projects
            </p>
          </div>
        </button>
        <button type="button" onClick={scrollToContact}>
          <div>
            <p className="uppercase font-semibold p-2 rounded-sm transition-all duration-500 hover:text-red-600 hover:ring-2 ring-amber-400">
              contact
            </p>
          </div>
        </button>
      </div>
    </header>
  );
};
