import Hero from "../sections/Hero";
import { Aboutus, Contributors, FAQ, Events, Newsletter } from "../sections";

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
            </div>
        </>
    );
};

export default Home;
