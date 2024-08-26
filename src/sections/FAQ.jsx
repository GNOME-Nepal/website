import React, { useState } from "react";
import Accordian from "../components/Accordian";
import ArrowIcon from "../assets/ArrowIcon";
import clsx from "clsx";
import SectionObserver from "@/components/Observer";

const faqs = [
    {
        question: 'What is GNOME Nepal',
        answer: 'GNOME Nepal is an open source organization whose main motive is to spread collaboration and open source in Nepal.',
    },
    {
        question: 'How can I join this community?',
        answer: 'Join Our Community on Discord!',
    },
    {
        question: 'What is Open Source??',
        answer: 'Open source software is software that can be freely accessed, used, changed, and shared (in modified or unmodified form) by anyone.',
    },
    {
        question: 'Can I Contribute to the project?',
        answer: 'Absolutely! We welcome contributions from everyone. To get started, check out our GitHub organization. If you have any questions or need help, feel free to join our community on Discord. You can connect with other contributors, ask questions, and collaborate with the team.',
    },
    {
        question: 'Are there any exciting events coming up?',
        answer: 'Check out our upcoming events in the events sections.',
    },
];

const FAQItem = ({ question, onClick, isActive }) => {
    return (
        <div
            className={clsx("flex justify-between items-center px-4 py-6 cursor-pointer hover:bg-gray-100",
                { "bg-[#fafbff]": isActive }
            )}
            onClick={onClick}
        >
            <div className="flex flex-row items-center gap-2">
                <div className={clsx('w-6 h-6 flex-shrink-0 rounded-full transition-colors', {
                    'bg-[purple]': isActive,
                    'bg-[#D19DE2]': !isActive,
                })} />
                <span className="text-lg font-medium text-gray-900">{question}</span>
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
    return (
        <div className="bg-white shadow-sm rounded-lg">
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

    return (
        <div className="hidden lg:flex flex-row gap-4 w-full relative mt-8">
            <div className="w-[40%] absolute inset-x-0 top-0 z-10 mt-6">
                <FAQList faqs={faqs} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>
            <div className="w-[80%] p-4 bg-[#fafbff] min-h-[70vh] rounded-lg shadow-md ml-[30%] pl-[15%] pt-[5%]">
                {activeIndex !== null && (
                    <div >
                        <h2 className="text-2xl font-semibold mb-2">{faqs[activeIndex].question}</h2>
                        <p className="text-lg text-gray-700">{faqs[activeIndex].answer}</p>
                    </div>
                )}
            </div>
        </div>
    );
};


const FAQ = () => {
    return (
        <SectionObserver id="faq">
            <div id="faq" className="min-h-[100vh] w-full h-full items-center justify-center flex flex-col lg:items-start px-4 md:px-0 py-12">
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
