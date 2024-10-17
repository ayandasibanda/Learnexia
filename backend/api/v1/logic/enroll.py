#!/usr/bin/python3
"""API for Course Enrollment: Store enrolled courses for each user."""

from flask import jsonify
from models import User, Course, Enrollment, db  # Import models and db session

def enroll_course(user_id, course_id):
    """
    Enroll a user in a course.

    Args:
        user_id (int): The ID of the user.
        course_id (int): The ID of the course.

    Returns:
        Response: A JSON response indicating success or failure of the enrollment.
    """
    # Fetch the user and course from the database
    user = User.query.get(user_id)
    course = Course.query.get(course_id)

    # Check if user or course exists
    if not user:
        return jsonify({'message': 'User not found'}), 404
    if not course:
        return jsonify({'message': 'Course not found'}), 404

    # Check if the user is already enrolled in the course
    existing_enrollment = Enrollment.query.filter_by(user_id=user_id, course_id=course_id).first()
    if existing_enrollment:
        return jsonify({'message': 'User already enrolled in this course'}), 400

    # Create a new enrollment
    new_enrollment = Enrollment(user_id=user_id, course_id=course_id)

    # Add the enrollment to the database
    db.session.add(new_enrollment)
    db.session.commit()

    # Return success message
    return jsonify({'message': 'User successfully enrolled in the course'}), 201
