import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/signup', formData);
      
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
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Sign Up</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
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
