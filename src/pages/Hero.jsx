import React from "react";
import { Aboutus, Contributors, FAQ, Events } from "../sections";

const Hero = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to GNOME NEPAL</h1>
        <p className="text-xl mb-8">To encourage the use of GNOME and related open-source projects in Nepal and empower the local contributors to represent Nepal's Open source internationally.</p>
        <a href="https://discord.gg/E32spwms" target="_blank" className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 py-2 rounded">Join Discord</a>
      </div>
      {/* <section className="container mx-auto py-8">
      <Aboutus />
      <Events />
      <Contributors />
      <FAQ />
      </section> */}
    </div>
  );
};

export default Hero;
