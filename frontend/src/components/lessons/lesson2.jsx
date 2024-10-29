import React from "react";
import { FaLaptopCode, FaPaintBrush, FaCss3Alt, FaFileCode, FaRegSmile, FaLightbulb, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const Lesson2 = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl bg-indigo-500 px-3 py-1 rounded text-white mb-7 inline-block">LESSON 2</h2>
      
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Welcome to CSS: Cascading Style Sheets!</h1>
      <p className="text-lg mb-6">
        Are you ready to add some style to your web pages? In this lesson, we’ll explore CSS and how it transforms plain HTML into visually appealing designs. Let’s get started! 🚀
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaCss3Alt className="mr-2" /> What is CSS?
      </h2>
      <p className="mb-6">
        Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It allows you to control the layout, colors, fonts, and overall appearance of your web pages. 🌈
      </p>
      <p className="mb-6">
        With CSS, you can separate content from design, making it easier to maintain and update your website.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaFileCode className="mr-2" /> Understanding CSS Syntax
      </h2>
      <p className="mb-4">CSS is made up of rulesets that consist of selectors and declarations. Here’s a basic structure:</p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
        <pre className="text-sm text-gray-700 overflow-auto">
          {`selector {
  property: value;
}

body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
}`}
        </pre>
      </div>
      <p className="mb-6">
        <strong>Selector:</strong> <code>body</code> - Targets the entire body of the HTML document. <br />
        <strong>Property:</strong> <code>background-color</code> - Specifies the background color. <br />
        <strong>Value:</strong> <code>lightblue</code> - The color assigned to the background.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaCheckCircle className="mr-2" /> Why Use CSS?
      </h2>
      <p className="mb-6">CSS offers numerous benefits:</p>
      <ul className="mb-6 list-disc pl-8">
        <li>Separation of Content and Style: Makes your HTML cleaner and easier to read.</li>
        <li>Consistency: Apply the same styles across multiple pages easily.</li>
        <li>Design: Create layouts that adapt to different screen sizes.</li>
        <li>Over Layout: Use properties like margin, padding, and flexbox to arrange elements precisely.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaLightbulb className="mr-2" /> Fun Fact!
      </h2>
      <p className="mb-6">Did you know? CSS was created by Håkon Wium Lie and first introduced in 1996. It has evolved over the years and is now an essential skill for web developers! 🎉</p>

      <h1 className="text-3xl font-bold text-blue-700 mb-6 mt-8">CSS Activity: Style Your Own Web Page 🎨</h1>
      
      <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Objective:</h2>
      <p className="mb-4">Create a simple HTML webpage and apply your own CSS styles to it.</p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Instructions:</h2>
      <div className="instructions">
        <p className="flex items-center mb-4">
          <FaFileCode className="text-indigo-500 mr-2" />
          <span>Set Up Your Working Environment:</span>
        </p>
        <ul className="list-disc pl-8 mb-6">
          <li>Create a new folder on your computer for this activity.</li>
          <li>Inside the folder, create two files: <strong>index.html</strong> and <strong>styles.css</strong>.</li>
        </ul>

        <p className="flex items-center mb-4">
          <FaRegSmile className="text-indigo-500 mr-2" />
          <span>Write Your HTML:</span>
        </p>
        <ul className="list-disc pl-8 mb-6">
          <li>A header with a title.</li>
          <li>A few sections about yourself or your favorite topics.</li>
          <li>A footer with a thank-you message or a quote.</li>
        </ul>

        <p className="flex items-center mb-4">
          <FaPaintBrush className="text-indigo-500 mr-2" />
          <span>Style Your Page with CSS:</span>
        </p>
        <ul className="list-disc pl-8 mb-6">
          <li>Change the background color of the page.</li>
          <li>Modify text colors for headers, sections, and the footer.</li>
          <li>Try different font styles and sizes.</li>
          <li>Add spacing (margins and padding) to elements.</li>
          <li>Incorporate borders or shadows to sections or list items.</li>
          <li>Implement hover effects for links or list items.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Reflection:</h2>
      <p className="mb-4">Write down three things you learned about CSS through this activity. Think about how you might apply these styles in future projects.</p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Additional Resources:</h2>
      <p className="mb-4">
        Check out these websites for inspiration and tips:
        <ul className="list-disc pl-8 mb-4">
          <li><a href="https://www.w3schools.com/css/" className="text-indigo-600 underline">W3Schools CSS Tutorial</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="text-indigo-600 underline">CSS Documentation at MDN Web Docs</a></li>
          <li><a href="https://css-tricks.com/" className="text-indigo-600 underline">CSS-Tricks for Tips and Tricks</a></li>
        </ul>
      </p>

      <p className="text-lg mb-4">
        🎉 Excited to learn more? Click below to move on to the next lesson!
      </p>
    </div>
  );
};

export default Lesson2;
