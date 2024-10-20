#!/usr/bin/env python3
""" Module of Quiz views
"""

from api.v1.views import app_views
from models.course import Course
from models.quiz import Quiz
from models.lesson import Lesson
from models import storage
from flask import jsonify, abort, request

app_views('/submit_quiz', methods=['POST'], strict_slahes=False)
def submit_quiz():
    """Once a user submits a quiz"""
    quiz_data = request.get_json()

    if not quiz_data:
        abort(400, 'Missing information')
    user_id = quiz_data.get('user_id')
    course_id = quiz_data.get('course_id')
    score = quiz_data.get('score')

    if not user_id:
        return jsonify({"error": "Missing user ID"}), 404
    if not course_id:
        return jsonify({"error": "Missing course ID"}), 404
    if not score:
        return jsonify({"error": "Missing score"}), 404
    
    quiz_attempt = Quiz(**{'user_id': user_id,
                           'course_id': course_id,
                           'score': score})
    course = storage.get(Course, course_id)

    