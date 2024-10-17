#!/usr/bin/env python3

"""
SessionDBAuth module
"""

from typing import TypeVar
from flask import abort, jsonify
from api.v1.auth.auth import Auth
from os import getenv
from models.user import User
from models.user_session import UserSession
from datetime import datetime, timedelta
from models import storage


class SessionDBAuth(Auth):
    """
    SessionDBAuth class.
    """

    def create_session(self, user_id=None):
        """
        create_session.
        """
        if user_id:
            new_session = UserSession(**{'user_id':user_id})
            storage.new(new_session)
            storage.save()
            return new_session.id

    def user_id_for_session_id(self, session_id=None):
        """
        user_id_for_session_id.
        """
        if not session_id:
            return
        try:
            session = storage.get(UserSession, session_id)

            if not session:
                return None

            session_data = session.to_json()

            session_duration = int(getenv('SESSION_DURATION', 0))

            created_at = session_data.get('created_at')

            if not created_at:
                return None

            if session_duration > 0:
                if datetime.now() > created_at + timedelta(seconds=session_duration):
                    return None
                return session_data.get('user_id', None)
        except Exception:
            return
        
    def current_user(self, request=None) -> TypeVar('User'):
        """
        current_user.
        """
        if request:
            session_id = self.session_cookie(request)
            if session_id:
                user_id = self.user_id_for_session_id(session_id)
                return storage.get(User, user_id)

    def destroy_session(self, request=None) -> bool:
        """
        Destroys the current session
        """
        if not request:
            return False
        session_id = self.session_cookie(request)
        if not session_id:
            return False
        user_id = self.user_id_for_session_id(session_id)
        if not user_id:
            return False
        session_obj = storage.get(UserSession, session_id)
        if session_obj:
            storage.delete(session_obj)
            storage.save()
            return jsonify({}), 200
        abort(404)
