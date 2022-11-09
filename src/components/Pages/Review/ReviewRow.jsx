import React, { useEffect, useState } from 'react';
import { BsPlusLg } from "react-icons/bs";
const ReviewRow = ({ handleDelete, handleUpdateStatus, review }) => {
    const { service_id, feedback } = review;
    const [service, setService] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/service/${ service_id }`)
            .then(res => res.json())
            .then(data => setService(data?.service))
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
                <button className="btn btn-sm btn-ghost">Pending</button>
                <button className="btn btn-sm btn-ghost">Update</button>
            </th>
        </tr>
    );
};

export default ReviewRow;







//



