import React, { useEffect, useState } from "react";

type Props = {
  forwardedRef: any;
};

export const HomePage = ({ forwardedRef }: Props) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const pageHeight = () => {
      const scroll = forwardedRef.current.scrollTop;
      setHeight(scroll);
    };

    forwardedRef.current.addEventListener("scroll", pageHeight);
  }, [forwardedRef]);

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
