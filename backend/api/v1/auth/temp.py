from itertools import count
from flask import jsonify
from models.user import User
from werkzeug.security import generate_password_hash, check_password_hash
from models import db

def login_user(data):
    # Extract email and password from the input data
    email = data.get('email')  # Use string literals
    password = data.get('password')  # Use string literals

    # Fetch the user from the database using the provided email
    user = User.query.filter_by(email=email).first()

    # Check if the user exists with its password matching the stored hash
    if user and check_password_hash(user.password, password):
        # Login successful
        return jsonify({'message': 'Login successful', 'user': {'email': user.email, 'firstname': user.firstname}}), 200
    
    # Invalid credentials
    return jsonify({'message': 'Invalid credentials'}), 401


def signup_user(data):
    # Extract user information from the input data
    email = data.get('email')
    firstname = data.get('firstname')
    lastname = data.get('lastname')
    phone_number = data.get('phone_number')
    password = data.get('password')
    category = data.get('category')
    address = data.get('address')
    country = data.get('country')

    # Check if the user already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'Email already in use'}), 400

    # Hash the password for secure storage
    hashed_password = generate_password_hash(password)

    new_user = User(
        email=email,
        firstname=firstname,
        lastname=lastname,
        phone_number=phone_number,
        password=hashed_password,
        category=category,
        address=address,
        country=country,
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully', 
                    'user': {'email': new_user.email, 
                             'firstname': new_user.firstname}}), 201