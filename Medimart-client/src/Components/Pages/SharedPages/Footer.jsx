import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-200 ">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8  py-20">
                {/* Left Section */}
                <div className="">
                <Link to='/' className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/9098/9098442.png" alt="" />
                    MediMart
                </Link>
                <p className="mt-4 text-gray-600">
                    We believe it has the power to do amazing things.
                </p>
                <p className="mt-2 text-gray-600">Interested in working with us?</p>
                <a href="mailto:info@example.com" className="text-[#00ACB1] font-bold">
                    info@example.com
                </a>
                <div className="flex mt-4 space-x-4">
                    <a href="#" className="text-gray-500 hover:text-[#00ACB1]">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-[#00ACB1]">
                    <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-[#00ACB1]">
                    <i className="fab fa-vimeo"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-[#00ACB1]">
                    <i className="fab fa-pinterest"></i>
                    </a>
                </div>
                </div>
        
                {/* Quick Links */}
                <div>
                <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                    <li><a href="#" className="hover:text-[#00ACB1]">Services</a></li>
                    <li><a href="#" className="hover:text-[#00ACB1]">About Company</a></li>
                    <li><a href="#" className="hover:text-[#00ACB1]">Latest News</a></li>
                    <li><a href="#" className="hover:text-[#00ACB1]">Team Member</a></li>
                    <li><a href="#" className="hover:text-[#00ACB1]">Testimonials</a></li>
                </ul>
                </div>
        
                {/* My Account */}
                <div>
                <h3 className="text-lg font-bold text-gray-800">My Account</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                    <li><a href="#" className="hover:text-[#00ACB1]">My Profile</a></li>
                    <li><a href="#" className="hover:text-[#00ACB1]">My Order History</a></li>
                    <li><a href="#" className="hover:text-[#00ACB1]">My Wish List</a></li>
                    <li><a href="#" className="hover:text-[#00ACB1]">Order Tracking</a></li>
                    <li><a href="#" className="hover:text-[#00ACB1]">Shopping Cart</a></li>
                </ul>
                </div>
    
                {/* Address & Install App */}
                <div>
                <h3 className="text-lg font-bold text-gray-800">Address:</h3>
                <p className="mt-4 text-gray-600">
                    570 8th Ave, New York, NY
                    <br />
                    <span className="text-[#00ACB1]">10018 United States</span>
                </p>
                <p className="mt-2 text-gray-600">
                    <span className="font-bold">Hours:</span>
                    <br />
                    9:30am - 6:30pm
                    <br />
                    Monday to Friday
                </p>
                
                </div>
    
                <div>
                <h3 className="text-lg font-bold text-gray-800 mt-6">Install App</h3>
                <div className="flex mt-4 space-x-4">
                    <img
                    src="https://foodking-react.vercel.app/assets/img/app-store.png"
                    alt="App Store"
                    className="w-24"
                    />
                    <img
                    src="https://foodking-react.vercel.app/assets/img/google-play.png"
                    alt="Google Play"
                    className="w-24"
                    />
                </div>
                <p className="mt-4 text-gray-600">
                    24/7 Support Center:
                    <br />
                    <span className="text-[#00ACB1] font-bold">+880 1822 1822 07</span>
                </p>
                </div>
        
                
            </div>
            <div className='bg-[#005963] mt-6 '>
                <div className="w-11/12 mx-auto text-center ">
                    <p className='text-white py-6 text-md'>© Copyright <span className='text-yellow-200 font-bold'> {new Date().getFullYear()} </span> MediMart . All Rights Reserved.</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;