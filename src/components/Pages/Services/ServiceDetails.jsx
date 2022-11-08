import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const { img, description, price, title } = serviceDetails.service;

    return (
        <div className='my-10 page-title-overlay'>
            <section className="bg-primary py-10 relative">
                <div className="container mx-auto">
                    <div className="block text-center">
                        <span className="text-white">Service Details</span>
                        <h1 className="capitalize mb-5 text-4xl font-bold text-white my-5">{title}</h1>
                        <h3 className="font-semibold text-2xl text-error">Service Charge: ${price}</h3>
                    </div>
                </div>
            </section>
            <div className="w-7/12 mx-auto">
                <div className="">
                    <div className="my-3">
                        <div className='flex justify-center'>
                            <img src={img} alt={title} className="" />
                        </div>
                        <div className="blog-item-content mt-5">
                            <p className='leading-10 text-justify text-xl'>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
