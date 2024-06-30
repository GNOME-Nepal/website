import React from 'react'
import Hero from './Hero'
import { Aboutus, Contributors, FAQ, Events } from '../sections'


const Home() {
  return (
    <div className="bg-gray-100">
        <Hero />

        <div className="container mx-auto py-8">
            <section id="aboutus" className="py-8">
                <Aboutus />
            </section>

            <section id="events" className="py-8">
                <Events />
            </section>

            <section id="contibutors" className="py-8">
                <Contributors />
            </section>

            <section id="faq" className="py-8">
                <FAQ />
            </section>
            
        </div>
    </div>
  )
}

export default Home
