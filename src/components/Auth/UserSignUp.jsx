import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-toastify';
import loginImg from '../../assets/slider/slider05.jpg'


const UserSignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);


    const handleUserSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success("Congratulations! User Created Successfully 🎉🎉", { autoClose: 1000 });
                console.log(user);
                handleProfileUpdate(name, photoURL);

            })
            .catch(error => {
                toast.error("Something went wrong! 😢😢", { autoClose: 1000 });
                console.log(error.message);
            })

    }
    // Update user Profile and name
    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                toast.error("Something went wrong! 😢😢", { autoClose: 1000 });
                console.log(error);
            })
    }



    return (
        <div>
            <div className='flex justify-around my-10 items-center'>
                <div className='w-1/2'>
                    <img src={loginImg} alt="" />
                </div>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl border-2">
                    <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleUserSignUP} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block text-base font-bold">Full Name</label>
                            <input type="text" name="name" placeholder="Your Full Name" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="name" className="block text-base font-bold">Upload Image</label>
                            <input type="text" name="photoURL" placeholder="Upload Your Image" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-base font-bold">Email</label>
                            <input type="email" name="email" placeholder="Your email" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block text-base font-bold">Confirm Password</label>
                                <input type="password" name="password" placeholder="Enter password" className="w-full px-4 py-3 rounded-md focus:outline-primary border" required />
                            </div>

                        </div>
                        <button className="block w-full p-3 text-center rounded-md opacity-80 hover:opacity-100 text-white bg-primary">Sign in</button>
                    </form>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                        <Link to="/login" className="hover:underline font-semibold text-primary">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserSignUp;
