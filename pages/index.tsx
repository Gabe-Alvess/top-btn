import type { NextPage } from "next";
import Head from "next/head";
import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef: any = useRef();

  const toggleVisibility = () => {
    if (scrollRef.current.scrollTop > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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
      top: 1857,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    scrollRef.current.scrollTo({
      top: 2787,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", toggleVisibility);
    return () => {
      scrollRef.current.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const [height, setHeight] = useState(0);

  const pageHeight = () => {
    const scroll = scrollRef.current.scrollTop;
    setHeight(scroll);
  };

  useEffect(() => {
    scrollRef.current.addEventListener("scroll", pageHeight);
    return () => {
      scrollRef.current.removeEventListener("scroll", pageHeight);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="h-screen snap-y snap-mandatory scrollbar scrollbar-track-black scrollbar-thumb-amber-400"
    >
      <Head>
        <title>TOP BTN TS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed top-0 w-full h-14 px-3 bg-black text-amber-400 flex justify-between items-center">
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
      <section className="snap-start" id="home">
        <div className="h-screen overflow-hidden bg-teal-600 flex justify-center items-center">
          <h1 className="text-8xl text-white uppercase font-semibold">home</h1>
          <h1 className="fixed top-20 text-8xl text-white uppercase font-semibold">
            height: {height}
          </h1>
        </div>
      </section>
      <section className="snap-start" id="about">
        <div className="h-screen overflow-hidden bg-red-600 flex justify-center items-center">
          <h1 className="text-8xl text-white uppercase font-semibold">about</h1>
        </div>
      </section>
      <section className="snap-start" id="projects">
        <div className="h-screen overflow-hidden bg-green-600 flex justify-center items-center">
          <h1 className="text-8xl text-white uppercase font-semibold">
            projects
          </h1>
        </div>
      </section>
      <section className="snap-start" id="contact">
        <div className="h-screen overflow-hidden bg-blue-600 flex justify-center items-center">
          <h1 className="text-8xl text-white uppercase font-semibold">
            contact
          </h1>
        </div>
      </section>
      <div className="fixed bottom-2 w-full flex justify-center">
        <button
          type="button"
          onClick={scrollToTop}
          className={`${
            isVisible ? "opacity-100" : "opacity-0"
          } inline-flex items-center p-3 rounded-full shadow-sm text-amber-400 bg-black transition-all duration-500 hover:bg-green-500 hover:text-black hover:ring-2 ring-white`}
        >
          <ArrowSmallUpIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Home;
