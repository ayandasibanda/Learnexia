#!/usr/bin/python3
"""API for Course Enrollment: Store enrolled courses for each user."""

from flask import jsonify
from models.user import User
from models.course import Course
from models.enrollments import Enrollment
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
    enrollments = storage.all(Enrollment)
    for enrollment in enrollments:
        if enrollment.user_id == user_id:
            return jsonify({'message': 'User already enrolled in this course'}), 400

    # Create a new enrollment
    new_enrollment = Enrollment(**{'user_id':user_id, 'course_id':course_id})

    # Add the enrollment to the database
    storage.new(new_enrollment)
    storage.save()

    # Return success message
    return jsonify({'message': 'User successfully enrolled in the course', 'enrollemnt_id': new_enrollment.id}), 201
