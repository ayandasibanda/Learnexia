#!/usr/bin/python3
""" Courses class """

from models.base_model import BaseModel, Base
from sqlalchemy import ForeignKey, String, Column, Integer


class Quiz(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'quiz'

    title = Column(String(128), nullable=False)
    description = Column(String(128), nullable=False)
    time_limit = Column(String(60), nullable=False)
    lesson_id = Column(String(60), ForeignKey('lesson.id'), nullable=False)
    course_id = Column(String(60), ForeignKey('course.id'), nullable=False)

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
