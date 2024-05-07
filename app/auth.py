from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.models import User, db, bcrypt  # Corrected import

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/register', methods=['POST'])
def register():
    print("SOMETHING IS HAPPENING")
    try:
        email = request.json.get('email')
        password = request.json.get('password')
        
        # Check for missing email or password in the request
        if not email or not password:
            return jsonify({'error': 'Missing email or password'}), 400

        # Check if the user already exists
        if User.query.filter_by(email=email).first():
            return jsonify({'error': 'User already exists'}), 409

        # Create new user and add to the database
        new_user = User(email=email)
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        
        # Return success message
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        # Log the exception
        print(f"Exception occurred: {e}")
        
        # Return a generic error message
        return jsonify({'error': 'Registration failed', 'details': str(e)}), 500

@auth_blueprint.route('/login', methods=['POST'])
def login():
    try:
        email = request.json.get('email')
        password = request.json.get('password')

        # Check if email and password are provided
        if not email or not password:
            return jsonify({'error': 'Missing email or password'}), 400

        user = User.query.filter_by(email=email).first()

        # Check if user exists and the password is correct
        if user and user.check_password(password):
            access_token = create_access_token(identity=email)
            return jsonify(access_token=access_token), 200

        # User exists but password is incorrect or user does not exist
        return jsonify({'error': 'Invalid credentials'}), 401
    except Exception as e:
        # Log the exception or handle it accordingly
        print(f"Exception occurred: {e}")
        return jsonify({'error': 'Unable to process request', 'details': str(e)}), 500
