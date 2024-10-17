#!/usr/bin/python3
"""
Contains the FileStorage class
"""

import json
from models.question import Question

classes = {"Question": Question}


class FileStorage:
    """serializes instances to a JSON file & deserializes back to instances"""

    # string - path to the JSON file
    __file_path = "file.json"
    # dictionary - empty but will store all objects by <class name>.id
    __objects = {}

    def all(self, cls=None):
        """returns the dictionary __objects"""
        if cls is not None:
            new_dict = {}
            for key, value in self.__objects.items():
                if cls == value.__class__ or cls == value.__class__.__name__:
                    new_dict[key] = value
            return new_dict
        return self.__objects

    def new(self, obj):
        """sets in __objects the obj with key <obj class name>.id"""
        if obj is not None:
            quiz_key = obj.quiz_id
            if self.__objects.get(quiz_key):
                questions_dict = self.__objects.get(quiz_key)
                key = obj.__class__.__name__ + "." + obj.id
                questions_dict[key] = obj
            else:
                question = {obj.__class__.__name__ + "." + obj.id: obj}
                self.__objects[quiz_key] = question

    def save(self):
        """serializes __objects to the JSON file (path: __file_path)"""
        json_objects = {}
        for key in self.__objects:
            questions = self.__objects[key]
            temp = {}
            for k, v in questions:
                temp[k] = v.to_dict()
            json_objects[key] = temp
        with open(self.__file_path, 'w') as f:
            json.dump(json_objects, f)

    def reload(self):
        """deserializes the JSON file to __objects"""
        try:
            temp_dict = {}
            with open(FileStorage.__file_path, 'r') as f:
                temp = json.load(f)
                for key, val in temp.items():
                    # val is an dictionary of questions
                    #Converting all questions to an obj
                    new_dict = {}
                    for question_id, question in val:
                        new_dict[question_id] = Question(**question)
                    temp_dict[key] = new_dict
                self.__class__.__objects = temp_dict
        except FileNotFoundError:
            pass

    def delete(self, obj=None):
        """delete obj from __objects if it’s inside"""
        if obj is not None:
            key = obj.quiz_id
            if self.__objects.get(key):
                questions = self.__objects[key]
                question_key = obj.__class__.__name__ + "." + obj.id
                if question_key in questions:
                    del questions[question_key]

    def close(self):
        """call reload() method for deserializing the JSON file to objects"""
        self.reload()

    def get(self, cls, id, quiz_id):
        """Gets an item from the file storage"""
        if cls is None or id is None or quiz_id is None:
            return None
        if isinstance(cls, str):
            cls = classes[cls]
        key = "{}.{}".format(cls.__name__, id)
        if self.__objects.get(quiz_id):
            obj = self.__objects.get(quiz_id).get(key)
        return obj

    def count(self, cls=None):
        """Count item or items base on class from the file storage"""
        if (cls):
            objs = self.all(cls)
            return (len(objs))
        else:
            return (len(self.all()))
        