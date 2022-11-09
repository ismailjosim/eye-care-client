import React from 'react';
import useTitle from '../../../hooks/useTitle';
import HeroSlider from './HeroSlider';
import HomeServices from './HomeServices';
import PriceSection from './PriceSection';
import Testimonials from './Testimonials';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <HeroSlider />
            <HomeServices />
            <Testimonials />
            <PriceSection />
            <section className="py-6 text-black">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1>
                    <p className="text-xl font-medium text-center">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                        <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                        <button className="px-8 py-3 text-lg font-normal border rounded dark:bg-gray-100 dark:text-gray-900 dark:border-gray-300">Learn more</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
