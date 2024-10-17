import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div 
            className="flex flex-col md:flex-row gap-16 items-center rounded-lg p-8 md:p-16 shadow-lg"
            style={{
                backgroundImage: "url('images/image13.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "500px",
            }}
        >
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full md:w-1/2 mt-2">
                <h1 className="font-bold text-5xl text-indigo-600 font-sans leading-tight">
                    Discover and master new skills today.
                </h1>
                <p className="text-lg text-gray-600 mt-4 font-sans">
                    Explore a wide range of courses tailored to your interests. Whether you're advancing your career or learning something new, start your journey with us today.
                </p>
                <button className="mt-6 inline-flex items-center justify-center transition-transform transform hover:scale-105 bg-indigo-600 text-white rounded-full px-8 py-3 shadow-lg hover:bg-indigo-700 transition duration-300">
                    <Link to="/Courses"> Explore Now</Link>
                </button>
                <p className="text-sm text-gray-500 mt-4">Join now and explore free courses!</p>
            </div>
        </div>
    );
};

export default Hero;
