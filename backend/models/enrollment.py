#!/usr/bin/python3
"""Enrollment model class"""

from models.base_model import BaseModel
from sqlalchemy import Column, Integer, ForeignKey

class Enrollment(BaseModel):
    """Enrollment Class
    Attributes:
        user_id, course_id"""
    
    __tablename__ = 'enrollment'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    course_id = Column(Integer, ForeignKey('course.id'), nullable=False)

    def __init__(self, *args, **kwargs):
        """Instantiates an Enrollment object"""
        super().__init__(*args, **kwargs)
