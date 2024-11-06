import { useEffect, useRef, useState } from "react";

const Sponsors = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;

    let scrollPosition = 0;
    const scroll = () => {
      scrollPosition += 0.5; // Reduced speed for smoother animation
      if (scrollPosition > scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, [isMobile]);

  const sponsors = [
    { name: "Sponsor 1", logo: "/placeholder.svg" },
    { name: "Sponsor 2", logo: "/placeholder.svg" },
    { name: "Sponsor 3", logo: "/placeholder.svg" },
    { name: "Sponsor 4", logo: "/placeholder.svg" },
    { name: "Sponsor 5", logo: "/placeholder.svg" },
    { name: "Sponsor 6", logo: "/placeholder.svg" },
    { name: "Sponsor 7", logo: "/placeholder.svg" },
    { name: "Sponsor 8", logo: "/placeholder.svg" },
  ];

  return (
    <>
      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-blue-800 dark:text-blue-600 font-medium rounded-[50px] py-2 p-4 bg-blue-light border-r-[50%] w-60">
              Empowering Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 my-[2px]">
              Our Sponsors
            </h2>
          </div>
          <div className={`relative ${isMobile ? "overflow-hidden" : ""}`}>
            <div
              ref={scrollRef}
              className={`
              ${
                isMobile
                  ? "flex space-x-8 overflow-x-hidden"
                  : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
              }
            `}
              style={
                isMobile
                  ? {
                      maskImage:
                        "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }
                  : {}
              }
            >
              {(isMobile ? [...sponsors, ...sponsors] : sponsors).map(
                (sponsor, index) => (
                  <div
                    key={index}
                    className={`
                  ${isMobile ? "flex-shrink-0" : ""}
                  transition-transform duration-300 ease-in-out transform hover:scale-105
                  flex items-center justify-center p-4 bg-white rounded-lg shadow-md
                `}
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="object-contain w-full h-auto max-h-20"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
