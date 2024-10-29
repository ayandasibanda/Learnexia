"""My console environment"""

import cmd
from datetime import datetime
import shlex
from models.question import Question
from models.user import User
from dotenv import load_dotenv
""" from models.base_model import BaseModel, Base
from models.completion import Completion """
from models.course import Course
from models.quiz import Quiz
from models.user import User

classes = {"User": User, 'Course': Course, 'Quiz': Quiz, 'Question': Question}

class HBNBCommand(cmd.Cmd):
    """Class inheriting from the cmd.Cmd"""
    prompt = "Learnexia$ "

    def do_EOF(self, line):
        """Ctrl-D to exit the program"""
        return True

    def do_quit(self, line):
        """Quit command to exit the program"""
        return True

    def emptyline(self):
        pass

    def _key_value_parser(self, args):
        """creates a dictionary from a list of strings"""
        new_dict = {}
        for arg in args:
            if "=" in arg:
                kvp = arg.split('=', 1)
                key = kvp[0]
                value = kvp[1]
                if value[0] == "[" and value[-1] == "]":
                    list_items = value[1:-1].split(",")
                    clean_list = [item.strip().replace("_", " ").strip(' "') for item in list_items]
                    value = clean_list
                elif value[0] == value[-1] == '"':
                    value = shlex.split(value)[0].replace('_', ' ')
                else:
                    try:
                        value = int(value)
                    except:
                        try:
                            value = float(value)
                        except:
                            continue
                new_dict[key] = value
        return new_dict

    def do_create(self, args):
        """ Create an object of any class"""
        """Creates a new instance of a class"""
        args = args.split()
        if len(args) == 0:
            print("** class name missing **")
            return False
        if args[0] in classes:
            new_dict = self._key_value_parser(args[1:])
            instance = classes[args[0]](**new_dict)
        else:
            print("** class doesn't exist **")
            return False
        print(instance.id)
        instance.save()

    def do_all(self, line):
        """Lists all objs based on class"""
        from models import storage

        objs_lst = []

        args = shlex.split(line)

        if len(args) == 0:
            objs_dct = storage.all()
        elif args[0] in classes:
            objs_dct = storage.all(classes.get(args[0]))
        else:
            print("** Missing class **")
            return False

        for obj in objs_dct.values():
            objs_lst.append(obj)
        print(objs_lst)

    @staticmethod
    def _split(line):
        """splits my line using spaces
        Return a dict"""
        import shlex

        return shlex.split(line)


if __name__ == '__main__':
    HBNBCommand().cmdloop()
