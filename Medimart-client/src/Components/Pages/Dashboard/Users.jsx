import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaUsers } from 'react-icons/fa6';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Helmet } from "react-helmet-async";

const Users = () => {
    const axiosSecure = useAxiosSecure();
    

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'The user has been deleted.',
                            icon: 'success'
                        });
                    }
                });
            }
        });
    };

    const handleRoleChange = (user, newRole) => {
        axiosSecure.patch(`/users/role/${user._id}`, { role: newRole })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch(); // Refresh user list
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is now ${newRole}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    Swal.fire("No change", "Role is already set to the selected value", "info");
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire("Error", "Failed to update user role", "error");
            });
    };
    
    
    

    return (
        <div>
            <Helmet>
                <title>Users - MediMart</title>
            </Helmet>
            {/* User List */}
            <div className="w-full  lg:w-10/12 lg:ml-60 mt-6 bg-white shadow rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4">Total Users: {users.length}</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id} className="border-b hover:bg-gray-100">
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">
                                        
                                    <select
                                        value={user.role}
                                        onChange={(e) => handleRoleChange(user, e.target.value)}
                                        // disabled={user.role === 'admin'} // Prevent admin role change if needed
                                        className="border px-2 py-1 rounded"
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="seller">Seller</option>
                                        <option value="user">User</option>
                                    </select>
  
                                    
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            onClick={() => handleDeleteUser(user)}
                                            className="text-red-500 hover:underline ml-2"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
