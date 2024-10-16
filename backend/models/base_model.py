#!/usr/bin/python3
"""BaseClass for all my classes"""

from datetime import datetime
from uuid import uuid4 as uid
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

DATE_FMT = "%Y-%m-%dT%H:%M:%S.%f"


class BaseModel():
    """Base Model class
    Attributes:
        id: unique code for each new instance
        created_at: time the instance is created (%Y-%m-%dT%H:%M:%S.%f)
        updated_at: time of last update
    """

    def __init__(self, *args, **kwargs):
        """Instantiates an instance of this class"""
        if not kwargs:
            self.id = str(uid())
            self.created_at = datetime.now()
            self.updated_at = datetime.now()
        else:
            if kwargs.get('updated_at'):
                kwargs['updated_at'] = datetime.strptime(
                    kwargs['updated_at'], DATE_FMT)
            else:
                setattr(self, 'updated_at', datetime.now())
            if kwargs.get('created_at'):
                kwargs['created_at'] = datetime.strptime(
                    kwargs['created_at'], DATE_FMT)
            else:
                setattr(self, 'created_at', datetime.now())
            
            if not kwargs.get('id'):
                setattr(self, 'id', str(uid))

            if kwargs.get('__class__'):
                del kwargs['__class__']
            self.__dict__.update(kwargs)
    
    def __str__(self):
        """String presentation of object"""
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"
