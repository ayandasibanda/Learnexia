import React from "react";
import { FaHtml5, FaUser, FaEnvelope, FaVenusMars, FaClipboardList, FaCheckSquare, FaExternalLinkAlt, FaWrench, FaTasks } from "react-icons/fa";

const Lesson4 = () => {
  return (
    <div className="text-lg p-8 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl bg-indigo-500 px-4 py-1 rounded text-white uppercase mb-7 inline-block">Lesson 4</h2>
      
      <h1 className="text-2xl font-bold mb-6">
        <FaClipboardList className="inline mr-2 text-indigo-500" />
        Interactive Elements with Forms
      </h1>
      <p className="mb-4">Master the creation of interactive forms to collect user data and enhance engagement on your website!</p>
      
      <h2 className="text-xl font-semibold mt-8 mb-4">
        <FaHtml5 className="inline mr-2 text-indigo-500" />
        HTML Form Elements
      </h2>
      <p>Forms are an essential part of interactive web pages, allowing users to input data and interact with your website. Common form elements include text fields, checkboxes, radio buttons, and dropdown menus.</p>

      <ul className="list-disc list-inside mb-4">
        <li>Text Field: Used to collect short pieces of text like names or emails.</li>
        <li>Radio Buttons: Allow users to select one option from a set of choices.</li>
        <li>Checkbox: Enables users to select multiple options.</li>
        <li>Select Menu: A dropdown menu that lets users choose one option from a list.</li>
      </ul>

      <h3 className="text-lg font-semibold mb-3">
        <FaUser className="inline mr-2 text-indigo-500" />
        Example: Text Field
      </h3>
      <code className="block bg-gray-100 p-4 mb-4 rounded">
        {'<label for="name">Name:</label>\n<input type="text" id="name" name="name" placeholder="Enter your name" required>'}
      </code>
      <p className="mb-6">This creates a text field for users to enter their names. The placeholder gives a hint about what to enter!</p>

      <h3 className="text-lg font-semibold mb-3">
        <FaEnvelope className="inline mr-2 text-indigo-500" />
        Example: Email Input
      </h3>
      <code className="block bg-gray-100 p-4 mb-4 rounded">
        {'<label for="email">Email:</label>\n<input type="email" id="email" name="email" placeholder="Enter your email" required>'}
      </code>
      <p className="mb-6">This creates an email input that checks the format of the email entered. The <code>type="email"</code> ensures valid email entry!</p>

      <h3 className="text-lg font-semibold mb-3">
        <FaCheckSquare className="inline mr-2 text-indigo-500" />
        Example: Radio Buttons
      </h3>
      <code className="block bg-gray-100 p-4 mb-4 rounded">
        {'<label for="gender">Gender:</label>\n<input type="radio" id="male" name="gender" value="male" required>\n<label for="male">Male</label>\n<input type="radio" id="female" name="gender" value="female">\n<label for="female">Female</label>'}
      </code>
      <p className="mb-6">These radio buttons allow users to select their gender. The required attribute ensures selection before form submission!</p>

      <h3 className="text-lg font-semibold mb-3">
        <FaCheckSquare className="inline mr-2 text-indigo-500" />
        Example: Checkboxes
      </h3>
      <code className="block bg-gray-100 p-4 mb-4 rounded">
        {'<label for="interests">Select your interests:</label>\n<input type="checkbox" id="web_dev" name="interests" value="web_dev">\n<label for="web_dev">Web Development</label>\n<input type="checkbox" id="design" name="interests" value="design">\n<label for="design">Design</label>'}
      </code>
      <p className="mb-6">This allows users to select multiple interests using checkboxes!</p>

      <h3 className="text-lg font-semibold mb-3">
        <FaClipboardList className="inline mr-2 text-indigo-500" />
        Example: Select Menu
      </h3>
      <code className="block bg-gray-100 p-4 mb-4 rounded">
        {'<label for="languages">Choose your favorite programming language:</label>\n<select id="languages" name="languages">\n  <option value="javascript">JavaScript</option>\n  <option value="python">Python</option>\n  <option value="java">Java</option>\n</select>'}
      </code>
      <p className="mb-6">This creates a dropdown menu for selecting a programming language!</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        <FaWrench className="inline mr-2 text-indigo-500" />
        JavaScript Form Validation
      </h2>
      <p>JavaScript can validate user input before form submission. Here’s a simple example:</p>

      <h3 className="text-lg font-semibold mb-3">
        <FaTasks className="inline mr-2 text-indigo-500" />
        Example: JavaScript Validation
      </h3>
      <code className="block bg-gray-100 p-4 mb-4 rounded">
        {'<script>\n  function validateForm() {\n    var name = document.forms["myForm"]["name"].value;\n    if (name == "") {\n      alert("🚨 Name must be filled out!");\n      return false; // Prevents form submission\n    }\n  }\n</script>\n\n<form name="myForm" onsubmit="return validateForm()">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name"><br>\n  <input type="submit" value="Submit">\n</form>'}
      </code>
      <p className="mb-6">This example checks if the name field is empty. If it is, an alert appears and the form won't submit!</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        <FaTasks className="inline mr-2 text-indigo-500" />
        Practice Exercise: Create Your Own Form
      </h2>
      <p>Now it’s your turn! Build a contact form that collects a user's name, email, and message. Use JavaScript to validate that all fields are filled out before allowing submission. 🌟</p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        <FaExternalLinkAlt className="inline mr-2 text-indigo-500" />
        Additional Resources on Form Creation
      </h2>
      <ul className="list-disc list-inside">
        <li>W3Schools: HTML Forms</li>
        <li>MDN Web Docs: Forms</li>
      </ul>

      
      <p className="mt-7">  
        🚀 You've got the basics down! Ready for some practice? Click below to test your knowledge with a fun quiz!
      </p>
    </div>
  );
};

export default Lesson4;
