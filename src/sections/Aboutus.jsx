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
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Shine Effect Behind Containers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl blur-3xl"></div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-full p-1 inline-flex shadow-lg border border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "bg-black text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Who we are */}
        <div
          className={cn(
            "bg-black text-white p-6 rounded-lg border border-gray-800 shadow-lg relative overflow-hidden transition-all duration-500",
            activeTab === "who"
              ? "transform scale-105 z-10 shadow-xl ring-2 ring-blue-500"
              : "opacity-80",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-30"></div>
          <h2 className="text-3xl font-bold mb-4 relative">Who we are</h2>
          <p className="text-gray-300 relative">
            GNOME Nepal is an organization dedicated to promoting open-source
            initiatives within Nepal. Our core objective is to foster a vibrant
            community where technology enthusiasts, developers, and open-source
            advocates can collaborate, share knowledge, and contribute.
          </p>
        </div>

        {/* Our Mission */}
        <div
          className={cn(
            "bg-black text-white p-6 rounded-lg border border-gray-800 shadow-lg relative overflow-hidden transition-all duration-500",
            activeTab === "mission"
              ? "transform scale-105 z-10 shadow-xl ring-2 ring-blue-500"
              : "opacity-80",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent opacity-30"></div>
          <h2 className="text-3xl font-bold mb-4 relative">Our Mission</h2>
          <p className="mb-4 text-gray-300 relative">
            We believe in the power of open-source to drive innovation,
            collaboration and education.
          </p>
          <p className="mb-2 text-gray-300 relative">Our mission is to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 relative">
            <li>Promote Emerging Technologies</li>
            <li>Build a Strong Global Community</li>
            <li>Organize Events and Workshops</li>
            <li>Engage with International Open-Source Communities</li>
          </ul>
        </div>

        {/* Our Vision */}
        <div
          className={cn(
            "bg-black text-white p-6 rounded-lg border border-gray-800 shadow-lg md:col-span-2 relative overflow-hidden transition-all duration-500",
            activeTab === "vision"
              ? "transform scale-105 z-10 shadow-xl ring-2 ring-blue-500"
              : "opacity-80",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-600/20 to-transparent opacity-30"></div>
          <h2 className="text-3xl font-bold mb-4 relative">Our Vision</h2>
          <p className="text-gray-300 relative">
            TTo encourage the use of GNOME and related open-source projects in
            Nepal and empower the local contributors to represent Nepal's Open
            source internationally.
          </p>
        </div>
      </div>
    </div>
  );
}
