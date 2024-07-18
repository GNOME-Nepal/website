import React from "react";
import GNOMENepal from "../assets/imgs/GNOMENepal.png";
const Footer = () => {
  return (
    <footer className="relative w-full">
      <div className="bg-gray-900 text-white p-6 flex flex-col items-center space-y-6">
        <div className="absolute bottom-[60%] left-1/2 transform -translate-x-1/2 z-10 bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-lg flex justify-center items-center space-y-8 w-[70vw] h-[150px] mx-auto">
          <div className="flex items-center justify-between w-full px-8">
            <h2 className=" text-3xl md:text-5xl font-bold">
              Become a Sponsor?
            </h2>
            <button className="bg-white text-black text-md w-40 h-10 md:w-48 md:h-12 rounded-full md:text-xl font-poppins">
              Click here
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-40 bg-[#241F31] flex justify-between items-center p-6 ">
        <div>
          <button className="bg-white w-44 h-16 rounded-lg hover:bg-gray">
            <img src={GNOMENepal} alt="Gnome Nepal Logo"></img>
          </button>
        </div>

        <div className="space-x-5 flex ">
          <a href="https://np.linkedin.com/company/gnomenepal" target="_blank">
            <button className="bg-white w-10 h-10 text-black rounded-lg hover:bg-gray flex items-center justify-center">
              <LinkedinIcon className="w-6 h-6" />
            </button>
          </a>
          <a href="https://www.instagram.com/gnomenepal/" target="_blank">
            <button className="bg-white w-10 h-10 text-black rounded-lg hover:bg-gray flex items-center justify-center">
              <InstagramIcon className="w-6 h-6" />
            </button>
          </a>
          <a href="https://discord.com/invite/3dpGWPbrMc" target="_blank">
            <button className="bg-white w-10 h-10 text-black rounded-lg hover:bg-gray flex items-center justify-center">
              <DiscordIcon className="w-6 h-6" />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

//make the discord icon exact
function DiscordIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-discord"
      viewBox="0 0 16 16"
    >
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
