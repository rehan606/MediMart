import {useContext} from 'react';
import Navbar from '../SharedPages/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../../Firebase/firebase.config';
const auth = getAuth(app)
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { Helmet } from "react-helmet-async";

const Login = () => {
    const {signInUser, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const axiosPublic = useAxiosPublic()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value 
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user);
            
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, {replace: true});
        })

    }

    // Login with Google
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // const user = result.user;
            // setUser(user);

            const userInfo ={
                email: result.user?.email ,
                name: result.user?.displayName,
                photo: result.user?.photoURL,
                role: "user",
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                // setUser(userInfo)
            })
            
            navigate("/");
            
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Congratulations!",
                text: "Google Login Successful!",
                showConfirmButton: false,
                timer: 1500
            });

        })
        .catch((error) => {
            Swal.fire({
            title: "Error",
            text: "Google Login Failed: " + error.message,
            icon: "error",
            });
            setUser(null);
        });
    };
    

    return (
        <div>
            
            <Helmet>
                <title>Login - MediMart</title>
            </Helmet>
            <Navbar></Navbar>

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row max-w-4xl w-full">
                    {/* Left Section - Form */}
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-700 text-center">Login</h2>
                    <p className="text-gray-500 text-center mb-6">
                        Welcome back! Please log in to your account.
                    </p>
                    <form onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                        </div>

                        {/* Login Button */}
                        <button
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#80CDC3] to-[#80CDC3] text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all"
                        >
                        
                        Login
                        </button>
                    </form>

                    {/* Additional Options */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-500">
                            Don't have an account?{" "}
                            <Link to='/register' className="text-blue-500 font-semibold">
                                Sign Up
                            </Link>
                            </p>
                        </div>

                        {/* Google login */}
                        <div>
                            <div className="divider">OR</div>
                            <button
                                onClick={handleGoogleLogin}
                                type="submit"
                                className="w-full bg-red-500  text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all"
                            >
                            Login with Google
                            </button>
                        </div>

                    </div>

                    {/* Right Section - Image */}
                    <div className="hidden lg:block lg:w-1/2 p-20">
                    <img
                        src="https://i.ibb.co.com/sykVDcQ/pngtree-drug-capsule-pill-from-prescription-in-drugstore-pharmacy-for-treatment-health-png-image-124.png"
                        alt="Medicine"
                        className="w-full  object-cover rounded-r-lg"
                    />
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;