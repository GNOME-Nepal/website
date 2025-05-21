import React from "react";
import { Check } from "lucide-react";

const TicketCard = ({
  index,
  highlight,
  popular,
  type,
  name,
  price,
  description,
  features,
}) => {
  const [activeCard, setActiveCard] = React.useState(null);

  return (
    <>
      <div
        key={index}
        className={`transition-all duration-500 ease-in-out cursor-pointer
                   z-${20 - index * 15} scale-95
                  `}
        onMouseEnter={() => setActiveCard(index)}
        onMouseLeave={() => setActiveCard(null)}
      >
        {/* Card */}
        <div
          className={`md:mx-auto w-full md:w-[380px] bg-white rounded-xl shadow-md transition-all duration-300
                      ${highlight ? "border-2 border-[#E95420]" : "border border-gray-100"} overflow-hidden
                    `}
        >
          {/* Card Header */}
          <div className="relative">
            {/* Popular Tag */}
            {popular && (
              <div className="absolute -right-12 top-2 bg-[#E95420] text-white text-[11px] py-1 px-12 font-medium transform rotate-45 z-10 font-poppins">
                Value
              </div>
            )}

            {/* Header Content */}
            <div className="py-4 px-6 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold text-[#E95420] tracking-wider">
                  {type}
                </span>
                <h3 className="text-lg font-bold">{name}</h3>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold">{price}</span>
                <p className="text-gray-500 text-xs">NPR</p>
              </div>
            </div>
          </div>

          {/* Card Details - Expandable on hover */}
          <div
            className={`transition-all duration-300 overflow-hidden bg-gray-50
                        ${activeCard === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
                      `}
          >
            <div className="p-4 pt-0">
              <p className="text-gray-500 text-sm mb-3">{description}</p>
              <div className="h-px w-full bg-gray-200 my-3"></div>
              <ul className="space-y-2 mb-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-4 w-4 text-[#E95420] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCard;
