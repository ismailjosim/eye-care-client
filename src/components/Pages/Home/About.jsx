import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/about/person.jpg';

const About = () => {
    return (
        <div className='bg-base-200 py-10'>
            <div className=" w-11/12 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <img src={img} alt='' className="rounded-lg" />
                    </div>
                    <div className=''>
                        <h3 className="lg:text-5xl text-3xl font-bold">Hello, I'M</h3>
                        <h1 className="lg:text-5xl text-3xl font-bold my-3">Jeffrey J. Ritsema</h1>
                        <p className="py-6 text-lg text-justify font-medium leading-8">An Eye Care Specialists, highly specialized staff works together to ensure your visit is comfortable and completed in a timely manner.</p>
                        <p className="py-6 text-lg text-justify font-medium leading-8">I have a qualified team of professionals that will work around your busy schedule and address any questions or concerns prior to the appointment. Whether it’s a general eye exam or treating a condition that requires an in-depth diagnosis, our team provides undivided attention to each patient so we can evaluate a plan based on your needs and our professional opinion. Our doctors offer full vision examinations and will diagnose and treat an array of eye diseases and conditions to keep your eyes healthy!</p>
                        <Link to='/about' className="btn btn-primary">Know More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
