import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full">
    <div className="bg-gray-900 text-white p-6 flex flex-col items-center space-y-6">
            <div className="absolute bottom-[50%] left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg flex flex-col items-center space-y-4">
            <h2 className="text-xl font-semibold">Become a Sponsor?</h2>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
                Click here
            </button>
        </div>
    </div>
    
    <div className="relative w-full h-40 bg-[#241F31] flex items-center justify-between p-6">
        
    </div>
</footer>);
};

export default Footer;
