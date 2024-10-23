#!/usr/bin/env python3
""" Module of Quiz views
"""

from api.v1.views import app_views
from models.completion import Completion
from models.course import Course
from models.quiz import Quiz
from models.quiz_taken import QuizAttempt
from models.lesson import Lesson
from models import storage
from flask import jsonify, abort, request
from models.user import User

@app_views.route('/submit_quiz', methods=['POST'], strict_slashes=False)
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
    storage.new(quiz_attempt)
    storage.save()

    try:
        quiz = storage.get(Quiz, quiz_id)
        if not quiz:
            return jsonify({"error": "Quiz not found"}), 404

        lesson = storage.get(Lesson, quiz.lesson_id)
        if not lesson:
            return jsonify({"error": "Lesson not found"}), 404

        course = storage.get(Course, lesson.course_id)
        if not course:
            return jsonify({"error": "Course not found"}), 404

        course_quizzes = course.get_quizzes()

        course_quizzes_lst = [quiz.id for quiz in course_quizzes]

        user = storage.get(User, user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404

        competed_quizzes_lst = [completed_quiz.id for completed_quiz in user.quizzes_taken]

        completed_quiz_set = set(course_quizzes_lst) & set(competed_quizzes_lst)
        
        completion_rate = round((len(completed_quiz_set) / len(course_quizzes)) * 100)

        completion = storage.get_user_courses_completion_rate(user_id, course.id)
        current_completion_data = {'user_id': user_id, 'course_id': course.id, 'completion': completion_rate}

        if completion:
            setattr(completion, 'completion', completion_rate)
            storage.save()
            return jsonify(completion.to_dict()), 200
        else:
            new_completion = Completion(**{current_completion_data})
            storage.new(new_completion)
            storage.save()
            return jsonify(new_completion.to_dict()), 200
    except Exception as e:
        return jsonify({'error': 'Error: {}'.format(e)}), 404
    