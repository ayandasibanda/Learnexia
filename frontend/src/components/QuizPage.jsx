import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useParams } from "react-router-dom";

const QuizPage = () => {
  const { courseId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(600);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const TimerId = useRef(null);

  const url = 'http://localhost:5000/api/v1';

  useEffect(() => {
    async function fetchQuizQuestions() {
      try {
        const quizResponse = await axios.get(`${url}/courses/${courseId}/quizzes`);

        const quiz = quizResponse.data[0];
        const quizId = quiz.id;

        console.log(quizId);

        const questionsResponse = await axios.get(`${url}/quizzes/${quizId}/questions`);

        setQuestions(questionsResponse.data);
        
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    }
  
    fetchQuizQuestions();
  }, [courseId]);
  

  useEffect(() => {
    if (!submitted && questions.length > 0) {
      TimerId.current = setTimeout(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          handleSubmit();
        }
      }, 1000);
    }
    return () => clearTimeout(TimerId.current);
  }, [timeLeft, submitted, questions.length]);

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
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-600 text-center mb-6"></h1>

          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500">Time left: {formatTime(timeLeft)}</span>
          </div>

          {questions.length > 0 ? (
            questions.map((question, index) => (
              <div key={question.id} className="mb-6 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h2 className="text-lg font-semibold text-gray-700">
                  {index + 1}. {question.question}
                </h2>
                <div className="mt-2">
                  {question.options && question.options.map((option, optionIndex) => (
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
            ))
          ) : (
            <p>No questions available for this quiz.</p>
          )}

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