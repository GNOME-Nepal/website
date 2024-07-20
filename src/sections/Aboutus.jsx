import React from "react";

const Aboutus = () => {
  return (
    <>
      <section
        id="aboutus"
        className="min-h-[100vh] flex justify-center items-center flex-col"
      >
        <div className="relative image px-10 w-auto h-[auto] mt-5 rounded-lg">
          <img src="/aboutus.jpg" className="object-contain w-full h-full" />
        </div>
        <div className="about px-12 w-[100%]">
          <h1 className="text-2xl flex justify-center font-bold mt-7">
            Who We Are
          </h1>
          <div className="text">
            <p className="flex justify-center text-center">
              GNOME Nepal is an organization dedicated to promoting open-source
              initiatives within Nepal. Our core objective is to foster a
              vibrant community where technology enthusiasts, developers, and
              open-source advocates can collaborate, share knowledge, and
              contribute.
            </p>
          </div>
          <h1 className="text-2xl mt-7 flex justify-center font-bold">
            Our Mission
          </h1>
          <div className="text">
            <p className="flex flex-col justify-center text-center">
              We believe in the power of open-source to drive innovation,
              collaboration and education. Our mission is to:
              <div className="flex flex-col text-center items-center font-bold">
                <br /> "Promote Open-Source Technologies"
                <br />
                "Build a Strong Community"
                <br />
                "Organize Events and Workshops"
                <br />
                "Engage with International Open-Source Communities"
              </div>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
