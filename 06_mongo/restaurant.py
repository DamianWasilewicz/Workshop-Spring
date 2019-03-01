#Sriracha Sauce-Sara Aseer and Damian Wasilewicz
#SoftDev pd06
#K06 -- Yummy Mongo Py
#2019-02-06

import pymongo

#setup
SERVER_ADDR = "68.183.28.211"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db['primer-dataset']

#search collection based on zip
def findZip(zip):
    return collection.find({"address.zipcode":"zip"})
#search collection based on borough
def findBorough(borough):
    return collection.find({"borough":"borough"})
#search collection based on zip code and grade letter
def findZipGrade(zip,grade):
    return collection.find({'$and': [{"address.zipcode":"zip"},{"grades.0.grade":"grade"}]})
#search collection based on zip code and grade score
def findZipScore(zip,score):
    return collection.find({'$and': [{"address.zipcode":"zip"},{"grades.0.grade":"score"}]})
