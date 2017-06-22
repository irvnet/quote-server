
var fs = require('fs');
var db = JSON.parse(fs.readFileSync('/home/virtuser/work/users/data-file.json','utf8'));
console.log (db);

newQuote = {"quoteId": "07",  "desc" : "Quotes are blurbs to make you think more", "author" : "unknown", "category" : "funny" }
db.push(newQuote);
console.log(db);

fs.writeFile("/home/virtuser/work/users/data-file.json", JSON.stringify(db), function(err){
  if(err){console.log(err);} else {console.log("writing file...");}
});

