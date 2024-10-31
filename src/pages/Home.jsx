import Hero from "../sections/Hero";
import {
  Aboutus,
  Contributors,
  FAQ,
  Events,
  Newsletter,
  Sponsors,
} from "../sections";
import Diya from "@/components/Diya";

const Home = () => {
  return (
    <>
          <Hero />
          <div className="container mx-auto flex flex-col">
            <Aboutus />
            <Events />
            <Contributors />
            <FAQ />
            <Newsletter />
            <Sponsors />
          </div>
    </>
  );
};

export default Home;
