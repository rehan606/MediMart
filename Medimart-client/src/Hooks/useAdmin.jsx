import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    // const {user} = useContext(AuthContext)
    // const axiosSecure = useAxiosSecure()

    // const {data: isAdmin, isPending: isAdminLoading } = useQuery({
    //     queryKey: [user?.email, 'isAdmin'],
    //     queryFn: async () =>{
    //         const res = await axiosSecure.get(`/users/admin/${user.email}`)
    //         return res.data?.admin;
    //     }
    // })
    // return [isAdmin, isAdminLoading]


    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: roleData = {}, isLoading: isRoleLoading, error } = useQuery({
        queryKey: [user?.email, 'userRole'],
        queryFn: async () => {
            if (!user?.email) return { role: 'user', isAdmin: false, isSeller: false }; // ডিফল্ট মান
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            return res.data; // ব্যাকএন্ড থেকে প্রাপ্ত ডেটা
        },
        enabled: !!user?.email, // ইমেইল থাকলেই API কল হবে
        retry: false,
        staleTime: 5 * 60 * 1000, // ডেটা ৫ মিনিট পর্যন্ত ক্যাশে থাকবে
    });

    if (error) {
        console.error("Error fetching user role:", error);
    }

    return [roleData, isRoleLoading];

};

export default useAdmin;