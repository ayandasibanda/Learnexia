#!/usr/bin/env python3

"""
Session Authentication Views
"""
from flask import request, jsonify, abort
from api.v1.views import app_views
from models.user import User
from os import getenv
from models import storage
import bcrypt


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login():
    """ POST /auth_session/login
    Return:
      - Response
    """
    login_data = request.get_json()
    if not login_data:
        abort(400, 'Missing information')
    user_email  = login_data.get('email')
    user_pwd = login_data.get('password')
    if not user_email:
        return jsonify(error="email missing"), 400
    if not user_pwd:
        return jsonify(error="password missing"), 400
    try:
        user = storage.get_user_by_email(user_email)
    except Exception:
        return jsonify(error="no user found for this email"), 404
    if not user:
        return jsonify(error="no user found for this email"), 404
    if user and bcrypt.checkpw(password=user_pwd.encode('utf-8'),
                                  hashed_password=user.password.encode('utf-8')):
        user_id = user.id
        from api.v1.app import auth
        if auth:
            session_id = auth.create_session(user_id)
            response = jsonify(user.to_dict())
            response.set_cookie(getenv('SESSION_NAME'), session_id)
            return jsonify(response), 200
        else:
            return jsonify(user.to_dict()), 200
    return jsonify(error="wrong password"), 401


@app_views.route('/auth_session/logout', methods=['DELETE'],
                 strict_slashes=False)
def logout():
    """ DELETE /auth_session/logout
    Return:
      - Response
    """
    from api.v1.app import auth
    if auth.destroy_session(request):
        return jsonify({}), 200
    abort(404)
