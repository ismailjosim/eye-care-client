import React from 'react';
import '../../../styles/custom.css'
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
// Import all side image
import slideImg01 from '../../../assets/slider/slider (1).jpg';
import slideImg02 from '../../../assets/slider/slider02.jpg';
import slideImg03 from '../../../assets/slider/slider03.jpg';
import slideImg04 from '../../../assets/slider/slider04.jpg';
import slideImg05 from '../../../assets/slider/slider05.jpg';
import slideImg06 from '../../../assets/slider/slider06.jpg';
import { Link } from 'react-router-dom';

const bannerData = [
    {
        image: slideImg01,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: slideImg02,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: slideImg03,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: slideImg04,
        prev: 3,
        id: 4,
        next: 5
    },
    {
        image: slideImg05,
        prev: 4,
        id: 5,
        next: 6
    },
    {
        image: slideImg06,
        prev: 5,
        id: 6,
        next: 1
    }
]


const HeroSlider = () => {
    return (
        <div className="carousel w-full mb-10">
            {
                bannerData.map(slide => {
                    return <div key={slide.id} id={`slide${ slide.id }`} className="carousel-item relative w-full max-h-[600px] overflow-hidden">
                        <div className="slide-img">
                            <img className='w-screen' src={slide.image} alt={`Slide ${ slide.id }`} />
                        </div>
                        <div className="absolute flex flex-col sm:gap-5 gap-3 sm:top-20 top-5 sm:left-24 left-5 text-white sm:text-left text-center">
                            <div className="divider w-16 h-1 bg-secondary"></div>
                            <span className="uppercase text-sm">Total Eye care solution</span>
                            <h1 className="text-4xl sm:text-6xl font-bold sm:leading-20 leading-10 sm:w-2/3">Your most trusted health partner</h1>
                            <p className='sm:text-xl sm:w-3/5 w-11/12 sm:mx-0 mx-auto'>Great eye health and good vision are very precious gifts. Experienced Eye Doctor. Personalized Vision Care. Luxury Eyewear.</p>
                            <div className='flex gap-3 sm:mx-0 mx-auto'>
                                <button className="btn btn-md btn-primary rounded-sm font-bold">Make appointment</button>
                                <Link to='/blog' className="btn btn-md btn-outline border-white text-white rounded-sm font-bold hover:btn-primary">Latest Blogs</Link>
                            </div>
                        </div>
                        <div className="absolute sm:flex hidden justify-end gap-5 transform -translate-y-1/2 right-5 bottom-0">
                            <a href={`#slide${ slide.prev }`} className="btn btn-circle text-xl hover:bg-primary hover:border-primary transition-all duration-500">
                                <BsFillCaretLeftFill />
                            </a>
                            <a href={`#slide${ slide.next }`} className="btn btn-circle text-xl hover:bg-primary hover:border-primary transition-all duration-500">
                                <BsFillCaretRightFill />
                            </a>
                        </div>
                    </div>
                }
                )}
        </div>
    );
};

export default HeroSlider;
