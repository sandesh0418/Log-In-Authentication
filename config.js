var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
	connection.query("CREATE DATABASE IF NOT EXISTS `nodejs_login1`",function(err,results){
		
		console.log("Database created");
	})
	
	
	connection.query("CREATE TABLE IF NOT EXISTS `users`",function(err,results){
		console.log("Table created");
		
	});
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection; 
