import React from "react";
import bgGnomeNepal from "../assets/imgs/upper_section.svg";
import bgGnomeNepalMobile from "../assets/imgs/upper_section_mobile.svg";
import homeDesign from "../assets/imgs/bottom_section.webp";

const Hero = () => {
    return (
        <div className="relative hero-section h-screen flex flex-col justify-between">
            <div className="relative z-10 flex-grow">
                <img src={bgGnomeNepal} alt="Gnome Nepal" className="hidden md:block w-full h-auto" />
                <div className="block md:hidden w-full h-auto flex items-center justify-center mt-32 mx-auto">
                    <img src={bgGnomeNepalMobile} alt="Gnome Nepal Mobile" className="w-full object-cover" />
                </div>
            </div>

            <div className="relative z-20 flex flex-col items-center h-1/2 bg-gray-100 mt-32 md:mt-4 lg:mt-0">
                <div className="relative flex flex-col items-center mt-8 md:mt-4 lg:mt-0 transform -translate-y-16 md:-translate-y-24">
                    <a href="#aboutus" aria-label="About section">
                        <button
                            id="aboutus-button"
                            className="relative z-10 py-3 px-10 bg-black text-white rounded-full transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-white shadow-md hover:shadow-lg text-xl md:text-2xl md:translate-y-16"
                        >
                            About us
                        </button>
                    </a>

                    {/* Conditionally render bottom section only on desktop */}
                    <div className="w-full h-auto hidden md:block mt-8">
                        <img src={homeDesign} alt="Home Design" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
