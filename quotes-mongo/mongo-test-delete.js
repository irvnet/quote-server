
var dbClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/sample-db';
var user1 = { fname : "Bruce", lname : "Wayne", email : "bruce@batcave.com" };

dbClient.connect(url, function (err, db) {
   if (err) { 
       console.log(err);
   } else {


       var uc = db.collection('my-users');

       // insert a document into the my-users collection
       uc.insert(user1, function (err, db) {
           if (err) { console.log(err); }
       }); // end insert

       uc.find({email:'bruce@batcave.com'}).toArray(function(err, docs) {
           if (err) { console.log(err); }
           console.log('docs found: ' + docs.length);
       }); // end find

       uc.deleteMany({email:'bruce@batcave.com'},  function(err, docs) {
           if (err) { console.log(err); }
       }); // end deleteMany

       uc.find({email:'bruce@batcave.com'}).toArray(function(err, docs) {
           if (err) { console.log(err); }
           console.log('docs found: ' + docs.length);
       }); // end find


   } 

   db.close();

}); // end dbClient.connect





