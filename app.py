from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS
from flask_migrate import Migrate

# Import configurations and other components with the correct package prefix
from app.models import User, db, bcrypt
from app.auth import auth_blueprint
from app.config import Config

import os

current_dir = os.getcwd()
instance_dir = os.path.join( current_dir, "instance", "healthmonitoring.db")

app = Flask(__name__)
app.config.from_object(Config)
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{instance_dir}"

# Initialize extensions
db.init_app(app)
migrate = Migrate(app, db)
bcrypt.init_app(app)
jwt = JWTManager(app)
CORS(app)

# Register Blueprint
app.register_blueprint(auth_blueprint, url_prefix='/auth')

@app.route('/register', methods=['POST'])
def register_user():
    username = request.json.get('username')
    password = request.json.get('password')
    if not username or not password:
        return jsonify({'message': 'Missing username or password'}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({'message': 'Username already exists'}), 409

    new_user = User(username=username)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/login', methods=['POST'])
def login_user():
    username = request.json.get('username')
    password = request.json.get('password')
    user = User.query.filter_by(username=username).first()
    if user and user.check_password(password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    return jsonify({'message': 'Invalid username or password'}), 401

@app.errorhandler(Exception)
def handle_exception(e):
    return jsonify({'message': 'An error occurred', 'error': str(e)}), 500

if __name__ == '__main__':
    with app.app_context():
        #db.drop_all()
        db.create_all()
    app.run(debug=True)
