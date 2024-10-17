#!/usr/bin/python3
""" Tracks completion """

from models.base_model import BaseModel, Base
from sqlalchemy import Float, ForeignKey, String, Column


class Completion(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'completion'

    user_id = Column(String(60), ForeignKey('user.id'), nullable=False)
    course_id = Column(String(60), ForeignKey('course.id'), nullable=False)
    completion = Column(Float, default=0, nullable=False)

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
