#!/usr/bin/python3
""" Lesson class """

from models.base_model import BaseModel, Base
from sqlalchemy import ForeignKey, String, Column, Integer
from sqlalchemy.orm import relationship


class Lesson(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'lessons'

    title = Column(String(128), nullable=False)
    description = Column(String(128), nullable=False)
    duration = Column(String(60), nullable=False)
    course_id = Column(String(60), ForeignKey('courses.id'), nullable=False)
    enrolled = Column(Integer, nullable=True, default=0)
    quiz = relationship('Quiz', backref='lesson', cascade="all, delete-orphan")

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
