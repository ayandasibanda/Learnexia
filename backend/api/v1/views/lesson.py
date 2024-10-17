#!/usr/bin/env python3
""" Module of Lesson views
"""

from flask import jsonify, abort
from api.v1.views import app_views

@app_views.route('/lesson/<lesson_id>', methods=['GET'], strict_slashes=False)
def view_one_lesson(lesson_id: str = None) -> str:
    """ GET /api/v1/lesson/:id
    Path parameter:
      - Lesson ID
    Return:
      - Lesson object JSON represented
      - 404 if the User ID doesn't exist
    """
    pass

