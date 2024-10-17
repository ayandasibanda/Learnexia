import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Courses = () => {
    const courses = [
        { id: 1, title: "Introduction to HTML & CSS", description: "Learn the fundamentals of web development with HTML and CSS to create basic web pages.", level: "Beginner", estimatedTime: "3 hours", image: "images/image7.jpg" },
        { id: 2, title: "JavaScript Basics", description: "Get started with JavaScript programming and learn to make your web pages interactive.", level: "Beginner", estimatedTime: "4 hours", image: "images/image12.jpg" },
        { id: 3, title: "Advanced JavaScript", description: "Deep dive into advanced JavaScript concepts such as closures, callbacks, and promises.", level: "Advanced", estimatedTime: "6 hours", image: "images/profile1.jpg" },
        { id: 4, title: "React for Beginners", description: "Learn how to build dynamic user interfaces using React, one of the most popular front-end frameworks.", level: "Beginner", estimatedTime: "5 hours", image: "images/image6.jpg" },
        { id: 5, title: "React Advanced", description: "Master complex React patterns like hooks, context, and state management with Redux.", level: "Advanced", estimatedTime: "7 hours", image: "images/image14.jpg" },
        { id: 6, title: "Node.js Basics", description: "Learn to build server-side applications using Node.js and JavaScript.", level: "Intermediate", estimatedTime: "6 hours", image: "images/image10.jpg" },
    ];

    const [searchCourse, setSearchCourse] = useState("");

    const handleChange = (e) => {
        setSearchCourse(e.target.value);
    };

    const filteredcourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchCourse.toLowerCase()) ||
        course.description.toLowerCase().includes(searchCourse.toLowerCase()) ||
        course.level.toLowerCase().includes(searchCourse.toLowerCase())
    );

    return (
        <div className="bg-gray-50 min-h-screen">
        <Navbar />
          <div className="max-w-7xl mx-auto">
            <div className="header flex justify-between py-6 px-6 bg-gray-100 rounded-lg mt-4 shadow-md">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-indigo-600">Explore our Courses</h1>
                    <p className="text-lg text-gray-500 mt-1">Choose from a variety of courses to enhance your skills and grow your career.</p>
                </div>
                <div className="relative">
                    <input
                    type="text"
                    className="rounded-full py-2 px-4 w-64 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Search course"
                    value={searchCourse}
                    onChange={handleChange}
                    />
                    <i className="fa fa-search absolute top-3 right-4 text-gray-500"></i>
                </div>
            </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-6">
            {filteredcourses.length > 0 ? (
                filteredcourses.map((course) => (
                <div
                    key={course.id}
                    className="flex flex-col rounded-xl bg-white shadow-xl overflow-hidden w-full hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                >
                    <div className="relative h-48">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="p-4">
                        <h2 className="text-lg font-bold text-indigo-600">{course.title}</h2>
                        <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className={`text-xs font-medium py-1 px-2 rounded-full ${
                            course.level === 'Beginner'
                                ? 'bg-green-100 text-green-600'
                                : course.level === 'Intermediate'
                                ? 'bg-yellow-100 text-yellow-600'
                                : 'bg-red-100 text-red-600'
                            }`}>
                            {course.level}
                            </span>
                            <span className="text-gray-700 text-sm rounded-full bg-gray-200 px-2">{course.estimatedTime}</span>
                        </div>
                    </div>

                    <Link to={`/Course/${course.id}`} className="w-32 self-center">
                        <button className="mt-4 mb-4 w-32 self-center text-white bg-indigo-600 rounded-full py-2 hover:bg-indigo-500 transition-all">
                            Enroll Now
                        </button>
                    </Link>
                </div>
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500">No courses found.</div>
            )}
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default Courses;
