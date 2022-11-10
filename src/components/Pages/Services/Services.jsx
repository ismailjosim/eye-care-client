import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useTitle('Services');


    useEffect(() => {
        fetch('https://assignment-11-server-rose.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])




    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
