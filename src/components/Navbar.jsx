import { useState } from "react";
import Links from "./Links";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const links = [
    { to: "#home", text: "Home" },
    { to: "#aboutus", text: "About Us" },
    { to: "#events", text: "Events" },
    { to: "#contributors", text: "Contributors" },
    { to: "#faq", text: "FAQ" },
    { to: "/docs", text: "Docs" },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-300 bg-background dark:bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <span
                  className="text-xl sm:text-2xl font-semibold whitespace-nowrap"
                  style={{ color: "var(--text-color)" }}
                >
                  GNOME Nepal
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex space-x-4 xl:space-x-6">
                {links.map((link, index) => (
                  <li key={index} className="whitespace-nowrap">
                    <Links to={link.to} text={link.text} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side (Mode Toggle and Buttons) */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <ModeToggle />
              {/* Become a Member Button (Hidden on small screens) */}
              <a
                href="https://discord.com/invite/tpsVFJN8WC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord invite"
                className="hidden sm:block"
              >
                <button
                  type="button"
                  className="text-[var(--primary-foreground)] bg-[var(--primary)] hover:bg-opacity-90 dark:text-[var(--primary)] dark:bg-[var(--primary-foreground)] dark:hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 border border-transparent whitespace-nowrap"
                >
                  Become a Member!
                </button>
              </a>
              {/* Hamburger Menu Button */}
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded={open}
                aria-label="Toggle main menu"
                onClick={toggleMenu}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  {open ? (
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l15 12M1 13L16 1"
                    />
                  ) : (
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {open && (
          <div className="lg:hidden">
            <ul className="flex flex-col space-y-2 px-4 pb-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Links to={link.to} text={link.text} />
                </li>
              ))}
              <li>
                <a
                  href="https://discord.com/invite/tpsVFJN8WC"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord invite"
                  className="block w-full"
                >
                  <button
                    type="button"
                    className="w-full text-center text-[var(--primary-foreground)] bg-[var(--primary)] hover:bg-opacity-90 dark:text-[var(--primary)] dark:bg-[var(--primary-foreground)] dark:hover:bg-opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 border border-transparent whitespace-nowrap"
                    onClick={() => setOpen(false)}
                  >
                    Become a Member!
                  </button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className="mt-16"></div>
    </>
  );
};

export default Navbar;
