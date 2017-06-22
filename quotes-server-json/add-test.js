
var fs = require('fs');
var quoteList = fs.readFileSync('/home/virtuser/work/users/quoteDB.json','utf8')
console.log (quoteList);


// add a new quote
var quoteArr = [];
quote01 = {"quoteId": "01",  "desc" : "Quotes are blurbs to make you think more", "author" : "unknown", "category" : "uplifting" }
quoteArr.push(quote01);
console.log(quoteArr);





