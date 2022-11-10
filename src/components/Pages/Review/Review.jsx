import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    useTitle('Review')
    const { user, userLogout } = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState([]);


    // remember to add ? to the parameter.
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${ user?.email }`, {
            headers: {
                authorization: `Bearer ${ localStorage.getItem('eye-token') }`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userLogout()
                }
                return res.json()
            })
            .then(data => setAllReviews(data?.reviews))

    }, [user?.email, userLogout])




    const handleRemoveReview = id => {
        const proceed = window.confirm("Are You Sure!");
        if (proceed) {
            fetch(`http://localhost:5000/review/${ id }`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const review = data.review;
                    if (review.deletedCount > 0) {
                        toast.success("Review Removed", { autoClose: 1000 });
                        const remaining = allReviews.filter(p => p._id !== id);
                        setAllReviews(remaining);
                    }
                })
                .catch(error => {
                    toast.error("Something went wrong! 😢😢", { autoClose: 1000 });
                    console.log(error.message);
                })
        }
    }





    return (
        <div>
            <h3 className='text-3xl my-5 text-center font-bold'>See All Of Your Reviews</h3>
            <div className="w-10/12 p-6 mx-auto divide-y text-slate-700">

                <div className="overflow-x-auto w-full mb-40">
                    <table className="table w-full my-16">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Reviews Details</th>
                                <th>Price</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allReviews?.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                    handleRemoveReview={handleRemoveReview}
                                ></ReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Review;
