
var dbClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/sample-db';
var user1 = { fname : "Bruce", lname : "Wayne", email : "bruce@batcave.com" };

dbClient.connect(url, function (err, db) {
   if (err) { 
       console.log(err);
   } else {

       var uc = db.collection('users').insert(user1, function (err, db) {
           if (err) { console.log(err); }
       });
   } 

   db.close();

});


