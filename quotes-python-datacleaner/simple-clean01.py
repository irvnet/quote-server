import csv
import sys
import json

rowCounter = 0
quoteStr = ""
authorStr = ""
categoryStr = ""
quote = {}
quoteListing = {}

inFile  = open('/home/virtuser/work/quotes-cleaner/data.csv', 'rt')
outFile = open('/home/virtuser/work/quotes-cleaner/out.json', 'wt')

try:
    reader = csv.reader(inFile, delimiter='>')
    writer = csv.writer(outFile) 

    for row in reader:
        rowCounter = rowCounter + 1
        quoteStr = row[0]
        authorStr = row[1]
        categoryStr = "motivational"

        quote = {
           rowCounter: {
           "desc": quoteStr,
           "author": authorStr ,
           "category": "motivational"
           }
        }

        quoteListing[rowCounter] = quote 

    json.dump(quoteListing, outFile)

finally:
    inFile.close()
    outFile.close()


