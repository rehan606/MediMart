import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from './../Components/Pages/SharedPages/LoadingSpinner';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const  location = useLocation()

    if(user){
        return children
    }

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivetRoute;