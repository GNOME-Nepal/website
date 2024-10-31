import { useState } from "react";
import Links from "./Links";
import { ModeToggle } from "./mode-toggle";
import Diya from "./Diya";
import Banner from "./Banner";

const Navbar = () => {
  const diya = localStorage.getItem("diya") === "true";
  const [open, setOpen] = useState(false);
  const openNav = () => {
    setOpen(!open);
  };

  const style = open
    ? "items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
    : "items-center justify-between w-full hidden lg:flex lg:w-auto lg:order-1";

  const links = [
    { to: "#home", text: "Home" },
    { to: "#aboutus", text: "About us" },
    { to: "#events", text: "Events" },
    { to: "#contributors", text: "Contributors" },
    { to: "#faq", text: "FAQ" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-300 bg-background dark:bg-gray-900">
        <Banner
          message={
            diya
              ? "🪔 Happy Tihar and Diwali to Everyone 🪔"
              : "🪔 Happy Tihar and Diwali to Everyone 🪔 [Tap Diya to ignite]"
          }
        />
        <div className="px-8 md:px-14 lg:px-28">
          <Diya side="left" />
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
            <a
              href=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span
                className="self-center text-2xl font-semibold whitespace-nowrap"
                style={{ color: "var(--text-color)" }}
              >
                GNOME Nepal
              </span>
            </a>
            <div className="flex lg:order-2  lg:space-x-0 rtl:space-x-reverse gap-2 md:gap-4">
              <ModeToggle />
              <a
                href="https://discord.com/invite/tpsVFJN8WC"
                target="_blank"
                aria-label="Discord invite"
              >
                <button
                  type="button"
                  className="hidden md:flex text-[var(--primary-foreground)] bg-[var(--primary)] hover:bg-gray-200 dark:text-[var(--primary)] dark:bg-[var(--primary-foreground)] dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 border-2 border-[var(--foreground)] dark:border-[var(--primary-foreground)]"
                >
                  Become a Member!
                </button>
              </a>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                aria-controls="navbar-sticky"
                aria-expanded={open}
                aria-label="Open main menu"
                onClick={openNav}
              >
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
              <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-300 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-background lg:dark:bg-gray-300 lg:items-center lg:dark:hover:black">
                {links.map((link, index) => (
                  <Links key={index} to={link.to} text={link.text} />
                ))}
                <a
                  href="https://discord.com/invite/tpsVFJN8WC"
                  target="_blank"
                  aria-label="Discord invite"
                  className="border-t border-gray-200 dark:border-gray-800 mt-4 md:mt-0 mt:border-none "
                >
                  <button
                    type="button"
                    className=" md:hidden mt-4 mx-auto flex text-[var(--primary-foreground)] bg-[var(--primary)] hover:bg-gray-200 dark:text-[var(--primary)] dark:bg-[var(--primary-foreground)] dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 border-2 border-[var(--foreground)] dark:border-[var(--primary-foreground)]"
                  >
                    Become a Member!
                  </button>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
