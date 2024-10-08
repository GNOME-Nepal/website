import Image from "@/components/Image";
import SectionObserver from "@/components/Observer";
import { ArrowRight, ChevronRight, Shrub } from "lucide-react";
import React from "react";

const Aboutus = () => {
    const missions = [
                 "Promote Open-Source Technologies",
                 "Build a Strong Community",
                 "Organize Events and Workshops",
                 "Engage with International Open-Source Communities",
    ];
    
  return (
    <SectionObserver id="aboutus">
      <div id="aboutus-wrapper" className="flex flex-col">
        <div className="relative image rounded-lg">
          <Image
            srcSet="/aboutus-small.jpg 400w, /aboutus-medium.jpg 800w, /aboutus.jpg 1200w"
            src="/aboutus.jpg"
            className="object-contain w-full h-full rounded-lg"
            alt="Gnome Nepal Team gathering in one palce"
          />
        </div>
        <div className="about flex flex-col gap-4 pt-8">
          <h1 className="text-3xl flex  font-bold">Who We Are</h1>
          <div className="text">
            <p>
              GNOME Nepal is an organization dedicated to promoting open-source
              initiatives within Nepal. Our core objective is to foster a
              vibrant community where technology enthusiasts, developers, and
              open-source advocates can collaborate, share knowledge, and
              contribute.
            </p>
          </div>
          <h1 className="text-3xl font-bold">Our Vision</h1>
          <div className="text">
            <div>
              To encourage the use of GNOME and related open-source projects in
              Nepal and empower the local contributors to represent Nepal's Open
              source internationally.
            </div>
          </div>
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <div className="text">
            <div>
              <h3 className="pb-4">
                We believe in the power of open-source to drive innovation,
                collaboration and education. Our mission is to:
              </h3>
              <ul className="grid font-semibold gap-1">
                {missions.map((mission, index) => (
                    <li className="flex gap-2 items-center" key={index}><ChevronRight className="size-4"/> {mission}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionObserver>
  );
};

export default Aboutus;
