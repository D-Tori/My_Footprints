require("dotenv").config();

const { Pool } = require("pg");

const { DBUSER, DBNAME, DBPWD } = process.env;

const pool = new Pool({
  user: DBUSER,
  password: DBPWD,
  database: DBNAME,
});

// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

module.exports = {
  query: (text, params) => pool.query(text, params),
};
