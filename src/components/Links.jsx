import React from "react";
import { useLocation } from "react-router-dom";

const Links = ({ index, to, text }) => {
  const location = useLocation();
  const { hash } = location;

  const style =
    hash === to
      ? "block py-2 px-3 hover:bg-gray md:hover:text-white rounded md:text-gray-900 md:p-0 md:hover:bg-black md:px-4 md:py-2 md:rounded-full md:bg-black md:text-white transition delay-80"
      : "block py-2 px-3 hover:bg-gray md:hover:text-white rounded md:text-gray-900 md:p-0 md:hover:bg-black md:px-4 md:py-2 md:rounded-full transition delay-80";
  return (
    <>
      <li key={index}>
        <a href={to} className={style} aria-current="page">
          {text}
        </a>
      </li>
    </>
  );
};

export default Links;
