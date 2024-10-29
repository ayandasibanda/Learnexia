#!/usr/bin/python3
"""API for Course Enrollment: Store enrolled courses for each user."""

from flask import jsonify
from models.completion import Completion
from models.user import User
from models.course import Course
from models import storage

def enroll_course(user_id, course_id):
    """
    Enroll a user in a course.

    Args:
        user_id (str): The ID of the user.
        course_id (str): The ID of the course.

    Returns:
        Response: A JSON response indicating success or failure of the enrollment.
    """
    # Fetch the user and course from the database
    user = storage.get(User, user_id)
    course = storage.get(Course, course_id)

    # Check if user or course exists
    if not user:
        return jsonify({'message': 'User not found'}), 404
    if not course:
        return jsonify({'message': 'Course not found'}), 404

    # Check if the user is already enrolled in the course
    for registered_user in course.users:
        if user.id == registered_user.id:
            completions = storage.all(Completion).values()
            for completion in completions:
                if completion.get('user_id') == user.id:
                    if completion >= 100:
                        return jsonify({'message': 'User already enrolled in this course'}), 400
                    break
            return jsonify({'message': 'User already enrolled in this course'}), 400

    user.courses.append(course)
    completion = Completion(**{'user_id': user_id, 'course_id': course_id, 'completion': 0.00})
    storage.new(completion)
    storage.save()

    return jsonify([user_course.to_dict() for user_course in user.courses]), 200
