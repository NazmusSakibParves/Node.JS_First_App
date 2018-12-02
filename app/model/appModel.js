'use strict';
var sql = require('./db.js');

//Task object constructor
var User = function(user){
    this.user = user.user;
    this.status = user.status;
    this.created_at = new Date();
};


User.createTask = function createUser(newTask, result) {    
        sql.query("INSERT INTO user set ?", newTask, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};


User.getTaskById = function createUser(Id, result) {
        sql.query("Select * from user where id = ? ", Id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};


User.getAllTask = function getAllTask(result) {
        sql.query("Select * from user", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('user : ', res);  

                 result(null, res);
                }
            });   
};


User.updateById = function(Id, user, result){
  sql.query("UPDATE user SET user = ? WHERE Id = ?", [user.user, Id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};


User.remove = function(Id, result){
     sql.query("DELETE FROM user WHERE Id = ?", [Id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= User;