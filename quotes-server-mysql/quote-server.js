
var express = require('express');
var app = express();
var rtnStr = '';

app.get('/', function(request, response) {
    response.send({whoami: "Hey... I'm a quote server... I dispense wisdom..."});
});

app.get('/staticQuote', function(request, response) {
    response.send({quote_id: 0 , quote_desc: "I'll say the same thing next time...", quote_author: "QuoteServer"});
});

app.get('/randomQuote', function(request, response) {

   var db = require('mysql');
   var c = db.createConnection('mysql://virtuser:passw0rd@localhost/quotesdb');
   var queryStr = 'select quote_id, quote_desc, quote_author from quotes order by rand() limit 1'; 

   c.connect(function(err){
      if(err) { console.log("db connection error..."); }
   });
 
   c.query(queryStr, function(err, rows) {
     if (err) throw err;
     rtnStr = { quote_id: rows[0].quote_id , quote_desc: rows[0].quote_desc, quote_author: rows[0].quote_author };
     c.end();
   });

   response.send(JSON.stringify(rtnStr) + "\n");
});

console.log('QuoteServer is running...'); 
app.listen(18080);


