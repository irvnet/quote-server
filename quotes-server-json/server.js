
var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "user4" : {
      "name" : "irvingr",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get ('/', function(req,res) {
    console.log('hello world...');
})

app.post('/addUser', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, "0.0.0.0", function () {
  var host = server.address().address
  var port = server.address().port
  console.log("listening at http://%s:%s", host, port)
})



