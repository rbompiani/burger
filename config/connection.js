var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'burgers_db'
});
 
connection.connect();


//export values and functions to be used in other files
module.exports = connection;