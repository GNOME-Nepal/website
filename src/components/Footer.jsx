import Image from "./Image";
import { Instagram, Github, Linkedin } from "lucide-react";

const sponsor_url = import.meta.env.VITE_SPONSOR_URL;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div>
              <button
                className="bg-white w-44 h-16 rounded-lg hover:bg-gray"
                aria-label="Gnome Logo"
              >
                <Image
                  src={"images/GNOMENepal.png"}
                  alt="Gnome Nepal Logo"
                  height="53px"
                  width="173px"
                />
              </button>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-4 text-sm">
                <li>
                  <a
                    href="/docs/general/code_of_conduct"
                    className="text-gray-300 transition-colors"
                  >
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gnome.org"
                    className="text-gray-300 transition-colors"
                  >
                    GNOME.org
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/general/contributing"
                    className="text-gray-300 transition-colors"
                  >
                    Contributing Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/GNOME-Nepal/website/issues/new/choose"
                    className="text-gray-300 transition-colors"
                  >
                    Find Issues
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex space-x-4">
              <a
                href="https://np.linkedin.com/company/gnomenepal"
                className="text-gray-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">Linkedin page</span>
              </a>
              <a
                href="https://www.instagram.com/gnomenepal/   "
                className="text-gray-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="https://github.com/GNOME-Nepal"
                className="text-gray-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub organization</span>
              </a>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-green-500 rounded-full px-4 py-2">
              <a
                href={sponsor_url}
                className="text-white font-semibold hover:text-gray-200 transition-colors"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} GNOME Nepal. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
