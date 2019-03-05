#Team DoubleU
#Kaitlin Wan + Damian Wasilewicz
#Softdev2 Pd6
#K#07 Import/Export Bank
#2019-03-05

import pymongo
import json

#setup
SERVER_ADDR = "157.230.63.56"
connection=pymongo.MongoClient(SERVER_ADDR,27017)
db = connection["DoubleU"]
col = db["Laureate"]

with open("laureate.json") as stuff:
    data = json.load(stuff)
    pprint.pprint(data)

    
def searchPrize(prize):
    for laureate in laureates.find({'prizes.category': prize}):
        try:
            print(laureate["firstname"] + ' ' + laureate["surname"])
        except:
            #in case the laureate doesnt have a last name
            print(laureate["firstname"])
