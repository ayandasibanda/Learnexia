#!/usr/bin/env python3
""" Module of Users views
"""
import bcrypt
from api.v1.views import app_views
from flask import abort, jsonify, request
from models.user import User
from api.v1.auth.basic_auth import BasicAuth
from models import storage
from werkzeug.security import generate_password_hash

@app_views.route('/users', methods=['GET'], strict_slashes=False)
def view_all_users() -> str:
    """ GET /api/v1/users
    Return:
      - list of all User objects JSON represented
    """
    all_users = [user.to_json() for user in User.all()]
    return jsonify(all_users)


@app_views.route('/users/<user_id>', methods=['GET'], strict_slashes=False)
def view_one_user(user_id: str = None) -> str:
    """ GET /api/v1/users/:id
    Path parameter:
      - User ID
    Return:
      - User object JSON represented
      - 404 if the User ID doesn't exist
    """
    if user_id == "me":
        if not request.current_user:
            abort(404)
        else:
            return jsonify(request.current_user.to_json())
    if user_id is None:
        abort(404)
    user = User.get(user_id)
    if user is None:
        abort(404)
    return jsonify(user.to_json())


@app_views.route('/users/<user_id>', methods=['DELETE'], strict_slashes=False)
def delete_user(user_id: str = None) -> str:
    """ DELETE /api/v1/users/:id
    URI Parameter:
      user_id - User ID
    Return:
      - empty JSON is the User has been correctly deleted
      - 404 if the User ID doesn't exist
    """
    if user_id is None:
        abort(404)
    user = User.get(user_id)
    if user is None:
        abort(404)
    storage.delete(user)
    return jsonify({}), 200


@app_views.route('/users', strict_slashes=False, methods=['POST'])
def create_user():
    """ POST /api/v1/users/
    JSON body:
        firstname, lastname, email, phone_number, 
        password, category, address, country
    Return:
      - User object JSON represented
      - 400 if can't create the new User
    """

    user_info = request.get_json()

    errors = ['email',
              'firstname',
              'lastname',
              'password']

    if not user_info:
        abort(400, 'Missing information')
    for key in errors:
        if not (user_info.get(key)):
            error_msg = "Missing {}".format(key)
    
    if not error_msg:
        passwd = user_info['password']

        hashed_password = generate_password_hash(passwd)

        user = {
            "firstname": user_info['firstname'],
            "lastname": user_info['lastname'],
            "email": user_info['email'],
            "phone_number": user_info.get('phone_number', ''),
            "category": user_info['category'],
            "password": hashed_password,
            "country": user_info.get('country', ''),
            "address": user_info.get('address', '')
        }
        try:
            new_user = User(**user)
            storage.new(new_user)
            storage.save()
            return jsonify(new_user.to_dict()), 200
        except Exception as e:
                error_msg = "Can't create User: {}".format(e)
    return jsonify({'error': error_msg}), 400


@app_views.route('/users', methods=['POST'], strict_slashes=False)
def create_user() -> str:
    """ POST /api/v1/users/
    JSON body:
        firstname, lastname, email, phone_number, 
        password, category, address, country
    Return:
      - User object JSON represented
      - 400 if can't create the new User
    """
    rj = None
    error_msg = None
    try:
        rj = request.get_json()
    except Exception as e:
        rj = None
    if rj is None:
        error_msg = "Wrong format"
    if error_msg is None and rj.get("email", "") == "":
        error_msg = "email missing"
    if error_msg is None and rj.get("password", "") == "":
        error_msg = "password missing"
    if error_msg is None:
        try:
            user = User()
            user.email = rj.get("email")
            user.password = rj.get("password")
            user.first_name = rj.get("first_name")
            user.last_name = rj.get("last_name")
            user.save()
            return jsonify(user.to_json()), 201
        except Exception as e:
            error_msg = "Can't create User: {}".format(e)
    return jsonify({'error': error_msg}), 400


@app_views.route('/users/<user_id>', methods=['PUT'], strict_slashes=False)
def update_user(user_id: str = None) -> str:
    pass

@app_views.route('/users/me', methods=['DELETE'], strict_slashes=False)
def get_authenticated_user():
    """ Retrieves an authenticated user """
    pass
