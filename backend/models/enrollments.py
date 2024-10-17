#!/usr/bin/python3
""" Enrollment class """

from models.base_model import BaseModel, Base
from sqlalchemy import ForeignKey, String, Column


class Enrollment(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'enrollments'

    user_id = Column(String(60), ForeignKey('user.id'), nullable=False)
    course_id = Column(String(60), ForeignKey('course.id'), nullable=False)

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
