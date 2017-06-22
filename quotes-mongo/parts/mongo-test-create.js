
var mongodb = require('mongodb');
var dbclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/sample-db';

dbclient.connect(url, function (err, db) {
if (err) {
  console.log('MSG: Could not connect to mongo...');
} else {
  console.log('MSG: Successfully connected to', url);
  db.close();
}

var collection = db.collection('users');
var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
var user2 = {name: 'modulus user', age: 22, roles: ['user']};
var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};

});
