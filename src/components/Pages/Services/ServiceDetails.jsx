import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewCard from '../Review/ReviewCard';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    useTitle('Service Details')
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const { _id, img, description, price, title } = serviceDetails.service;


    // Handle Review Function
    const handleReview = e => {
        e.preventDefault();
        const form = e.target;

        const timer = new Date().getTime();
        const name = form.name.value;
        const email = form.email.value;
        const feedback = form.feedback.value;
        const service_id = _id;
        const userImg = user.photoURL;

        const currentReview = {
            name,
            email,
            feedback,
            service_id,
            userImg,
            timer
        }

        fetch('http://localhost:5000/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReviews([currentReview, ...reviews])
                    toast.success('Review Added Successfully!', { autoClose: 1000 })

                } else {
                    toast.error(data.message)
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    // show user Reviews
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${ _id }`)
            .then(res => res.json())
            .then(data => setReviews(data.reviews))
    }, [_id])



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
                            <PhotoProvider>
                                <PhotoView src={img}>
                                    <img src={img} alt={title} />
                                </PhotoView>
                            </PhotoProvider>
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
                <div>
                    <h3 className='text-xl mt-10 text-primary text-center my-10 font-bold border-b-8 border-primary'>Add Your Feedback Here</h3>

                    <form onSubmit={handleReview} className="flex flex-col w-full">
                        <div className='mb-5 flex gap-5'>
                            <div className="space-y-1 text-sm w-1/2">
                                <label htmlFor="name" className="block text-base font-bold">Name</label>
                                <input type="name" name="name" readOnly defaultValue={user?.displayName} placeholder="Your Name" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                            </div>
                            <div className="space-y-1 text-sm w-1/2">
                                <label htmlFor="email" className="block text-base font-bold">Email</label>
                                <input type="email" name="email" readOnly defaultValue={user?.email} placeholder="Your email" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                            </div>
                        </div>
                        <textarea rows="3" placeholder="Write Your Feedback..." className="p-4 rounded-md text-black resize-none" spellCheck="false" name='feedback' required></textarea>

                        {user ?
                            <button type="submit" className="py-4 my-8 font-semibold rounded-md text-white bg-primary">Leave feedback</button> :
                            <Link to='/login' className="py-4 my-8 font-semibold rounded-md text-white bg-primary text-center">Please Login First To Add Your Feedback</Link>
                        }
                    </form>
                </div>
                <h3 className='text-xl mt-10 text-warning font-bold'>Previous Reviews Of This Service</h3>
                <div>
                    {
                        reviews?.map((item, idx) => <ReviewCard key={idx} item={item}></ReviewCard>)

                    }
                </div>
            </div>

        </div>
    );
}
export default ServiceDetails;
