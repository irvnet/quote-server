

//  capture connection details and querystring
var db = require('mysql');
var c = db.createConnection('mysql://virtuser:passw0rd@localhost/quotesdb');
var queryStr = 'insert into quotes SET ?'; 
var quote = { quote_id: '100', quote_desc: 'desc 100', quote_author: 'author 100' };

// connect to database
c.connect(function(err){
   if(err) { console.log("db connection error..."); }
});

// run query 
c.query(queryStr, quote, function(err, rows) {
  if (err) throw err;
  console.log(rows);
});

c.end();

