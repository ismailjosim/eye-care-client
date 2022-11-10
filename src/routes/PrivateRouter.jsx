import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className='flex justify-center items-center gap-3 flex-col'>
            <div className="w-24 h-24 mb-10 border-4 border-dashed rounded-full animate-spin dark:border-primary">
            </div>
        </div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }


    return children;

};

export default PrivateRouter;
