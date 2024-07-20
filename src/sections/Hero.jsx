import React from "react";
import bgGnomeNepal from "../assets/imgs/bg-GnomeNepal.png";
import homeDesign from "../assets/imgs/home-design.png";
import mobileViewGnomeNepal from "../assets/imgs/mobile-view-GnomeNepal.png";

const Hero = () => {
  return (
    // <section className="min-h-[100vh] flex justify-center items-center border-2">
    //   A Organization which core goals is to promote open source in Nepal.
    // </section>

    <div className="relative hero-section min-h-screen flex flex-col justify-between px-4 md:px-8">
      <div className="relative z-10 flex-grow hidden md:block transition duration-500 ease-in-out">
        <img src={bgGnomeNepal} alt="Gnome Nepal" className="w-full h-auto" />
      </div>
      <div className="relative z-10 flex-grow mt-0 block md:hidden transition duration-500 ease-in-out">
        <img
          src={mobileViewGnomeNepal}
          alt="Gnome Nepal"
          className="w-full h-auto"
        />
      </div>
      <div className="flex justify-center items-center my-4 transition duration-500 ease-in-out">
        <a href="#aboutus">
          <button
            id="aboutus"
            className="block py-2 px-6 rounded-full bg-black text-white transition duration-500 ease-in-out text-xl hover:bg-gray-200 hover:text-white md:hover:bg-black md:hover:text-white"
          >
            About us
          </button>
        </a>
      </div>
      <div
        id="home-design"
        className="relative z-10 flex-grow mt-0 hidden md:block transition duration-500 ease-in-out"
      >
        <img src={homeDesign} alt="Home Design" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
