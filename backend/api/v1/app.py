#!/usr/bin/python3
"""Handles api action"""

from flask import Flask, jsonify, abort, request
from api.v1.auth.session_db_auth import SessionDBAuth
from models.user import User
from api.v1.views import app_views
from api.v1.auth.auth import Auth
from api.v1.auth.basic_auth import BasicAuth
from flask_cors import (CORS, cross_origin)
from os import getenv

app = Flask(__name__)

app.register_blueprint(app_views)

auth = None

auth_type = getenv('AUTH_TYPE')

if auth_type == 'auth':
    auth = Auth()
elif auth_type == 'basic_auth':
    auth = BasicAuth()
elif auth_type== "session_db_auth":
    auth = SessionDBAuth()

cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

@app.errorhandler(404)
def not_found(error) -> str:
    """ Not found handler
    """
    return jsonify({"error": "Not found"}), 404


@app.errorhandler(401)
def unathorized(error) -> str:
    """ Unathorized user """
    return jsonify({"error": "Unauthorized"}), 401


@app.errorhandler(403)
def forbidden(error) -> str:
    """ Unathorized user """
    return jsonify({"error": "Forbidden"}), 403


@app.teardown_appcontext
def close(exception):
    """Calls the close method based on the storage"""
    from models import storage
    storage.close()


@app.errorhandler(404)
def handle_404_error(ex):
    """Handles the page not found(404) error"""
    return (jsonify({"error": "Not found"}), 404)

@app.before_request
def before_request_func() -> None:
    """ Function executed before any request """
    if auth:
        excluded_paths = ['/api/v1/unauthorized/',
                          '/api/v1/forbidden/']

        if not auth.require_auth(request.path, excluded_paths):
            return
        if not auth.authorization_header(request):
            print("")
            abort(401)
        if not auth.session_cookie(request):
            abort(401)
        request.current_user = auth.current_user(request)
        if not request.current_user:
            abort(403)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, threaded=True, debug=True)
