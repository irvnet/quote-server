
var fs = require('fs');
var dataFile = "/home/virtuser/work/quotes-json/quote-hash.json";
var db = JSON.parse(fs.readFileSync(dataFile,'utf8'));
var key = "";
var quoteData = {};
var rowCount = 0
var randomQuoteId = "";
var targetQuote = {};

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

// get a random quote id 
for(var myKey in db) { rowCount++; }
randomQuoteId = randomInt(1,rowCount);

for(var myKey in db) {
    if (myKey == randomQuoteId) {
      console.log("key:"+myKey+",value:" + JSON.stringify( db[myKey] ) );
      targetQuote = JSON.stringify(db[randomQuoteId] );
    }
}


