import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LessonPage = () => {
  const { lessonId, courseId} = useParams();
  const navigate = useNavigate();


  const lessons = [
    {
      id: 1,
      title: "Lesson 1: Introduction to Variables",
      content: `
        In JavaScript, variables are containers for storing data values.
        There are three types of variable declarations: var, let, and const.
        Each of these has its own characteristics, and choosing the right one depends on the use case.
      `,
      resources: [
        {
          title: "MDN Web Docs - Variables Guide",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Variables",
        },
        {
          title: "JavaScript.info - Variables",
          link: "https://www.javascript.info/variables",
        },
      ],
    },
    {
      id: 2,
      title: "Lesson 2: Functions and Scope",
      content: `
        JavaScript functions are blocks of code designed to perform a task.
        You define a function once and can execute it any number of times.
        JavaScript functions have access to the global scope.
      `,
      resources: [
        {
          title: "MDN Web Docs - Functions",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
        },
        {
          title: "JavaScript.info - Functions",
          link: "https://www.javascript.info/function-basics",
        },
      ],
    },
    {
      id: 3,
      title: "Lesson 3: Objects and Arrays",
      content: `
        JavaScript objects are used to store keyed collections of various data and more complex entities.
        An array is a special type of object that allows you to store ordered collections of data.
      `,
      resources: [
        {
          title: "MDN Web Docs - Working with Objects",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
        },
        {
          title: "JavaScript.info - Objects",
          link: "https://www.javascript.info/object",
        },
      ],
    },
  ];

  const lesson = lessons.find((lesson) => lesson.id === parseInt(lessonId));

  if (!lesson) {
    return <div className="text-center text-gray-500 mt-10">Lesson not found!</div>;
  }

  const currentLessonIndex = lessons.findIndex((l) => l.id === lesson.id);
  const previousLessonId = currentLessonIndex > 0 ? lessons[currentLessonIndex - 1].id : null;
  const nextLessonId = currentLessonIndex < lessons.length - 1 ? lessons[currentLessonIndex + 1].id : null;

  const isLastLesson = currentLessonIndex === lessons.length - 1;

  return (
    <div>
      <Navbar />

      <div className="lesson-header bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">{lesson.title}</h1>
          <Link
            to={`/Course/${courseId}`}
            className="bg-indigo-500 px-4 py-2 rounded text-white"
          >
            Course Overview
          </Link>
        </div>
      </div>

      <div className="lesson-content p-8 bg-white shadow-md max-w-3xl mx-auto mt-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">{lesson.title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{lesson.content}</p>
      </div>

      <div className="external-resources bg-indigo-50 p-6 rounded-lg mt-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside text-gray-700">
          {lesson.resources.map((resource, index) => (
            <li key={index}>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lesson-navigation flex justify-between p-4 bg-gray-100 mt-8 shadow-inner max-w-3xl mx-auto mb-2 rounded-lg">
        {previousLessonId && (
          <Link
          to={`/courses/${courseId}/lessons/${previousLessonId}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
          >
            Previous Lesson
          </Link>
        )}
        {nextLessonId && (
          <Link
          to={`/courses/${courseId}/lessons/${nextLessonId}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
          >
            Next Lesson
          </Link>
        )}
      </div>
       {isLastLesson && (
        <div className="flex justify-center">
          <button
            onClick={() => navigate(`/courses/${courseId}/quiz`)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 mt-4 mb-2"
          >
            Finish and Take Quiz
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default LessonPage;
