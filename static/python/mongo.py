import pymongo
import json

# read file
with open('../states_data.json') as f:
  statesData = json.load(f)
print(statesData)

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Declare the database
db = client.lunch_land

# Declare the collection
collection = db.lunch_land

for state in statesData:
    collection.insert_one(state)

results = db.fruits_db.find()
for result in results:
    print(result)
