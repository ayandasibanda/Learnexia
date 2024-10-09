#!/usr/bin/python3
"""Handles MySQL db session"""

import os
from sqlalchemy import MetaData, create_engine
from models.base_model import Base


class DBStorage():
    """MySql database connection class"""
    __engine = None
    __session = None

    def __init__(self):
        """Instantiates an sql session"""
        username = ''
        dbname = ''
        host = ''
        passwd = ''

        self.__engine = create_engine(
            'mysql+mysql://{}:{}@{}/{}'.format(
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
    
    def close(self):
        """Removes current session"""
        self.__session.close()
        self.reload()
        