#!/usr/bin/python3
"""My user class"""

from models.base_model import BaseModel, Base
from sqlalchemy import ForeignKey, String, Column, Table
from models.user_session import UserSession
from sqlalchemy.orm import relationship

completions = Table('completions', Base.metadata,
                          Column('user_id', String(60),
                                 ForeignKey('users.id', onupdate='CASCADE',
                                            ondelete='CASCADE'),
                                 primary_key=True),
                          Column('course_id', String(60),
                                 ForeignKey('courses.id', onupdate='CASCADE',
                                            ondelete='CASCADE'),
                                 primary_key=True))

class User(BaseModel, Base):
    """User Class
    Attributes:
        FirstName, LastName, Email, PhoneNumber, Password, Category"""
    
    __tablename__ = 'users'

    firstname = Column(String(128), nullable=False)
    lastname = Column(String(128), nullable=False)
    email = Column(String(128), nullable=False)
    phone_number = Column(String(60), nullable=True)
    password = Column(String(255), nullable=False)
    category = Column(String(128), nullable=False)
    address = Column(String(128), nullable=True)
    country = Column(String(128), nullable=True)

    session = relationship('UserSession', backref='users', cascade="all, delete-orphan")

    courses = relationship('Course', secondary='enrollments', backref='users', viewonly=False)

    quizzes_taken = relationship('QuizAttempt', backref='users', cascade="all, delete-orphan")

    def __init__(self, *args, **kwargs):
        """Instantiates a class object"""
        super().__init__(*args, **kwargs)
