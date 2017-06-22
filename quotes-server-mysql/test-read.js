

//  capture connection details and querystring
var db = require('mysql');
var c = db.createConnection('mysql://virtuser:passw0rd@localhost/quotesdb');
var queryStr = 'select quote_id, quote_desc, quote_author from quotes where quote_id = ?'; 

// connect to database
c.connect(function(err){
   if(err) { console.log("db connection error..."); }
});

// run query 
var rtn = '';
c.query(queryStr, [2], function(err, rows) {
  if (err) throw err;
  rtn = { quote_id: rows[0].quote_id , quote_desc: rows[0].quote_desc, quote_author: rows[0].quote_author };
  console.log(rtn);
});

c.end();

