import React, { useState } from 'react';
import Navbar from '../SharedPages/Navbar';

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated profile:', formData);
    // Submit logic here (e.g., API call)
  };

  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="block text-gray-600 mb-1">Full Name</label>
                    <input
                    type="text"
                    name="name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-600 mb-1">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-gray-600 mb-1">Password</label>
                    <input
                    type="password"
                    name="password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>

                {/* Profile Image */}
                <div>
                    <label className="block text-gray-600 mb-1">Profile Image</label>
                    <input
                    type="file"
                    name="profileImage"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
                >
                    Update Profile
                </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default UpdateProfile;
