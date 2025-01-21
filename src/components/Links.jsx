import { useLocation } from "react-router-dom";

const Links = ({ index, to, text }) => {
  const location = useLocation();
  const { hash } = location;

  const style =
    hash === to
      ? "block py-2 px-2 hover:bg-gray md:hover:text-white hover:text-black rounded md:text-gray-900 md:p-0 md:hover:bg-black md:px-4 md:py-2 md:rounded-full md:bg-black md:text-white transition delay-80 border border-primary text-sm"
      : "block py-2 px-2 hover:bg-gray md:hover:text-white hover:text-black rounded md:text-gray-900 md:p-0 md:hover:bg-black md:px-4 md:py-2 md:rounded-full transition delay-80 border border-transparent text-sm";

  return (
    <a
      href={to}
      key={index}
      className={style}
      aria-current="page"
      aria-label={text}
    >
      {text}
    </a>
  );
};

export default Links;
