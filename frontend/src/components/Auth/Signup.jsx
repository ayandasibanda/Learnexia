import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    country: '',
    category: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const url = 'http://localhost:5000/api/v1';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/users`, formData);
      
      if (response.status === 200) {
        console.log('Registration successful', response.data);
        navigate('/login');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : "Signup failed");
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 m-20 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Sign Up</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstname" className="text-gray-700 font-medium">First Name</label>
              <input
                type="text"
                id="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastname" className="text-gray-700 font-medium">Last Name</label>
              <input
                type="text"
                id="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="phone_number" className="text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="address" className="text-gray-700 font-medium">Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="country" className="text-gray-700 font-medium">Country</label>
            <input
              type="text"
              id="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label htmlFor="category" className="text-gray-700 font-medium">Category</label>
            <input
              type="text"
              id="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="text-center">
            <button
              type="submit"
              className="p-6 bg-green-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-green-500 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">Already have an account? <a href="/login" className="text-green-600 font-semibold">Log In</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
