import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { _id, title, img, description, price } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title} </h2>
                <p className='text-justify mb-2'>{description.slice(0, 100)}..</p>
                <div className="card-actions justify-between items-center">
                    <div className="badge font-semibold badge-outline">${price}</div>
                    <Link to={`/service/${ _id }`} className="btn btn-primary text-white hover:btn-secondary">Details</Link>
                </div>
            </div>
        </div>
    );

};

export default ServiceCard;
