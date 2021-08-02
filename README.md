# How to run in your machine

## Backend

Step 1: Clone the repositoy and navigate to the backend folder

```
cd server
```

Create a virtual environment.(Recommended)

```
python3 -m venv env
cd env
env\Scripts\activate
```

```
cd newsletter
```

Step 2: Install the dependencies

```
pip install -r requirements.txt
```

Step 3: Run the server

```
python manage.py runserver
```

Your server Should be running at http://localhost:8000/wel/

## Frontend

Step 1: Navigate to the frontend folder

```
cd client
```

Step 2: Install required packages and start

```
npm install
npm start
```
