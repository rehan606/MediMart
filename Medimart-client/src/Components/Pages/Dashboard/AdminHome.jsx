import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import DashboardChart from './DashboartChart';
import LineChartt from './Chart/LineChart';
import AriaChart from './Chart/AriaChart';


const AdminHome = () => {



    // const [totalUsers, setTotalUsers] = useState(0);

    // useEffect(() => {
    //     axios.get('/total-user')
    //     .then(res => {
    //         setTotalUsers(res.data.totalUsers);
    //     })
    //     .catch(err => {
    //         console.error('Failed to load user count:', err);
    //     });
    // }, []);

    
    
    return (
        <div className='w-full  lg:w-10/12 lg:ml-60 bg-gray-100 p-8 rounded-md'>
            <Helmet>
                <title>Dashboard | MediMart</title>
            </Helmet>
            <div className=''>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-[#00acb1] p-4 shadow rounded-lg">
                        <h3 className="text-lg font-bold">Total Sales</h3>
                        <p className="text-2xl text-white font-bold mt-2">50000</p>
                    </div>
                    <div className="bg-[#00acb1] p-4 shadow rounded-lg">
                        <h3 className="text-lg font-bold">New Orders</h3>
                        <p className="text-2xl text-white font-bold mt-2">12</p>
                    </div>
                    <div className="bg-[#00acb1] p-4 shadow rounded-lg">
                        <h3 className="text-lg font-bold">Stock Value</h3>
                        <p className="text-2xl text-white font-bold mt-2">85000</p>
                    </div>
                    <div className="bg-[#00acb1] p-4 shadow rounded-lg">
                        <h2 className="text-lg font-bold"> Total Users</h2>
                        <p className="text-2xl text-white font-extrabold mt-2">7</p>
                    </div>
                </div>

                <div className='space-y-6 flex flex-col md:flex-row items-center justify-between'>
                    <LineChartt/>
                    <AriaChart/>
                </div>
                


                
                {/* <DashboardChart /> */}
            </div>
        </div>
    );
};

export default AdminHome;