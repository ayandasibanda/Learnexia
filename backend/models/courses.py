#!/usr/bin/env python3

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from models.base_model import BaseModel

class Course(BaseModel):
    """Course Class to define the structure of a course in the database."""
    
    __tablename__ = 'course'

    title = Column(String(128), nullable=False)  # Course title
    description = Column(String(256), nullable=True)  # Course description

    def __init__(self, *args, **kwargs):
        """Initialize a Course instance."""
        super().__init__(*args, **kwargs)


class Enrollment(BaseModel):
    """Enrollment Class to define the structure of a user's enrollment in a course."""
    
    __tablename__ = 'enrollment'

    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)  # User ID
    course_id = Column(Integer, ForeignKey('course.id'), nullable=False)  # Course ID

    user = relationship("User", backref="enrollments")  # Relationship with User
    course = relationship("Course", backref="enrollments")  # Relationship with Course

    def __init__(self, *args, **kwargs):
        """Initialize an Enrollment instance."""
        super().__init__(*args, **kwargs)

