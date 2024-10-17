import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const QuizPage = () => {
  const [timeLeft, setTimeLeft] = useState(600);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const TimerId = useRef(null);

  const questions = [
    {
      id: 1,
      question: "What is the correct syntax for referring to an external script called 'app.js'?",
      options: ["<script src='app.js'>", "<script href='app.js'>", "<script ref='app.js'>"],
      answer: 0,
    },
    {
      id: 2,
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "style", "font"],
      answer: 1,
    },
    {
      id: 3,
      question: "Which of the following is not a JavaScript data type?",
      options: ["string", "boolean", "float"],
      answer: 2,
    },
    {
      id: 4,
      question: "What is the output of 2 + '2' in JavaScript?",
      options: ["4", "22", "NaN"],
      answer: 1,
    },
    {
      id: 5,
      question: "How do you create a function in JavaScript?",
      options: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
      answer: 0,
    },
    {
      id: 6,
      question: "How can you add a comment in JavaScript?",
      options: ["//This is a comment", "'This is a comment", "<!--This is a comment-->"],
      answer: 0,
    },
    {
      id: 7,
      question: "Which operator is used to assign a value to a variable?",
      options: ["=", "==", "==="],
      answer: 0,
    },
    {
      id: 8,
      question: "How do you declare a JavaScript variable?",
      options: ["var carName;", "variable carName;", "v carName;"],
      answer: 0,
    },
    {
      id: 9,
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onmouseclick", "onchange", "onclick"],
      answer: 2,
    },
    {
      id: 10,
      question: "What is the correct way to write an array in JavaScript?",
      options: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = (1:'red', 2:'green', 3:'blue')",
        "var colors = ['red', 'green', 'blue']",
      ],
      answer: 2,
    },
  ];

  useEffect(() => {
    if (!submitted) {
      TimerId.current = setTimeout(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          handleSubmit();
        }
      }, 1000);
    }
    return () => clearTimeout(TimerId.current);
  }, [timeLeft, submitted]);

  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers({
      ...answers,
      [questionId]: selectedOption,
    });
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    clearTimeout(TimerId.current);
    let calculatedScore = 0;

    questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        calculatedScore++;
      }
    });

    setScore(calculatedScore);
    alert("Quiz submitted!");


    try {
      const response = await axios.post('/api/submit-score', { score: calculatedScore });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const optionLabels = ["A", "B", "C", "D", "E"];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-600 text-center mb-6">JavaScript Basics</h1>

          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500">Time left: {formatTime(timeLeft)}</span>
          </div>

          {questions.map((question, index) => (
            <div key={question.id} className="mb-6 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-lg font-semibold text-gray-700">
                {index + 1}. {question.question}
              </h2>
              <div className="mt-2">
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex} className="block">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={optionIndex}
                      onChange={() => handleAnswerChange(question.id, optionIndex)}
                      className="mr-2"
                      disabled={submitted}
                      checked={answers[question.id] === optionIndex}
                    />
                    <span className="font-bold">{optionLabels[optionIndex]}.</span> {option}
                    {submitted && optionIndex === question.answer && (
                      <span className="ml-2 text-green-600 font-bold">Correct</span>
                    )}
                    {submitted && optionIndex !== question.answer && answers[question.id] === optionIndex && (
                      <span className="ml-2 text-red-600 font-bold">Incorrect</span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
              disabled={submitted}
            >
              Submit
            </button>
          </div>

          {submitted && (
            <div className="mt-4 bg-green-100 text-green-700 p-4 rounded-lg">
              Quiz has been submitted. Your score is {score} out of {questions.length}.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
