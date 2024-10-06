import React, { useState } from "react";
import Accordian from "../components/Accordian";
import ArrowIcon from "../assets/ArrowIcon";
import clsx from "clsx";
import SectionObserver from "@/components/Observer";
import { useTheme } from "@/components/theme-provider";

const faqs = [
    {
        question: 'What is GNOME Nepal',
        answer: 'GNOME Nepal is a local chapter of the GNOME Foundation in Nepal whose main motive is to encourage the use of GNOME & related open-source projects.',
    },
    {
        question: 'How can I join this community?',
        answer: 'Join our community on Discord! It is completely free and open to everyone.',
    },
    {
        question: 'What is Open Source?',
        answer: 'Open source software is software whose code is publicly available, allowing anyone to view, modify, and distribute it freely.',
    },
    {
        question: 'Can I Contribute to the project?',
        answer: 'Absolutely! We welcome contributions from everyone. To get started, check out our GitHub organization. If you have any questions or need help, feel free to join our community on Discord. You can connect with other contributors, ask questions, and collaborate with the team.',
    },
    {
        question: 'Are there any exciting events coming up?',
        answer: 'Check out upcoming events in the events section.',
    },
];

const FAQItem = ({ question, onClick, isActive }) => {
    const { theme } = useTheme();
    return (
        <div
            className={clsx("flex justify-between items-center px-4 rounded-full py-6 cursor-pointer hover:bg-gray-100",
                {
                    "bg-slate-200": theme === "light" && isActive, 
                    "bg-gray-700": theme === "dark" && isActive, 
                }
            )}
            onClick={onClick}
        >
            <div className="flex flex-row items-center gap-2">
                <div className={clsx('w-6 h-6 flex-shrink-0 rounded-full transition-colors', {
                    'bg-[purple]': isActive,
                    'bg-[#D19DE2]': !isActive,
                })} />
                <span className={clsx("text-lg font-medium", {
                    "text-gray-900": theme === "light",
                    "text-white": theme === "dark",
                })}>{question}</span>
            </div>
            <span className={clsx('text-lg font-medium transition-colors', {
                'text-[purple]': isActive,
                'text-[#D19DE2]': !isActive,
            })}>
                <ArrowIcon className="rotate-90" />
            </span>
        </div>
    );
};

const FAQList = ({ faqs, activeIndex, setActiveIndex }) => {
    const { theme } = useTheme();
    return (
        <div className={clsx("shadow-sm rounded-lg", {
            "bg-white": theme === "light",
            "bg-gray-800": theme === "dark",
        })}>
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    onClick={() => setActiveIndex(index)}
                    isActive={activeIndex === index}
                />
            ))}
        </div>
    );
};

const FAQDesktop = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { theme } = useTheme();

    return (
        <div className="hidden lg:flex flex-row gap-4 w-full relative mt-8">
            <div className="w-[40%] absolute inset-x-0 top-0 z-10 mt-6">
                <FAQList faqs={faqs} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>
            <div className={clsx("w-[80%] p-4 min-h-[70vh] rounded-lg shadow-md ml-[30%] pl-[15%] pt-[5%]", {
                "bg-[#fafbff]": theme === "light",
                "bg-gray-900": theme === "dark",
            })}>
                {activeIndex !== null && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">{faqs[activeIndex].question}</h2>
                        <p className="text-lg" style={{ color: theme === "light" ? "gray" : "white" }}>{faqs[activeIndex].answer}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <SectionObserver id="faq">
            <div className="min-h-[100vh] w-full h-full items-center justify-center flex flex-col lg:items-start px-4 md:px-0 py-12">
                <div className="text-[purple] text-sm md:text-lg font-medium rounded-[50px] text-center py-2 p-4 bg-[#e7cdf0] border-r-[50%]">Something you are wondering</div>
                <h1 className="text-4xl font-bold my-2 hidden lg:block">Frequently Asked Questions</h1>
                <h1 className="text-2xl font-bold my-2 block lg:hidden">FAQs</h1>

                <Accordian items={faqs} className="block lg:hidden mt-8" />
                <FAQDesktop />
            </div>
        </SectionObserver>
    );
};

export default FAQ;
