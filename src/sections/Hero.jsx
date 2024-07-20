import React from "react";
import bgGnomeNepal from "../assets/imgs/upper_section.svg";
import bgGnomeNepalMobile from "../assets/imgs/upper_section_mobile.svg";
import homeDesign from "../assets/imgs/bottom_section.webp";

const Hero = () => {
  return (
    <div className="relative hero-section h-screen flex flex-col justify-between">
      <div className="relative z-10 flex-grow">
        <img src={bgGnomeNepal} alt="Gnome Nepal" className="hidden md:block w-full h-auto" />
        {/* Mobile SVG */}
        <div className="block md:hidden w-full h-auto flex items-center justify-center mt-32 mx-auto">
          <img src={bgGnomeNepalMobile} alt="Gnome Nepal Mobile" className="w-full object-cover" />
        </div>
      </div>

      {/* Button and homeDesign container */}
      <div className="relative flex flex-col items-center h-1/2 bg-gray-100 mt-32 md:mt-4 lg:mt-0">
        <a href="#aboutus">
          <button
            id="aboutus"
            className="relative z-10 py-3 px-10 bg-black text-white rounded-full transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-white shadow-md hover:shadow-lg text-xl md:text-2xl"
          >
            About us
          </button>
        </a>
        
        {/* Conditionally render bottom section only on desktop */}
        <div className="absolute inset-x-0 bottom-0 z-0 w-full h-auto hidden md:block ">
          <img src={homeDesign} alt="Home Design" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
