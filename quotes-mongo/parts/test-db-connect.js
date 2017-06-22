

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'virtuser',
  password : 'passw0rd',
  database : 'quotesdb'
});

connection.connect(function(err){
if(!err) {
    console.log("db connected...");    
} else {
    console.log("db connection error...");    
}
});

connection.query('SELECT count(*) from quotes', function(err, rows, fields) {
connection.end();
if (!err) {
    console.log('result: ', rows);
}  else {
    console.log('Error while performing Query.');
}

});

