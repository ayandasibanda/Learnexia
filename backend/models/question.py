#!/usr/bin/python3
""" Question class """

from datetime import datetime
from uuid import uuid4 as uid

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
            if kwargs.get('updated_at'):
                kwargs['updated_at'] = datetime.strptime(
                    kwargs['updated_at'],
                    '%Y-%m-%dT%H:%M:%S.%f')
            else:
                setattr(self, 'updated_at', datetime.utcnow())
            if kwargs.get('created_at'):
                kwargs['created_at'] = datetime.strptime(
                    kwargs['created_at'],
                    '%Y-%m-%dT%H:%M:%S.%f')
            else:
                setattr(self, 'created_at', datetime.utcnow())
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
        from models import f_storage

        self.updated_at = datetime.utcnow()
        f_storage.new(self)
        f_storage.save()

    def to_dict(self):
        """returns a dictionary containing all keys/values of the instance"""
        new_dict = {}
        new_dict.update(self.__dict__)
        new_dict.update({'__class__':
                        (str(type(self)).split('.')[-1]).split('\'')[0]})
        new_dict['created_at'] = self.created_at.isoformat()
        new_dict['updated_at'] = self.updated_at.isoformat()
        if (new_dict.get('_sa_instance_state')):
            new_dict.pop('_sa_instance_state')
        return new_dict

    def delete(self):
        """delete the current instance from the storage"""
        from models import f_storage

        f_storage.delete(self)
        