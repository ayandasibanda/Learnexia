#!/usr/bin/env python3
""" Handles authentication """

from os import getenv
from flask import request
from typing import List, TypeVar
from models.user import User


class Auth:
    """ authentication class """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ def require_auth
        """
        if not path or not excluded_paths:
            return True
        path = path + '/' if path[-1] != '/' else path
        has_wildcard = any(x.endswith("*") for x in excluded_paths)
        if not has_wildcard:
            return path not in excluded_paths
        for ex_path in excluded_paths:
            if ex_path.endswith("*"):
                if path.startswith(ex_path[:-1]):
                    return False
            if path == ex_path:
                return False
        return True

    def authorization_header(self, request=None) -> str:
        """Returns athourization header
        Otherwise None
        """
        if request:
            return request.headers.get("Authorization")
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """Returns None """
        return None
    
    def session_cookie(self, request=None):
        """ session_cookie
        """
        if request:
            session_name = getenv("SESSION_NAME")
            return request.cookies.get(session_name, None)