import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NavFoot = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen mx-8 md:mx-20 lg:mx-28 font-poppins">
        <Navbar />
        <main className="flex flex-col flex-grow mt-20 gap-2">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NavFoot;
