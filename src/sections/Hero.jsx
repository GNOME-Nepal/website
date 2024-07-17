import React from "react";
import bgGnomeNepal from "../assets/imgs/upper_section.svg";
import homeDesign from "../assets/imgs/bottom_section.svg"

const Hero = () => {
  return (
    // <section className="min-h-[100vh] flex justify-center items-center border-2">
    //   A Organization which core goals is to promote open source in Nepal.
    // </section>

 
    <div className="relative hero-section h-[80vh] flex flex-col justify-between">
      <div className="relative z-10 flex-grow">
        <img src={bgGnomeNepal} alt="Gnome Nepal" className="w-full h-auto" />
      </div>
      <div className="flex justify-center items-center h-screen bg-gray-100 mt-4">
        <a href="#aboutus">
          <button
            id="aboutus"
            className="block py-2 px-3 hover:bg-gray md:hover:text-white rounded md:text-gray-900 md:p-0 md:hover:bg-black md:px-4 md:py-2 md:rounded-full md:bg-black md:text-white transition delay-80 text-2xl"
          >
            About us
          </button>
        </a>
        
      </div>

      <div id="home-design" className="relative z-10 flex-grow mt-0">
        <img src={homeDesign} alt="Home Design" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;
