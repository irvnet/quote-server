
var http = require("http");

// url and options
var options = {
    host:   'localhost',
    port:   18080,
    path:   '/',
    method: 'GET'
};

var processPublicTimeline = function(response) {
   console.log(response);
}

for (var i = 0; i < 2; i++) {
   console.log("hello...");
   http.request(options,processPublicTimeline).end(); 
}

