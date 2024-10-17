import React from "react";
import { Link } from "react-router-dom";

const ChooseUs = () => {
    return (
        <div className="bg-gray-50 py-15 mt-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-indigo-700 mb-4">Why Choose Us</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We offer a unique and enriching learning experience with features designed to help you succeed at your own pace.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-lg mx-auto px-4">
                <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">Learn at Your Own Pace</h3>
                    <p className="text-gray-600">
                        Choose from a variety of courses that fit your schedule and learning preferences.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">Track Your Progress</h3>
                    <p className="text-gray-600">
                        Keep track of your achievements and stay motivated throughout your learning journey.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">Take Quizzes</h3>
                    <p className="text-gray-600">
                        Test your knowledge and reinforce learning through interactive quizzes.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 transition-transform hover:scale-105 duration-300">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">Check Your Leaderboard</h3>
                    <p className="text-gray-600">
                        See how you rank among your peers and challenge yourself to reach the top.
                    </p>
                </div>
            </div>

            <div className="text-center mt-16">
                <button className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-500 transition-colors duration-300">
                <Link to="/Courses"> Start Learning Today </Link>
                </button>
            </div>
        </div>
    );
};

export default ChooseUs;
