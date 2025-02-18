import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from "react-helmet-async";


const ManageCategory = () => {
    const axiosSecure = useAxiosSecure();

    // Fetch categories using React Query
    const { data: categories = [], isLoading, isError, error } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosSecure.get('/category');
            return res.data;
        },
    });

    // Remove duplicate categories
    const uniqueCategories = [...new Set(categories.map((category) => category.category))];

    // Show loading spinner or error message
    if (isLoading) {
        return <p className="text-center text-blue-500">Loading categories...</p>;
    }

    if (isError) {
        return <p className="text-center text-red-500">Error: {error.message}</p>;
    }

    return (
        <div>
            <Helmet>
                <title>Category - MediMart</title>
            </Helmet>
            <div className="w-full lg:w-10/12 lg:ml-60">
                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="text-3xl font-bold text-gray-800">Manage Categories</h1>
                    <p className="mt-2 text-gray-600">View and manage all available categories</p>
                </div>

                {/* Total Categories */}
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                    Total Categories: {uniqueCategories.length}
                </h3>

                {/* Categories List */}
                <div>
                    {uniqueCategories.length > 0 ? (
                        uniqueCategories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 shadow rounded-lg mt-4"
                            >
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {category}
                                </h3>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No categories available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ManageCategory;
