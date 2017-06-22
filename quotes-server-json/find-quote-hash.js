
var fs = require('fs');
var dataFile = "/home/virtuser/work/quotes-json/quote-hash.json";
var db = JSON.parse(fs.readFileSync(dataFile,'utf8'));
var key = "";
quoteData = {};

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

//pick a random quote from the list
//console.log(randomInt(1,6));
console.log(db.length());


// new quote
key = "021";
quoteData = {"desc" : "test quote...", "author" : "unknown", "category" : "test-category" }

// save new quote to db
db[key] = quoteData;

for(var myKey in db) {
      console.log("key:"+myKey+",value:" + JSON.stringify( db[myKey] ) );
}
