import React from 'react';
import useTitle from '../../../hooks/useTitle';
import HeroSlider from './HeroSlider';
import HomeServices from './HomeServices';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <HeroSlider />
            <HomeServices />
        </div>
    );
};

export default Home;
