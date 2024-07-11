import React from "react";

const Aboutus = () => {
  return (
    <>
      <section id="aboutus" className="min-h-[100vh] flex justify-center items-center border-2 flex-col">
        <div className="image px-10 border-2 w-[95%] h-[20vw] ">

        </div>
        <div className="about px-24 w-[100%]">
          <h1 className="text-2xl flex justify-center font-bold mt-7">Who We Are</h1>
          <div className="text py-2">
              <p>GNOME Nepal is an organization dedicated to promoting open-source initiatives within Nepal. Our core objective is  <span className="flex justify-center"> to foster a  vibrant community where technology enthusiasts, developers, and open-source advocates can </span> <span className=" flex justify-center"> collaborate, share knowledge, and contribute.</span></p>
          </div>
          <h1 className="text-2xl mt-7 flex justify-center font-bold">Our Mission</h1>
          <div className="text py-5">
              <p className="flex justify-center">We believe in the power of open-source to drive innovation, collaboration and education. Our mission is to:
              </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
