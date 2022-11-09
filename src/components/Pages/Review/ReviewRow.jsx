import React, { useEffect, useState } from 'react';

const ReviewRow = ({ handleRemoveReview, review, refresh, setRefresh }) => {
    const [service, setService] = useState();
    const { service_id, feedback } = review;


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
                <button className="btn btn-sm btn-ghost">Update</button>
            </th>
        </tr>
    );
};

export default ReviewRow;

