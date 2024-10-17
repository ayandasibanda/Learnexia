#!/usr/bin/python3
"""Course model class"""

from models.base_model import BaseModel
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

class Course(BaseModel):
    """Course Class
    Attributes:
        title, description, category, instructor"""
    
    __tablename__ = 'course'

    id = Column(Integer, primary_key=True)
    title = Column(String(128), nullable=False)
    description = Column(String(256), nullable=True)
    category = Column(String(128), nullable=False)
    instructor = Column(String(128), nullable=False)

    # Relationship with User
    enrollments = relationship('Enrollment', backref='course', lazy=True)

    def __init__(self, *args, **kwargs):
        """Instantiates a Course object"""
        super().__init__(*args, **kwargs)
