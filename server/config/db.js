var mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Mjdxorbs1!',
  database: 'sunriseDB',
});

module.exports = db;