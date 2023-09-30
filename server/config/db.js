const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Password1",
    database: "eleporidae",
  });
  
module.exports = db;