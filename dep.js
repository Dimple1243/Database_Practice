// CREATE DATABASE

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Current-Root-Password"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE Depart", function (err, result) {
    if (err){
    console.log(" NOT Database created");
    }else{
        console.log("Database created")
    }
  });
});

// CREATE TABLES 

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Current-Root-Password",
  database: "Depart"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE department (DND VARCHAR(255), Department_name VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err){
    console.log("Table alreday created");
    }else{
        console.log("Table created")
    }
  });
});

// INSERT
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Current-Root-Password",
  database: "Depart"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO department(DND, Department_name) VALUES ?";
  var values=[["1","CSE"],
            ["2","EEE"],
            ["3","ECE"],
            ["4","IT"]]
  con.query(sql,[values], function (err, result) {
    if (err){
    console.log(" record  not inserted");
    }else{
        console.log("1 record inserted");


    }
  });
});



// // select from

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Current-Root-Password",
  database: "Depart"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM department", function (err, result, fields) {
    if (err){
    console.log(err);
    }else{
        console.log(result)
    }
  });
});