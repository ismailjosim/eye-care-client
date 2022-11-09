import React, { useEffect, useState } from 'react';

const ReviewRow = ({ handleRemoveReview, review, handleUpdate }) => {
    const [service, setService] = useState();
    const { _id, service_id, feedback } = review;


    useEffect(() => {
        fetch(`http://localhost:5000/service/${ service_id }`)
            .then(res => res.json())
            .then(data => setService(data?.service))
            .catch(err => (console.log(err.message)))
    }, [service_id])




    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded">
                            {service?.img &&
                                <img src={service.img} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">price</div>
                        <div className="text-sm opacity-50">price</div>
                    </div>
                </div>
            </td>
            <td className='text-black capitalize'>
                {feedback}
            </td>
            <td className='text-error font-bold'>${service?.price}</td>
            <th>
                <button onClick={() => handleRemoveReview(review._id)} className="btn btn-sm btn-ghost">Delete</button>


                <label htmlFor="my-modal-5" className="">Edit</label>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <form onSubmit={handleUpdate} className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Update Your Review From Here!</h3>
                        <input type="text" className='hidden' name='reviewId' defaultValue={_id} />
                        <textarea rows="10" defaultValue={feedback} className="w-full rounded-sm text-black resize-none" name='feedback'></textarea>
                        <div className="modal-action">
                            <button type='submit'><label htmlFor="my-modal-5" className="btn">Confirm update</label></button>
                            <label htmlFor="my-modal-5" className="btn">Cancel</label>
                        </div>
                    </form>
                </div>
            </th>
        </tr>
    );
};

export default ReviewRow;
