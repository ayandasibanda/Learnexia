import React from "react";
import Navbar from "./Navbar";


const AboutUs = () => {
    return (
        <div>
            <Navbar  />
        <div className="bg-gray-50 min-h-screen">

            <section className="bg-indigo-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold">About Learnexia</h1>
                    <p className="text-lg mt-4">
                        Empowering learners across the globe with innovative online learning solutions.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-indigo-600">Our Story</h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        At Learnexia, we believe that learning is a lifelong journey. Since our founding in
                        2024, we've been dedicated to making education accessible to everyone,
                        everywhere. Our platform offers a wide range of courses, expert instructors, and
                        a community of learners committed to personal and professional growth.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-indigo-600">Our Mission</h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        To democratize education by providing a platform where anyone can learn, anytime,
                        anywhere, and at their own pace.
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-indigo-600 mb-4">Accessible</h3>
                            <p className="text-gray-600">
                                We ensure that education is accessible to all, regardless of geographic or financial constraints.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-indigo-600 mb-4">Innovative</h3>
                            <p className="text-gray-600">
                                Leveraging technology to create dynamic learning environments and experiences.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-indigo-600 mb-4">Inclusive</h3>
                            <p className="text-gray-600">
                                Building a community of learners from all walks of life, embracing diversity and inclusion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-indigo-600 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold">Join Us on the Learning Journey</h2>
                    <p className="mt-4 text-lg">
                        Ready to start your educational journey? Explore our courses or get in touch to learn more.
                    </p>
                    <div className="mt-8">
                        <a href="/courses" className="bg-white text-indigo-600 px-8 py-3 rounded-lg shadow-lg font-bold hover:bg-gray-100 transition duration-300">
                            Explore Courses
                        </a>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default AboutUs;
