#!/usr/bin/env python3
""" Module of Enrollement views
"""

from api.v1.views import app_views
from models.course import Course
from models.quiz import Quiz
from models import storage
from flask import jsonify, abort, request
from api.v1.logic.enroll import enroll_course
from models.user import User

@app_views.route('/enroll', methods=['POST'], strict_slashes=False)
def enroll() -> str:
    """ GET /api/v1/quizzes
    Return:
      - list of all  objects JSON represented
    """
    data = request.get_json()
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    return enroll_course(user_id, course_id)


@app_views.route('/enrollments', methods=['GET'], strict_slashes=False)
def view_all_enrollments() -> str:
    """ GET /api/v1/users
    Return:
      - list of all User objects JSON represented
    """
    courses = storage.all(Course)
    result = []
    try:
        for course in courses.values:
            course_info = course.to_dict()

            course_users = [user.to_dict() for user in course.users]

            course_info['enrolled_users'] = course_users

            result.append(course_info)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': "str(e)"}), 404

@app_views.route('/enrollements/<course_id>/users', methods=['GET'], strict_slashes=False)
def view_users_enrolled_in_course(course_id: str = None) -> str:
    """ GET /api/v1/enrollements/:id
    Path parameter:
      - course ID
    Return:
      - List of user dicts object JSON represented
      - 404 if the User ID doesn't exist
    """
    if not course_id:
        abort(404)
    course = storage.get(Course, course_id)

    if course:
        users = [user.to_dict() for user in course.users]
        return jsonify(users), 200
    return jsonify({"error": "No such course"}), 404
    

@app_views.route('/enrollements/<user_id>/courses', methods=['GET'],
                 strict_slashes=False)
def get_user_courses(user_id):
    """
    Retrieves the list of all quizzes objects
    of a specific Quiz, or a specific city
    """
    if not user_id:
        abort(404)
    user = storage.get(User, user_id)
    if not user:
        abort(404)
    user_courses = [course.to_dict() for course in user.courses]

    return jsonify(user_courses), 200
