
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext, useState } from "react";
import { FaCartPlus, FaGlobe } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext)
    const [cart] = useCart();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        
        setIsOpen(false); // Close the dropdown after selecting a language
    };

    console.log(user)
    const links = (
        <>
            <li className="font-Oswald uppercase">
                <NavLink to="/">Home</NavLink>
            </li>

            <li className="font-Oswald uppercase">
                <NavLink to="/shop">Shop</NavLink>
            </li>
            
            <li className="font-Oswald uppercase flex items-center">
                <Link to="/dashboard/cart">
                <FaCartPlus />
                <div className="badge ">{cart.length}</div>
                </Link>
            </li>
        </>
    );

    return (
        <div className=" bg-[#005963]  font-Oswald text-white sticky top-0 z-50">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-green-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                        </div>
                        <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-green-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                        {links}
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center gap-2 cursor-pointer">
                        <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/9098/9098442.png" alt="" />
                        <a className=" text-lg  md:text-xl cursor-pointer font-Oswald uppercase font-semibold">
                        MediMart
                    </a>
                    </Link>
                
                </div>

                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                <div className="navbar-end">

                    {/* Language Dropdown  */}
                    <div>
                        <div className="relative mr-2 hidden md:block">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center text-white py-2 px-4 rounded-md hover:bg-gray-700"
                            >
                                <FaGlobe className="mr-2" /> {selectedLanguage}
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white opacity-80 border border-gray-300 rounded-md shadow-lg">
                                    <ul>
                                        <li onClick={() => handleLanguageChange('English')} className="px-4 py-2 text-black hover:bg-blue-500 cursor-pointer">
                                        English
                                        </li>
                                        <li onClick={() => handleLanguageChange('Bangla')} className="px-4 py-2  text-black hover:bg-blue-500  cursor-pointer">
                                        Bangla
                                        </li>
                                        <li onClick={() => handleLanguageChange('Spanish')} className="px-4 py-2 text-black hover:bg-blue-500  cursor-pointer">
                                        Spanish
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>


                    
                    {user && user?.email ? (
                        <div className="dropdown dropdown-end flex items-center gap-3">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn  btn-circle avatar "
                        >
                            <div className="w-10 rounded-full border-2 border-green-600">
                            <img
                                alt="User Profile"
                                // src={user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                                src={
                                user?.photoURL
                                    ? user.photoURL
                                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                }
                                className="object-cover w-full h-full"
                            />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-56 w-52 p-2 shadow"
                        >
                            <div className=" border-b px-4 ">
                            <div>
                                <h2 className="text-orange-400 pt-3 font-bold rounded-lg text-center text-md  ">
                                {user.displayName}
                                </h2>
                                <h2 className="text-orange-400   rounded-lg text-center text-xs mb-3  ">
                                {user.email}
                                </h2>
                            </div>
                            </div>
                            <li>
                            <Link
                                to="/dashboard"
                                className="justify-between text-green-500  font-semibold"
                            >
                                Dashboard
                                
                            </Link>
                            </li>

                            <li className="font-semibold text-blue-500">
                            <Link
                                to="/updateProfile"
                                className="justify-between text-green-500  font-semibold"
                                >
                                Update Prifile
                                
                            </Link>
                            </li>

                            

                            <li
                            onClick={() => {
                                if (window.confirm("Are you sure you want to log out?")) {
                                signOutUser();
                                }
                            }}
                            className="text-red-500 font-semibold"
                            >
                            <Link to="/">Logout</Link>
                            </li>
                        </ul>
                        </div>
                    ) : (
                        <Link
                        to="/login"
                        className="btn  py-2 px-4 md:px-7 hover:bg-gray-700 text-[#80CDC3]  font-Oswald uppercase"
                    >
                        Join US
                    </Link>
                    )}
                
                </div>
            </div>
        </div>
    );
};

export default Navbar;
