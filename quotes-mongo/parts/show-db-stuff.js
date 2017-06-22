
var mongodb = require('mongodb');
var dbclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/sample-db';

dbclient.connect(url, function (err, db) {
if (err) {
  console.log('MSG: Could not connect to mongo...');
} else {
  console.log('MSG: Successfully connected to', url);
}

var user1 = { fname : "Bruce", 
              lname : "Wayne", 
              email : "bruce@batcave.com" };

var user2 = { fname : "Luke", 
              lname : "Cage", 
              email : "powerman@hotmail.com" };

var uc = db.collection('users');

uc.insert(user1, function (err, db) {
if (err) {
  console.log('MSG: error...');
  console.log(err);
} else {
  console.log('MSG: Successfully connected to', url);
}

db.close();
});


});
