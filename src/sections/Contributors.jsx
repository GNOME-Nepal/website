import React from "react";
import ContributorsDetails from "../components/ContributorsDetails";
import SectionObserver from "@/components/Observer";

function Contributors() {
  return (
    <SectionObserver id="contributors">
      <div
        id="contributors"
        className="min-h-content flex flex-col items-center"
      >
        <header className="w-full flex flex-col items-center md:items-start">
          <div className="text-green-800 dark:text-green-600 font-medium rounded-[50px] text-center py-2 p-4 bg-green-light border-r-[50%] w-60">
            People behind the magic
          </div>
          <h1 className="text-3xl md:text-4xl font-bold my-[8px] lg:block">
            Contributors
          </h1>
        </header>
        <ContributorsDetails />
      </div>
    </SectionObserver>
  );
}

export default Contributors;
