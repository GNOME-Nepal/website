// import React from "react";
import Hero from "../sections/Hero";
import { Aboutus, Contributors, FAQ, Events } from "../sections";
import SectionObserver from "@/components/Observer";

const Home = () => {
    return (
        <>
            <SectionObserver id={"home"}>
                <Hero />
            </SectionObserver>
            <div className="container mx-auto py-8 flex flex-col gap-8">
                <SectionObserver id="aboutus" className="md:pt-32">
                    <Aboutus />
                </SectionObserver>

                <SectionObserver id="events" >
                    <Events />
                </SectionObserver>

                <SectionObserver id="contributors">
                    <Contributors />
                </SectionObserver>

                <SectionObserver id="faq">
                    <FAQ />
                </SectionObserver>
            </div>
        </>
    );
};

export default Home;
