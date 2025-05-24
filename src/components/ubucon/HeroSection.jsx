import { Calendar, MapPin, ChevronRight, Info } from "lucide-react";
import { NavLink } from "react-router-dom";
import TicketCard from "./TicketCard";
import { tickets } from "@/data/data";

const HeroSection = () => {
  return (
    <>
      {/* Main Content Section */}
      <section className="relative z-10 min-h-screen py-8 px-4 sm:py-12 sm:px-6 md:px-8">
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex items-center">
          <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
            <img
              src="/ulogo.png"
              alt="UbuCon Asia Logo"
              className="w-full h-full"
            />
          </div>
          <span className="ml-3 font-bold text-lg sm:text-xl hidden sm:block">
            UbuCon Asia 2025
          </span>
        </div>

        {/* Content Container */}
        <div className="container mx-auto max-w-7xl mt-24 sm:mt-22 md:mt-24">
          {/* Mobile-first layout - stacked on mobile, side-by-side on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 mt-0 lg:mt-0">
              <div className="w-16 sm:w-20 h-1 bg-[#E95420] mb-4 sm:mb-6"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Get Your{" "}
                <span className="text-[#E95420]">
                  UbuCon <br /> Asia 2025
                </span>{" "}
                Ticket
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-lg">
                Join us to explore open-source, collaboration, and innovation
                with the Ubuntu community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-10">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-[#E95420] mr-2" />
                  <span>August 30-31, 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#E95420] mr-2" />
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>

              <div
                className="md:mt-32 md:ml-12 relative flex"
                style={{ minHeight: 120 }}
              >
                <NavLink to="/ubucon/tickets">
                  <button className="bg-[#E95420] text-white px-6 sm:px-8 py-3 sm:py-3 rounded-xl text-base sm:text-lg font-medium hover:bg-[#C7431D] transition-all transform hover:scale-105 flex items-center z-10 relative shadow-xl shadow-[#E95420]/30 ring-2 ring-[#E95420]/30">
                    Buy Tickets Now
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </NavLink>
                <div
                  className="hidden lg:block absolute left-[-75px] top-[40px] -translate-y-2/3 z-[-999]"
                  style={{ width: 220, height: 220 }}
                >
                  <img
                    src="/mascot.png"
                    alt="Mascot holding button"
                    className="w-full h-full scale-x-[-1] pointer-events-none select-none"
                    draggable={false}
                    style={{
                      filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Symmetrical Card Stack */}
            <div className="w-full lg:w-1/2 mt-4">
              <div className="relative flex items-center justify-center">
                {/* Card Stack Container */}
                <div className="relative w-full max-w-md mx-auto">
                  {/* Hover Instruction */}
                  <div className="text-center mb-4 text-gray-500 flex items-center justify-center">
                    <Info className="w-4 h-4 mr-2" />
                    <span>Hover over cards for details</span>
                  </div>

                  {/* Symmetrical Card Stack */}
                  <div className="relative h-[400px] flex flex-col gap-4">
                    {tickets.map((ticket, index) => (
                      <TicketCard
                        index={index}
                        key={index}
                        type={ticket.type}
                        name={ticket.name}
                        price={ticket.price}
                        description={ticket.description}
                        features={ticket.features}
                        highlight={ticket.highlight}
                        popular={ticket.popular}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
