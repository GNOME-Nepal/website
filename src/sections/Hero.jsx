import React from "react";
import bgGnomeNepal from "../assets/imgs/upper_section.svg";
import bgGnomeNepalMobile from "../assets/imgs/upper_section_mobile.svg";
import SectionObserver from "@/components/Observer";
import Image from "@/components/Image";

const Hero = () => {
  return (
    <SectionObserver id={"home"}>
      <div className="relative hero-section flex flex-col md:justify-between xl:h-lvh">
        <div className="relative z-10">
          <Image
            src={bgGnomeNepal}
            alt="Gnome Nepal"
            className="hidden md:block w-full h-auto aspect-[1293/326]"
            height={326}
            width={1293}
          />
          <div className="md:hidden w-full flex items-center justify-center md:mt-32 mx-auto">
            <Image
              src={bgGnomeNepalMobile}
              alt="Gnome Nepal Mobile"
              width={1293}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-100 md:mt-12 mt-6">
          <div className="grid justify-items-center">
            <a href="#aboutus" aria-label="About section">
              <button
                id="aboutus-button"
                className="relative z-10 py-3 px-10 bg-black text-white rounded-full 
                md:text-2xl
                transition duration-200 ease-in-out transform 
                hover:scale-105 hover:bg-gray-700 hover:text-white shadow-md hover:shadow-lg 
                text-xl "
              >
                About us
              </button>
            </a>

            {/* Conditionally render bottom section only on desktop */}
            <div className="w-full  hidden md:flex">
              <Image
                srcSet="/images/bottom_section-small.webp 400w, /images/bottom_section-medium.webp 800w , /images/bottom_section.webp 1200w "
                src={"/images/bottom_section.webp"}
                alt="Home Design"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionObserver>
  );
};

export default Hero;
