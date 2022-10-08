var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Current-Root-Password"
});

// connect to the mysql server

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

