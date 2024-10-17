import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="bg-indigo-700 text-white py-10">
            <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
                
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">Learnexia</h2>
                    <p className="text-gray-400 mt-2">Empowering learners worldwide.</p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:flex md:space-x-10">
                    <a href="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</a>
                    <a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                    <a href="/support" className="text-gray-400 hover:text-white transition-colors">Support</a>
                    <a href="/About" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                    <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                </div>

                <div className="flex space-x-6 mt-6 md:mt-0">
                    <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-8 border-t border-gray-800 pt-6 text-center">
                <p className="text-gray-300">Made with ❤️ in Africa</p>
                <p className="text-gray-400 text-sm mt-2">&copy; {new Date().getFullYear()} Learnexia. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
