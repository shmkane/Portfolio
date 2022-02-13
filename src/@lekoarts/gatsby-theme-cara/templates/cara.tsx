import * as React from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Parallax } from "@react-spring/parallax";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

const Cara = () => {
  const { height } = useWindowDimensions();

  if (height < 600) {
    return (
      <Layout>
        <Parallax pages={7}>
          <Hero offset={0} factor={1} />
          <About offset={1} factor={1} />
          <Projects offset={2} factor={5} />
          <Contact offset={3} factor={9} />
        </Parallax>
      </Layout>
    );
  }
  if (height < 800) {
    return (
      <Layout>
        <Parallax pages={6}>
          <Hero offset={0} factor={1} />
          <About offset={1} factor={1} />
          <Projects offset={1} factor={7} />
          <Contact offset={1} factor={12} />
        </Parallax>
      </Layout>
    );
  }
  return (
    <Layout>
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={2} />
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1} />
    </Parallax>
    </Layout>
  );
};

export default Cara;
