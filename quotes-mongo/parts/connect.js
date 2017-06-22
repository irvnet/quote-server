
// setup database
var mongodb = require('mongodb');
var dbclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/admin';

// prep for child cmds
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
var mongoStartStr = "docker run --rm -p 27017:27017 --name some-mongo -d mongo";
var mongoStopStr = "docker stop some-mongo";

// run mongo container
console.log('starting mongo container...');
exec(mongoStopStr, puts);

//console.log('attempting connection...');
//dbclient.connect(url, function (err, db) {
//  if (err) {
//    console.log('MSG: Could not connect to mongo...');
//    console.log(err);
//  } else {
//    console.log('MSG: Successfully connected to', url);
//    db.close();
//  }
//});

// run mongo container
//console.log('stopping mongo container...');
//exec(mongoStopStr, puts);

