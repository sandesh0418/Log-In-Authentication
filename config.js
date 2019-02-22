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
		connection.query("USE nodejs_login1");
		 var sql="CREATE TABLE IF NOT EXISTS `users`(`CWID` int(8) PRIMARY KEY, `firstName` varchar(20), `lastName` varchar(20), `email` varchar(20), `password` varchar(20), `role` varchar(20))";
	connection.query(sql,function(err,results){
		console.log("Table created");
		
	});
		console.log("Database created");
	});
	
	
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection; 
