import {
  AboutPage,
  ContactPage,
  HomePage,
  ProjectsPage,
  Header,
  TopButton,
} from "../components";
import type { NextPage } from "next";
import { useRef } from "react";
import Head from "next/head";

// StackOverflow: https://stackoverflow.com/questions/70808951/how-to-get-window-scrolltop-scrolly-or-any-other-distance-value-when-using-css
// YouTube: https://www.youtube.com/watch?v=Xz2Z8xKH-R0&t=811s

const Home: NextPage = () => {
  const scrollRef: any = useRef();

  return (
    <div ref={scrollRef} className="wrapper">
      <Head>
        <title>TOP BTN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header scrollRef={scrollRef} />

      <HomePage scrollRef={scrollRef} />

      <AboutPage />

      <ProjectsPage />

      <ContactPage />

      <TopButton scrollRef={scrollRef} />
    </div>
  );
};

export default Home;
