#!/usr/bin/python3
"""Handles MySQL db session"""

import os
from sqlalchemy import MetaData, create_engine
from dotenv import load_dotenv
from models.base_model import Base
from models.completion import Completion
from models.course import Course
from models.enrollments import Enrollment
from models.lesson import Lesson
from models.quiz import Quiz
from models.user import User

load_dotenv()

cls_lst = [User, Course, Lesson, Quiz, Completion, Enrollment]

class DBStorage():
    """MySql database connection class"""
    __engine = None
    __session = None

    def __init__(self):
        """Instantiates an sql session"""
        username = os.getenv("DB_USER")
        dbname = os.getenv("DB_NAME")
        host = os.getenv("DB_HOST")
        passwd = os.getenv("DB_PASSWD")

        self.__engine = create_engine(
            'mysql+mysqldb://{}:{}@{}/{}'.format(
                username,
                passwd,
                host,
                dbname), pool_pre_ping=True
            )
        
    def reload(self):
        """Starts a new session"""
        from sqlalchemy.orm import sessionmaker, scoped_session

        Base.metadata.create_all(self.__engine)

        session_factory = sessionmaker(
            bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(session_factory)

        self.__session = Session()

    def new(self, obj=None):
        """Adds a new object to the database"""
        if obj:
            self.__session.add(obj)
    
    def save(self):
        """Commits the current session"""
        self.__session.commit()
    
    def get_user_by_email(self, email):
        """Returns a user object using the email provided"""
        if email:
            user = self.__session.query(User)\
                .filter(User.email == email).first()
            return user
        return None
    
    def reload(self):
        """Reloads from the database"""
        from sqlalchemy.orm import sessionmaker, scoped_session

        Base.metadata.create_all(self.__engine)

        session_factory = sessionmaker(
            bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(session_factory)
        self.__session = Session()

    def all(self, cls):
        """Lists all object of a class or
        all object if no class is given"""

        my_dict = {}
        if (cls):
            objs = self.__session.query(cls).all()

            for obj in objs:
                key = cls.__name__ + "." + obj.id
                value = obj.to_dict()
                if value.get('_sa_instance_state'):
                    del value['_sa_instance_state']
                if value.get('__class__'):
                    del value['__class__']
                my_dict.update({key: value})
        else:
            for cls in cls_lst:
                objs = self.__session.query(cls).all()

                for obj in objs:
                    key = cls.__name__ + "." + obj.id
                    value = obj.to_dict()
                    if value.get('_sa_instance_state'):
                        del value['_sa_instance_state']
                    if value.get('__class__'):
                        del value['__class__']
                    my_dict.update({key: value})

        return my_dict

    def get(self, cls, obj_id):
        """Returns an object using the id provided"""
        if cls and not obj_id:
            return self.all(cls)
        if (cls and obj_id):
            objs = self.all(cls).values()
            for obj in objs:
                if obj.get('id') == obj_id:
                    return (obj)
        return None

    def get_instance(self, cls, obj_id):
        """Returns a user object using id"""
        if (cls and obj_id):
            obj = self.__session.query(cls)\
                .filter(cls.id == obj_id).first()
            if obj:
                return obj
        return None
    
    def get_user_courses_completion_rate(self, user_id, course_id):
        """ Gets the user's completion rate """
        courses_completion_rate = self.__session.query(Completion).filter_by(user_id=user_id, course_id=course_id).all()

        return courses_completion_rate
    
    def delete(self, obj=None):
        """Deletes an object from the database"""
        if obj:
            obj_cls = obj.__class__
            key = obj_cls + "." + obj.id
            obj_to_del = self.__session.query(obj_cls).filter(
                            obj_cls.id == key)

            if obj_to_del:
                self.__session.delete(obj_to_del)

    def close(self):
        """Removes current session"""
        self.__session.close()
        self.reload()
        