import Hero from "../sections/Hero";
import { Aboutus, Contributors, FAQ, Events, Newsletter } from "../sections";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container mx-auto py-8 flex flex-col gap-8">
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
