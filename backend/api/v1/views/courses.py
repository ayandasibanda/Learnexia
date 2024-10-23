#!/usr/bin/env python3

from flask import Blueprint, request, jsonify
from logic.courses import get_courses, enroll_course

courses_bp = Blueprint('courses', __name__)

@courses_bp.route('/', methods=['GET'])
def list_courses():
    """Get all courses"""
    courses = get_courses()
    return jsonify([{'id': course.id, 'title': course.title, 'description': course.description} for course in courses]), 200

@courses_bp.route('/<int:course_id>', methods=['GET'])
def get_course(course_id):
    """Get a specific course by ID"""
    course = Course.query.get(course_id)
    if not course:
        return jsonify({'message': 'Course not found'}), 404
    return jsonify({'id': course.id, 'title': course.title, 'description': course.description}), 200

@courses_bp.route('/enroll', methods=['POST'])
def enroll():
    """Enroll a user in a course"""
    data = request.json
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    return jsonify(enroll_course(user_id, course_id))

