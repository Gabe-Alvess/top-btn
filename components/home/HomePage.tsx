import React, { useEffect, useState } from "react";

type Props = {
  scrollRef: any;
};

export const HomePage = ({ scrollRef }: Props) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const pageHeight = () => {
      const scroll = scrollRef.current.scrollTop;
      setHeight(scroll);
    };

    scrollRef.current.addEventListener("scroll", pageHeight);
  }, [scrollRef]);

  return (
    <section className="snap-start" id="home">
      <div className="h-screen overflow-hidden bg-teal-600 flex justify-center items-center">
        <h1 className="text-8xl text-white uppercase font-semibold">home</h1>
        <h1 className="fixed top-20 text-8xl text-white uppercase font-semibold">
          height: {height}
        </h1>
      </div>
    </section>
  );
};
