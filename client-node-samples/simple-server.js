
// simple server sample
var http = require("http");
var portNo = 18080;

console.log('starting server...');

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(JSON.stringify("<h1>Hello World</h1>") + "\n");
  response.end();
}).listen(portNo);


statusStr = "starting server at http://localhost:" + portNo; 
console.log(statusStr);


