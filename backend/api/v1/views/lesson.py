#!/usr/bin/env python3
""" Module of Lesson views
"""

from api.v1.views import app_views
from models.course import Course
from models.lesson import Lesson
from models import storage
from flask import jsonify, abort, request

@app_views.route('/lessons', methods=['GET'], strict_slashes=False)
def view_all_lessons() -> str:
    """ GET /api/v1/lessons
    Return:
      - list of all User objects JSON represented
    """
    all_lessons = storage.all(Lesson) #this is a dict
    return jsonify(all_lessons), 200

@app_views.route('/lesson/<lesson_id>', methods=['GET'], strict_slashes=False)
def view_one_lesson(lesson_id: str = None) -> str:
    """ GET /api/v1/lesson/:id
    Path parameter:
      - Lesson ID
    Return:
      - Lesson object JSON represented
      - 404 if the User ID doesn't exist
    """
    if not lesson_id:
        abort(404)
    lesson = storage.get(lesson_id)

    if lesson:
        return jsonify(lesson.to_dict()), 200
    

@app_views.route('/course/<course_id>/lessons', methods=['GET'],
                 strict_slashes=False)
def get_lessons_for_course(course_id):
    """
    Retrieves the list of all lessons objects
    of a specific Course, or a specific city
    """
    list_lessons = []
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    for lesson in course.lessons:
        list_lessons.append(lesson.to_dict())

    return jsonify(list_lessons), 200


@app_views.route('/lesson/<lesson_id>', methods=['DELETE'], strict_slashes=False)
def delete_lesson(lesson_id: str = None) -> str:
    """ DELETE /api/v1/lesson/:id
    URI Parameter:
      lesson_id - Lesson ID
    Return:
      - empty JSON is the Lesson has been correctly deleted
      - 404 if the Lesson ID doesn't exist
    """
    if lesson_id is None:
        abort(404)
    lesson = Lesson.get(lesson_id)
    if lesson is None:
        abort(404)
    storage.delete(lesson)
    return jsonify({}), 200

@app_views.route('/lessons', strict_slashes=False, methods=['POST'])
def create_lesson():
    """ POST /api/v1/lessons/
    JSON body:
        firstname, lastname, email, phone_number, 
        password, category, address, country
    Return:
      - User object JSON represented
      - 400 if can't create the new User
    """

    lesson_data = request.get_json()

    errors = [' title',
              'description ',
              'duration',
              'course_id']

    if not lesson_data:
        abort(400, 'Missing information')
    
    error_msg = None

    for key in errors:
        if not (lesson_data.get(key)):
            error_msg = "Missing {}".format(key)
    
    if not error_msg:
        try:
            new_lesson = Lesson(**lesson_data)
            storage.new(new_lesson)
            storage.save()
            return jsonify(new_lesson.to_dict()), 200
        except Exception as e:
            print(e)
            error_msg = "Can't create Lesson: {}".format(e)
    return jsonify({'error': error_msg}), 400
