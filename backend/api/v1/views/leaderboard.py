#!/usr/bin/env python3
""" Module of Leaderboard views
"""

from api.v1.views import app_views
from api.v1.logic.leaderboard import leaderboard_data

@app_views.route('/leaderboard/', strict_slashes=False, methods=['GET'])
def get_leaderboard():
    """Gets overall leaderboard"""
    return leaderboard_data()

@app_views.route('/leaderboard/<course_id>', strict_slashes=False, methods=['GET'])
def get_course_leaderboard(course_id):
    """Get course specific leaderboard"""
    return leaderboard_data(course_id)