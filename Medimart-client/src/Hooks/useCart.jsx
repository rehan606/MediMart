import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProviders';

const useCart = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const {data: cart = [], refetch} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }

    })

    return [ cart, refetch ]
};

export default useCart;