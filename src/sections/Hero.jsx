import React from "react";
import bgGnomeNepal from "../assets/imgs/upper_section.svg";
import bgGnomeNepalMobile from "../assets/imgs/upper_section_mobile.svg";
import SectionObserver from "@/components/Observer";
import Image from "@/components/Image";

const Hero = () => {
    return (
        <SectionObserver id={"home"}>
            <div className="relative hero-section h-screen flex flex-col justify-between">
                <div className="relative z-10 flex-grow">
                    <Image src={bgGnomeNepal} alt="Gnome Nepal" className="hidden md:block w-full h-auto aspect-[1293/326]"
                        height={326}
                        width={1293}
                    />
                    <div className="flex md:hidden w-full h-auto items-center justify-center mt-32 mx-auto">
                        <Image
                            src={bgGnomeNepalMobile}
                            alt="Gnome Nepal Mobile"
                            height={326}
                            width={1293}
                            className="w-full object-cover" />
                    </div>
                </div>

                <div className="relative z-20 flex flex-col items-center h-1/2 bg-gray-100 mt-32 md:mt-4 lg:mt-0">
                    <div className="relative flex flex-col items-center mt-8 md:mt-4 lg:mt-0 transform -translate-y-16 md:-translate-y-24">
                        <a href="#aboutus" aria-label="About section">
                            <button
                                id="aboutus-button"
                                className="relative z-10 py-3 px-10 bg-black text-white rounded-full transition duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-white shadow-md hover:shadow-lg text-xl md:text-2xl md:translate-y-12 xl:translate-y-16"
                            >
                                About us
                            </button>
                        </a>

                        {/* Conditionally render bottom section only on desktop */}
                        <div className="w-full h-auto hidden md:block mt-8">
                            <Image
                                srcSet="/images/bottom_section-small.webp 400w, /images/bottom_section-medium.webp 800w , /images/bottom_section.webp 1200w "
                                src={"/images/bottom_section.webp"}
                                alt="Home Design"
                                height="312px"
                                width="1200px"
                                className="w-full h-auto object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </SectionObserver>
    );
};

export default Hero;
