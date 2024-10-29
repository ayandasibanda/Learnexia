#!/usr/bin/python3
""" Create Leaderboard """

from models import storage
from models.course import Course
from models.user import User

def leaderboard_data(course_id=None):
    """Gets the leaderboard
    Returns:
        an array of users sorted by total score
    """
    user_quiz_attempts = []
    if course_id:
        course = storage.get(Course, course_id)

        users = course.users

        course_quizzes = course.get_quizzes()
        course_quizzes_lst = [quiz.id for quiz in course_quizzes]
    else:
        users = [storage.all(User).values()]

    leaderboard = []

    for user in users:
        if course_id and course:
            user_quiz_attempts = [attempt for attempt in user.quizzes_taken if attempt.quiz_id in course_quizzes_lst]
        else:
             user_quiz_attempts = user.quizzes_taken
        total_score = sum(attempt.score for attempt in user_quiz_attempts)
        leaderboard.append({
            'user_id': user.id,
            'firstname': user.firstname,
            'lastname': user.lastname,
            'total_score': total_score
        })
    return sorted(leaderboard.items(), key=lambda x: x[1], reverse=True)
