import React from 'react';
import svg from '../../assets/form/doodle.svg'
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const UserServices = () => {
    useTitle('Add Service')

    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target;
        const service = {
            title: form.name.value,
            img: form.img.value,
            price: form.price.value,
            description: form.description.value,
        };
        console.log(service);
        fetch('https://assignment-11-server-rose.vercel.app/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.success) {
                    toast.success('Product Added Successfully!', { autoClose: 1000 })

                } else {
                    toast.error(data.message)
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Add New Service</h2>
                    </div>
                    <img src={svg} alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form onSubmit={handleAddProduct} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block text-base font-bold">Service Name</label>
                        <input type="text" name="name" placeholder="Service Name" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="img" className="block text-base font-bold">Service Image</label>
                        <input type="text" name="img" placeholder="Service Image" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="price" className="block text-base font-bold">Price</label>
                        <input type="number" name="price" placeholder="Service Price" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-base font-bold">Details</label>
                        <textarea name='description' required rows="3" placeholder='Add Service Details' className="w-full px-4 py-3 rounded-md focus:outline-primary border"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-primary text-white">Add New Service</button>
                </form>
            </div>
        </div>
    );
};

export default UserServices;
