import os

import pandas as pd
import numpy as np

import pymongo
import json

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

with open('../data/states_data.json') as f:
  statesData = json.load(f)

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Declare the database
db = client.project2

db.states.drop()

# Declare the collection
collection = db.states

for state in statesData['features']:
    # print(state)
    collection.insert_one(state)


@app.route("/")
def index():
    # Return the homepage
    return render_template("index.html")

@app.route("/data")
def data():

    results = db.states.find()

    return results


if __name__ == "__main__":
    app.run()