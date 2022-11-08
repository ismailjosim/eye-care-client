import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const ServiceDetails = () => {
    useTitle('Service Details')
    const serviceDetails = useLoaderData();
    const [review, setReview] = useState({});
    const { _id, img, description, price, title } = serviceDetails.service;
    const { user } = useContext(AuthContext);

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;

        const InputReview = {
            name: form.name.value,
            email: form.email.value,
            feedback: form.feedback.value,
            service_id: _id,
            userEmail: user.email

        }
        setReview(InputReview)

    }
    console.log(review);

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
                <div>
                </div>

                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">Leroy Jenkins</h4>
                                <span className="text-xs dark:text-gray-400">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-500">
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-base dark:text-black text-justify">
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                        <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                    </div>
                </div>
                <form onSubmit={handleReview} className="flex flex-col w-full">
                    <div className='mb-5 flex gap-5'>
                        <div className="space-y-1 text-sm w-1/2">
                            <label htmlFor="name" className="block text-base font-bold">Name</label>
                            <input type="name" name="name" defaultValue={user?.displayName} placeholder="Your Name" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                        </div>
                        <div className="space-y-1 text-sm w-1/2">
                            <label htmlFor="email" className="block text-base font-bold">Email</label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                        </div>
                    </div>
                    <textarea rows="3" placeholder="Write Your Feedback..." className="p-4 rounded-md text-black resize-none" spellCheck="false" name='feedback' required></textarea>
                    <button type="submit" className="py-4 my-8 font-semibold rounded-md text-white bg-primary">Leave feedback</button>
                </form>
            </div>

        </div>
    );
};

export default ServiceDetails;
