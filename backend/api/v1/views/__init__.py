#!/usr/bin/env python3
""" This module defines the views blueprint
"""
from flask import Blueprint

app_views = Blueprint("app_views", __name__, url_prefix="/api/v1")

from api.v1.views.index import *
from api.v1.views.user import *
from api.v1.views.session_auth import *
from api.v1.views.quiz_taken import *
from api.v1.views.course import *
from api.v1.views.enrollments import *
from api.v1.views.index import *
from api.v1.views.leaderboard import *
from api.v1.views.quiz import *
