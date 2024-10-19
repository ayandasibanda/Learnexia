#!/usr/bin/python3
""" Question class """

from datetime import datetime
from uuid import uuid4 as uid
from models.engine.file_storage import FileStorage as storage

DATE_FMT = "%Y-%m-%dT%H:%M:%S.%f"

class Question():
    """ Attributes and methods for our class
    Attributes:
        name, description, duration, enrolled"""
    
    def __init__(self, *args, **kwargs):
        """Instance attributes"""
        if kwargs:
            if kwargs.get("__class__"):
                del kwargs["__class__"]
            if kwargs.get("created_at", None) and type(self.created_at) is str:
                self.created_at = datetime.strptime(kwargs["created_at"], DATE_FMT)
            else:
                self.created_at = datetime.utcnow()
            if kwargs.get("updated_at", None) and type(self.updated_at) is str:
                self.updated_at = datetime.strptime(kwargs["updated_at"], DATE_FMT)
            else:
                self.updated_at = datetime.utcnow()
            if kwargs.get("id", None) is None:
                self.id = str(uid())
            self.__dict__.update(kwargs)
        else:
            self.id = str(uid())
            self.created_at = datetime.now()
            self.updated_at = datetime.now()
            self.quiz_id = 'uncategorized'
            self.question = ''
            self.options = []
            self.answer = ""

    def __str__(self):
        """String presentation of object"""
        return f"[{self.__class__.__name__}] ({self.id}) {self.__dict__}"

    def save(self):
        """updates the attribute 'updated_at' with the current datetime"""
        self.updated_at = datetime.utcnow()
        storage.new(self)
        storage.save()

    def to_dict(self):
        """returns a dictionary containing all keys/values of the instance"""
        new_dict = self.__dict__.copy()
        if "created_at" in new_dict:
            new_dict["created_at"] = new_dict["created_at"].strftime(DATE_FMT)
        if "updated_at" in new_dict:
            new_dict["updated_at"] = new_dict["updated_at"].strftime(DATE_FMT)
        new_dict["__class__"] = self.__class__.__name__
        if "_sa_instance_state" in new_dict:
            del new_dict["_sa_instance_state"]
        return new_dict

    def delete(self):
        """delete the current instance from the storage"""
        storage.delete(self)
        