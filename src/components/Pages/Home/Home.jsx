import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from './About';
import Appointment from './Appointment';
import Gallery from './Gallery';
import Hero from './Hero';
import HomeServices from './HomeServices';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero />
            <Appointment />
            <About />
            <HomeServices />
            <Gallery />
            <section className="py-6 text-black">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-5xl font-bold leading-none text-center">Book appointment</h1>
                    <p className="text-xl font-medium text-center">
                        +23 345 67980
                    </p>
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                        <button className="px-8 py-3 text-lg font-semibold rounded bg-primary text-white">Make appointment</button>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
