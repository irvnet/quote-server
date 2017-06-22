var fs = require('fs');

var quoteArr = [];
quote01 = {"quoteId": "01",  "desc" : "Quotes are blurbs to make you think more", "author" : "unknown", "category" : "uplifting" }
quoteArr.push(quote01);

quote02 = {"quoteId": "02",  "desc" : "Quotes are blurbs to make you think more", "author" : "unknown", "category" : "uplifting" }
quoteArr.push(quote02);

quote03 = {"quoteId": "03",  "desc" : "Quotes are blurbs to make you think more", "author" : "unknown", "category" : "uplifting" }
quoteArr.push(quote03);

console.log(quoteArr);
console.log("arr size:" + quoteArr.length);

console.log("quoteArr[1]:" + quoteArr[1]);

fs.writeFile("/home/virtuser/work/quotes-json/write-test.json", JSON.stringify(quoteArr), function(err){
  if(err){console.log(err);} else {console.log("writing file...");}
});

