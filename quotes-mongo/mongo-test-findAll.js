
var dbClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/sample-db';
var user1 = { fname : "Bruce", lname : "Wayne", email : "bruce@batcave.com" };

dbClient.connect(url, function (err, db) {
   if (err) { 
       console.log(err);
   } else {

       // insert a document into the my-users collection
       var uc = db.collection('my-users').insert(user1, function (err, db) {
           if (err) { console.log(err); }
       }); // end insert

       // find all the documents in the my-users collection
       var cursor = db.collection('my-users').find( );
          cursor.each(function(err, doc) {
          console.log(doc)
       }); // end find

   } 

   db.close();

}); // end dbClient.connect





