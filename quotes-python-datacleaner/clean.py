#!/bin/python

import csv
data = csv.reader(open('/home/virtuser/work/py-clean/data.csv'))

# Read the column names from the first line of the file
fields = data.next()
for row in data:
    items = zip(fields, row)

    item = {}
    for (name, value) in items:
        item[name] = value.strip()
