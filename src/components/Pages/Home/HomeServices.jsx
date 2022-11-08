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
        <div className='w-11/12 mx-auto my-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Link to='/services' className="btn btn-primary text-white hover:btn-secondary px-10">View More</Link>
            </div>
        </div>
    );
};

export default HomeServices;
