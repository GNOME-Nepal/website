// import React from "react";
import Hero from "../sections/Hero";
import { Aboutus, Contributors, FAQ, Events } from "../sections";

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container mx-auto py-8 flex flex-col gap-8">
                <Aboutus />
                <Events />
                <Contributors />
                <FAQ />
            </div>
        </>
    );
};

export default Home;
