#!/usr/bin/python3
"""Handles MySQL db session"""

import os
from sqlalchemy import MetaData, create_engine
from dotenv import load_dotenv
from models.base_model import Base

load_dotenv()


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
    
    def save(self):
        """Commits the current session"""
        self.__session.commit()
    
    def close(self):
        """Removes current session"""
        self.__session.close()
        self.reload()
        