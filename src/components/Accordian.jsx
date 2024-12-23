import { useState } from "react";
import clsx from "clsx";
import { ArrowIcon } from "@/assets/icons";
import { useTheme } from "@/components/theme-provider";

const Accordion = ({ items, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={clsx(
        "w-full max-w-lg mx-auto rounded-md",
        {
          "border border-gray-200 bg-white": theme === "light",
          "border border-gray-700 bg-gray-800": theme === "dark",
        },
        className,
      )}
    >
      {items?.map((item, index) => (
        <div key={index}>
          <button
            className="w-full p-4 text-left"
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <div
                  className={clsx(
                    "w-6 h-6 flex-shrink-0 rounded-full transition-colors",
                    {
                      "bg-[purple]": index === activeIndex,
                      "bg-[#D19DE2]": index !== activeIndex,
                    },
                  )}
                />
                <span
                  className={clsx("text-lg font-medium", {
                    "text-gray-900": theme === "light",
                    "text-white": theme === "dark",
                  })}
                >
                  {item.question}
                </span>
              </div>
              <span
                className={clsx("text-lg font-medium", {
                  "text-[purple]": index === activeIndex,
                  "text-[#D19DE2]": index !== activeIndex,
                })}
              >
                <ArrowIcon
                  className={clsx("transform transition-transform", {
                    "rotate-180": index === activeIndex,
                    "rotate-90": index !== activeIndex,
                  })}
                />
              </span>
            </div>
          </button>
          {activeIndex === index && (
            <div
              className={clsx("p-4", {
                "bg-gray-50": theme === "light",
                "bg-gray-700": theme === "dark",
              })}
            >
              <p
                className={clsx({
                  "text-gray-600": theme === "light",
                  "text-gray-200": theme === "dark",
                })}
              >
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
