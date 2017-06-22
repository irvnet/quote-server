
var dbClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/sample-db';
var user1 = { fname : "Bruce", lname : "Wayne", email : "bruce@batcave.com" };
var quote01 = { "quoteId": 10, "quote" : "test quote 10... blah blah", "author" : "unknown" }; 


function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}


dbClient.connect(url, function (err, db) {
   if (err) { 
       console.log(err);
   } else {


       var uc = db.collection('my-users');
       var rowCount = 0;
       var searchCriteria = "";

       // insert a document into the my-users collection
       uc.insert(quote01, function (err, db) {
           if (err) { console.log(err); }
       }); // end insert

       // get a random document
       uc.count({}, function(error, docCount) {
           searchCriteria = { "quoteId": docCount };
       }); // end count()

       uc.findOne(quote01, function(err,rtnDoc) {
          console.log(rtnDoc);
       }); // end findOne()

 

   } 

   db.close();

}); // end dbClient.connect





