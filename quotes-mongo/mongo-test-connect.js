var mongodb = require('mongodb');
var dbclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/admin';
dbclient.connect(url, function (err, db) {
  if (err) {
    console.log('MSG: Could not connect to mongo...');
    console.log(err);
  } else {
    console.log('MSG: Successfully connected to', url);
    db.close();
  }
});

