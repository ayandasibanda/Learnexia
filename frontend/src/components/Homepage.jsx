import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import PopularCourses from "./Popular courses";
import Chooseus from "./chooseus";
import Testimonials from "./testimonials";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <PopularCourses />
            <Chooseus />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default Homepage;