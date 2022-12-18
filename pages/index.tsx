import { AboutPage, ContactPage, HomePage, ProjectsPage, Header, TopButton } from "../components";
import type { NextPage } from "next";
import { useRef } from "react";
import Head from "next/head";

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
