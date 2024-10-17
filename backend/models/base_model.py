#!/usr/bin/python3
"""BaseClass for all my classes"""

from datetime import datetime
from sqlalchemy.ext.declarative import declarative_base
import os
from models import storage
from uuid import uuid4 as uid
from sqlalchemy import String, Column, DateTime

storage_type = os.environ["HBNB_TYPE_STORAGE"]

Base = declarative_base()

DATE_FMT = "%Y-%m-%dT%H:%M:%S.%f"


class BaseModel():
    """Base Model class
    Attributes:
        id: unique code for each new instance
        created_at: time the instance is created (%Y-%m-%dT%H:%M:%S.%f)
        updated_at: time of last update
    """
    id = Column(String(60), primary_key=True, nullable=False)
    created_at = Column(
        DateTime, nullable=False, default=datetime.utcnow())
    updated_at = Column(
            DateTime, nullable=False, default=datetime.utcnow())

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

    def save(self):
        """updates the attribute 'updated_at' with the current datetime"""
        self.updated_at = datetime.utcnow()
        storage.new(self)
        storage.save()

    def to_dict(self, save_fs=None):
        """returns a dictionary containing all keys/values of the instance"""
        new_dict = self.__dict__.copy()
        if "created_at" in new_dict:
            new_dict["created_at"] = new_dict["created_at"].strftime(DATE_FMT)
        if "updated_at" in new_dict:
            new_dict["updated_at"] = new_dict["updated_at"].strftime(DATE_FMT)
        new_dict["__class__"] = self.__class__.__name__
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        if save_fs is None:
            if "password" in new_dict:
                del new_dict["password"]
        return new_dict

    def delete(self):
        """delete the current instance from the storage"""
        storage.delete(self)
