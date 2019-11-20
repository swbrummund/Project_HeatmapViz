import pymongo
import json

# read file
with open('../../data/states_data.json') as f:
  statesData = json.load(f)
# print(statesData)

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

results = db.states.find()
for result in results:
    print(result)