#!/bin/bash
docker run --rm -p 27017:27017 --name some-mongo -d mongo
node simple-connect.js 
docker stop some-mongo

