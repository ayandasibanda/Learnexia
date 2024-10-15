import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await axios.post('/api/login', formData);
      
      if (response.status === 200) {
        console.log('Login successful', response.data);
        navigate('/Homepage');
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : "Login failed");
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Learnexia</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="p-6 bg-indigo-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-indigo-500 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account? <a href="/signup" className="text-indigo-600 font-semibold">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;