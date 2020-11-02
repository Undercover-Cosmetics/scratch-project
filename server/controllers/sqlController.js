const db = require("../models/sqlModel.js")

const sqlController = {}

/* BEFORE LOGIN */
/* User not logged in, but wants to see reviews */
sqlController.getReview = (req, res, next) => {
  const { id } = req.body;
  const review = `SELECT * FROM reviews WHERE product_key = cast(${id} as varchar)`;
  db.query(review)
  .then((data) => {
    res.locals.reviews = data.rows[0];
    next()
  })
  .catch((err) => {
    console.log(err)
    next(err)
  }) 
}

/* AUTHENTICATION PROCESS */
/* AUTHENTICATION: Getting one matching from the database */
sqlController.findOneUser = (req, res, next) => {
  const { username } = req.body; 
  try{
    const users = `SELECT DISTINCT * FROM users WHERE 1=1 AND username = ${username}`;
    db.query(users)
    .then((data) => {
      res.locals.users = data
      console.log(data);
      next()
    })
  }
  catch(err){
    console.log("findOneUser issue: invalid user name passed")
    next(err)
  }
}

/* AUTHENTICATION: signup creating user in the users database */
sqlController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const makeUser = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;
  const params = [username, password];
  db.query(makeUser, params)
  .then((data) => {
    res.locals.users = data.rows[0]
    next()
  })
  .catch( (err) => {
    console.log("createUser issue: possible duplicate username passed")
    next(err)
  }) 
}

/* USER LOGGED IN ACITONS */
/* User wants to Write Reviews Username matched with Product Reviews */
sqlController.writeReviews = (req, res, next) => {
  const { reviewRating, reviewText, productKey, userId } = req.body;
  const writeReview = `INSERT INTO reviews(review_rating, review_text, product_key, user_id) VALUES (${1}, ${2}, ${3}, {4})`;
  db.query(writeReview)
  .then((data) => {
    res.locals.newReview = data.rows[0]
    next()
  })
  .catch( (err) => {
    console.log("write review issue: review could not be created due to datatype issue")
    next(err)
  }) 
}

// `SELECT * FROM reviews LEFT JOIN users ON users.user_id=reviews.user_id WHERE 1=1 AND 2=2`;
/* USER LOGGED IN ACITONS: Delete review */
/* USER LOGGED IN ACITONS: Update review */

/* Need to export module */
module.exports = sqlController;



