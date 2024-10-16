from flask import Flask
from api.v1.views.auth import auth  # Import auth blueprint

def create_app():
    app = Flask(__name__)

    # Register the auth blueprint
    app.register_blueprint(auth, url_prefix='/api/v1/auth')

    return app
