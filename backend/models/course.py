#!/usr/bin/python3
""" Courses class """

from models.base_model import BaseModel, Base
from sqlalchemy import ForeignKey, String, Column, Integer, Table
from sqlalchemy.orm import relationship
from models.quiz import Quiz
from models.user import User
from models import storage

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
    lessons = relationship('Lesson', backref='courses', 
                          cascade="all, delete-orphan")

    users = relationship('User', secondary='enrollments', 
                         backref='courses', viewonly=False)

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)

    def get_quizzes(self):
        """Gets the quizzes linked to courses"""
        course_quizzes = []

        lessons = self.lessons

        for lesson in lessons:
            course_quizzes.append(lesson.quizzes)

        return course_quizzes
