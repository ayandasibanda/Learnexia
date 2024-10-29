#!/usr/bin/python3

from models.engine.db_storage import DBStorage
from models.engine.file_storage import FileStorage

storage = DBStorage()

f_storage = FileStorage()

f_storage.reload()

storage.reload()
