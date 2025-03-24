"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "who", label: "Who we are?" },
  { id: "vision", label: "Our Vision" },
  { id: "mission", label: "Our Mission" },
];

export default function OrganizationInfo() {
  const [activeTab, setActiveTab] = useState("who");

  return (
    <div className="w-full mx-auto relative px-4 sm:px-6 lg:px-8">
      {/* Shine Effect Behind Containers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl blur-3xl"></div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-6">
        <div className="bg-black dark:bg-white rounded-full p-1 inline-flex shadow-lg border border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "bg-white dark:bg-black text-black dark:text-white shadow-md"
                  : "text-white dark:text-black hover:bg-gray-800/50 dark:hover:bg-gray-200/50",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Who we are */}
        <div
          className={cn(
            "p-6 rounded-lg border shadow-lg relative overflow-hidden transition-all duration-500",
            "bg-black dark:bg-white text-white dark:text-black border-gray-700 dark:border-gray-300 md:col-span-1",
            activeTab === "who"
              ? "transform scale-105 z-10 shadow-xl ring-2 ring-blue-500"
              : "opacity-80",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-30"></div>
          <h2 className="text-3xl font-bold mb-4 relative">Who we are</h2>
          <p className="relative">
            GNOME Nepal is an organization dedicated to promoting open-source
            initiatives within Nepal. Our core objective is to foster a vibrant
            community where technology enthusiasts, developers, and open-source
            advocates can collaborate, share knowledge, and contribute.
          </p>
        </div>

        {/* Our Mission */}
        <div
          className={cn(
            "p-6 rounded-lg border shadow-lg relative overflow-hidden transition-all duration-500",
            "bg-black dark:bg-white text-white dark:text-black border-gray-700 dark:border-gray-300 md:col-span-2",
            activeTab === "mission"
              ? "transform scale-105 z-10 shadow-xl ring-2 ring-blue-500"
              : "opacity-80",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-30"></div>
          <h2 className="text-3xl font-bold mb-4 relative">Our Mission</h2>
          <p className="mb-4 relative">
            We believe in the power of open-source to drive innovation and
            collaboration.
          </p>
          <ul className="list-disc pl-6 space-y-2 relative">
            <li>Promote Emerging Technologies</li>
            <li>Build a Strong Global Community</li>
            <li>Organize Events and Workshops</li>
          </ul>
        </div>
      </div>

      {/* Our Vision */}
      <div
        className={cn(
          "p-6 rounded-lg border shadow-lg relative overflow-hidden transition-all duration-500 mt-6",
          "bg-black dark:bg-white text-white dark:text-black border-gray-700 dark:border-gray-300",
          activeTab === "vision"
            ? "transform scale-105 z-10 shadow-xl ring-2 ring-blue-500"
            : "opacity-80",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/20 to-transparent opacity-30"></div>
        <h2 className="text-3xl font-bold mb-4 relative">Our Vision</h2>
        <p className="relative">
          To encourage the use of GNOME and related open-source projects in
          Nepal and empower the local contributors to represent Nepal's Open
          source internationally.
        </p>
      </div>
    </div>
  );
}
