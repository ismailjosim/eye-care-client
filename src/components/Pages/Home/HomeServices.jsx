import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])

    return (
        <div>
            <section className="bg-primary py-10 relative mb-10">
                <div className="container mx-auto">
                    <div className="block text-center">
                        <span className="text-white">Exclusive</span>
                        <h1 className="capitalize mb-5 text-4xl font-bold text-white">Services</h1>
                    </div>
                </div>
            </section>
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <Link to='/services' className="btn btn-primary text-white hover:btn-secondary px-10">View More</Link>
            </div>
        </div>
    );
};

export default HomeServices;
