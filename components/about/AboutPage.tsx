import React from "react";

type Props = {};

export const AboutPage = (props: Props) => {
  return (
    <section className="snap-start" id="about">
      <div className="h-screen overflow-hidden bg-red-600 flex justify-center items-center">
        <h1 className="text-8xl text-white uppercase font-semibold">about</h1>
      </div>
    </section>
  );
};
