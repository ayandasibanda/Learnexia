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

    def all(self):
        """returns the question __objects"""
        """ if cls is not None:
            new_dict = {}
            for key, value in self.__objects.items():
                if cls == value.__class__ or cls == value.__class__.__name__:
                    new_dict[key] = value
            return new_dict """
        return self.__objects

    def new(self, obj=None):
        """Adds an object to __objects"""
        if obj:
            quiz_key = obj.quiz_id
            key = f"{obj.__class__.__name__}.{obj.id}"
            
            if quiz_key not in self.__objects:
                self.__objects[quiz_key] = {}

            self.__objects[quiz_key][key] = obj

    def save(self):
        """serializes __objects to the JSON file (path: __file_path)"""
        json_objects = {}
        for key in self.__objects:
            questions = self.__objects[key]
            print(questions)
            temp = {}
            for k, v in questions.items():
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
                    for question_id, question in val.items():
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
        obj = None
        if self.__objects.get(quiz_id):
            obj = self.__objects.get(quiz_id).get(key)
        return obj
    
    def get_questions(self, quiz_id):
        """Get question based on a quiz_id
        Params:
            quiz_id: Quiz ID
        Return:
            list of arrays
        """
        questions = []

        quiz_questions = self.__objects.get(quiz_id)

        if quiz_questions:
            for value in quiz_questions.values():
                questions.append(value.to_dict())
        return questions


    def count(self, cls=None):
        """Count item or items base on class from the file storage"""
        if (cls):
            objs = self.all(cls)
            return (len(objs))
        else:
            return (len(self.all()))
        