#!/usr/bin/python3

from flask import Blueprint, request, jsonify
from logic.lesson_progress import mark_lesson_complete

lesson_progress_bp = Blueprint('lesson_progress', __name__)

@lesson_progress_bp.route('/<int:lesson_id>/complete', methods=['POST'])
def complete_lesson(lesson_id):
    """Marks a lesson as complete."""
    data = request.json
    user_id = data.get('user_id')
    return jsonify(mark_lesson_complete(user_id, lesson_id))

