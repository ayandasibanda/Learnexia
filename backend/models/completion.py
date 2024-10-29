#!/usr/bin/python3
""" Tracks completion """

from models.base_model import BaseModel, Base
from sqlalchemy import Float, ForeignKey, String, Column


class Completion(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'completions'

    user_id = Column(String(60), ForeignKey('users.id'), nullable=False)
    course_id = Column(String(60), ForeignKey('courses.id'), nullable=False)
    completion = Column(Float, default=0.00, nullable=False)

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
