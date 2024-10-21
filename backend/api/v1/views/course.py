#!/usr/bin/env python3
""" Module of Lesson views
"""

from api.v1.views import app_views
from models.course import Course
from models.lesson import Lesson
from models import storage
from flask import jsonify, abort, request

@app_views.route('/courses', methods=['GET'], strict_slashes=False)
def view_all_coursess() -> str:
    """ GET /api/v1/courses
    Return:
      - list of all Course objects JSON represented
    """
    all_courses = storage.all(Course) #this is a dict
    return jsonify(all_courses), 200

@app_views.route('/courses/<course_id>', methods=['GET'], strict_slashes=False)
def view_one_lesson(course_id: str = None) -> str:
    """ GET /api/v1/course/:id
    Path parameter:
      - Course ID
    Return:
      - Course object JSON represented
      - 404 if the Course ID doesn't exist
    """
    if not course_id:
        abort(404)
    course = storage.get(course_id)

    if course:
        return jsonify(course.to_dict()), 200


@app_views.route('/course/<course_id>', methods=['DELETE'], strict_slashes=False)
def delete_course(course_id: str = None) -> str:
    """ DELETE /api/v1/course/:id
    URI Parameter:
      course_id - Course ID
    Return:
      - empty JSON is the Course has been correctly deleted
      - 404 if the Course ID doesn't exist
    """
    if course_id is None:
        abort(404)
    course = storage.get(Course, course_id)
    if course is None:
        abort(404)
    storage.delete(course)
    return jsonify({}), 200

@app_views.route('/courses', strict_slashes=False, methods=['POST'])
def create_course():
    """ POST /api/v1/courses/
    JSON body:
        title, description, duration
    Return:
      - Course object JSON represented
      - 400 if can't create the new User
    """

    course_data = request.get_json()

    errors = [' title',
              'description',
              'duration']

    if not course_data:
        abort(400, 'Missing information')
    
    error_msg = None

    for key in errors:
        if not (course_data.get(key)):
            error_msg = "Missing {}".format(key)
    
    if not error_msg:
        try:
            new_course = Lesson(**course_data)
            storage.new(new_course)
            storage.save()
            return jsonify(new_course.to_dict()), 200
        except Exception as e:
            print(e)
            error_msg = "Can't create Course: {}".format(e)
    return jsonify({'error': error_msg}), 400
