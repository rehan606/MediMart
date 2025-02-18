import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUsers, FaDollarSign, FaList, FaCartShopping, FaPlus, FaBarsProgress, FaBars } from 'react-icons/fa6';
import useAdmin from '../../../Hooks/useAdmin';
import useCart from '../../../Hooks/useCart';
import LoadingSpinner from '../SharedPages/LoadingSpinner';
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cart] = useCart();
    const [{ isAdmin, isSeller, isUser }, isRoleLoading] = useAdmin();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    if (isRoleLoading) {
        return <LoadingSpinner> </LoadingSpinner>
    }

    return (
        <div className="flex flex-col bg-gray-100">
            <Helmet>
                <title>Dashboard - MediMart</title>
            </Helmet>
            {/* Navbar */}
            <header className="bg-[#80CDC3] text-white shadow-md py-4 sticky z-50 top-0">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <Link to='/' className="text-2xl font-bold flex items-center">
                    <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/9098/9098442.png" alt="" />
                    MediMart</Link>
                    <button
                        className="lg:hidden bg-white text-[#80CDC3] px-3 py-2 rounded-md shadow focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        {isSidebarOpen ? <FaBars></FaBars> : <FaBars></FaBars>}
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex">
                {/* Sidebar */}
                <aside
                    className={`w-64 bg-white shadow-lg lg:block h-screen z-10  ${
                        isSidebarOpen ? 'block' : 'hidden'
                    }   transition-all duration-300 fixed h-full`}
                >
                    <ul className="p-4 space-y-4">
                        {isAdmin && (
                            <>
                                <li className="bg-blue-600 hover:bg-gray-200 p-2 rounded-lg">
                                    <Link to='/dashboard' className="block">Admin</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                    <FaUsers></FaUsers>
                                    <Link to='/dashboard/manageUser' className="block">Manage User</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                    <FaDollarSign></FaDollarSign>
                                    <Link to='/dashboard/paymentManagement' className="block">Payment Management</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                <FaList></FaList>
                                    <Link to='/dashboard/manageCategory' className="block">Manage Category</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                    <FaBarsProgress></FaBarsProgress>
                                    <Link to='/dashboard/' className="block">Sales Report</Link>
                                </li>
                            </>
                        )}
                        {isSeller && (
                            <>
                                <li className="bg-blue-600 text-white  p-2 rounded-lg text-center" >
                                    
                                    <Link to='/dashboard' className="block">Seller Dashboard</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                    <FaPlus></FaPlus>
                                    <Link to='/dashboard/addMedicine' className="block">Add Medicine</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                    <FaList></FaList>
                                    <Link to='/dashboard/myMedicine' className="block">Manage Medicines</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                    <FaDollarSign></FaDollarSign>
                                    <Link to='/dashboard/paymentHistory' className="block">Payment History</Link>
                                </li>
                            </>
                        )}
                        {isUser && (
                            <>
                                <li className="bg-blue-600 text-white p-2 rounded-lg text-center ">
                                    <Link to='/dashboard' className="block">User Dashboard</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                    <FaCartShopping></FaCartShopping>
                                    <Link to='/dashboard/cart' className="block">My Cart {cart.length}</Link>
                                </li>
                                <li className="hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2 border">
                                    <FaDollarSign></FaDollarSign>
                                    <Link to='/dashboard/paymentHistory' className="block">Payment History</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </aside>

                {/* Overlay for small devices */}
                {/* {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )} */}

                {/* Main Panel */}
                <main className="flex-1 p-6">
                    <div className='h-screen w-11/12 mx-auto'>
                        <Outlet></Outlet>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
