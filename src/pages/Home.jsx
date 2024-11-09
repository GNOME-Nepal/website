import Hero from "../sections/Hero";
import {
  Aboutus,
  Contributors,
  Faq,
  Events,
  Newsletter,
  Sponsors,
} from "../sections";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto flex flex-col">
        <Aboutus />
        <Events />
        <Contributors />
        <Faq />
        <Newsletter />
        <Sponsors />
      </div>
    </>
  );
};

export default Home;
