import React from 'react';
import { FaPaintBrush, FaQuestionCircle, FaStar, FaBook, FaPlayCircle} from 'react-icons/fa';

const Lesson3 = () => {
  return (
    <div className=" max-w-7xl rounded-lg bg-white mx-auto p-4">
       <h2 FaBook className="text-3xl bg-indigo-500 px-3 py-1 rounded text-white mb-7 inline-block">LESSON 3</h2>
       
       <h1 className="text-3xl font-bold text-indigo-700 mb-4">Responsive Web Design with Flexbox</h1>
      <p className="text-lg mb-6 flex items-center">
        <FaPaintBrush className="mr-2 text-indigo-500" /> 🌈 Welcome to the world of responsive design! In this lesson, we’ll dive deep into using Flexbox to create layouts that adapt seamlessly to any screen size. Let’s flex our CSS muscles! 💪
      </p>

      <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaQuestionCircle className="mr-2" /> What is Flexbox? 🤔
      </h3>
      <p className="text-base mb-4">
        Flexbox (short for Flexible Box) is a CSS layout model that allows you to design a responsive layout structure without using float or positioning. It provides an easier and cleaner way to arrange elements within a container, making your web design flexible and efficient. 🚀
      </p>
      
      <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaStar className="mr-2" /> The Basics of Flexbox 📦
      </h3>
      <p className="text-base mb-4">
        To start using Flexbox, set the <code className="bg-gray-200 rounded px-1">display</code> property of the parent container to <code className="bg-gray-200 rounded px-1">flex</code>. Here’s how:
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-6">
        <code>
          {`.container {\n  display: flex;\n}`}
        </code>
      </pre>

      <p className="text-base mb-4">
        Now, all direct children of this container will be flex items, allowing you to control their alignment and spacing. Here’s a quick overview of key properties:
      </p>

      <ul className="list-disc list-inside mb-6">
        <li><code className="bg-gray-200 rounded px-1">justify-content</code>: Aligns items along the main axis.</li>
        <li><code className="bg-gray-200 rounded px-1">align-items</code>: Aligns items along the cross axis.</li>
        <li><code className="bg-gray-200 rounded px-1">flex-direction</code>: Defines the direction of flex items.</li>
        <li><code className="bg-gray-200 rounded px-1">flex-wrap</code>: Allows items to wrap onto multiple lines.</li>
      </ul>

      <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaPlayCircle className="mr-2" /> Example: Building a Flexbox Layout 💻
      </h3>
      <p className="text-base mb-4">
        Let’s create a simple responsive layout using Flexbox. Here’s the HTML structure:
      </p>
      <pre className="bg-gray-100 p-3 rounded mb-6">
        <code>
          {`<div class="container">\n  <div class="item">Item 1</div>\n  <div class="item">Item 2</div>\n  <div class="item">Item 3</div>\n</div>`}
        </code>
      </pre>

      <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaStar className="mr-2" /> Fun Fact!
      </h3>
      <p className="text-base mb-6">
        Did you know? The Flexbox layout model was designed to help developers create responsive layouts without relying on float or positioning hacks. It was introduced in the CSS Flexible Box Layout Module in 2012! 🎉
      </p>

      <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center">
        <FaBook className="mr-2" /> Learn More About Flexbox
      </h3>
      <ul className="list-disc list-inside mb-6">
        <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className="text-indigo-500 underline">A Complete Guide to Flexbox at CSS-Tricks</a></li>
        <li><a href="https://flexboxfroggy.com/" className="text-indigo-500 underline">Flexbox Froggy: A Game to Learn Flexbox!</a></li>
      </ul>

      <p className="text-lg font-semibold mt-8 flex items-center">
        🎉 Ready to flex your skills even more? Click below to move on to the next lesson!
      </p>
    </div>
  );
};

export default Lesson3;
