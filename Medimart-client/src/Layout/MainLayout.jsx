import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/SharedPages/Footer';
import Navbar from '../Components/Pages/SharedPages/Navbar';

const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;