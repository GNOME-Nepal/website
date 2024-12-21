import Image from "@/components/Image";
import SectionObserver from "@/components/Observer";
import { ChevronRight } from "lucide-react";

const Aboutus = () => {
  const missions = [
    "Promote Open-Source Technologies",
    "Build a Strong Community",
    "Organize Events and Workshops",
    "Engage with International Open-Source Communities",
  ];

  return (
    <SectionObserver id="aboutus">
      <div id="aboutus-wrapper" className="flex flex-col 2xl:mt-10">
        <div className="relative image-wrapper overflow-hidden rounded-lg">
          <div className="image-container transition-transform duration-500 ease-in-out hover:scale-110">
            <Image
              srcSet="/aboutus-small.jpg 400w, /aboutus-medium.jpg 800w, /aboutus.jpg 1200w"
              src="/aboutus.jpg"
              className="object-cover w-full h-full rounded-lg"
              alt="Gnome Nepal Team gathering in one place"
            />
          </div>
        </div>
        <div className="about flex flex-col md:gap-4 gap-2 lg:pt-8 pt-4">
          <h3 className="text-2xl flex font-bold">Who We Are</h3>
          <p className="lg:text-lg">
            GNOME Nepal is an organization dedicated to promoting open-source
            initiatives within Nepal. Our core objective is to foster a vibrant
            community where technology enthusiasts, developers, and open-source
            advocates can collaborate, share knowledge, and contribute.
          </p>
          <h3 className="text-2xl font-bold">Our Vision</h3>
          <p className="lg:text-lg">
            To encourage the use of GNOME and related open-source projects in
            Nepal and empower the local contributors to represent Nepal&apos;s
            Open source internationally.
          </p>

          <h3 className="text-2xl font-bold">Our Mission</h3>
          <div>
            <h3 className="pb-4 lg:text-lg">
              We believe in the power of open-source to drive innovation,
              collaboration and education. Our mission is to:
            </h3>
            <ul className="list-disc grid font-semibold gap-1">
              {missions.map((mission, index) => (
                <li className="flex text-sm gap-2 items-center" key={index}>
                  <ChevronRight className="size-4" /> {mission}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionObserver>
  );
};

export default Aboutus;
