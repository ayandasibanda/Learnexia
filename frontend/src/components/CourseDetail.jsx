import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CourseDetail = () => {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: "Introduction to HTML & CSS",
      description: "Learn the fundamentals of web development with HTML and CSS.",
      level: "Beginner",
      estimatedTime: "3 hours",
      image: "/images/image7.jpg",
      syllabus: [
        "Basic HTML structure and elements",
        "CSS styling and layouts",
        "Building responsive web pages",
        "Interactive elements with forms",
      ],
    },
    {
      id: 2,
      title: "JavaScript Basics",
      description: "Get started with JavaScript programming.",
      level: "Beginner",
      estimatedTime: "4 hours",
      image: "/images/image12.jpg",
      syllabus: [
        "Variables and data types",
        "Control structures and loops",
        "Functions and scope",
        "DOM manipulation",
      ],
    },
    {
      id: 3,
      title: "Advanced JavaScript",
      description: "Deep dive into advanced JavaScript concepts.",
      level: "Advanced",
      estimatedTime: "6 hours",
      image: "/images/profile1.jpg",
      syllabus: [
        "Closures and callbacks",
        "Promises and async/await",
        "Higher-order functions",
        "Event handling in JavaScript",
      ],
    },
  ];

  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div className="text-center text-gray-500 mt-10">Course not found!</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 min-h-screen py-10">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h1 className="text-4xl font-bold shadow-md">{course.title}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xl font-medium text-gray-900">
                <strong>Level:</strong> {course.level}
              </p>
              <p className="text-xl font-medium text-gray-900">
                <strong>Estimated Time:</strong> {course.estimatedTime}
              </p>
            </div>

            <hr className="my-4" />

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {course.description}
            </p>

            <div className="bg-indigo-100 p-4 rounded-lg mb-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                What you'll learn:
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {course.syllabus.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>


            <div className="mt-8 flex justify-center">
              <Link to={`/courses/${course.id}/lessons/1`}
                className="bg-indigo-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-indigo-800 transition-transform transform hover:scale-105"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetail;
