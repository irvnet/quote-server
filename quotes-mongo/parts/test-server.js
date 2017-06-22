
var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send({greeting:"Hello World"});
});

console.log('starting server...'); 
app.listen(3000);


