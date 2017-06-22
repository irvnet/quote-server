
var fs = require('fs');
var dataFile = "/home/virtuser/work/quotes-json/quote-hash.json";
var db = JSON.parse(fs.readFileSync(dataFile,'utf8'));
var key = "";
quoteData = {};

// new quote
key = "06";
quoteData = {"desc" : "test quote...", "author" : "unknown", "category" : "test-category" }

// save new quote to db
db[key] = quoteData;
console.log(db);

// update file 
fs.writeFile(dataFile, JSON.stringify(db), function(err){
  if(err){console.log(err);} else {console.log("writing file...");}
});

