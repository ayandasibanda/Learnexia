#!/usr/bin/env python3
""" Module of Users views
"""

import bcrypt
from api.v1.views import app_views
from flask import abort, jsonify, request
from models.user import User
from api.v1.auth.basic_auth import BasicAuth
from models import storage

@app_views.route('/users', methods=['GET'], strict_slashes=False)
def view_all_users() -> str:
    """ GET /api/v1/users
    Return:
      - list of all User objects JSON represented
    """
    all_users = storage.all(User)
    return jsonify(all_users), 200


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
    return jsonify(user.to_dict())


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
    
    error_msg = None

    for key in errors:
        if not (user_info.get(key)):
            error_msg = "Missing {}".format(key)
    
    if not error_msg:
        passwd = user_info['password']

        hashed_password = bcrypt.hashpw(passwd.encode('utf-8'), bcrypt.gensalt())

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
            print(e)
            error_msg = "Can't create User: {}".format(e)
    return jsonify({'error': error_msg}), 400

@app_views.route('/users/me', methods=['GET'], strict_slashes=False)
def get_authenticated_user():
    """ Retrieves an authenticated user """
    pass

@app_views.route('/users/<user_id>', strict_slashes=False, methods=['PUT'])
def update_user(user_id):
    """Updates the user data using his id"""
    new_info = request.get_json()

    if not new_info:
        abort(400, "Missing information")

    user = storage.get_instance(User, user_id)

    if user:
        lst = ['id', 'updated_at', 'created_at']
        for key in lst:
            if new_info.get(key):
                del new_info[key]
        for key, value in new_info.items():
            setattr(user, key, value)
        storage.save()
        return jsonify(user.to_dict()), 200
    else:
        abort(404)
