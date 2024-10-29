#!/usr/bin/python3
""" Courses class """

from models.base_model import BaseModel, Base
from sqlalchemy import ForeignKey, Integer, String, Column
from sqlalchemy.orm import relationship


class Quiz(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'quizzes'

    title = Column(String(128), nullable=False)
    description = Column(String(128), nullable=False)
    time_limit = Column(Integer, nullable=False, default=0)
    course_id = Column(String(60), ForeignKey('courses.id'), nullable=False)

    user_attempts = relationship('QuizAttempt', backref='quizzes', cascade="all, delete-orphan")

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
