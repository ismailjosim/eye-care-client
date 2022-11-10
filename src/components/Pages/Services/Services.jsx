import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const { loading } = useContext(AuthContext)
    const [services, setServices] = useState([]);


    useTitle('Services');


    useEffect(() => {
        fetch('https://assignment-11-server-rose.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data.services))
    }, [])

    if (loading) {
        return (
            <div div className='flex justify-center items-center gap-3 flex-col' >
                <div className="w-24 h-24 mb-10 border-4 border-dashed rounded-full animate-spin dark:border-primary">
                </div>
            </div>
        )
    }


    return (
        <div className='w-11/12 mx-auto my-14'>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
