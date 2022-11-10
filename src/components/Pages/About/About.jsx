import React from 'react';
import useTitle from '../../../hooks/useTitle';
import img from '../../../assets/about/person.jpg';
import img2 from '../../../assets/about/person2.jpg';


const About = () => {
    useTitle('About Me')
    return (
        <div>
            <section className="bg-primary py-10 relative mb-5">
                <div className="container mx-auto">
                    <div className="block text-center">
                        <span className="text-white">Some information</span>
                        <h1 className="capitalize lg:mb-5 lg:text-4xl text-2xl font-bold text-white">About Me & My Team</h1>
                    </div>
                </div>
            </section>
            <div className="bg-white py-10">
                <div className='w-11/12 mx-auto'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16">
                        <div>
                            <img src={img} alt='' className="rounded-lg" />
                        </div>
                        <div>
                            <h3 className="lg:text-5xl text-3xl font-bold">Hello, I'M</h3>
                            <h1 className="lg:text-5xl text-3xl font-bold my-3">Jeffrey J. Ritsema</h1>
                            <p className="py-6 lg:text-lg text-base text-justify font-medium leading-8">An Eye Care Specialists, highly specialized staff works together to ensure your visit is comfortable and completed in a timely manner.</p>
                            <p className="py-6 lg:text-lg text-base text-justify font-medium leading-8">I have a qualified team of professionals that will work around your busy schedule and address any questions or concerns prior to the appointment. Whether it’s a general eye exam or treating a condition that requires an in-depth diagnosis, our team provides undivided attention to each patient so we can evaluate a plan based on your needs and our professional opinion. Our doctors offer full vision examinations and will diagnose and treat an array of eye diseases and conditions to keep your eyes healthy!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-11/12 mx-auto py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-xl font-bold">J. Gregory Ford, OD – <span className="text-base"> Diplomate American Board of Optometry</span> </h3>

                        <p className="py-6 lg:text-lg text-base text-justify font-medium leading-8">Dr. Ford is a graduate of Forest Hills Central High School and a lifelong resident of the Grand Rapids area. He earned his bachelors and doctorate degrees from Ferris State University College of Optometry. His internships included the Optometric Institute and Clinic of Detroit, Duane L. Waters Hospital in Jackson, and the optometry clinic at Ferris State University.</p>
                        <p className="py-6 lg:text-lg text-base text-justify font-medium leading-8">Dr. Ford was honored as the Michigan Young Optometrist of the Year in 1995, and Optometrist of the Year in 2014, for his outstanding contributions to Optometry and the community. He is board certified by the American Board of Optometry. Dr. Ford is a primary care Optometrist with particular interest in specialty contact lens fittings and eye disease. He is currently active on the legislative committee of the Michigan Optometric Association and part-time Clinical Faculty at the Michigan College of Optometry. He is active in his church and enjoys golf and hockey. He and his wife, Carla, live in Grand Rapids and have 3 grown children.</p>
                    </div>
                    <div>
                        <img src={img2} alt='' className="rounded-lg" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
