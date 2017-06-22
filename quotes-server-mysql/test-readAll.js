

//  capture connection details and querystring
var db = require('mysql');
var c = db.createConnection('mysql://virtuser:passw0rd@localhost/quotesdb');
var queryStr = 'select * from quotes'; 

// connect to database
c.connect(function(err){
   if(err) { console.log("db connection error..."); }
});

// run query 
c.query(queryStr, function(err, rows) {
  if (err) throw err;

  for (var i = 0; i < rows.length; i++) {
    console.log(rows[i]);
  };

});

c.end();

