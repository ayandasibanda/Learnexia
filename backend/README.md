## Get the backend running on your system

### Step one
```cd backend``` - move to the backend folder

### Step two
```pip install virtualenv``` - install the virtual environment
```python3 -m venv env``` - create a virtual environment
```source env/bin/activate``` - activate the virtual environment

### Step three
```pip install -r requirements.txt``` - install the necessary modules

### Step Four
```touch .env``` - create an env environment with the necessary fields
> DB_NAME = ""
> DB_PASSWD = ""
> DB_HOST = "localhost"
> DB_USER = ""
> HBNB_TYPE_STORAGE = ""
> SESSION_NAME = "" 
> AUTH_TYPE = "None"

### Step Five
Set up your db
- run the scipt ```sudo mysql -u root -p ./create_db_user.sh``` - remember to update the details with those you included in your ```.env```
- Rememeber to make sure your script is executable

### Step Six
Run the server - ```python3 -m api.v1.app```

Once you verify everything is working well

### Step Seven
Populate the db through the ```console.py```

**RUN**
```./populate_courses.sh``` - add courses
```./populate_quizzes.sh``` - add quizzes
