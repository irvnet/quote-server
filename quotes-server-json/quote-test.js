

//http://codesamplez.com/programming/using-json-in-node-js-javascript

var fs = require('fs');
fs.readFile( __dirname + "/" + "quoteDB.json", 'utf8', function (err, data) {
  console.log( data );
});

//create a new quote
//quote01 = {"quoteId": "01",  "desc" : "Quotes are blurbs to make you think more", "author" : "unknown", "category" : "uplifting" }
//console.log(quote01);

//var quoteStr = JSON.stringify(quote01)
//console.log("quotestr:" + quoteStr);





