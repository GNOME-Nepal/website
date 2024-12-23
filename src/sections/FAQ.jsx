import { useState } from "react";
import Accordian from "../components/Accordian";
import clsx from "clsx";
import SectionObserver from "@/components/Observer";
import { useTheme } from "@/components/theme-provider";
import { ArrowIcon } from "@/assets/icons";
import { useFaqs } from "@/hooks/useFaqs";

const FAQItem = ({ question, onClick, isActive }) => {
  const { theme } = useTheme();
  return (
    <div
      className={clsx(
        "flex justify-between items-center  rounded-full p-4  cursor-pointer hover:bg-gray-100",
        {
          "bg-slate-200": theme === "light" && isActive,
          "bg-gray-700": theme === "dark" && isActive,
        },
      )}
      onClick={onClick}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          className={clsx(
            "w-6 h-6 flex-shrink-0 rounded-full transition-colors",
            {
              "bg-[purple]": isActive,
              "bg-[#D19DE2]": !isActive,
            },
          )}
        />
        <span
          className={clsx("text-lg font-medium", {
            "text-gray-900": theme === "light",
            "text-white": theme === "dark",
          })}
        >
          {question}
        </span>
      </div>
      <span
        className={clsx("text-lg font-medium transition-colors", {
          "text-[purple]": isActive,
          "text-[#D19DE2]": !isActive,
        })}
      >
        <ArrowIcon className="rotate-90" />
      </span>
    </div>
  );
};

const FAQList = ({ faqs, activeIndex, setActiveIndex }) => {
  const { theme } = useTheme();
  return (
    <div
      className={clsx("shadow-sm rounded-lg p-4", {
        "bg-white": theme === "light",
        "bg-gray-800": theme === "dark",
      })}
    >
      {faqs?.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq?.question}
          onClick={() => setActiveIndex(index)}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
};

const FAQDesktop = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();

  return (
    <div className="hidden lg:flex flex-row gap-4 w-full relative mt-8">
      <div className="w-[40%] absolute inset-x-0 top-0 z-10 mt-6 ">
        <FAQList
          faqs={faqs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
      <div
        className={clsx(
          "w-[80%] p-4 min-h-[70vh] rounded-lg shadow-md ml-[30%] pl-[15%] pt-[5%]",
          {
            "bg-[#fafbff]": theme === "light",
            "bg-gray-900": theme === "dark",
          },
        )}
      >
        {activeIndex !== null && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {faqs[activeIndex]?.question}
            </h2>
            <p
              className="text-lg"
              style={{ color: theme === "light" ? "gray" : "white" }}
            >
              {faqs[activeIndex]?.answer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Faq = () => {
  const { data } = useFaqs();
  const items = [
    {
      question: "What is GNOME Nepal?",
      answer:
        "GNOME Nepal is an open-source organization focused on promoting collaboration and open-source culture in Nepal.",
    },
    {
      question: "How can I join this community?",
      answer: "You can join us by connecting through our Discord!",
    },
    {
      question: "What is open source?",
      answer:
        "Open-source software is software made available under a license that allows users to freely use, study, modify, and share its source code.",
    },
    {
      question: "Can I contribute to the organization?",
      answer: "Absolutely, we welcome your contributions!",
    },
    {
      question: "Are there any exciting events?",
      answer:
        "Check out the Events section to stay updated on our upcoming events.",
    },
  ];
  const faqs = data?.length > 0 ? data : items;
  return (
    <SectionObserver id="faq">
      <div className="min-h-[100vh] w-full h-full items-center justify-center flex flex-col lg:items-start px-4 md:px-0 py-4">
        <div className="text-[purple] text-sm md:text-lg font-medium rounded-[50px] text-center py-2 p-4 bg-[#e7cdf0] border-r-[50%]">
          Something you are wondering
        </div>
        <h1 className="text-4xl font-bold my-2 hidden lg:block">
          Frequently Asked Questions
        </h1>
        <h1 className="text-2xl font-bold my-2 block lg:hidden">FAQs</h1>

        <Accordian items={faqs} className="block lg:hidden lg:mt-8" />
        <FAQDesktop faqs={faqs} />
      </div>
    </SectionObserver>
  );
};

export default Faq;
