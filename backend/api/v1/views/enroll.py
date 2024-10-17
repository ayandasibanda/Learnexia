from flask import request
from api.v1.logic.enroll import enroll_course  # Import the logic function

@app.route('/enroll', methods=['POST'])
def enroll():
    """
    API route for enrolling a user in a course.
    Expects JSON data with 'user_id' and 'course_id'.
    """
    data = request.get_json()
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    return enroll_course(user_id, course_id)
