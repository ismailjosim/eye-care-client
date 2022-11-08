import React from 'react';
import useTitle from '../../../hooks/useTitle';

const About = () => {
    useTitle('About Me')
    return (
        <div>
            <section className="bg-primary py-10 relative">
                <div className="container mx-auto">
                    <div className="block text-center">
                        <span className="text-white">Some information</span>
                        <h1 className="capitalize mb-5 text-4xl font-bold text-white">About Me</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
