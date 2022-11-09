import React, { useContext } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Review = () => {
    const { user } = useContext(AuthContext)
    useTitle('Review')







    // const handleDelete = id => {
    //     const proceed = window.confirm("Are You Sure!");
    //     if (proceed) {
    //         fetch(`http://localhost:5000/reviews?userEmail=${ user.email }`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     toast.success("Review Removed", { autoClose: 1000 });
    //                 }
    //             })
    //             .catch(error => {
    //                 toast.error("Something went wrong! 😢😢", { autoClose: 1000 });
    //                 console.log(error.message);
    //             })
    //     }
    // }




    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Review</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <button className='btn-primary bg-black p-1 rounded-full'>
                                    <BsPlusLg className='transform rotate-45 text-xl  text-white' />
                                </button>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="w-24 h-24 rounded">
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold"></div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </td>
                            <td className='text-xl font-bold text-secondary'>

                                <br />
                                <span className="badge badge-ghost badge-sm">ID: </span>
                            </td>
                            <td className='text-primary font-semibold'>$</td>
                            <th>
                                <button className="btn btn-sm btn-ghost"></button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Review;










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
