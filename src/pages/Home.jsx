import Hero from "../sections/Hero";
import {
  Aboutus,
  Contributors,
  Faq,
  Events,
  Newsletter,
  Sponsors,
  Gallery,
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
        <Gallery />
        <Newsletter />
        <Sponsors />
      </div>
    </>
  );
};

export default Home;
