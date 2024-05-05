import time
import os
from flask import Flask,request,jsonify
from flask_pymongo import MongoClient
from flask_cors import CORS


app = Flask(__name__)

CORS(app, origins='http://127.0.0.1:5173')

try: 
   mongo =MongoClient(os.environ.get('MONGO_URI'))
   db=mongo.get_database("Training")
   print("db is connected!.")
except:
    print("db is not connected!..")

@app.route('/login',methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    users_collection = db.users
    exist_user = users_collection.find_one({"email":email})
    print(f'{exist_user}')
    if exist_user and exist_user.get("password") == password:    
        return jsonify({"message":"user was login sucessfully!!..","id":str(exist_user.get("_id"))}),201, {"Content-Type": "application/json"}
    return jsonify({"message":"user was not found!!.."}),400, {"Content-Type": "application/json"}

        
@app.route('/register',methods=['POST'])
def register():
    data = request.get_json()
    print(f'{data} json')
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    users_collection = db.users
    exist_user = users_collection.find_one({"email": email})
    if exist_user:
        return jsonify({"message":"email is already register!.."}),400, {"Content-Type": "application/json"}
    new_user = users_collection.insert_one({"email":email,"username":username,"password":password})
    print(f'{new_user} new user')
    return jsonify({"message":"user was created sucessfully!!..","id":str(new_user.inserted_id)}),201, {"Content-Type": "application/json"}

if __name__ == "__main__":
    app.run(debug=True)