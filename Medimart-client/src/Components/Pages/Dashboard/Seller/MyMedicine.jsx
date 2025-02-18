import React, { useContext } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";

const MyMedicine = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { data: medicine = [], error } = useQuery({
        queryKey: ['medicine', user.email ],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/medicine/${user.email}`);
                return res.data;
            } catch (err) {
                console.error("Error fetching medicines: ", err);
                throw err;
            }
        }
    });

   
    

    console.log(medicine)

    // Delete item functionality
    // const handleDeleteItem = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You want to delete this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.delete(`/carts/${id}`).then(res => {
    //                 if (res.data.deletedCount > 0) {
    //                     refetch();
    //                     Swal.fire({
    //                         title: "Deleted!",
    //                         text: "Your file has been deleted.",
    //                         icon: "success"
    //                     });
    //                 }
    //             });
    //         }
    //     });
    // };

    return (
        <div>
            <Helmet>
                <title>Manage - Medicine | MediMart</title>
            </Helmet>
            <div className="w-full lg:w-10/12 lg:ml-60 bg-white rounded-lg shadow-md p-4 mt-4">
                { medicine.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg">
                        You do not have any Medicine..
                    </div>
                ) : (
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="p-2">#</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Company</th>
                                <th className="p-2">Price (per unit)</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicine.map((item, index) => (
                                <tr key={item._id} className="border-b">
                                    <td className="p-2">{index + 1}</td>
                                    <td className="p-2">{item.name}</td>
                                    <td className="p-2">{item.company}</td>
                                    <td className="p-2">$ {item.price}</td>
                                    {/* <td className="p-2">
                                        <button
                                            className="text-red-500 hover:underline"
                                            onClick={() => handleDeleteItem(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MyMedicine;
