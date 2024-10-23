#!/usr/bin/python3
""" Fetch questions """

def fetch_quiz_questions(quiz_id):
    """Gets the questions from the file
    Params:
        quiz_id: the Quiz ID
    Returns:
        an array of dicts
    """
    from models.engine.file_storage import FileStorage as f_storage

    return f_storage.get_questions(quiz_id)
