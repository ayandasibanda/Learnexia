import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user-profile");
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data.");
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader border-t-4 border-indigo-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex justify-center items-center p-8">
        <div className="bg-white shadow-xl rounded-3xl p-8 max-w-4xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-shrink-0">
              <img
                src={user.profilePicture || "images/default-profile.jpg"}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-gray-200 shadow-md"
              />
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-blue-800">{user.name || "User"}</h1>
              <p className="text-gray-500 mb-4">{user.email || "user@example.com"}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-purple-100 rounded-lg shadow-sm text-center">
              <h2 className="text-lg font-semibold text-purple-700">Courses Enrolled</h2>
              <p className="text-3xl font-bold text-purple-800 mt-2">{user.coursesEnrolled || 0}</p>
            </div>

            <div className="p-6 bg-red-100 rounded-lg shadow-sm text-center">
              <h2 className="text-lg font-semibold text-red-700">Courses Completed</h2>
              <p className="text-3xl font-bold text-red-800 mt-2">{user.coursesCompleted || 0}</p>
            </div>

            <div className="p-6 bg-blue-100 rounded-lg shadow-sm text-center">
              <h2 className="text-lg font-semibold text-blue-700">Quizzes Taken</h2>
              <p className="text-3xl font-bold text-blue-800 mt-2">{user.quizzesTaken || 0}</p>
            </div>

            <div className="p-6 bg-green-100 rounded-lg shadow-sm text-center">
              <h2 className="text-lg font-semibold text-green-700">Highest Score</h2>
              <p className="text-3xl font-bold text-green-800 mt-2">{user.highestScore ? `${user.highestScore}%` : "N/A"}</p>
            </div>

            <div className="p-6 bg-yellow-100 rounded-lg shadow-sm text-center">
              <h2 className="text-lg font-semibold text-yellow-700">Average Score</h2>
              <p className="text-3xl font-bold text-yellow-800 mt-2">{user.averageScore ? `${user.averageScore}%` : "N/A"}</p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-500 transition duration-300">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
