import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../configs/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // sign in with google Provider
    const googleProviderLogin = provider => {
        return signInWithPopup(auth, provider);
    }




    const authInfo = {
        user,
        loading,
        googleProviderLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
