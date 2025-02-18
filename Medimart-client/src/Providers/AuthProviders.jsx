import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    // const [loggedInUser, setLoggedInUser] = useState(null);

    // Create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login User 
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SignOut User 
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }

    

    // Observer 

    useEffect (()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = {
                    email: currentUser.email
                };

                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            } else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[axiosPublic])

    // Update User profile 
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser , updatedData)
    }

    // const updateUserProfile = (name, photo) =>{
    //     return updateProfile(auth, currentUser, {
    //         displayName: name, photoURL: photo
    //     })
    // }


    const authInfo = {
        user,
        setUser,
        loading,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        // updateUserProfile,
        updateUser,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;