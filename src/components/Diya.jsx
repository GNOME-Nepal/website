import React, { useState } from "react";
import clsx from "clsx";

const Diya = () => {
  const [open, setOpen] = useState(localStorage.getItem("diya") === "true");

  const ignite = () => {
    setOpen(!open);
  };

  //save the diya state in local storage
  React.useEffect(() => {
    localStorage.setItem("diya", open);
  }, [open]);

  return (
    <>
      <div
        className="absolute left-[35px] bottom-[15px] cursor-pointer hidden lg:block"
        onClick={() => ignite()}
      >
        <div className="bg-red-800 h-[30px] w-[60px] absolute rounded-b-[200px]"></div>
        <div className="bg-yellow-500 h-[15px] w-[60px] absolute top-[-8px] rounded-[50%]"></div>
        <div
          className={clsx("h-[20px] w-[20px] left-[20px] bottom-[18px]", {
            "rounded-tl-[50%] rounded-br-[50%] bg-[#fffb18] rotate-[-45deg] relative animate-pulse":
              open,
          })}
        ></div>
        <div
          className={clsx("h-[10px] w-[10px] left-[25px] bottom-[28px]", {
            " rounded-tl-[50%] rounded-br-[50%] bg-[#f48200] rotate-[-45deg] relative animate-pulse":
              open,
          })}
        ></div>
      </div>
    </>
  );
};

export default Diya;
