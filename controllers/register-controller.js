var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=function(req,res){
    
  var encryptedString = cryptr.encrypt(req.body.password);
    var users={
		"cwid" : req.body.cwid,
        "firstName":req.body.firstName,
		"lastName":req.body.lastName,
        "email":req.body.email,
        "password":encryptedString,
		"role" : req.body.role
        
    }
	var cwid = users.cwid;
	if(cwid.length == 8){
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });}
	else{
		res.send("please Enter valid CWID");

	}
}
