//Must first require mysql and save to a variable in order to use it in the connection.
const mysql = require("mysql");
const dotenv = require("dotenv").config()

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: process.env.PORT,
    user: "root",
    password: process.env.PASSWORD,
    database: "burgers_db"
  })
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;


//ASK FOR EXPLAINATION ON HOW THE DB ARE WORKING.
//ARE THERE TWO SEPARATE ONES NOW? 
//HOW DO THEY GET UPDATED?
