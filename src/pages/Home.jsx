import React from "react";
import Hero from "../sections/Hero";
import { Aboutus, Contributors, FAQ, Events } from "../sections";

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <Events />
      <Contributors />
      <FAQ />
    </>
  );
};

export default Home;
