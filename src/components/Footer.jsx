import React from "react";
import GNOMENepal from '../assets/imgs/GNOMENepal.png';

const Footer = () => {
  return (
    <footer className="relative w-full">

      <div className="bg-gray-900 text-white p-6 flex flex-col items-center space-y-6">

        <div className="absolute bottom-[60%] left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg flex justify-center items-center space-y-8 w-[70vw] h-[150px] mx-auto">

          <div className="flex items-center space-x-[20vw]">

            <h2 className="text-4xl font-bold">Become a Sponsor?</h2>
            <button className="bg-white text-black w-48 h-10 rounded-full">
              Click here
            </button>

          </div>
        </div>
      </div>

      <div className="relative w-full h-40 bg-[#241F31] flex justify-between items-center p-6 ">

        <div>
          <button className="bg-white w-44 h-16 rounded-lg hover:bg-gray" >
            <img src={GNOMENepal} alt="Gnome Nepal Logo"></img>
          </button>
        </div>

<div className="space-x-5 ">
  <button className="bg-white w-10 h-10 text-black rounded-lg hover:bg-gray">

  </button>
  <button className="bg-white w-10 h-10 text-black rounded-lg hover:bg-gray">

  </button>
  <button className="bg-white w-10 h-10 text-black rounded-lg hover:bg-gray">

  </button >
  <button className="bg-white w-10 h-10 text-black rounded-lg hover:bg-gray">

  </button>
</div>
      </div>
    </footer>);
};

export default Footer;
