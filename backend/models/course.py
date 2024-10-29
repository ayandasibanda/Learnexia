#!/usr/bin/python3
""" Courses class """

from models.base_model import BaseModel, Base
from sqlalchemy import ForeignKey, String, Column, Integer, Table
from sqlalchemy.orm import relationship
from models.quiz import Quiz
from models.user import User

enrollments = Table('enrollments', Base.metadata,
                          Column('user_id', String(60),
                                 ForeignKey('users.id', onupdate='CASCADE',
                                            ondelete='CASCADE'),
                                 primary_key=True),
                          Column('course_id', String(60),
                                 ForeignKey('courses.id', onupdate='CASCADE',
                                            ondelete='CASCADE'),
                                 primary_key=True))

class Course(BaseModel, Base):
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    __tablename__ = 'courses'

    title = Column(String(128), nullable=False)
    description = Column(String(128), nullable=False)
    duration = Column(String(60), nullable=False)
    level = Column(String(60), nullable=False)
    image = Column(String(100), nullable=False, default="images/course_placehoder")
    syllabus = Column(String(255), nullable=True)
    

    quizzes = relationship('Quiz', backref='courses', 
                          cascade="all, delete-orphan")

    users = relationship('User', secondary='enrollments', 
                         backref='enrolled_courses', viewonly=False,
                         overlaps="courses, user_courses")

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
