import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCard = ({ service }) => {
    const { _id, title, img, description, price } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt={title} />
                    </PhotoView>
                </PhotoProvider>
            </figure>
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
// <img src={img} alt={title} />
