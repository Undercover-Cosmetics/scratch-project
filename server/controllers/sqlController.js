const db = require("../models/reviewsModel.js")

const sqlController = {}

/* Getting all users from the database */
sqlController.getAllUsers = (req, res, next) => {
  try{
    const users = `SELECT * FROM users`;
    db.query(users)
    .then((data) => {
      res.locals.users = data
      console.log(data);
      next()
    })
  }
  catch(err){
    next(err)
  }
}

/* creating user in the users database */
sqlController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const makeUser = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;
  const params = [username, password];
  db.query(makeUser, params)
  .then((data) => {
    res.locals.users = data.rows[0]
    next()
  })
}






/* Need to export module */
module.exports = sqlController;



