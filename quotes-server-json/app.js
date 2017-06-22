// setup libraries
var fs = require('fs');
var express = require('express');
var app = express();
var address = "127.0.0.1";
var port = 14000;

// prep json db
var dataFile = "/home/virtuser/work/quotes-json/real-quotes.json";
var db = JSON.parse(fs.readFileSync(dataFile,'utf8'));
var key = "";
var quoteData = {};

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}



app.get('/', function(request, response) {
    response.send({whoami: "Hey... I'm a quote server... I dispense wisdom..."});
});

app.get('/staticQuote', function(request, response) {
    response.send({quote_id: 0 , quote_desc: "I'll say the same thing next time...", quote_author: "QuoteServer"});
});

app.get('/randomQuote', function(request, response) {
   
   var rowCount = 0;
   var randomQuoteId = 0;
   var targetQuote = {};

   for(var myKey in db) { rowCount++; }
   randomQuoteId = randomInt(1,rowCount);

   for(var myKey in db) {
       if (myKey == randomQuoteId) {
           targetQuote = JSON.stringify(db[myKey] );

       console.log(targetQuote);
       }
   }

   response.send(targetQuote);

});

var srv = app.listen(port, "0.0.0.0", function () {
  var serverAddress = srv.address().address
  var serverPort = srv.address().port
  console.log("listening at http://%s:%s", serverAddress, serverPort)
})


