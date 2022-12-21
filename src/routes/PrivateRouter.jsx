import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <div className='flex justify-center items-center gap-3 flex-col'>
            <div className="w-24 h-24 mb-10 border-4 border-dashed rounded-full animate-spin dark:border-primary">
            </div>
        </div>
    }

    return (
        user ? <div>
            {children}
        </div> :
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );

};

export default PrivateRouter;
