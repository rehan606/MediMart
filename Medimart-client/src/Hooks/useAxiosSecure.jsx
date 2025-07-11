import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const axiosSecure = axios.create({
    baseURL: 'https://medimart-server-seven.vercel.app'
    // baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    const navigate = useNavigate()
    const {signOutUser} = useContext(AuthContext)

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stop interceptor', token);
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status
        // console.log('status error in the interceptors ', status);
        if(status === 401 || status === 403){
            await signOutUser();
            navigate('/login')
        }
        
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;