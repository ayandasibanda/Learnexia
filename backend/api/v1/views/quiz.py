#!/usr/bin/env python3
""" Module of Quiz views
"""

from api.v1.views import app_views
from models.course import Course
from models.quiz import Quiz
from models.lesson import Lesson
from models import storage
from flask import jsonify, abort, request

@app_views.route('/quizzes', methods=['GET'], strict_slashes=False)
def get_all_quizzes() -> str:
    """ GET /api/v1/quizzes
    Return:
      - list of all  objects JSON represented
    """
    all_quizzes = storage.all(Quiz) #this is a dict
    return jsonify(all_quizzes), 200

@app_views.route('/quiz/<quiz_id>', methods=['GET'], strict_slashes=False)
def view_one_quiz(quiz_id: str = None) -> str:
    """ GET /api/v1/quiz/:id
    Path parameter:
      - Quiz ID
    Return:
      - QUiz object JSON represented
      - 404 if the User ID doesn't exist
    """
    if not quiz_id:
        abort(404)
    quiz = storage.get(quiz_id)

    if quiz:
        return jsonify(quiz.to_dict()), 200
    

@app_views.route('/course/<course_id>/quizzes', methods=['GET'],
                 strict_slashes=False)
def get_quizzes_for_course(course_id):
    """
    Retrieves the list of all quizzes objects
    of a specific Quiz, or a specific city
    """
    list_quizzes = []
    list_lessons = []
    course = storage.get(Course, course_id)

    lessons = course.lessons
    if not course:
        abort(404)
    for quiz in course.quizzes:
        list_quizzes.append(quiz.to_dict())

    return jsonify(list_quizzes), 200


@app_views.route('/quiz/<quiz_id>', methods=['DELETE'], strict_slashes=False)
def delete_quiz(quiz_id: str = None) -> str:
    """ DELETE /api/v1/quiz/:id
    URI Parameter:
      quiz_id - Lesson ID
    Return:
      - empty JSON is the Lesson has been correctly deleted
      - 404 if the Lesson ID doesn't exist
    """
    if quiz_id is None:
        abort(404)
    quiz = Lesson.get(quiz_id)
    if quiz is None:
        abort(404)
    storage.delete(quiz)
    return jsonify({}), 200

@app_views.route('/quizzes', strict_slashes=False, methods=['POST'])
def create_quiz():
    """ POST /api/v1/quizzes/
    JSON body:
        firstname, lastname, email, phone_number, 
        password, category, address, country
    Return:
      - User object JSON represented
      - 400 if can't create the new User
    """

    quiz_data = request.get_json()

    errors = [' title',
              'description ',
              'duration',
              'course_id']

    if not quiz_data:
        abort(400, 'Missing information')
    
    error_msg = None

    for key in errors:
        if not (quiz_data.get(key)):
            error_msg = "Missing {}".format(key)
    
    if not error_msg:
        try:
            new_quiz = Lesson(**quiz_data)
            storage.new(new_quiz)
            storage.save()
            return jsonify(new_quiz.to_dict()), 200
        except Exception as e:
            print(e)
            error_msg = "Can't create Lesson: {}".format(e)
    return jsonify({'error': error_msg}), 400
