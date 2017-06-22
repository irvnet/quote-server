

//  capture connection details and querystring
var db = require('mysql');
var c = db.createConnection('mysql://virtuser:passw0rd@localhost/quotesdb');
var queryStr = 'update quotes SET quote_author = ? where quote_id = ?'; 

// connect to database
c.connect(function(err){
   if(err) { console.log("db connection error..."); }
});

// run query 
c.query(queryStr, ['irvingr', 100], function(err, rows) {
  if (err) throw err;
  console.log(rows);
});

c.end();

