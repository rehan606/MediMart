import React from 'react';
import { Helmet } from "react-helmet-async";

const AdminHome = () => {
    return (
        <div className='w-full  lg:w-10/12 lg:ml-60'>
            <Helmet>
                <title>Dashboard | MediMart</title>
            </Helmet>
            <div className=''>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h3 className="text-lg font-semibold">Total Sales</h3>
                        <p className="text-2xl font-bold mt-2">$12,345</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h3 className="text-lg font-semibold">New Orders</h3>
                        <p className="text-2xl font-bold mt-2">34</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h3 className="text-lg font-semibold">Stock Value</h3>
                        <p className="text-2xl font-bold mt-2">$8,720</p>
                    </div>
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h3 className="text-lg font-semibold">Customers</h3>
                        <p className="text-2xl font-bold mt-2">1,254</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;