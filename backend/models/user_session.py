#!/usr/bin/env python3

""" UserSession module.
"""

from models.base_model import BaseModel
from sqlalchemy import String, Column, ForeignKey


class UserSession(BaseModel):
    """ UserSession class.
    """
    __tablename__ = 'sessions'

    user_id = Column(String(60), ForeignKey('user.id'), nullable=False)

    def __init__(self, *args: list, **kwargs: dict):
        super().__init__(*args, **kwargs)
