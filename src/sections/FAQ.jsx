import React from "react";
import Accordian from "../components/Accordian";

const items = [
  {
    question: 'What is Gnome Nepal',
    answer: 'Gnome Nepal is the open source organization whose main motive is to spread collaboration and open source in Nepal.',
  },
  {
    question: 'How we can join this Community?',
    answer: 'Join the community with our discord!!',
  },
  {
    question: 'What is Opensource?',
    answer: 'Open-source software is computer software that is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose',
  },
  {
    question: 'Can I Contribute to the org?',
    answer: 'Yes, You can!!',
  },
  {
    question: 'Is there are exciting event?',
    answer: 'Check out our upcoming events in the events sections.',
  },
];


const FAQ = () => {
  return (
    <>
      <section id="faq" className="min-h-[100vh] border-2 w-full h-full items-center justify-center flex flex-col sm:items-start px-4 sm:px-12 py-12">
        <div className="text-[purple] font-medium rounded-[50px] text-center py-2 p-4 bg-[#e7cdf0] border-r-[50%]">Something you are wondering</div>
        <h1 className="text-2xl font-bold my-2 hidden sm:block">Frequently Asked Questions</h1>
        <h1 className="text-2xl font-bold my-2 block sm:hidden">FAQs</h1>

        <Accordian items={items} className="block sm:hidden mt-8" />
      </section>
    </>
  );
};

export default FAQ;
