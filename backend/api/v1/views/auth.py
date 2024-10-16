from flask import Blueprint, request, jsonify
from api.v1.logic.auth import login_user, signup_user  # Import login and signup functions

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()  # Parse incoming JSON data
    return login_user(data)  # Call the login logic function

@auth.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()  # Parse incoming JSON data
    return signup_user(data)  # Call the signup logic function
