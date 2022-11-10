import React from 'react';


const ReviewCard = ({ item }) => {
    const { name, feedback, userImg } = item;



    return (
        <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={userImg} alt='' className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-2 text-base dark:text-black text-justify">
                <p>{feedback}</p>

            </div>
        </div>
    );
};

export default ReviewCard;
