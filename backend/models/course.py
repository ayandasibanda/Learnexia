#!/usr/bin/python3
""" Courses class """

from models.base_model import BaseModel, Base
from sqlalchemy import String, Column, Integer
from sqlalchemy.orm import relationship

class Course(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'course'

    title = Column(String(128), nullable=False)
    description = Column(String(128), nullable=False)
    duration = Column(String(60), nullable=False)
    enrolled = Column(Integer, nullable=False, default=0)
    lesson = relationship('Lesson', backref='course', cascade="all, delete-orphan")

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
