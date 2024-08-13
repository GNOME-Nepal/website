import React, { useState } from "react";
import Links from "./Links";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const openNav = () => {
        setOpen(!open);
    };

    const style = open
        ? "items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
        : " items-center justify-between w-full hidden lg:flex lg:w-auto lg:order-1";

    const links = [
        {
            to: "#home",
            text: "Home",
        },
        {
            to: "#aboutus",
            text: "About us",
        },
        {
            to: "#events",
            text: "Events",
        },
        {
            to: "#contributors",
            text: "Contributors",
        },
        {
            to: "#faq",
            text: "FAQ",
        },
    ];
    return (
        <>
            <nav className="bg-white fixed w-full z-50 top-0 start-0 border-b border-gray px-8 md:px-14 lg:px-28">
                <div className="max-w-screen-xl min-w-full flex flex-wrap items-center justify-between mx-auto py-4">
                    <a
                        href=""
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        {/* <img src="" className="h-8" alt="Gnome Logo"/> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            Gnome Nepal
                        </span>
                    </a>
                    <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse gap-4">
                        <a href="https://discord.com/invite/3dpGWPbrMc" target="_blank">
                            <button
                                type="button"
                                className="hidden md:flex text-black bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-md px-4 py-2 text-center border-black border-2"
                            >
                                Become a Member!
                            </button>
                        </a>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={() => {
                                openNav();
                            }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className={style} id="navbar-sticky">
                        <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white lg:items-center ">
                            {links.map((link, index) => (
                                <Links key={index} to={link.to} text={link.text} />
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
