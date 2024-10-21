#!/usr/bin/env python3
""" Module of Quiz views
"""

from api.v1.views import app_views
from models.course import Course
from models.quiz import Quiz
from models.quiz_taken import QuizAttempt
from models.lesson import Lesson
from models import storage
from flask import jsonify, abort, request

from models.user import User

app_views('/submit_quiz', methods=['POST'], strict_slahes=False)
def submit_quiz():
    """Once a user submits a quiz"""
    quiz_data = request.get_json()

    if not quiz_data:
        abort(400, 'Missing information')
    user_id = quiz_data.get('user_id')
    quiz_id = quiz_data.get('quiz_id')
    score = quiz_data.get('score')

    if not user_id:
        return jsonify({"error": "Missing user ID"}), 404
    if not quiz_id:
        return jsonify({"error": "Missing course ID"}), 404
    if not score:
        return jsonify({"error": "Missing score"}), 404
    
    quiz_attempt = QuizAttempt(**{'user_id': user_id,
                           'quiz_id': quiz_id,
                           'score': score})
    quiz = storage.get(Course, quiz_id)

    lesson = storage.get(Lesson, quiz.lesson_id)

    course = storage.get(Course, lesson.course_id)

    course_quizzes = course.get_quizzes()

    user = storage.get(User, user_id)

    completed_quiz_no = 0

    for completed_quiz in user.quizzes_taken:
        for quiz in course_quizzes:
            if quiz.id == completed_quiz.quiz_id:
                completed_quiz_no += 1
    
    completion_rate = (completed_quiz_no / len(course_quizzes)) * 100

    
    