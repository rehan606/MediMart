import React, { useContext } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from "react-helmet-async";

const PaymentManagement = () => {
    const { user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email ] ,

        queryFn: async () =>{
            const res = await axiosSecure.get('/payments')
            return res.data;
        }
    })
    // console.log(payments.length)

    return (
        <div>
            <Helmet>
                <title>Payment - Management | MediMart</title>
            </Helmet>
            <div className='w-full  lg:w-10/12 lg:ml-60'>
                <div className="relative z-2 text-center mb-5">
                    <h1 className="text-3xl font-bold">All Payments History  </h1>
                    <p className="mt-2">Successfully payment List</p>
                </div>
                <h3>Total Payment History : {payments.length} </h3>



                <div className="w-full mx-auto bg-white rounded-lg shadow-md p-4 mt-4">
                    <table className="w-full text-left border-collapse">
                        {/* head */}
                        <thead >
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="p-2">#</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Price</th>
                                <th className="p-2">TransactionID</th>
                                <th className="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                payments.map((payment, index )=> <tr key={payment._id} className="border-b">
                                <th className="p-2">{index + 1}</th>
                                <td className="p-2">{payment.email}</td>
                                <td className="p-2">{payment.price}</td>
                                <td className="p-2">{payment.transectionId}</td>
                                <td className="p-2">{payment.status}</td>
                            </tr>
                            )}
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentManagement;