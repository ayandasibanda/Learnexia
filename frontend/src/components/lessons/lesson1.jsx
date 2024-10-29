import React from "react";
import { FaLaptopCode, FaFolderOpen, FaHtml5, FaTags, FaSave, FaCode, FaVideo, FaBookOpen, FaLightbulb, FaFileCode, FaRegSmile, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const Lesson1 = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl bg-indigo-500 px-2 py-1 rounded text-white inline-block mb-7">LESSON 1</h2>
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        Welcome to HTML for Beginners!
      </h1>

      <p className="text-lg mb-6">
        In this lesson, you’ll learn how to set up your working environment and start coding
        in HTML! Whether you're completely new to coding or just brushing up, you're in the right place. Let's make this fun! 🎉
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaLaptopCode className="mr-2" /> Setting Up Your Coding Environment
      </h2>
      <ul className="mb-6">
        <li className="mb-2">
          <FaFolderOpen className="text-indigo-600 mr-2 inline-block" />
          <strong>Install a Code Editor:</strong> We recommend Visual Studio Code (VS Code), which is free and popular.
        </li>
        <li className="mb-2">
          <FaSave className="text-indigo-600 mr-2 inline-block" />
          <strong>Download and Install:</strong> After downloading, open it up, and you're ready to go!
        </li>
        <li className="mb-2">
          <FaFolderOpen className="text-indigo-600 mr-2 inline-block" />
          <strong>Create Your First Project Folder:</strong> Make a folder called <code>MyFirstWebsite</code>.
        </li>
        <li className="mb-2">
          <FaHtml5 className="text-indigo-600 mr-2 inline-block" />
          <strong>Open Your Project in VS Code:</strong> Select your <code>MyFirstWebsite</code> folder in VS Code.
        </li>
        <li className="mb-2">
          <FaTags className="text-indigo-600 mr-2 inline-block" />
          <strong>Create Your First HTML File:</strong> Create <code>index.html</code>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaHtml5 className="mr-2" /> What is HTML?
      </h2>
      <p className="mb-6">
        HTML stands for HyperText Markup Language. It structures webpage content using special tags. Think of HTML as the skeleton of a webpage. Here’s a simple example:
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
        <pre className="text-sm text-gray-700 overflow-auto">
          {`<!DOCTYPE html>
            <html>
              <head>
                <title>My First Webpage</title>
              </head>
              <body>
                <h1>Hello World!</h1>
                <p>This is my first webpage. 😊</p>
              </body>
            </html>`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaTags className="mr-2" /> Understanding Basic HTML Structure
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
        <pre className="text-sm text-gray-700 overflow-auto">
          {`<!DOCTYPE html>
            <html>
              <head> 
                <!-- Information for the browser, like the title and metadata -->
              </head>
              <body>
                <!-- The visible content of your page goes here -->
              </body>
            </html>`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaCode className="mr-2" /> HTML Elements Explained
      </h2>
      <p className="mb-6">
        HTML is made up of elements represented by tags. Tags usually come in pairs: an opening tag and a closing tag.
      </p>
      <ul className="mb-6">
        <li>
          <code>&lt;h1&gt; to &lt;h6&gt;</code>: Heading tags, with <code>&lt;h1&gt;</code> as the most important. 🏷️
        </li>
        <li>
          <code>&lt;p&gt;</code>: Defines a paragraph, great for adding text blocks. 📃
        </li>
        <li>
          <code>&lt;a&gt;</code>: Anchor tag used to create links. Example: <code>&lt;a href="https://google.com"&gt;Visit Google&lt;/a&gt;</code>. 🔗
        </li>
        <li>
          <code>&lt;img&gt;</code>: Adds an image. Example: <code>&lt;img src="image.jpg" alt="My Image"&gt;</code>. 🖼️
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <MdArrowForward className="mr-2" /> Previewing Your Work
      </h2>
      <ul className="mb-6">
        <li className="mb-2">
          <FaSave className="text-indigo-600 mr-2 inline-block" />
          <strong>Save Your Work:</strong> Press <code>Ctrl + S</code> (or <code>Cmd + S</code> on Mac).
        </li>
        <li className="mb-2">
          <FaHtml5 className="text-indigo-600 mr-2 inline-block" />
          <strong>Open Your File in a Browser:</strong> Right-click on <code>index.html</code> and select "Open with Live Server."
        </li>
        <li className="mb-2">
          <FaLaptopCode className="text-indigo-600 mr-2 inline-block" />
          <strong>See the Magic!</strong> 🎩 Your webpage will appear in the browser!
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaVideo className="mr-2" /> HTML Introduction Video
      </h2>
      <p className="mb-6">Want to see HTML in action? Check out this awesome introduction video!</p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaBookOpen className="mr-2" /> Recommended Tutorials
      </h2>
      <p className="mb-6">
        Here are some fantastic resources to help you explore HTML further!
        <ul>
          <li><a href="https://www.w3schools.com/html/" className="text-indigo-600 underline">HTML Basics at W3Schools</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="text-indigo-600 underline">HTML Documentation at MDN Web Docs</a></li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaLightbulb className="mr-2" /> Fun Fact: Did You Know?
      </h2>
      <p className="mb-6">
        HTML has been the backbone of the web since 1991! It's the language of the web, enabling you to build anything! 🌍
      </p>

      <h1 className="text-3xl font-bold text-blue-700 mb-6 mt-8">
         HTML Activity: Create Your Own Web Page!
      </h1>

      <p className="text-lg mb-4">
        Let's put your HTML skills to the test! Follow the instructions below to create your very own web page. 🚀
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Objective:</h2>
      <p className="mb-4">
        Create a simple HTML webpage using the knowledge you've gained about HTML elements and structure.
      </p>

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
          <li>A header with your name or a catchy title.</li>
          <li>At least three sections about your favorite hobbies, interests, or topics.</li>
          <li>An image related to your interests (use an image URL or a local file).</li>
          <li>A footer with a quote or a thank-you message.</li>
        </ul>

        <p className="flex items-center mb-4">
          <FaGlobe className="text-indigo-500 mr-2" />
          <span>Structure Your HTML:</span>
        </p>
        <ul className="list-disc pl-8 mb-6">
          <li>Use proper HTML structure with <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.</li>
          <li>Utilize tags like headers (<code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>), paragraphs (<code>&lt;p&gt;</code>), lists (<code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>), and links (<code>&lt;a&gt;</code>).</li>
        </ul>

        <p className="flex items-center mb-4">
          <FaCheckCircle className="text-indigo-500 mr-2" />
          <span>Add Some Style:</span>
        </p>
        <ul className="list-disc pl-8 mb-6">
          <li>Change the background color of the page.</li>
          <li>Modify text colors for headers, sections, and the footer.</li>
          <li>Adjust font styles and sizes.</li>
          <li>Add spacing (margins and padding) to elements.</li>
          <li>Incorporate borders or shadows to sections or images.</li>
        </ul>
      </div>

      <p className="text-lg mb-4">
        🎓 You've just completed your first HTML lesson! 🎉 Keep practicing, and remember: coding is like learning a new language—practice makes perfect. 👩‍💻 Happy coding!
      </p>
    </div>
  );
};

export default Lesson1;