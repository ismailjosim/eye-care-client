import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/G2h5t86/slider-bg-1.jpg")` }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className="absolute flex flex-col sm:gap-2 gap-3 sm:top-40 top-48 sm:left-24 left-5 text-white text-center lg:text-left md:text-left">
                        <div className="divider w-16 h-1 bg-secondary sm:visible hidden"></div>
                        <span className="uppercase text-sm ">Total Eye care solution</span>
                        <h1 className="text-4xl sm:text-6xl font-bold sm:leading-20 leading-10 sm:w-2/3">Your most trusted health partner</h1>
                        <p className='sm:text-xl sm:w-3/5 w-11/12 sm:mx-0 my-5 mx-auto'>Great eye health and good vision are very precious gifts. Experienced Eye Doctor. Personalized Vision Care. Luxury Eyewear.</p>
                        <div className='flex gap-3 sm:mx-0 mx-auto'>
                            <button className="btn btn-md btn-primary rounded-sm font-bold">Make appointment</button>
                            <Link to='/blog' className="btn btn-md btn-outline border-white text-white rounded-sm font-bold hover:btn-primary">Latest Blogs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
