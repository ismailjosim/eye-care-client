import React from 'react';
import { BsFillStopwatchFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { RiReservedFill } from "react-icons/ri";
const Appointment = () => {
    return (
        <div className='relative lg:top-[-5rem] top-5 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            <div className="card lg:mt-0 mt-5 bg-base-100 shadow-xl">
                <div className="text-5xl mt-10 ml-8">
                    <RiReservedFill />
                </div>
                <div className="card-body">
                    <h3 className="card-title">
                        24 Hours Service
                    </h3>
                    <h2>Online Appointment</h2>
                    <p>Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                    <div className="card-actions justify-start">
                        <button className="btn-primary btn text-white">Make A Appointment</button>
                    </div>
                </div>
            </div>
            <div className="card lg:mt-0 mt-5 bg-base-100 shadow-xl">
                <div className="text-5xl mt-10 ml-8">
                    <BsFillStopwatchFill />
                </div>
                <div className="card-body">

                    <h3 className="text-sm font-medium">
                        Timing schedule
                    </h3>
                    <h2 className="card-title text-2xl">
                        Working Hours
                    </h2>
                    <div className="flex flex-col">
                        <p className='flex justify-between my-2 border-b-2 font-medium'><span>Sun - Wed :</span> <span>8:00 - 17:00</span></p>
                        <p className='flex justify-between my-2 border-b-2 font-medium'><span>Thu - Fri:</span> <span>9:00 - 17:00</span></p>
                        <p className='flex justify-between my-2 border-b-2 font-medium'><span>Sat - sun :</span> <span>10:00 - 17:00</span></p>
                    </div>
                </div>
            </div>
            <div className="card lg:mt-0 mt-5 lg:mb-0 mb-10 bg-base-100 shadow-xl">
                <div className="text-5xl mt-10 ml-8">
                    <BiSupport />
                </div>

                <div className="card-body">
                    <h3 className="text-sm font-medium">
                        Emergency Cases

                    </h3>
                    <h2 className="card-title text-2xl">
                        1-800-700-6200
                    </h2>
                    <p className='py-5'>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Connected with us for any urgency .</p>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
