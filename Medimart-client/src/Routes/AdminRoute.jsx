import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <div className='flex justify-center items-center'><span className="loading loading-ring loading-lg"></span></div>
    }
    if(user && isAdmin){
        return children;
    }


    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;