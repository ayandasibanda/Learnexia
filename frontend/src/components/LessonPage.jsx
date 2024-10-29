import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Lesson1 from "./lessons/lesson1";
import Lesson2 from "./lessons/lesson2";
import Lesson3 from "./lessons/lesson3";

import Lesson4 from "./lessons/lesson4";
import Lesson5 from "./lessons/lesson5";
import Lesson6 from "./lessons/lesson6";

const LessonPage = () => {
  const { lessonId, courseId } = useParams();
  const navigate = useNavigate();
  
  const courses = {
    "f6b4981b-815a-4abd-b107-c231eb097c22" : {
      lessons: {
        1: <Lesson1 />, 
        2: <Lesson2 />,
        3: <Lesson3 />,
        4: <Lesson4 />,
      }
    },
    "0b206260-38f5-4748-aef7-d7fb74b6bae7" : {
      lessons: {
        1: <Lesson5 />,
        2: <Lesson6 />,
      }
    }
  };
  
  const lessonsForCourse = courses[courseId]?.lessons;
  const lesson = lessonsForCourse ? lessonsForCourse[lessonId] : null;
  if (!lesson) return <div>Lesson not found!</div>;

  const totalLessons = lessonsForCourse ? Object.keys(lessonsForCourse).length : 0;

  const nextLessonId = parseInt(lessonId) + 1;
  const previousLessonId = parseInt(lessonId) - 1;
  const isLastLesson = parseInt(lessonId) === totalLessons;

  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="lesson-header bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={`/Course/${courseId}`} className="bg-indigo-500 px-4 py-2 rounded text-white">
            Course Overview
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        {lesson}
      </div>

      <div className="lesson-navigation flex justify-between p-4 bg-gray-100 mt-8 shadow-inner max-w-3xl mx-auto mb-2 rounded-lg">
        {previousLessonId > 0 && (
          <Link
            to={`/courses/${courseId}/lessons/${previousLessonId}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Previous Lesson
          </Link>
        )}
        {!isLastLesson && (
          <Link
            to={`/courses/${courseId}/lessons/${nextLessonId}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 flex items-center"
          >
            Next Lesson
            <FaArrowRight className="ml-2" />
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
