const { Pool } = require('pg') ;

const PG_URI = "postgres://ljgphymx:QpeBTel-62pzoAvhV0jC9VaIFqIIvbcD@lallah.db.elephantsql.com:5432/ljgphymx";

const pool = new Pool({
  connectionString: PG_URI
});

/* Need to export module */
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  }
}
