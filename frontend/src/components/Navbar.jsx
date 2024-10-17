import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="mx-auto flex justify-between items-center px-6">

        <h1 className="text-3xl font-bold text-indigo-600">
          Learnexia
        </h1>

        <nav className="flex space-x-8 font-bold">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">
            Home
          </Link>
          
          <Link to="/Courses" className="text-gray-700 hover:text-indigo-600 transition duration-300">
            Courses
          </Link>

          <Link to="/Leaderboard" className="text-gray-700 hover:text-indigo-600 transition duration-300">
            Leaderboard
          </Link>

          <Link to="/About" className="text-gray-700 hover:text-indigo-600 transition duration-300">
            About
          </Link>

        </nav>

        <div>
          <Link to="/Profile" className=" text-white py-2 px-4 rounded-full">
          <svg width="26px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" stroke="#0c0c0d" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.008"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#4518af"></path></g></svg>
          </Link>
        </div>
      </div>
      

    </header>
  );
};

export default Navbar;
