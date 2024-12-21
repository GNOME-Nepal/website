import { useState, useEffect } from "react";
import { SiGnome } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import Links from "./Links";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showUpperLayer, setShowUpperLayer] = useState(true);

  // dynamic announcement text and redirection link
  const announcementText = "We're organizing UbuCon 2025!";
  const redirectLink = "ubconsiteURL";

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowUpperLayer(currentScrollY < lastScrollY || currentScrollY === 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Upper Layer */}
      <div
        className={`fixed w-full z-50 top-0 left-0 bg-white text-black py-2 px-3 transition-transform duration-300 ${showUpperLayer ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-screen-xl mx-auto relative flex items-center">
          {/* Left Side: Logo*/}
          <a
            href="/"
            className="absolute left-0 flex items-center space-x-2 pl-4"
          >
            <span
              className="text-xl sm:text-2xl font-semibold"
              style={{ color: "var(--text-color)" }}
            >
              <SiGnome />
            </span>
          </a>

          {/* Center: Annonuncement*/}
          <div className="flex-1 text-center px-16">
            <span className="text-sm font-medium">{announcementText}</span>
          </div>

          {/* Right Side: redirection URL with arrow Icon for mobile responsiveness */}
          <div className="absolute right-0 pr-4 text-sm text-blue-600 hover:underline mt-1">
            <a href={redirectLink} target="_blank" rel="noopener noreferrer">
              <FaArrowRight className="inline-block ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-40 left-0 border-b border-gray-300 bg-background dark:bg-gray-900 transition-[top] duration-300 ${showUpperLayer ? "top-[40px]" : "top-0"}`}
      >
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
                  className="hidden md:flex text-[var(--primary-foreground)] bg-[var(--primary)] hover:bg-gray-200 dark:text-[var(--primary)] dark:bg-[var(--primary-foreground)] dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 border-2 border-[var(--foreground)] dark:border-[var(--primary-foreground)]"
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
                    className="md:hidden mt-4 mx-auto flex text-[var(--primary-foreground)] bg-[var(--primary)] hover:bg-gray-200 dark:text-[var(--primary)] dark:bg-[var(--primary-foreground)] dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 border-2 border-[var(--foreground)] dark:border-[var(--primary-foreground)]"
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
      <div className="mt-20"></div>
    </>
  );
};

export default Navbar;
