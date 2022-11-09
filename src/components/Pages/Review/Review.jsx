import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Review = () => {
    useTitle('Review')
    const { user } = useContext(AuthContext);
    const [allReviews, setAllReviews] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/reviews?userEmail=${ user.email }`)
            .then(res => res.json())
            .then(data => setAllReviews(data.reviews))
    }, [user?.email])



    const handleRemoveReview = id => {
        const proceed = window.confirm("Are You Sure!");
        if (proceed) {
            fetch(`http://localhost:5000/review/${ id }`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Review Removed", { autoClose: 1000 });
                        const remaining = allReviews.filter(review => review._id !== id);
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

                <div className="overflow-x-auto w-full">
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






// handleDelete = { handleDelete }
// handleUpdateStatus = { handleUpdateStatus }



// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../context/AuthProvider';
// import ReviewLoader from './ReviewLoader';

// const Review = ({ image }) => {
//     const { user } = useContext(AuthContext)
//     const [reviews, setReviews] = useState([]);
//     useEffect(() => {
//         fetch(`http://localhost:5000/reviews?email=${ user.email }`)
//             .then((res) => res.json())
//             .then((data) => setReviews(data));
//     }, [user?.email]);
//     return (
//         <div>
//             <h1 className='text-3xl font-medium title-font text-white mb-12 text-center'>
//                 Reviews
//             </h1>
//             {
//                 reviews.length === 0 ?
//                     <p className='text-slate-300 text-2xl font-serif '>There are no review</p>
//                     :
//                     <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 '>
//                         {reviews.map((review) => (
//                             <ReviewLoader key={review._id} image={image} review={review}></ReviewLoader>
//                         ))}
//                     </div>
//             }

//         </div>
//     );
// };

// export default Review;
