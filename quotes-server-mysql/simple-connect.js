

var db = require('mysql');
var c = db.createConnection('mysql://virtuser:passw0rd@localhost/quotesdb');

c.connect(function(err){
   if(err) { console.log("db connection error..."); }
});

c.query('SELECT count(*) from quotes', function(err, rows, fields) {
  console.log('result: ', rows);
  c.end();
});

