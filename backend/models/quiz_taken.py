#!/usr/bin/python3
""" User's taken quiz class """

from models.base_model import BaseModel, Base
from sqlalchemy import ForeignKey, String, Column, Integer
from sqlalchemy.orm import relationship


class QuizAttempt(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'quiz_attempts'

    user_id = Column(String(60), ForeignKey('users.id'))
    quiz_id = Column(String(60), ForeignKey('quizzes.id'))
    score = Column(Integer, default=0, nullable=True)

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
