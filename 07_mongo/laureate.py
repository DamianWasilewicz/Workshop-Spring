#Team DoubleU
#Kaitlin Wan + Damian Wasilewicz
#Softdev2 Pd6
#K#07 Import/Export Bank
#2019-03-05

'''
Our json dataset is "laureates". It is a complete list of people who have
obtained a Novel Prize in any category as well as information regarding
their birth and deaths, education, places lived, etc. It also includes information
about the nature of their prizes as well as the year they won and how many they won
Our collection came from http://api.nobelprize.org/v1/laureate.json
We opened the file downloaded from the api, named laureate.json, and then inserted
it into our new collection after loading it
'''
import pymongo
import json
from pprint import pprint

#setup
SERVER_ADDR = "68.183.28.211"
connection=pymongo.MongoClient(SERVER_ADDR)
connection.drop_database("DoubleU")
db = connection.DoubleU
col = db.laureates

f = open("laureates.json")
data = json.load(f)
#pprint(data['laureates'])
#for x in data['laureates']:
    #pprint(x)
    #col.insert_many(x)



#search for laureates by the year prizes were awarded
def searchByPrizeYear(year):
    for laureate in laureates.find({'prizes.year': prizeYear}):
        try:
            print(laureate["firstname"] + ' ' + laureate["surname"])
        except:
            #in case the laureate doesnt have a last name
            print(laureate["firstname"])

#search by prize year and by prize category
def searchByPrizeAndYear(prize, year):
    for laureate in laureates.find({'$and' : [{'prizes.year': year}, {'prizes.category' : prize}]}):
        try:
            print(laureate["firstname"] + ' ' + laureate["surname"])
        except:
            #in case the laureate doesnt have a last name
            print(laureate["firstname"])

#search for laureates by prize category
def searchByPrize(prize):
    for laureate in laureates.find({'prizes.category': prize}):
        try:
            print(laureate["firstname"] + ' ' + laureate["surname"])
        except:
            #in case the laureate doesnt have a last name
            print(laureate["firstname"])


print("Hey")
searchByPrize('chemistry')
searchByPrizeYear('2001')
searchByPrizeAndYear('chemistry', '2001')
