import React, { useContext } from 'react';
import Navbar from '../SharedPages/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../../Firebase/firebase.config';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { Helmet } from "react-helmet-async";


const auth = getAuth(app);

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, setUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            console.log(data);

            // Step 1: Handle file upload to IMGBB
            const file = data.photo[0];
            const formData = new FormData();
            formData.append('image', file);

            const imgbbResponse = await axiosPublic.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
                formData
            );

            if (!imgbbResponse?.data?.success) {
                throw new Error('Image upload failed');
            }

            const imageUrl = imgbbResponse.data.data.url;
            console.log('Image uploaded:', imageUrl);

            // Step 2: Create user with Firebase Authentication
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log('Firebase user created:', loggedUser);

            // Step 3: Update Firebase user profile
            await updateUser({ displayName: data.name, photoURL: imageUrl });

            // Step 4: Save user info to your server
            const userInfo = {
                name: data.name,
                email: data.email,
                role: data.role,
                photo: imageUrl
            };

            const res = await axiosPublic.post('/users', userInfo);

            if (res.data.insertedId) {

                navigate('/');

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Register Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Register failed: " + err.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    // Login with Google
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                    role: "user",
                };

                await axiosPublic.post('/users', userInfo);

                navigate('/');

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
                <title>Register - MediMart</title>
            </Helmet>
            <Navbar></Navbar>

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row max-w-4xl w-full items-center">
                    <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-700 text-center">Register</h2>
                        <p className="text-gray-500 text-center mb-6">Create your account to explore more!</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Name Input */}
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", { required: true })}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>

                            {/* Image Upload */}
                            <div className="mb-4">
                                <label htmlFor="photo" className="block text-gray-600 mb-2">Photo</label>
                                <input
                                    type="file"
                                    id="photo"
                                    accept="image/*"
                                    {...register("photo", { required: true })}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors.photo && <span className='text-red-500'>Photo is required</span>}
                            </div>

                            {/* Role Selection */}
                            <div className="mb-4">
                                <label htmlFor="role" className="block text-gray-600 mb-2">Role</label>
                                <select
                                    id="role"
                                    {...register("role", { required: true })}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select Role</option>
                                    <option value="user">User</option>
                                    <option value="seller">Seller</option>
                                </select>
                                {errors.role && <span className='text-red-500'>Role is required</span>}
                            </div>

                            {/* Email Input */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>

                            {/* Password Input */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                                    })}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="******"
                                />
                                {errors.password && <span className='text-red-500'>Password is required</span>}
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#80CDC3] to-[#80CDC3] text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all"
                            >
                                Register
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-gray-500">
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-500 font-semibold">Login</Link>
                            </p>
                        </div>

                        <div className="divider">OR</div>
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all"
                        >
                            Register with Google
                        </button>
                    </div>

                    {/* Right Section - Image */}
                    <div className="hidden lg:block lg:w-1/2 p-20">
                        <img
                            src="https://i.ibb.co.com/sykVDcQ/pngtree-drug-capsule-pill-from-prescription-in-drugstore-pharmacy-for-treatment-health-png-image-124.png"
                            alt="Medicine"
                            className="w-full object-cover rounded-r-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
