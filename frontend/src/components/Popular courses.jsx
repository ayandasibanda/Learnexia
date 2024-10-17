import React from "react";
import { Link } from "react-router-dom";

const PopularCourses = () => {
    const courses = [
        { id: 1, title: "Introduction to HTML & CSS", description: "Learn the fundamentals of web development with HTML and CSS to create basic web pages.", level: "Beginner", estimatedTime: "3 hours", image: "images/image7.jpg" },
        { id: 2, title: "JavaScript Basics", description: "Get started with JavaScript programming and learn to make your web pages interactive.", level: "Beginner", estimatedTime: "4 hours", image: "images/image12.jpg" },
        { id: 3, title: "Advanced JavaScript", description: "Deep dive into advanced JavaScript concepts such as closures, callbacks, and promises.", level: "Advanced", estimatedTime: "6 hours", image: "images/profile1.jpg" },
        { id: 4, title: "React for Beginners", description: "Learn how to build dynamic user interfaces using React, one of the most popular front-end frameworks.", level: "Beginner", estimatedTime: "5 hours", image: "images/image6.jpg" },
        { id: 5, title: "React Advanced", description: "Master complex React patterns like hooks, context, and state management with Redux.", level: "Advanced", estimatedTime: "7 hours", image: "images/image14.jpg" },
        { id: 6, title: "Node.js Basics", description: "Learn to build server-side applications using Node.js and JavaScript.", level: "Intermediate", estimatedTime: "6 hours", image: "images/image10.jpg" },
    ];

    return (
        <div className="bg-gray-50">
            <div className="text-3xl font-bold text-center mb-6 mt-20 text-indigo-600">Our Popular Courses</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-6">
                {courses.map((course) => (
                    <div key={course.id} className="flex flex-col rounded-xl bg-white shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
                        <div className="relative h-48">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="p-4 flex flex-col justify-between h-full">
                            <div>
                                <h1 className="text-lg font-bold">{course.title}</h1>
                                <p className="text-sm text-gray-600">{course.description}</p>
                                <div className="flex flex-row pt-4 justify-between">
                                    <span className={`text-xs font-medium py-1 px-2 rounded-full 
                                        ${course.level === "Beginner" ? "bg-green-100 text-green-600" :
                                          course.level === "Intermediate" ? "bg-yellow-100 text-yellow-600" :
                                          course.level === "Advanced" ? "bg-red-100 text-red-600" : ""}`}>
                                        {course.level}
                                    </span>
                                    <p className="text-sm text-gray-500 bg-gray-200 rounded-full px-2">{course.estimatedTime}</p>
                                </div>
                            </div>
                            <Link to={`/Course/${course.id}`} className="w-32 self-center">
                                <button className="mt-4 mb-4 w-32 self-center text-white bg-indigo-600 rounded-full py-2 hover:bg-indigo-500 transition-all">
                                    Enroll Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;
